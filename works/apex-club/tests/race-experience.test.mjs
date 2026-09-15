import test from 'node:test';import assert from 'node:assert/strict';
import {createLesson,stepLesson,medals,recordLap,createLapRecord,ghostPose,empTargets,assistedInput} from '../race-experience.js';
import {circuitPoints,roadHalfWidth} from '../track-layout.js';
import {stepHandling} from '../driving-model.js';
test('lesson requires real steering, deceleration, charged drift and a fired boost in order',()=>{
 const s=createLesson(),input={steer:0,speed:150,brake:false,charge:0,fired:false};
 stepLesson(s,input,1);assert.equal(s.step,0);stepLesson(s,{...input,steer:1},.4);assert.equal(s.step,1);
 stepLesson(s,{...input,speed:0,brake:true},.3);assert.equal(s.step,1);
 stepLesson(s,input,.2);stepLesson(s,{...input,speed:70,brake:true},.3);assert.equal(s.step,2);
 stepLesson(s,{...input,charge:.33},.01);assert.equal(s.step,3);stepLesson(s,input,1);assert.equal(s.done,false);stepLesson(s,{...input,fired:true},.01);assert.equal(s.done,true);
});
test('timeout does not silently complete the lesson',()=>{const s=createLesson();stepLesson(s,{speed:0,steer:0},55);assert(s.timedOut);assert(!s.done);});
test('medals require finishing and the specified driving achievements',()=>{assert.equal(medals({finished:false,collisions:0,boosts:20,drifts:20}),0);assert.equal(medals({finished:true,collisions:4,boosts:20,drifts:20}),1);assert.equal(medals({finished:true,collisions:2,boosts:0,drifts:0}),2);assert.equal(medals({finished:true,collisions:2,boosts:6,drifts:6}),3);});
test('lap timing ignores start grid and records six cumulative sector times',()=>{const s=createLapRecord(),pose={x:1,y:2,z:3,heading:0};assert.equal(recordLap(s,-.01,2,pose),null);recordLap(s,0,3,pose);for(let i=1;i<6;i++)recordLap(s,i/6,3+i*10,pose);const lap=recordLap(s,1,63,pose);assert.equal(lap.time,60);assert.deepEqual(lap.splits,[10,20,30,40,50,60]);s.invalid=true;assert.equal(recordLap(s,1,63,pose).valid,false);});
test('ghost interpolates heading across the wrap and has a finite lifetime',()=>{const samples=[[0,0,1,0,3.1],[1,10,1,20,-3.1]];const p=ghostPose(samples,.5);assert.equal(p.x,5);assert(Math.abs(p.heading-Math.PI)<.001);assert.equal(ghostPose(samples,2),null);});
test('EMP uses physical range and excludes teammates',()=>{const a=[{x:10,z:0,team:'blue'},{x:140,z:0,team:'red'},{x:151,z:0,team:'red'}];assert.deepEqual(empTargets({x:0,z:0},a,'blue'),[a[1]]);});
test('assists never steer without player input and preserve standard controls',()=>{assert.equal(assistedInput(0,400,true,.1,1),0);assert.equal(assistedInput(-1,400,false,.1),-1);assert(assistedInput(1,400,true,.1)>0);const s={speed:300,x:0,z:0,vx:0,vz:0,heading:.7,drift:{active:false}};stepHandling(s,{throttle:true,steer:assistedInput(0,300,true,.1,1)},{max:400,turn:1,accel:180},.1);assert.equal(s.heading,.7);});
test('citadel has a distinct layout with smooth gate narrowing',()=>{assert.notDeepEqual(circuitPoints('bay'),circuitPoints('citadel'));assert.equal(roadHalfWidth('bay',.025),38);assert.equal(roadHalfWidth('citadel',.025),30);assert.equal(roadHalfWidth('citadel',.1),38);for(let t=0;t<1;t+=.001)assert(Math.abs(roadHalfWidth('citadel',t)-roadHalfWidth('citadel',t+.001))<.401);});
// Traverse both road splines with a test-only controller to catch impossible turns.
// This controller is not imported by the game and does not estimate human success.
import * as THREE from '../vendor/three/build/three.module.min.js';
import {projectTrack,resolveTrackContact,progressDelta} from '../driving-model.js';
for(const scene of ['bay','citadel'])test(`${scene}: scripted driver can traverse the complete route without wall locks`,()=>{
 const curve=new THREE.CatmullRomCurve3(circuitPoints(scene).map(p=>new THREE.Vector3(...p)),true,'catmullrom',.35),samples=Array.from({length:1601},(_,i)=>{const p=curve.getPointAt(i/1600);return {x:p.x,z:p.z};});
 const p=curve.getPointAt(0),tan=curve.getTangentAt(0),state={x:p.x,z:p.z,heading:Math.atan2(tan.x,tan.z),speed:0,vx:0,vz:0,drift:{active:false,charge:0,direction:0}};
 let t=0,progress=0,hits=0;
 for(let i=0;i<24000&&progress<1;i++){
  const ahead=curve.getPointAt((t+.008)%1),angle=Math.atan2(ahead.x-state.x,ahead.z-state.z),error=Math.atan2(Math.sin(angle-state.heading),Math.cos(angle-state.heading));
  const steer=Math.max(-1,Math.min(1,-error*2.6));stepHandling(state,{steer,throttle:true,brake:Math.abs(error)>.65},{max:380,accel:180,turn:1},1/120);
  const road=projectTrack(state.x,state.z,samples);if(resolveTrackContact(state,road,roadHalfWidth(scene,road.t)-6))hits++;progress+=progressDelta(t,road.t);t=road.t;
 }
 assert(progress>=1,'driver must complete a lap');assert(hits<100,'route must not create persistent wall contact');
});
