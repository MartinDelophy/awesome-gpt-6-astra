// Independent world-space arcade vehicle. Track geometry never supplies steering.
export const DISTANCE_SCALE=.52;
export const DISPLAY_SPEED=.42;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export function stepHandling(state,input,kart,dt){
 const {steer=0,throttle,brake,boosting}=input;
 // Hold brake at rest briefly to engage reverse, overriding auto throttle.
 state.reverseHold=brake&&state.speed<2?(state.reverseHold||0)+dt:0;
 const reversing=brake&&state.reverseHold>=.3;
 const target=brake?(reversing?-kart.max*.22:0):throttle?kart.max*(boosting?1.34:1):0;
 const accel=brake?(reversing?kart.accel*.65:520):target>state.speed?kart.accel*(boosting?2.4:1):125;
 state.speed+=clamp(target-state.speed,-accel*dt,accel*dt);
 if(state.drift.active)state.speed=Math.max(0,state.speed-22*dt);
 state.wallContact=Math.max(0,(state.wallContact||0)-dt);
 const ratio=clamp(Math.abs(state.speed)/kart.max,0,1.3),slip=state.drift.active;
 state.heading??=0;state.x??=0;state.z??=0;state.vx??=0;state.vz??=0;
 // No input means no angular acceleration; heading never converges to the road.
 // Camera looks along +Z: screen-right is -X. Match front-wheel yaw.
 // A deliberate turn with throttle can rotate the kart off a barrier at crawl speed.
 const steeringAuthority=Math.max(Math.min(1,ratio*2.5),throttle&&!brake&&state.wallContact>0?.38:0);
 const rate=-steer*kart.turn*1.85*steeringAuthority*(state.speed<0?-1:1)*(slip?1.2:1);
 state.heading+=rate*dt;
 const velocity=state.speed*DISTANCE_SCALE,grip=1-Math.exp(-(slip?2.6:11)*dt);
 state.vx+=(Math.sin(state.heading)*velocity-state.vx)*grip;
 state.vz+=(Math.cos(state.heading)*velocity-state.vz)*grip;
 state.x+=state.vx*dt;state.z+=state.vz*dt;
 state.hop=Math.max(0,(state.hop||0)-dt);
 return false;
}
// Project position onto nearby road segments, without moving the vehicle along them.
export function projectTrack(x,z,samples,previous=null){
 let best=null;
 const n=samples.length-1;
 const scan=i=>{
  i=(i%n+n)%n;const a=samples[i],b=samples[i+1],dx=b.x-a.x,dz=b.z-a.z;
  const u=clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz),0,1);
  const px=a.x+dx*u,pz=a.z+dz*u,d2=(x-px)**2+(z-pz)**2;
  if(!best||d2<best.d2){const l=Math.hypot(dx,dz);best={x:px,z:pz,t:(i+u)/n,index:i,d2,sideX:-dz/l,sideZ:dx/l};}
 };
 if(previous===null)for(let i=0;i<n;i++)scan(i);
 else for(let i=previous-24;i<=previous+24;i++)scan(i);
 best.lane=(x-best.x)*best.sideX+(z-best.z)*best.sideZ;return best;
}
export function resolveTrackContact(state,road,halfWidth=32){
 state.lane=road.lane;
 state.laneVel=state.vx*road.sideX+state.vz*road.sideZ;
 if(Math.abs(road.lane)<=halfWidth)return false;
 const sign=Math.sign(road.lane),penetration=Math.abs(road.lane)-halfWidth;
 state.x-=road.sideX*sign*penetration;state.z-=road.sideZ*sign*penetration;
 const outward=state.laneVel*sign;
 if(outward>0){
  state.vx-=road.sideX*sign*outward;state.vz-=road.sideZ*sign*outward;
  // Remove only the blocked component: repeated scraping must not compound friction.
  state.speed=Math.sign(state.speed)*Math.min(Math.abs(state.speed),Math.hypot(state.vx,state.vz)/DISTANCE_SCALE);
 }
 state.wallContact=.2;state.lane=sign*halfWidth;state.hit=.2;state.drift.active=false;state.drift.charge=0;
 return true;
}
export function progressDelta(previous,next){
 let delta=next-previous;if(delta<-.5)delta+=1;if(delta>.5)delta-=1;
 return delta;
}
