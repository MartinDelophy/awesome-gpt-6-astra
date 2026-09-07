import test from 'node:test';
import assert from 'node:assert/strict';
import {stepHandling,projectTrack,resolveTrackContact,progressDelta} from '../driving-model.js';
import {updateDrift,createRace,advanceRacer} from '../race-rules.js';
const kart={max:560,accel:210,turn:1};
const initial=()=>({x:0,z:0,heading:0,vx:0,vz:208,speed:400,lane:0,laneVel:0,drift:{active:false,charge:0,direction:0}});
test('boost end decelerates progressively',()=>{
 const s=initial();s.speed=740;stepHandling(s,{throttle:true,steer:0},kart,1/120);assert(s.speed>730&&s.speed<740);
 for(let i=0;i<240;i++)stepHandling(s,{throttle:true},kart,1/120);assert.equal(s.speed,560);
});
test('no steering preserves world heading and moves straight',()=>{
 const s=initial();for(let i=0;i<240;i++)stepHandling(s,{throttle:true},kart,1/120);
 assert.equal(s.heading,0);assert.equal(s.x,0);assert(s.z>400);
});
test('steering changes real trajectory; releasing does not auto-center heading',()=>{
 const s=initial();for(let i=0;i<120;i++)stepHandling(s,{throttle:true,steer:1},kart,1/120);
 assert(s.x< -80);const heading=s.heading;
 for(let i=0;i<120;i++)stepHandling(s,{throttle:true,steer:0},kart,1/120);
 assert.equal(s.heading,heading);
});
test('frame rates produce comparable world trajectories',()=>{
 const run=hz=>{const s=initial();for(let i=0;i<hz;i++)stepHandling(s,{throttle:true,steer:.4},kart,1/hz);return s;};
 const a=run(30),b=run(120);assert(Math.hypot(a.x-b.x,a.z-b.z)<6);assert(Math.abs(a.heading-b.heading)<.02);
});
test('countersteering changes heading while drift retains velocity',()=>{
 const s=initial();s.drift={active:true,charge:.4,direction:1};
 for(let i=0;i<40;i++)stepHandling(s,{throttle:true,steer:1},kart,1/120);
 const heading=s.heading;stepHandling(s,{throttle:true,steer:-1},kart,1/120);
 assert(s.heading>heading);assert(s.vx<0);
});
test('wall contact cancels drift and head-on movement, without turning car',()=>{
 const s=initial();Object.assign(s,{x:34,z:0,vx:200,vz:0,heading:Math.PI/2});s.drift={active:true,charge:1,direction:1};
 assert(resolveTrackContact(s,{x:0,z:0,lane:34,sideX:1,sideZ:0}));assert.equal(s.x,32);
 assert(s.speed<100);assert.equal(s.heading,Math.PI/2);assert.equal(s.drift.charge,0);
 assert.equal(updateDrift(s.drift,{held:false,steer:0,speed:s.speed},.02),0);
});
const circle=Array.from({length:1601},(_,i)=>({x:300*Math.cos(i/1600*Math.PI*2),z:300*Math.sin(i/1600*Math.PI*2)}));
test('auto throttle alone hits the outside wall on a bend rather than following it',()=>{
 const s=initial();Object.assign(s,{x:300,z:0,speed:0,vx:0,vz:0});let hits=0,t=0,total=0,index=null;
 for(let i=0;i<120*12;i++){
  stepHandling(s,{throttle:true},kart,1/120);const road=projectTrack(s.x,s.z,circle,index);index=road.index;
  if(resolveTrackContact(s,road))hits++;total+=progressDelta(t,road.t);t=road.t;
 }
 assert(hits>0);assert(total<.2);assert.equal(s.heading,0);
});
test('backwards motion subtracts progress, including start-line crossing',()=>{
 assert(Math.abs(progressDelta(.01,.99)+.02)<1e-9);
 const race=createRace('solo','blue'),r=race.racers[0],before=r.progress;
 advanceRacer(race,r,-.02,.1);assert(Math.abs(r.progress-before+.02)<1e-9);
});

test('holding brake reverses away from a head-on barrier despite auto throttle',()=>{
 const s=initial();Object.assign(s,{x:32,z:0,vx:0,vz:0,speed:0,heading:Math.PI/2});
 for(let i=0;i<120;i++){
  stepHandling(s,{throttle:true,brake:true,steer:0},kart,1/120);
  resolveTrackContact(s,{lane:s.x,sideX:1,sideZ:0});
 }
 assert(s.speed<0);assert(s.x<20);assert.equal(s.heading,Math.PI/2);
 const before=s.heading;stepHandling(s,{brake:true,steer:1},kart,1/60);assert(s.heading>before);
 for(let i=0;i<180;i++)stepHandling(s,{throttle:true,brake:false,steer:0},kart,1/120);
 assert(s.speed>0);
});
test('reverse impacts reduce speed magnitude rather than accelerating backwards',()=>{
 const s=initial();Object.assign(s,{speed:-100,x:34,vx:52,vz:0});
 resolveTrackContact(s,{lane:34,sideX:1,sideZ:0});assert(s.speed<=0&&s.speed>-100);
});

test('A and D move to the corresponding chase-camera side at every heading',()=>{
 for(const heading of [0,.7,Math.PI/2,Math.PI,-2])for(const steer of [-1,1]){
  const s=initial();Object.assign(s,{heading,vx:Math.sin(heading)*208,vz:Math.cos(heading)*208});
  for(let i=0;i<30;i++)stepHandling(s,{throttle:true,steer},kart,1/120);
  // Right vector = forward cross up, identical to the camera's screen-right axis.
  const screenRight=s.x*-Math.cos(heading)+s.z*Math.sin(heading);
  assert(screenRight*steer>0,`heading ${heading}, steer ${steer}`);
 }
});
test('player can steer out of a head-on wall with throttle at 30, 60 and 120 Hz',()=>{
 for(const hz of [30,60,120])for(const steer of [-1,1]){
  const s=initial();Object.assign(s,{x:32,z:0,vx:0,vz:0,speed:0,heading:Math.PI/2});
  for(let i=0;i<hz*4;i++){
   const turning=Math.sin(s.heading)>-.15?steer:0;
   stepHandling(s,{throttle:true,steer:turning},kart,1/hz);
   resolveTrackContact(s,{lane:s.x,sideX:1,sideZ:0});
  }
  assert(s.x<25,`still pinned at ${hz} Hz, steer ${steer}: ${s.x}`);
  assert(s.speed>100);
 }
});
test('glancing contact preserves tangential velocity without recurring friction',()=>{
 const s=initial();Object.assign(s,{x:33,vx:10,vz:200,speed:400});
 resolveTrackContact(s,{lane:33,sideX:1,sideZ:0});
 assert.equal(s.vz,200);assert.equal(s.vx,0);
 const speed=s.speed;
 for(let i=0;i<120;i++){s.vx=1;resolveTrackContact(s,{lane:32.001,sideX:1,sideZ:0});}
 assert.equal(s.speed,speed);assert.equal(s.vz,200);
});
