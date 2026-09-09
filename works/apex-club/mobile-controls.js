// A narrow window or touchscreen laptop is not a phone.
export function isHandheldDevice(nav=globalThis.navigator){
  return !!nav && (nav.userAgentData?.mobile===true || /Android|iPhone|iPad|iPod/i.test(nav.userAgent||'') || (nav.platform==='MacIntel'&&nav.maxTouchPoints>1));
}
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
export function createMobileControls({action,active,pause,handheld=isHandheldDevice()}){
  document.documentElement?.classList.toggle('handheld-input',handheld);
  if(!handheld)return {clear(){},update(){},down:()=>false,steer:()=>0};
  const editable=e=>e.target?.closest?.('input,textarea,[contenteditable="true"]');
  for(const type of ['contextmenu','selectstart','dragstart'])document.addEventListener(type,e=>{if(!editable(e))e.preventDefault();});
  const held=new Map();let enabled=false,center=null,reading=null,lastSample=0,filtered=0,request=0;
  const status=document.querySelector('#tiltStatus'),toggle=document.querySelector('#tiltToggle');
  const centerButton=document.querySelector('#mobileCenter');centerButton.hidden=true;
  const angle=()=>screen.orientation?.angle??window.orientation??0;
  const clear=()=>{held.clear();filtered=0;document.querySelectorAll('[data-drive]').forEach(b=>b.classList.remove('held'));};
  const buttons=[...document.querySelectorAll('[data-drive]')];
  const paintHeld=()=>buttons.forEach(b=>b.classList.toggle('held',[...held.values()].includes(b.dataset.drive)));
  buttons.forEach(button=>{
    const steering=['left','right'].includes(button.dataset.drive);
    button.addEventListener('pointerdown',e=>{
      e.preventDefault();if(!active()||button.getAttribute('aria-disabled')==='true')return;
      button.setPointerCapture(e.pointerId);held.set(e.pointerId,button.dataset.drive);paintHeld();
      if(['nitro','emp','mini'].includes(button.dataset.drive))action(button.dataset.drive);
    });
    button.addEventListener('pointermove',e=>{
      if(!steering||!button.hasPointerCapture(e.pointerId))return;
      const r=button.parentElement.getBoundingClientRect();
      if(e.clientY<r.top-24||e.clientY>r.bottom+24||e.clientX<r.left-24||e.clientX>r.right+24)held.delete(e.pointerId);
      else held.set(e.pointerId,e.clientX<(r.left+r.right)/2?'left':'right');
      paintHeld();
    });
    const release=e=>{held.delete(e.pointerId);paintHeld();};
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);
    button.addEventListener('contextmenu',e=>e.preventDefault());
  });
  const throttle=document.querySelector('#autoThrottle');
  const syncThrottle=()=>{document.querySelector('#touchControls').classList.toggle('auto-throttle-on',throttle.checked);document.querySelector('#touchControls').classList.toggle('manual-throttle',!throttle.checked);};
  throttle.addEventListener('change',syncThrottle);syncThrottle();
  const nitroButton=document.querySelector('[data-drive="nitro"]'),empButton=document.querySelector('[data-drive="emp"]');
  const driftButton=document.querySelector('[data-drive="drift"]');
  const nitroState=document.querySelector('#touchNitroState'),nitroCount=document.querySelector('#touchNitroCount'),driftState=document.querySelector('#touchDriftState'),empState=document.querySelector('#touchEmpState');
  const pips=[...document.querySelectorAll('.nitro-stock i')];
  const off=message=>{centerButton.hidden=true;enabled=false;request++;toggle.textContent='Enable tilt steering';toggle.setAttribute('aria-pressed','false');status.textContent=message;filtered=0;};
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
      enabled=true;centerButton.hidden=false;center=null;reading=null;lastSample=0;toggle.textContent='Disable tilt steering';toggle.setAttribute('aria-pressed','true');status.textContent='Hold the phone comfortably. Waiting for sensor…';
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
  return {clear,update({boost,nitro,weapon,drift}){
    const count=Math.floor(boost*3+.01),ready=boost>=.333&&nitro<=0;
    nitroButton.classList.toggle('unavailable',!ready&&nitro<=0);nitroButton.classList.toggle('firing',nitro>0);
    nitroButton.setAttribute('aria-disabled',String(!ready));nitroButton.setAttribute('aria-label',`Nitro, ${count} charges${nitro>0?', boosting':''}`);
    nitroCount.textContent=count;nitroState.textContent=nitro>0?`${nitro.toFixed(1)}s BOOST`:count?'TAP TO BOOST':'DRIFT TO FILL';
    pips.forEach((p,i)=>p.classList.toggle('full',i<count));
    driftButton.style.setProperty('--drift-charge',Math.round(drift.charge*100));
    driftState.textContent=drift.active?(drift.charge>=.32?'RELEASE TO BOOST':'CHARGING'):'HOLD TO SLIDE';
    empButton.classList.toggle('unavailable',weapon<=.34);empButton.setAttribute('aria-disabled',String(weapon<=.34));empState.textContent=weapon>.34?'READY':`${Math.ceil((.34-weapon)/.018)}s`;
  },down:name=>[...held.values()].includes(name),steer(dt){
    const touch=Number(this.down('right'))-Number(this.down('left'));
    if(this.down('right')||this.down('left'))return touch;
    const target=enabled&&center!==null&&reading!==null&&performance.now()-lastSample<1000?tiltSteering(reading,center):0;
    filtered+=(target-filtered)*(1-Math.exp(-10*dt));return Math.abs(filtered)<.01?0:filtered;
  }};
}
