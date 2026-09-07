import * as THREE from 'three';

// An articulated, procedural avatar: all motion is generated locally, with no asset downloads.
export function mountDriverStudio(host, isVisible) {
  const canvas=host.querySelector('canvas');
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'default'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(35,1,.1,40);
  camera.position.set(0,2.9,9.3);camera.lookAt(0,2.45,0);
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  scene.add(new THREE.HemisphereLight(0xd6f4ff,0x37516b,2.3));
  const key=new THREE.DirectionalLight(0xffedda,3);key.position.set(3,6,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-3,right:3,top:5,bottom:-3,near:.1,far:15});key.shadow.normalBias=.025;scene.add(key);
  const rim=new THREE.DirectionalLight(0x73cfff,2.3);rim.position.set(-3,4,-3);scene.add(rim);
  const studio=new THREE.Scene();studio.background=new THREE.Color(0x84919c);
  for(const [x,y,z] of [[-4,3,2],[4,4,1],[0,6,-3]]){const panel=new THREE.Mesh(new THREE.PlaneGeometry(3,5),new THREE.MeshBasicMaterial({color:0xffffff}));panel.position.set(x,y,z);panel.lookAt(0,2,0);studio.add(panel);}
  const pmrem=new THREE.PMREMGenerator(renderer),environment=pmrem.fromScene(studio,.02);scene.environment=environment.texture;pmrem.dispose();
  studio.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
  const suit=new THREE.MeshPhysicalMaterial({color:0xe2e3da,roughness:.57,metalness:.08,clearcoat:.18});
  const pants=new THREE.MeshStandardMaterial({color:0x20252b,roughness:.72});
  const shell=new THREE.MeshPhysicalMaterial({color:0xecece5,metalness:.18,roughness:.2,clearcoat:1});
  const visor=new THREE.MeshPhysicalMaterial({color:0x072837,metalness:.75,roughness:.12,clearcoat:1});
  const white=new THREE.MeshStandardMaterial({color:0xf1edda,roughness:.65});
  const accent=new THREE.MeshStandardMaterial({color:0xff713c,roughness:.42});
  const black=new THREE.MeshStandardMaterial({color:0x101b29,roughness:.7});
  const avatar=new THREE.Group();scene.add(avatar);
  function ellipsoid(parent,mat,x,y,z,sx,sy,sz){const m=new THREE.Mesh(new THREE.SphereGeometry(1,20,14),mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);parent.add(m);return m;}
  function box(parent,mat,x,y,z,w,h,d){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);parent.add(m);return m;}
  function joint(parent,x,y,z){const g=new THREE.Group();g.position.set(x,y,z);parent.add(g);return g;}
  function capsule(parent,mat,x,y,z,r,length){const m=new THREE.Mesh(new THREE.CapsuleGeometry(r,length,8,16),mat);m.position.set(x,y,z);parent.add(m);return m;}
  const hips=joint(avatar,0,2,0),torso=joint(hips,0,.13,0);
  ellipsoid(hips,pants,0,0,0,.43,.31,.26);
  const jacketProfile=[new THREE.Vector2(.31,-.1),new THREE.Vector2(.39,.05),new THREE.Vector2(.42,.65),new THREE.Vector2(.54,1.03),new THREE.Vector2(.46,1.17),new THREE.Vector2(.22,1.3)];
  const jacket=new THREE.Mesh(new THREE.LatheGeometry(jacketProfile,32),suit);jacket.scale.z=.63;torso.add(jacket);
  box(torso,black,0,.55,.276,.025,1.16,.022);
  for(const side of [-1,1]){
    const insert=box(torso,pants,side*.365,.4,.20,.10,.74,.10);insert.rotation.z=-side*.1;
    box(torso,accent,side*.31,.91,.288,.22,.09,.022);
  }
  box(torso,black,0,.05,.258,.69,.1,.04);box(torso,accent,.14,.05,.285,.16,.08,.03);
  function badge(text,w,h){const c=document.createElement('canvas');c.width=256;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#20272e';ctx.fillRect(0,0,256,128);ctx.fillStyle='#f5f2e5';ctx.font='bold 76px Arial';ctx.textAlign='center';ctx.fillText(text,128,89);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map}));}
  const number=badge('07',.27,.15);number.position.set(-.21,.69,.288);torso.add(number);
  const neck=joint(torso,0,1.31,0);capsule(neck,black,0,.015,0,.19,.12);
  const head=joint(neck,0,.42,0);
  ellipsoid(head,shell,0,0,0,.47,.51,.44);
  const glass=new THREE.Mesh(new THREE.SphereGeometry(1,40,20,Math.PI*.08,Math.PI*.84,Math.PI*.32,Math.PI*.33),visor);
  glass.scale.set(.486,.53,.458);head.add(glass);
  // Narrow reflection bands follow the visor curvature instead of painted-on eyes.
  const glint=new THREE.Mesh(new THREE.SphereGeometry(1,40,6,Math.PI*.16,Math.PI*.57,Math.PI*.335,Math.PI*.016),new THREE.MeshBasicMaterial({color:0xa9dded,transparent:true,opacity:.5}));glint.scale.set(.489,.534,.461);head.add(glint);
  const stripe=new THREE.Mesh(new THREE.SphereGeometry(1,20,20,Math.PI*.47,Math.PI*.065,0,Math.PI*.29),accent);stripe.scale.set(.475,.517,.447);head.add(stripe);
  ellipsoid(head,shell,0,-.29,.24,.31,.13,.24);
  for(let i=-1;i<=1;i++)box(head,black,i*.075,-.27,.462,.042,.05,.013);
  for(const side of [-1,1]){
    const hinge=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.032,20),black);hinge.rotation.z=Math.PI/2;hinge.position.set(side*.467,-.025,.015);head.add(hinge);
    const pin=new THREE.Mesh(new THREE.CylinderGeometry(.034,.034,.036,16),accent);pin.rotation.z=Math.PI/2;pin.position.copy(hinge.position);head.add(pin);
  }
  const arms=[],legs=[];
  for(const side of [-1,1]){
    const shoulder=joint(torso,side*.48,1.03,0);
    capsule(shoulder,suit,0,-.29,0,.185,.39);
    ellipsoid(shoulder,accent,side*.04,-.04,0,.20,.12,.205);
    const elbow=joint(shoulder,0,-.63,0);
    ellipsoid(elbow,pants,0,0,0,.16,.17,.16);
    capsule(elbow,suit,0,-.235,0,.145,.29);
    capsule(elbow,black,0,-.45,0,.149,.06);
    capsule(elbow,black,0,-.59,.018,.13,.13);
    box(elbow,accent,0,-.56,.134,.17,.09,.025);
    arms.push({shoulder,elbow,side});
    const hip=joint(hips,side*.235,-.12,0);
    capsule(hip,pants,0,-.4,0,.215,.49);
    const stripe=box(hip,suit,side*.19,-.38,0,.045,.52,.20);
    const knee=joint(hip,0,-.83,0);
    ellipsoid(knee,black,0,0,0,.197,.2,.193);
    capsule(knee,pants,0,-.38,0,.173,.48);
    ellipsoid(knee,suit,0,-.035,.145,.14,.19,.075);
    const shoe=joint(knee,0,-.84,.06);
    capsule(shoe,black,0,.08,0,.185,.15);
    ellipsoid(shoe,white,0,-.035,.12,.21,.15,.33);
    box(shoe,black,0,-.12,.095,.41,.07,.59);
    box(shoe,accent,0,.02,.28,.26,.075,.12);
    legs.push({hip,knee,side});
  }
  const floor=new THREE.Mesh(new THREE.CylinderGeometry(1.6,1.63,.10,64),new THREE.MeshStandardMaterial({color:0x252e38,metalness:.3,roughness:.55}));
  floor.position.y=.01;floor.receiveShadow=true;scene.add(floor);
  avatar.traverse(o=>{if(o.isMesh)o.castShadow=true;});
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.55,.018,8,64),new THREE.MeshBasicMaterial({color:0xffa875}));ring.rotation.x=-Math.PI/2;ring.position.y=.065;scene.add(ring);
  const shadow=new THREE.Mesh(new THREE.CircleGeometry(.9,32),new THREE.MeshBasicMaterial({color:0x081724,transparent:true,opacity:.22,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.066;scene.add(shadow);
  let action='stand',phase=0,rotation=-.32,dragX=null,last=performance.now();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const buttons=[...host.querySelectorAll('[data-action]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
    action=button.dataset.action;phase=0;
    buttons.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    host.querySelector('.driver-action').textContent={stand:'STANDING BY',dance:'DANCE / STREET GROOVE',victory:'VICTORY / CELEBRATE'}[action];
  }));
  canvas.addEventListener('pointerdown',e=>{dragX=e.clientX;canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(dragX!==null){rotation+=(e.clientX-dragX)*.012;dragX=e.clientX;}});
  const release=()=>{dragX=null;};canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
  canvas.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();rotation+=e.key==='ArrowLeft'?-.2:.2;}});
  const observer=new ResizeObserver(()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();});observer.observe(canvas);
  const ease=(object,key,value,dt)=>{object[key]=THREE.MathUtils.lerp(object[key],value,1-Math.exp(-12*dt));};
  function frame(now){
    requestAnimationFrame(frame);const dt=Math.min((now-last)/1000,.05);last=now;
    if(!isVisible()||document.hidden)return;
    phase+=dt;const t=phase,beat=t*5.5,dance=action==='dance',victory=action==='victory';
    const idle=reduced.matches?0:Math.sin(t*1.8);
    ease(avatar.rotation,'y',rotation+(dance?Math.sin(beat*.5)*.22:0),dt);
    ease(hips.position,'x',dance?Math.sin(beat)*.12:0,dt);
    ease(hips.position,'y',2+(dance?.08-Math.abs(Math.sin(beat))*.06:victory?Math.abs(Math.sin(t*4))*.07:idle*.01),dt);
    ease(torso.rotation,'z',dance?Math.sin(beat)*.13:0,dt);
    ease(torso.rotation,'y',dance?Math.sin(beat*.5)*.25:0,dt);
    ease(head.rotation,'z',dance?-Math.sin(beat)*.13:victory?-.1:idle*.025,dt);
    for(const {shoulder,elbow,side} of arms){
      ease(shoulder.rotation,'z',dance?side*(.45+Math.sin(beat+side)*.3):victory?side*2.45:side*.1,dt);
      ease(shoulder.rotation,'x',dance?-.4+Math.cos(beat+side)*.45:victory?-.2:.05,dt);
      ease(elbow.rotation,'x',dance?-1.25-Math.sin(beat+side)*.45:victory?-.7:-.16,dt);
      ease(elbow.rotation,'z',victory?side*.25:0,dt);
    }
    for(const {hip,knee,side} of legs){
      ease(hip.rotation,'x',dance?Math.sin(beat+side*Math.PI*.5)*.15:0,dt);
      ease(hip.rotation,'z',dance?side*.08+Math.sin(beat)*.07:side*.035,dt);
      ease(knee.rotation,'x',dance?Math.max(0,Math.sin(beat+side*Math.PI*.5))*.22:0,dt);
    }
    ring.material.color.setHex(dance?0xff8b52:0xd4dfdf);
    renderer.render(scene,camera);
  }
  requestAnimationFrame(frame);
}
