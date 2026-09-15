// Serializable progression and guided practice, independent of rendering.
export function createLesson(){return {step:0,elapsed:0,hold:0,feedback:0,brakePeak:0,done:false,timedOut:false};}
export function stepLesson(s,input,dt){
 if(s.done||s.timedOut)return false;s.elapsed+=dt;s.feedback=Math.max(0,s.feedback-dt);
 if(s.elapsed>=55){s.timedOut=true;return false;}
 if(s.step===1)s.brakePeak=Math.max(s.brakePeak,input.speed);
 const valid=[Math.abs(input.steer)>.4&&input.speed>25,input.brake&&s.brakePeak>100&&input.speed<90,input.charge>=.32,input.fired][s.step];
 s.hold=valid?s.hold+dt:0;
 if(valid&&(s.step>=2||s.hold>=(s.step===0?.35:.2))){s.step++;s.hold=0;s.feedback=1.2;s.done=s.step===4;return true;}return false;
}
export function medals({finished,collisions,boosts,drifts}){return finished?Math.max(1,collisions<=3?2:1,collisions<=3&&boosts>=6&&drifts>=6?3:1):0;}
export function createLapRecord(){return {started:false,startTime:0,nextSector:1,splits:[],samples:[],lastSample:-1,invalid:false};}
export function recordLap(s,progress,time,pose){
 if(!s.started){if(progress<0)return null;s.started=true;s.startTime=time;}
 const elapsed=time-s.startTime;
 if(elapsed-s.lastSample>=.1){s.samples.push([elapsed,pose.x,pose.y,pose.z,pose.heading]);s.lastSample=elapsed;}
 // Caller supplies progress relative to the currently timed lap.
 while(progress>=s.nextSector/6&&s.nextSector<=6){s.splits.push(elapsed);s.nextSector++;}
 if(progress<1)return null;
 return {time:elapsed,splits:s.splits.slice(0,6),samples:s.samples.slice(0,4000),valid:!s.invalid&&s.splits.length===6};
}
export function ghostPose(samples,time){
 if(!samples?.length||time<0||time>samples.at(-1)[0])return null;
 let lo=0,hi=samples.length-1;while(lo+1<hi){const mid=(lo+hi)>>1;if(samples[mid][0]<=time)lo=mid;else hi=mid;}
 const a=samples[lo],b=samples[hi],u=(time-a[0])/(b[0]-a[0]||1),yaw=Math.atan2(Math.sin(b[4]-a[4]),Math.cos(b[4]-a[4]));
 return {x:a[1]+(b[1]-a[1])*u,y:a[2]+(b[2]-a[2])*u,z:a[3]+(b[3]-a[3])*u,heading:a[4]+yaw*u};
}
export function empTargets(player,opponents,team,range=150){return opponents.filter(a=>a.team!==team&&Math.hypot(a.x-player.x,a.z-player.z)<=range);}
export function assistedInput(steer,speed,enabled,dt,previous=0){
 if(!enabled)return steer;
 // Only smooth deliberate input. Never use road direction or steer without input.
 if(steer===0)return 0;
 const target=steer*(speed>330?.8:1);return previous+(target-previous)*(1-Math.exp(-14*dt));
}
