export const JUMP_RAMPS=[.08,.40,.70];
export const RAMP_LENGTH=.007;
export function rampHeight(t){
 for(const start of JUMP_RAMPS){const u=(t-start)/RAMP_LENGTH;if(u>=0&&u<1)return u*7;}
 return 0;
}
export function createStunts(){return {airborne:false,y:null,vy:0,airWindow:0,landWindow:0,driftWindow:0,driftPower:0,kind:'',lastRamp:0,combo:0,chainTime:0};}
export function offerDrift(s,power,cut){if(power>0){s.driftWindow=.85;s.driftPower=power;s.kind=cut?'CUT BOOST':'EXIT BOOST';}}
export function stepStunts(s,{ground,ramp,speed,dt,blocked=false}){
 for(const key of ['airWindow','landWindow','driftWindow','chainTime'])s[key]=Math.max(0,s[key]-dt);
 if(s.chainTime===0)s.combo=0;
 if(blocked){Object.assign(s,createStunts(),{y:ground+ramp,lastRamp:ramp});return;}
 if(s.y===null)s.y=ground+ramp;
 if(!s.airborne){
  if(s.lastRamp>4&&ramp===0&&speed>160){s.airborne=true;s.vy=15;s.airWindow=.9;s.landWindow=0;s.driftWindow=0;}
  else s.y=ground+ramp;
 }
 if(s.airborne){
  s.vy-=35*dt;s.y+=s.vy*dt;
  if(s.y<=ground+ramp&&s.vy<0){s.airborne=false;s.y=ground+ramp;s.vy=0;s.airWindow=0;s.landWindow=.65;}
 }
 s.lastRamp=ramp;
}
export function boostOpportunity(s){return s.airborne&&s.airWindow>0?'AIR BOOST':s.landWindow>0?'LAND BOOST':s.driftWindow>0?s.kind:'';}
export function fireStunt(s){
 const kind=boostOpportunity(s);if(!kind)return null;
 let duration=.6;
 if(kind==='AIR BOOST')s.airWindow=0;
 else if(kind==='LAND BOOST')s.landWindow=0;
 else {duration=s.driftPower;s.driftWindow=0;}
 s.combo=Math.min(4,s.combo+1);s.chainTime=2;
 return {kind,duration,combo:s.combo};
}
