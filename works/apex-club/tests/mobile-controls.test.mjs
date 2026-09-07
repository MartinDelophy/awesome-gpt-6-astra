import {test} from 'node:test';
import assert from 'node:assert/strict';
import {screenTilt,tiltSteering} from '../mobile-controls.js';
test('landscape directions follow screen rotation in either grip',()=>{
 assert(screenTilt(20,0,90)>0);assert(screenTilt(20,0,270)<0);
 assert(screenTilt(0,20,0)>0);assert(screenTilt(0,20,180)<0);
 assert.equal(screenTilt(null,20,90),null);
});
test('calibrated tilt has a dead zone and bounded steering',()=>{
 assert.equal(tiltSteering(17,15),0);assert.equal(tiltSteering(42,15),1);
 assert.equal(tiltSteering(-100,15),-1);assert.equal(tiltSteering(30,15),.5);
});
