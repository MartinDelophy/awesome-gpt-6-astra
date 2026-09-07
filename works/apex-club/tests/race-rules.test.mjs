import test from 'node:test';
import assert from 'node:assert/strict';
import {createRace,advanceRacer,standings,teamScores,shouldFinish,updateDrift} from '../race-rules.js';
test('4v4 teams and negative grid positions do not imply an extra lap',()=>{
  const race=createRace('team','red');
  assert.equal(race.racers.filter(r=>r.team==='red').length,4);
  assert.equal(race.racers[0].team,'red');
  assert.ok(race.racers.every(r=>r.progress<0&&r.finishTime===null));
});
test('rank uses absolute progress, including lapped racers',()=>{
  const race=createRace();race.racers[0].progress=2.1;race.racers[1].progress=1.9;
  assert.equal(standings(race)[0].id,0);
});
test('finish order interpolates crossing time and stays fixed',()=>{
  const race=createRace();race.elapsed=10;
  race.racers[0].progress=2.99;race.racers[1].progress=2.999;
  advanceRacer(race,race.racers[0],.02,1);advanceRacer(race,race.racers[1],.02,1);
  assert.equal(standings(race)[0].id,1);
  const time=race.racers[1].finishTime;advanceRacer(race,race.racers[1],1,1);
  assert.equal(race.racers[1].finishTime,time);
  assert.equal(teamScores(race,true).red,15);assert.equal(teamScores(race,true).blue,12);
  race.elapsed=29.1;assert.equal(shouldFinish(race),true);
});
test('drift requires steering and speed; release earns one turbo',()=>{
  const drift={active:false,charge:0,direction:0};
  updateDrift(drift,{held:true,steer:0,speed:400,turn:0},2);assert.equal(drift.charge,0);
  updateDrift(drift,{held:true,steer:1,speed:400,turn:.3},1.5);assert.ok(drift.charge>=.78);
  assert.equal(updateDrift(drift,{held:false,steer:1,speed:400,turn:.3},.02),1.5);
  assert.equal(updateDrift(drift,{held:false,steer:1,speed:400,turn:.3},.02),0);
});
test('wall contact cancels drift without rewarding boost',()=>{
  const drift={active:true,charge:1,direction:1};
  assert.equal(updateDrift(drift,{held:false,steer:1,speed:400,turn:.3,blocked:true},.02),0);
  assert.equal(drift.charge,0);
});
test('a complete three-lap race yields eight finishes and exactly 58 points',()=>{
  const race=createRace();race.phase='racing';
  for(let frame=0;frame<4000&&!shouldFinish(race);frame++){
    race.elapsed+=.02;
    race.racers.forEach((r,i)=>advanceRacer(race,r,(.09+i*.001)*.02,.02));
  }
  assert.ok(race.racers.every(r=>r.finishTime!==null));
  assert.equal(new Set(standings(race).map(r=>r.id)).size,8);
  const scores=teamScores(race,true);assert.equal(scores.blue+scores.red,58);
  assert.ok(race.racers.every(r=>r.progress===3));
});
test('DNF racers never receive final points and timeout waits twenty seconds',()=>{
  const race=createRace();race.racers[0].progress=3;race.racers[0].finishTime=30;race.firstFinish=30;
  race.elapsed=49.99;assert.equal(shouldFinish(race),false);
  race.elapsed=50;assert.equal(shouldFinish(race),true);
  assert.deepEqual(teamScores(race,true),{blue:15,red:0});
});
test('team scores can represent a draw without awarding an arbitrary winner',()=>{
  const race=createRace();const bluePlaces=new Set([0,3,5,6]);
  race.racers.forEach((r,i)=>{r.progress=3;r.finishTime=i+30;r.team=bluePlaces.has(i)?'blue':'red';});
  assert.deepEqual(teamScores(race,true),{blue:29,red:29});
});

test('countersteering and straight sections preserve drift direction and charge',()=>{
 const d={active:false,charge:0,direction:0};
 updateDrift(d,{held:true,steer:1,speed:300},.7);
 const before=d.charge;
 updateDrift(d,{held:true,steer:0,speed:300},.2);
 updateDrift(d,{held:true,steer:-1,speed:300},.2);
 assert.equal(d.active,true);assert.equal(d.direction,1);assert.ok(d.charge>before);
 assert.equal(updateDrift(d,{held:false,steer:-1,speed:300},.01),.8);
});
