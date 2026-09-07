// Fixed-step arcade handling. World movement and visual speed use separate scales.
export const DISTANCE_SCALE = .52;
export const DISPLAY_SPEED = .42;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export function stepHandling(state, input, kart, dt) {
  const {steer,throttle,brake,boosting}=input;
  const speedRatio=clamp(state.speed/kart.max,0,1);
  const target=brake?0:throttle?kart.max*(boosting?1.34:1):0;
  const acceleration=brake?420:target>state.speed?kart.accel*(boosting?2.4:1):boosting?95:125;
  state.speed+=clamp(target-state.speed,-acceleration*dt,acceleration*dt);
  if(state.drift.active)state.speed=Math.max(0,state.speed-22*dt);
  const slip=state.drift.active;
  const direction=state.drift.direction||0;
  // Countersteering changes the line without flipping the locked drift direction.
  const lateralTarget=-(steer*(slip?11:18)+(slip?direction*5:0))*kart.turn*speedRatio;
  state.laneVel+=(lateralTarget-state.laneVel)*(1-Math.exp(-(slip?3.5:9)*dt));
  state.lane+=state.laneVel*dt;
  const angle=slip?direction*(.38+state.drift.charge*.24)+steer*.1:steer*.11*speedRatio;
  state.yaw=(state.yaw||0)+(angle-(state.yaw||0))*(1-Math.exp(-(slip?8:5)*dt));
  state.hop=Math.max(0,(state.hop||0)-dt);
  if(Math.abs(state.lane)>33){
    state.lane=clamp(state.lane,-33,33);state.laneVel*=-.22;
    state.speed*=Math.exp(-2.2*dt);state.hit=.2;
    state.drift.active=false;state.drift.charge=0;
    return true;
  }
  return false;
}
