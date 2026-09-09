import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createStunts,offerDrift,stepStunts,fireStunt,boostOpportunity,rampHeight,JUMP_RAMPS,RAMP_LENGTH} from '../stunt-model.js';
test('drift boost requires a valid window and is consumed only once',()=>{
 const s=createStunts();assert.equal(fireStunt(s),null);offerDrift(s,.8,true);
 assert.equal(fireStunt(s).kind,'CUT BOOST');assert.equal(fireStunt(s),null);
 offerDrift(s,1.5,false);stepStunts(s,{ground:0,ramp:0,speed:300,dt:1});assert.equal(fireStunt(s),null);
});
test('actual ramp exit permits one air boost and one landing boost',()=>{
 for(const hz of [30,60,120]){
 const s=createStunts(),step=(ramp,dt=1/hz)=>stepStunts(s,{ground:100,ramp,speed:300,dt});
 step(6.9);step(0);assert(s.airborne);assert(s.y>106);
 assert.equal(fireStunt(s).kind,'AIR BOOST');assert.equal(fireStunt(s),null);
 for(let i=0;i<hz*3&&s.airborne;i++)step(0);
 assert(!s.airborne);assert.equal(s.y,100);const land=fireStunt(s);assert.equal(land.kind,'LAND BOOST');assert.equal(land.combo,2);assert.equal(fireStunt(s),null);
 }
});
test('cosmetic drift hops and slow ramp travel cannot generate air boosts',()=>{
 const s=createStunts();stepStunts(s,{ground:0,ramp:6,speed:100,dt:.1});stepStunts(s,{ground:0,ramp:0,speed:100,dt:.1});assert(!s.airborne);assert.equal(boostOpportunity(s),'');
});
test('wall contact cancels airborne and pending boost rewards',()=>{
 const s=createStunts();offerDrift(s,.8,true);s.airborne=true;s.airWindow=.5;
 stepStunts(s,{ground:20,ramp:0,speed:300,dt:.1,blocked:true});assert(!s.airborne);assert.equal(fireStunt(s),null);assert.equal(s.y,20);
});
test('ramp height matches seven-unit geometry and returns to road after lip',()=>{
 for(const t of JUMP_RAMPS){assert.equal(rampHeight(t),0);assert(Math.abs(rampHeight(t+RAMP_LENGTH*.5)-3.5)<1e-9);assert.equal(rampHeight(t+RAMP_LENGTH+.00001),0);}
});
