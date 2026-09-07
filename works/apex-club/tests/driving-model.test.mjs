import test from 'node:test';
import assert from 'node:assert/strict';
import {stepHandling} from '../driving-model.js';
import {updateDrift} from '../race-rules.js';
const kart={max:560,accel:210,turn:1};
const initial=()=>({speed:400,lane:0,laneVel:0,yaw:0,drift:{active:false,charge:0,direction:0}});
test('boost end decelerates progressively instead of clamping to normal top speed',()=>{
 const s=initial();s.speed=740;stepHandling(s,{throttle:true,steer:0,brake:false,boosting:false},kart,1/120);
 assert.ok(s.speed>730&&s.speed<740);
 for(let i=0;i<240;i++)stepHandling(s,{throttle:true,steer:0},kart,1/120);
 assert.equal(s.speed,560);
});
test('frame-rate independent simulation remains close at 30, 60 and 120 Hz',()=>{
 const run=hz=>{const s=initial();for(let i=0;i<hz;i++)stepHandling(s,{throttle:true,steer:1,boosting:true},kart,1/hz);return s;};
 const a=run(30),b=run(120);assert.ok(Math.abs(a.speed-b.speed)<1);assert.ok(Math.abs(a.lane-b.lane)<.5);
});
test('countersteering arrests lateral travel without reversing the body instantly',()=>{
 const s=initial();s.drift={active:true,charge:.4,direction:1};
 for(let i=0;i<40;i++)stepHandling(s,{throttle:true,steer:1},kart,1/120);
 const previous=s.laneVel;stepHandling(s,{throttle:true,steer:-1},kart,1/120);
 assert.ok(s.laneVel>previous);assert.ok(s.yaw>0);
});
test('wall collision cancels charge and cannot grant a release turbo',()=>{
 const s=initial();s.lane=32.99;s.laneVel=30;s.drift={active:true,charge:1,direction:-1};
 assert.equal(stepHandling(s,{throttle:true,steer:-1},kart,.02),true);
 assert.ok(s.lane<=33);assert.equal(s.drift.charge,0);
 assert.equal(updateDrift(s.drift,{held:false,steer:0,speed:s.speed},.02),0);
});
