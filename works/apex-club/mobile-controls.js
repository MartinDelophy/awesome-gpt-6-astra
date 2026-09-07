// Screen-relative tilt: map gravity into the phone's current screen axes.
export function screenTilt(beta,gamma,angle=0){
  if(!Number.isFinite(beta)||!Number.isFinite(gamma))return null;
  const b=beta*Math.PI/180,g=gamma*Math.PI/180,a=angle*Math.PI/180;
  const x=Math.cos(b)*Math.sin(g),y=Math.sin(b);
  return Math.asin(Math.max(-1,Math.min(1,x*Math.cos(a)+y*Math.sin(a))))*180/Math.PI;
}
export function tiltSteering(value,center=0){
  const d=value-center;return Math.sign(d)*Math.min(1,Math.max(0,Math.abs(d)-3)/24);
}
export function createMobileControls({action,active,pause}){
  const held=new Map();let enabled=false,center=null,reading=null,lastSample=0,filtered=0,request=0;
  const status=document.querySelector('#tiltStatus'),toggle=document.querySelector('#tiltToggle');
  const angle=()=>screen.orientation?.angle??window.orientation??0;
  const clear=()=>{held.clear();filtered=0;document.querySelectorAll('[data-drive]').forEach(b=>b.classList.remove('held'));};
  document.querySelectorAll('[data-drive]').forEach(button=>{
    button.addEventListener('pointerdown',e=>{e.preventDefault();if(!active())return;button.setPointerCapture(e.pointerId);held.set(e.pointerId,button.dataset.drive);button.classList.add('held');if(['nitro','emp'].includes(button.dataset.drive))action(button.dataset.drive);});
    const release=e=>{held.delete(e.pointerId);if(![...held.values()].includes(button.dataset.drive))button.classList.remove('held');};
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);
    button.addEventListener('contextmenu',e=>e.preventDefault());
  });
  const off=message=>{enabled=false;request++;toggle.textContent='Enable tilt steering';toggle.setAttribute('aria-pressed','false');status.textContent=message;filtered=0;};
  addEventListener('deviceorientation',e=>{
    if(!enabled)return;const v=screenTilt(e.beta,e.gamma,angle());if(v===null)return;
    reading=v;lastSample=performance.now();if(center===null){center=v;status.textContent='Tilt ready · Hold comfortably, then lean left / right.';}
  });
  toggle.addEventListener('click',async()=>{
    if(enabled){off('Touch steering active.');return;}
    const id=++request;toggle.disabled=true;
    try{
      if(!window.isSecureContext||!window.DeviceOrientationEvent)throw Error('unavailable');
      if(typeof DeviceOrientationEvent.requestPermission==='function'&&await DeviceOrientationEvent.requestPermission()!=='granted')throw Error('permission');
      if(id!==request)return;
      enabled=true;center=null;reading=null;lastSample=0;toggle.textContent='Disable tilt steering';toggle.setAttribute('aria-pressed','true');status.textContent='Hold the phone comfortably. Waiting for sensor…';
      setTimeout(()=>{if(enabled&&id===request&&center===null)off('No motion data. Use touch controls or allow Motion & Orientation in browser settings.');},4000);
    }catch{off('Motion unavailable or permission denied. Touch steering is ready.');}
    finally{toggle.disabled=false;}
  });
  document.querySelector('#tiltCenter').addEventListener('click',()=>{if(enabled){center=null;filtered=0;status.textContent='Hold still to center steering…';}else status.textContent='Enable tilt steering first, or use the arrow buttons.';});
  document.querySelector('#mobileCenter').addEventListener('click',()=>{center=null;filtered=0;});
  const orientationChanged=()=>{clear();center=null;if(active())pause();};
  screen.orientation?.addEventListener('change',orientationChanged);
  if(!screen.orientation)addEventListener('orientationchange',orientationChanged);
  addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
  document.querySelector('#landscapeMode').addEventListener('click',async()=>{
    try{await document.documentElement.requestFullscreen?.();await screen.orientation?.lock?.('landscape');}catch{}
    document.querySelector('#screenHint').textContent='Rotate your phone sideways. If needed, turn off rotation lock.';
  });
  return {clear,down:name=>[...held.values()].includes(name),steer(dt){
    const touch=Number(this.down('right'))-Number(this.down('left'));
    if(this.down('right')||this.down('left'))return touch;
    const target=enabled&&center!==null&&reading!==null&&performance.now()-lastSample<1000?tiltSteering(reading,center):0;
    filtered+=(target-filtered)*(1-Math.exp(-10*dt));return Math.abs(filtered)<.01?0:filtered;
  }};
}
