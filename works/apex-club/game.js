import {createShowroom,createCitadel} from './scene-design.js';
import {createMobileControls,isHandheldDevice} from './mobile-controls.js';
import {createArmoredKart} from './armored-kart.js';
import {stepHandling, projectTrack, resolveTrackContact, progressDelta, DISTANCE_SCALE, DISPLAY_SPEED} from './driving-model.js';
import {createRaceEffects} from './race-effects.js';
import {createRaceAudio} from './race-audio.js';
import {mountDriverStudio} from './driver-studio.js';
import {craftDefs} from './kart-catalog.js';
import {createRace, standings, advanceRacer, teamScores, shouldFinish, updateDrift, SCORE_TABLE, TEAM_COLORS} from './race-rules.js';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x83bed8);
scene.fog = new THREE.FogExp2(0x9bcadb, 0.00030);

const camera = new THREE.PerspectiveCamera(68, innerWidth/innerHeight, 0.1, 9000);
const mobileDevice=isHandheldDevice();
const renderer = new THREE.WebGLRenderer({antialias:!mobileDevice,powerPreference:mobileDevice?'default':'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio, mobileDevice?1:1.8));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = .94;
document.body.prepend(renderer.domElement);

let composer=null,bloom=null;
function ensureComposer(){
 if(composer)return;
 composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
 bloom=new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.38,.35,.85);composer.addPass(bloom);composer.addPass(new OutputPass());
}
const world = new THREE.Group(); scene.add(world);
const up = new THREE.Vector3(0,1,0);
const clock = new THREE.Clock();
const keys = new Set();
const actions=new Set();
let driftLatched=false,lastSteer=0;
const audio=createRaceAudio();
let reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
let helpOpen=false,simulationTime=0,race=null,selectedMode='team',selectedTeam='blue';
const mobile=createMobileControls({active:()=>race?.phase==='racing'&&!helpOpen,action:name=>actions.add(name==='nitro'?'ShiftLeft':'KeyQ'),pause:()=>toggleControls(true)});
function toggleControls(open=!helpOpen){
  if(!race || race.phase==='finished')return;
  helpOpen=open;keys.clear();actions.clear();mobile.clear();driftLatched=false;document.querySelector('#controlsPanel').hidden=!open;
  document.querySelector('#controlsToggle').setAttribute('aria-expanded',String(open));
  if(open)document.querySelector('#startDriving').focus();else renderer.domElement.focus();
}
renderer.domElement.tabIndex=0;
renderer.domElement.setAttribute('aria-label','3D kart racing. WASD to drive, SPACE plus steering to drift, H to pause.');
document.querySelector('#controlsToggle').addEventListener('click',()=>toggleControls());
document.querySelector('#startDriving').addEventListener('click',()=>toggleControls(false));
document.querySelector('#recoverCar').addEventListener('click',()=>{
  if(!race||race.racers[0].finishTime!==null)return;
  const f=trackFrame(state.t);Object.assign(state,{x:f.p.x,z:f.p.z,heading:Math.atan2(f.tan.x,f.tan.z),vx:0,vz:0,speed:0,reverseHold:0,wallContact:0,lane:0,laneVel:0,nitro:0,miniTurbo:0});
  state.drift={active:false,charge:0,direction:0};race.racers[0].lane=0;cameraReady=false;
  toggleControls(false);ping('CAR RECOVERED / NO PROGRESS GAIN','#ffd38b');
});
addEventListener('keydown', e => {
  if(document.querySelector('#settingsDialog').open)return;
  if(e.code==='Tab'&&(helpOpen||race?.phase==='finished')){
    const dialog=document.querySelector(helpOpen?'#controlsPanel':'#results');
    const buttons=[...dialog.querySelectorAll('button')];const i=buttons.indexOf(document.activeElement);
    e.preventDefault();buttons[(i+(e.shiftKey?-1:1)+buttons.length)%buttons.length].focus();return;
  }
  if((e.code==='KeyH'||e.code==='Escape')&&!e.repeat){toggleControls();return;}
  if(helpOpen||!race||!['countdown','racing'].includes(race.phase))return;
  // Keep held driving keys through the countdown; one-shot actions still wait for GO.
  if(['KeyW','KeyS','KeyA','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){
    e.preventDefault();keys.add(e.code);
  }
  if(race.phase!=='racing')return;
  if(['KeyA','ArrowLeft'].includes(e.code))lastSteer=-1;
  if(['KeyD','ArrowRight'].includes(e.code))lastSteer=1;
  if(e.code==='Space'&&!e.repeat&&document.querySelector('#toggleDrift').checked)driftLatched=!driftLatched;
  if(!e.repeat&&['KeyQ','KeyR','ShiftLeft','ShiftRight'].includes(e.code))actions.add(e.code);
  if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();keys.add(e.code);
});
addEventListener('keyup',e=>keys.delete(e.code));
addEventListener('blur',()=>{keys.clear();actions.clear();mobile.clear();if(race?.phase==='racing')toggleControls(true);});

// Bay Circuit: a closed coastal course with gentle elevation changes.
const points = [];
const N=26;
for(let i=0;i<N;i++){
  const a=i/N*Math.PI*2;
  const r=950 + Math.sin(a*3)*210 + Math.cos(a*5)*80;
  const y=150 + Math.sin(a*2)*35 + Math.sin(a*5+1.2)*12;
  points.push(new THREE.Vector3(Math.cos(a)*r, y, Math.sin(a)*r*0.78));
}
const curve = new THREE.CatmullRomCurve3(points,true,'catmullrom',0.35);
const trackLength = curve.getLength();
const roadSamples=Array.from({length:1601},(_,i)=>{const p=curve.getPointAt(i/1600);return {x:p.x,z:p.z};});

function trackFrame(t){
  const p=curve.getPointAt((t%1+1)%1);
  const tan=curve.getTangentAt((t%1+1)%1).normalize();
  let side=new THREE.Vector3().crossVectors(tan,up).normalize();
  if(side.lengthSq()<0.01) side.set(1,0,0);
  const normal=new THREE.Vector3().crossVectors(side,tan).normalize();
  return {p,tan,side,normal};
}

function createTrack(){
  const seg=900, half=38;
  const pos=[], uv=[], idx=[];
  for(let i=0;i<=seg;i++){
    const t=i/seg, f=trackFrame(t);
    for(const s of [-1,1]){
      const v=f.p.clone().addScaledVector(f.side,half*s);
      pos.push(v.x,v.y,v.z); uv.push(s<0?0:1,t*90);
    }
  }
  for(let i=0;i<seg;i++){ const a=i*2,b=a+1,c=a+2,d=a+3; idx.push(a,c,b,b,c,d); }
  const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3)); g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2)); g.setIndex(idx); g.computeVertexNormals();
  const m=new THREE.ShaderMaterial({
    side:THREE.DoubleSide,
    uniforms:{time:{value:0},speed:{value:0},citadel:{value:0}},
    vertexShader:`varying vec2 vUv; varying vec3 vPos; void main(){vUv=uv;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`
      varying vec2 vUv; varying vec3 vPos; uniform float time; uniform float speed; uniform float citadel;
      float line(float x,float w){return 1.-smoothstep(0.,w,abs(fract(x)-.5));}
      void main(){
        float edge=1.-smoothstep(.009,.022,min(vUv.x,1.-vUv.x));
        float lane=(1.-smoothstep(.002,.006,abs(vUv.x-.333)))+(1.-smoothstep(.002,.006,abs(vUv.x-.667)));
        float dash=step(.45,fract(vUv.y*.55));
        float seam=line(vUv.y*2.,.025);
        float shoulder=(1.-smoothstep(.035,.07,min(vUv.x,1.-vUv.x)))*(1.-edge);
        float grain=fract(sin(dot(floor(vPos.xz*9.),vec2(12.9898,78.233)))*43758.5453);
        vec3 base=vec3(.13,.18,.22)+seam*.024+grain*.015;
        base+=lane*dash*vec3(.09,.16,.20);
        base=mix(base,mix(vec3(.92,.92,.79),vec3(.95,.20,.16),step(.5,fract(vUv.y*2.))),shoulder*.8);
        base+=edge*vec3(.1,.32,.38)*.45;
        float marker=line(vUv.y*.33,.09)*step(.93,abs(vUv.x-.5)*2.);
        base+=marker*vec3(.95,.28,.08);
        vec2 brick=vec2(vUv.x*12.+mod(floor(vUv.y*3.),2.)*.5,vUv.y*3.);
        float mortar=step(.94,fract(brick.x))+step(.93,fract(brick.y));
        vec3 paving=vec3(.32,.34,.31)+grain*.04-mortar*.06;
        base=mix(base,paving,citadel);
        gl_FragColor=vec4(base,1.);
      }`
  });
  const mesh=new THREE.Mesh(g,m); world.add(mesh); return m;
}
const trackMat=createTrack();

const bayTrackObjects=[];
const beforeBayTrack=new Set(world.children);
// Edge rails + cathedral ribs.
const railMat=new THREE.MeshBasicMaterial({color:0xc3f3f1});
const magMat=new THREE.MeshBasicMaterial({color:0xffa33e});
const structureMat=new THREE.MeshStandardMaterial({color:0xd8e6e6,metalness:.6,roughness:.48});
const railGeometry=new THREE.BoxGeometry(2.4,4.5,26);
const rails=new THREE.InstancedMesh(railGeometry,railMat,420),accentRails=new THREE.InstancedMesh(railGeometry,magMat,60);
world.add(rails,accentRails);let railIndex=0,accentIndex=0;const railPose=new THREE.Object3D();
for(let i=0;i<240;i++){
  const t=i/240, f=trackFrame(t);
  for(const s of [-1,1]){
    railPose.position.copy(f.p).addScaledVector(f.side,s*42).addScaledVector(f.normal,4);
    railPose.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),f.tan);railPose.updateMatrix();
    if(i%8===0)accentRails.setMatrixAt(accentIndex++,railPose.matrix);else rails.setMatrixAt(railIndex++,railPose.matrix);
  }
  if(i%24===0){
    const rib=new THREE.Group();
    const pillarGeo=new THREE.BoxGeometry(4,53,4);
    for(const s of [-1,1]){const p=new THREE.Mesh(pillarGeo,structureMat);p.position.x=s*64;p.position.y=24;rib.add(p)}
    const top=new THREE.Mesh(new THREE.BoxGeometry(132,5,5),structureMat);top.position.y=49;rib.add(top);
    const strip=new THREE.Mesh(new THREE.BoxGeometry(100,.65,1),railMat);strip.position.y=46;rib.add(strip);
    rib.position.copy(f.p); rib.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),f.tan); world.add(rib);
  }
}

bayTrackObjects.push(...world.children.filter(o=>!beforeBayTrack.has(o)));
// Strange world below: luminous storm-ocean + impossible monoliths.
const sea=new THREE.Mesh(new THREE.PlaneGeometry(12000,12000,180,180),new THREE.ShaderMaterial({
  side:THREE.DoubleSide,transparent:true,
  uniforms:{time:{value:0}},
  vertexShader:`uniform float time; varying float h; void main(){vec3 p=position; float w=sin(p.x*.005+time)*22.+sin(p.y*.004-time*.8)*18.; p.z+=w; h=w; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
  fragmentShader:`varying float h; void main(){float q=.35+.65*abs(sin(h*.06)); vec3 c=mix(vec3(.06,.27,.38),vec3(.12,.43,.52),q); c+=vec3(.0,.045,.065)*pow(q,5.); gl_FragColor=vec4(c,.93);}`
}));
sea.rotation.x=-Math.PI/2; sea.position.y=-180; scene.add(sea);

// Star motes / speed particles
const starGeo=new THREE.BufferGeometry();
const stars=240, arr=new Float32Array(stars*3);
for(let i=0;i<stars;i++){ const r=500+Math.random()*5200,a=Math.random()*Math.PI*2;arr[i*3]=Math.cos(a)*r;arr[i*3+1]=-400+Math.random()*2200;arr[i*3+2]=Math.sin(a)*r; }
starGeo.setAttribute('position',new THREE.BufferAttribute(arr,3));
scene.add(new THREE.Points(starGeo,new THREE.PointsMaterial({size:1.5,color:0x7dfcff,transparent:true,opacity:.32,blending:THREE.AdditiveBlending,depthWrite:false})));

let craftIndex=4;
function makeCraft(color=0xffb24c,scale=1){
  const g=new THREE.Group(),model=new THREE.Group();g.add(model);
  const paint=new THREE.MeshPhysicalMaterial({color,metalness:.25,roughness:.25,clearcoat:1,clearcoatRoughness:.14});paint.userData.craftColor=true;
  const rubber=new THREE.MeshStandardMaterial({color:0x15222c,roughness:.88});
  const metal=new THREE.MeshStandardMaterial({color:0xdee6eb,metalness:.65,roughness:.3});
  const dark=new THREE.MeshStandardMaterial({color:0x263847,metalness:.3,roughness:.5});
  function box(w,h,d,x,y,z,mat=paint){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);model.add(m);return m;}
  function round(w,h,d,x,y,z,mat=paint){const m=new THREE.Mesh(new THREE.SphereGeometry(1,20,12),mat);m.scale.set(w,h,d);m.position.set(x,y,z);model.add(m);return m;}
  box(8.6,1.3,12,0,-1.8,0,dark);
  round(4.9,1.65,6.8,0,-.65,.3);
  round(4.7,1.25,3.7,0,-.4,4.4);
  box(.6,.15,6.5,0,.77,4.7,metal);
  box(9.6,.7,1.0,0,-1.35,7.9,dark);
  const wheels=[],fins=[],engines=[],spoilers=[];
  for(const side of [-1,1]){
    for(const z of [-4.4,4.6]){
      const hub=new THREE.Group();hub.position.set(side*5.5,-1.4,z);model.add(hub);
      const tire=new THREE.Mesh(new THREE.CylinderGeometry(2.15,2.15,1.7,24),rubber);tire.rotation.z=Math.PI/2;hub.add(tire);
      const rim=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,1.78,12),metal);rim.rotation.z=Math.PI/2;hub.add(rim);
      const cap=new THREE.Mesh(new THREE.CylinderGeometry(.48,.48,1.82,12),paint);cap.rotation.z=Math.PI/2;hub.add(cap);
      wheels.push({hub,tire,front:z>0});
    }
    round(1,1.1,3.8,side*4,-.1,-1.2);
    spoilers.push(box(.28,3.8,.4,side*3.5,1.25,-5.8,dark));
    const end=box(.3,1.2,2.2,side*5.2,3,-5.8);fins.push(end);spoilers.push(end);
    const lamp=new THREE.Mesh(new THREE.SphereGeometry(.48,12,8),new THREE.MeshBasicMaterial({color:0xd6fbff}));lamp.scale.set(1.8,.55,.6);lamp.position.set(side*3,.1,7);model.add(lamp);
    box(1.5,.38,.3,side*3.4,-.25,-6.7,new THREE.MeshBasicMaterial({color:0xff6755}));
    const exhaust=new THREE.Mesh(new THREE.CylinderGeometry(.6,.72,1.7,12),metal);exhaust.rotation.x=Math.PI/2;exhaust.position.set(side*2.1,-1.4,-7);model.add(exhaust);
    const flameMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
      uniforms:{tint:{value:new THREE.Color(0x57bfff)},time:{value:0},power:{value:.4}},
      vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`varying vec2 vUv;uniform vec3 tint;uniform float time;uniform float power;void main(){float a=pow(1.-vUv.y,1.8)*(.85+.15*sin(vUv.y*30.-time*35.));gl_FragColor=vec4(mix(tint,vec3(.9,1.,1.),pow(1.-vUv.y,5.))*1.6,a*.8);}`});
    const flame=new THREE.Mesh(new THREE.ConeGeometry(.6,1,14,6,true),flameMat);flame.rotation.x=-Math.PI/2;flame.position.set(side*2.1,-1.4,-8);model.add(flame);engines.push(flame);
  }
  spoilers.push(box(10.5,.5,2.4,0,2.6,-5.8));
  spoilers.push(box(6.5,.12,1.5,0,2.9,-5.8,metal));
  // Driver, seat, helmet and dark visor make the kart scale immediately legible.
  box(3.5,2.3,3.7,0,.3,-1.7,dark);
  round(1.5,1.7,1.2,0,2,-1.2,paint);
  round(1.85,1.8,1.8,0,4.3,-.8,new THREE.MeshPhysicalMaterial({color:0xf3f0e3,roughness:.24,clearcoat:1}));
  round(1.6,.65,.8,0,4.4,.5,new THREE.MeshPhysicalMaterial({color:0x153147,metalness:.55,roughness:.12,clearcoat:1}));
  const steering=new THREE.Mesh(new THREE.TorusGeometry(1.15,.16,8,16),dark);steering.rotation.x=-.65;steering.position.set(0,1.8,1.6);model.add(steering);
  for(const side of [-1,1])round(.48,.48,1.3,side*1.2,1.9,.7,dark);
  // Reusable body kits can be switched without rebuilding or leaking GPU resources.
  const kits={drift:new THREE.Group(),rally:new THREE.Group(),retro:new THREE.Group()};
  for(const kit of Object.values(kits)){model.add(kit);kit.visible=false;}
  kits.drift.add(box(11.4,.3,2.8,0,-1.4,7.2,dark));
  kits.drift.add(box(11.7,.38,2.5,0,4,-5.8,paint));
  for(const side of [-1,1]){
    kits.drift.add(box(.35,2,2.8,side*5.7,3.2,-5.8,dark));
    kits.drift.add(box(1.5,.55,8,side*4.8,-1.1,.2,paint));
    kits.drift.add(box(.18,.12,6.5,side*4.9,-.77,.2,metal));
    kits.rally.add(box(.4,6.5,.4,side*3.1,2,-2.8,dark));
    kits.rally.add(box(.4,5,.4,side*3.1,1,1.5,dark));
    kits.rally.add(box(.4,.4,4.6,side*3.1,5.1,-.7,dark));
    kits.rally.add(round(.9,.9,.55,side*2.3,5.4,1.55,metal));
    kits.rally.add(round(.65,.65,.2,side*2.3,5.4,2,new THREE.MeshBasicMaterial({color:0xffe9a3})));
    kits.rally.add(box(1.6,1,7,side*4.9,-.65,.5,paint));
    kits.retro.add(round(.85,.85,.55,side*3.5,.6,7.45,metal));
    kits.retro.add(round(.64,.64,.2,side*3.5,.6,7.9,new THREE.MeshBasicMaterial({color:0xfff3d1})));
    kits.retro.add(box(.18,.2,10,side*4.4,.2,.3,metal));
  }
  kits.rally.add(box(6.5,.4,.4,0,5.1,-2.8,dark));
  kits.rally.add(box(6.5,.4,.4,0,5.1,1.5,dark));
  kits.rally.add(box(10,.65,1.4,0,-.7,8.3,metal));
  kits.retro.add(round(2.5,1.25,1,0,.1,7.7,dark));
  for(let n=-3;n<=3;n++)kits.retro.add(box(.14,1.6,.2,n*.6,.1,8.6,metal));
  kits.retro.add(box(9.7,.48,.7,0,-1.1,8.8,metal));
  kits.retro.add(round(4.2,.65,1.8,0,.2,-5.5,paint));
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(18,23),new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){float d=length((vUv-.5)*2.);gl_FragColor=vec4(.015,.04,.05,(1.-smoothstep(.3,1.,d))*.55);}`}));
  shadow.rotation.x=-Math.PI/2;shadow.position.y=-3.4;g.add(shadow);
  g.userData={model,engines,fins,shadow,wheels,kits,spoilers,legacy:{model,engines,wheels}};g.scale.setScalar(scale);return g;
}
function configureKart(kart,definition){
  const data=kart.userData;
  if(definition.style==='rally'){
    if(!data.armored){data.armored=createArmoredKart();kart.add(data.armored);}
    data.legacy.model.visible=false;data.armored.visible=true;
    data.model=data.armored;data.engines=data.armored.userData.engines;data.wheels=data.armored.userData.wheels;data.fx=data.armored.userData.fx;
    data.shadow.scale.set(1.15,1.12,1);return;
  }
  if(data.armored)data.armored.visible=false;
  Object.assign(data,data.legacy);data.model.visible=true;data.fx=null;data.shadow.scale.set(1,1,1);
  kart.userData.model.scale.set(...definition.scale);
  Object.entries(kart.userData.kits).forEach(([style,kit])=>{kit.visible=style===definition.style;});
  kart.userData.spoilers.forEach(part=>{part.visible=definition.style!=='retro';});
  kart.userData.wheels.forEach(w=>{
    w.hub.scale.setScalar(definition.style==='rally'?1.13:1);
    w.hub.position.y=definition.style==='rally'?-1.12:-1.4;
  });
}
function animateCraft(craft,time,power,boosting=false,drifting=false,steer=0){
  craft.userData.engines.forEach((flame,i)=>{
    const length=(boosting?24:1+power*1.4)*(1+Math.sin(time*39+i)*.07);
    flame.scale.set(boosting?1.5:1,length,boosting?1.5:1);flame.position.z=(flame.userData.nozzleZ??-7.8)-length*.5;
    flame.material.uniforms.tint.value.setHex(craft===player&&state.miniTurbo>0&&state.nitro<=0?0xffad42:0x43cfff);
    flame.material.uniforms.time.value=time;flame.material.uniforms.power.value=power;
  });
  craft.userData.wheels.forEach(w=>{w.hub.rotation.y=w.front?-steer*.35:0;w.tire.rotation.x=time*power*(craft.userData.fx?-8:18);});
}
const player=makeCraft(craftDefs[craftIndex].color,1); scene.add(player);

const state={yaw:0,hop:0,t:0,lane:0,laneVel:0,speed:0,reverseHold:0,wallContact:0,boost:1/3,shield:1,weapon:1,lap:1,rank:1,hit:0,bank:0,miniTurbo:0,nitro:0,drift:{active:false,charge:0,direction:0}};

const raceEffects=createRaceEffects(scene);
const ai=[];
for(let i=0;i<7;i++){
  const def=craftDefs[i%craftDefs.length]; const mesh=makeCraft(def.color,.9);configureKart(mesh,def);scene.add(mesh);
  ai.push({mesh,t:(.012+i*.018)%1,lane:(Math.random()-.5)*42,speed:360+Math.random()*170,target:380+Math.random()*210,stun:0,aggression:.4+Math.random()*.6});
}

// pickups
const pickups=[];
const pickupColors={boost:0x20fff2,shield:0x875eff,weapon:0xff3d81};
for(let i=0;i<30;i++){
  const type=['boost','shield','weapon'][i%3], t=(i/30+.025)%1, f=trackFrame(t), lane=(i%2?1:-1)*(10+Math.random()*20);
  const m=new THREE.Mesh(new THREE.OctahedronGeometry(3.7,0),new THREE.MeshBasicMaterial({color:pickupColors[type],wireframe:true}));
  m.position.copy(f.p).addScaledVector(f.side,lane).addScaledVector(f.normal,7); scene.add(m); pickups.push({m,type,t,lane,active:true,respawn:0});
}

scene.add(new THREE.HemisphereLight(0xe3f5ff,0x68806b,2.3));
const dir=new THREE.DirectionalLight(0xffe6c3,2.7);dir.position.set(500,900,-400);scene.add(dir);

const chaseLight=new THREE.DirectionalLight(0xb9dbff,2.3);scene.add(chaseLight);scene.add(chaseLight.target);
const streakCount=48,streakPositions=new Float32Array(streakCount*6);
const streakGeo=new THREE.BufferGeometry();streakGeo.setAttribute('position',new THREE.BufferAttribute(streakPositions,3));
const streaks=new THREE.LineSegments(streakGeo,new THREE.LineBasicMaterial({color:0x9edef0,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));
scene.add(streaks);
function updateSpeedFX(time,meta){
  const power=clamp((state.speed-340)/520,0,1);
  streaks.position.copy(camera.position);streaks.quaternion.copy(camera.quaternion);
  streaks.material.opacity=reducedMotion?0:power*(meta.boosting?.6:.06);
  for(let i=0;i<streakCount;i++){
    const a=i*2.39996,r=13+(i%7)*3,z=-10-((i*7.13-time*(38+power*130))%140+140)%140;
    streakPositions.set([Math.cos(a)*r,Math.sin(a)*r,z,Math.cos(a)*r,Math.sin(a)*r,z+2+power*12],i*6);
  }
  streakGeo.attributes.position.needsUpdate=true;
}
// Streak vertices change every frame; their initial zero-sized bounds are not useful.
streaks.frustumCulled=false;
const msg=document.querySelector('#centerMsg'), flash=document.querySelector('#flash');
function ping(text,color='#fff'){msg.textContent=text;msg.style.color=color;msg.style.opacity=1;setTimeout(()=>msg.style.opacity=0,520)}
function colorKart(kart,color){kart.traverse(o=>{if(o.material?.userData.craftColor)o.material.color.setHex(color);});}
function setCraft(i){
  if(race&&race.phase!=='finished')return;
  if(!Number.isInteger(i)||!craftDefs[i])return;
  craftIndex=i;const d=craftDefs[i];configureKart(player,d);
  colorKart(player,selectedMode==='team'?TEAM_COLORS[selectedTeam]:d.color);
  document.querySelectorAll('[data-craft]').forEach(el=>{const active=Number(el.dataset.craft)===i;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  document.querySelector('#craftName').textContent=d.name;
  document.querySelector('#kartTitle').textContent=`${d.name} / ${d.title}`;
  document.querySelector('#kartDescription').textContent=d.description;
  const stats=[['Speed',d.max,650,`${Math.round(d.max*DISPLAY_SPEED)} KM/H`],['Accel.',d.accel,300,`${Math.round(d.accel/210*100)}%`],['Handling',d.turn,1.5,`${Math.round(d.turn*100)}%`],['Drift',d.drift,1.5,`${Math.round(d.drift*100)}%`]];
  document.querySelector('#kartStats').innerHTML=stats.map(([label,value,max,text])=>`<div class="kart-stat"><span>${label}</span><i><b style="width:${Math.min(100,value/max*100)}%"></b></i><strong>${text}</strong></div>`).join('');
}
function reset(){
  scene.add(player);
  audio.start();raceEffects.reset();driftLatched=false;lastSteer=0;keys.clear();actions.clear();mobile.clear();helpOpen=false;simulationTime=0;cameraReady=false;qWas=false;
  race=createRace(selectedMode,selectedTeam);
  msg.textContent='';msg.style.opacity=0;
  Object.assign(state,{yaw:0,hop:0,t:(race.racers[0].progress+1)%1,lane:race.racers[0].lane,laneVel:0,speed:0,reverseHold:0,wallContact:0,boost:1/3,shield:1,weapon:1,lap:1,rank:1,hit:0,bank:0,miniTurbo:0,nitro:0,drift:{active:false,charge:0,direction:0}});
  const spawn=trackFrame(state.t);Object.assign(state,{x:spawn.p.x+spawn.side.x*state.lane,z:spawn.p.z+spawn.side.z*state.lane,heading:Math.atan2(spawn.tan.x,spawn.tan.z),vx:0,vz:0,roadIndex:null});
  ai.forEach((a,i)=>{const r=race.racers[i+1];a.t=(r.progress+1)%1;a.lane=r.lane;a.speed=0;a.stun=0;a.target=525+i*10;colorKart(a.mesh,selectedMode==='team'?TEAM_COLORS[r.team]:craftDefs[i%craftDefs.length].color);});
  colorKart(player,selectedMode==='team'?TEAM_COLORS[selectedTeam]:craftDefs[craftIndex].color);
  pickups.forEach(p=>{p.active=true;p.m.visible=true;p.respawn=0;});
  document.querySelector('#lobby').hidden=true;document.querySelector('#results').hidden=true;document.querySelector('#controlsPanel').hidden=true;
  document.querySelector('#controlsToggle').setAttribute('aria-expanded','false');
  document.body.classList.add('in-race');document.querySelector('#countdown').hidden=false;
  document.querySelector('#modeLabel').textContent=selectedMode==='team'?'4V4 AI TEAM RACE':'SOLO / 7 AI RIVALS';
  document.querySelector('#teamScore').hidden=selectedMode!=='team';
  renderer.domElement.focus();
}
function updatePlayer(dt,time){
  const d=craftDefs[craftIndex],r=race?.racers[0];
  const racing=race?.phase==='racing'&&r.finishTime===null;
  const throttle=racing&&(document.querySelector('#autoThrottle').checked||keys.has('KeyW')||keys.has('ArrowUp')||mobile.down('throttle'));
  const brake=racing&&(keys.has('KeyS')||keys.has('ArrowDown')||mobile.down('brake'));
  const keyboardSteer=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
  const keyboardTurning=['KeyA','KeyD','ArrowLeft','ArrowRight'].some(code=>keys.has(code));
  const steer=racing?(keyboardTurning?keyboardSteer:mobile.steer(dt)):0;
  const toggleDrift=document.querySelector('#toggleDrift').checked;
  const air=racing&&(mobile.down('drift')||(toggleDrift?driftLatched:keys.has('Space')));
  const driftSteer=steer||(!state.drift.active&&toggleDrift?lastSteer:0);
  if(racing&&(actions.has('ShiftLeft')||actions.has('ShiftRight'))&&state.boost>=.333&&state.nitro<=0){state.boost=Math.max(0,state.boost-1/3);state.nitro=2.1;ping('NITRO ENGAGED','#69cfff');}
  state.nitro=Math.max(0,state.nitro-dt);state.miniTurbo=Math.max(0,state.miniTurbo-dt);
  let boosted=state.nitro>0||state.miniTurbo>0;
  const f=trackFrame(state.t),future=trackFrame(state.t+.015);
  const turn=f.tan.clone().cross(future.tan).dot(f.normal);
  const blocked=Math.abs(state.lane)>31.8&&state.laneVel*state.lane>0;
  const wasDrifting=state.drift.active;
  const reward=updateDrift(state.drift,{held:air,steer:driftSteer,speed:state.speed,turn,blocked},dt*d.drift);
  if(!wasDrifting&&state.drift.active)state.hop=.24;
  if(reward){boosted=true;state.miniTurbo=reward;state.boost=Math.min(1,state.boost+(reward>1?.34:.17));ping(reward>1?'SUPER MINI TURBO':'MINI TURBO','#ffce73');}
  if(racing){
    stepHandling(state,{steer,throttle,brake,boosting:boosted},d,dt);
    const oldLap=state.lap;
    const road=projectTrack(state.x,state.z,roadSamples,state.roadIndex);state.roadIndex=road.index;
    if(resolveTrackContact(state,road)){state.nitro=0;state.miniTurbo=0;boosted=false;}
    const delta=progressDelta(state.t,road.t);
    // Progress measures displacement, including backwards travel, never engine speed.
    advanceRacer(race,r,delta,dt);
    state.t=(road.t+1)%1;state.lap=clamp(Math.floor(Math.max(0,r.progress))+1,1,3);r.lane=state.lane;r.speed=state.speed;
    if(state.lap>oldLap)ping(state.lap===3?'FINAL LAP':'LAP 2','#fff0b3');
    if(r.finishTime!==null){state.speed=0;ping('FINISH / WAITING FOR RACERS','#fff0b3');}
  }
  if(r?.finishTime!==null&&r?.finishTime!==undefined){state.speed=0;state.vx=0;state.vz=0;}
  const frame=trackFrame(state.t);
  player.position.set(state.x,frame.p.y+frame.side.y*state.lane+3.7+Math.sin(state.hop/.24*Math.PI)*1.4,state.z);
  const forward=new THREE.Vector3(Math.sin(state.heading),0,Math.cos(state.heading));
  forward.addScaledVector(frame.normal,-forward.dot(frame.normal)).normalize();
  const vehicleSide=new THREE.Vector3().crossVectors(forward,frame.normal).normalize();
  state.yaw=Math.atan2(frame.tan.clone().cross(forward).dot(frame.normal),frame.tan.dot(forward));
  state.bank=lerp(state.bank,-steer*.07,1-Math.exp(-8*dt));
  const q=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(vehicleSide.clone().negate(),frame.normal,forward));
  q.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0,0,state.bank)));
  if(!cameraReady)player.quaternion.copy(q);else player.quaternion.slerp(q,1-Math.exp(-10*dt));
  animateCraft(player,time,state.speed/d.max,boosted,state.drift.active,steer);
  state.hit=Math.max(0,state.hit-dt);
  return {f:{...frame,tan:forward,side:vehicleSide},boosting:boosted,air:state.drift.active,steer};
}
function updateAI(dt,time){
  for(let i=0;i<ai.length;i++){
    const a=ai[i],r=race?.racers[i+1];
    if(race?.phase==='racing'&&r.finishTime===null){
      a.stun=Math.max(0,a.stun-dt);
      const gap=race.racers[0].progress-r.progress;
      const target=a.target+clamp(gap*80,-30,35)+Math.sin(time*.5+i)*22;
      a.speed=lerp(a.speed,a.stun?190:target,1-Math.exp(-.8*dt));
      advanceRacer(race,r,a.speed*DISTANCE_SCALE/trackLength*dt,dt);a.t=((r.progress%1)+1)%1;
      a.lane=lerp(a.lane,Math.sin(time*.55+i*2.1)*24,dt*1.5);r.lane=a.lane;r.speed=a.speed;
      const near=Math.abs(r.progress-race.racers[0].progress)<.0025;
      if(near&&Math.abs(a.lane-state.lane)<10&&state.hit===0&&race.racers[0].finishTime===null){
        const impulse=Math.sign(state.lane-a.lane||1)*12/density();const roadSide=trackFrame(state.t).side;state.vx+=roadSide.x*impulse;state.vz+=roadSide.z*impulse;state.speed*=state.shield>0?.94:.86;state.shield=Math.max(0,state.shield-.10);state.hit=.3;
      }
    }
    if(r?.finishTime!==null&&r?.finishTime!==undefined){a.t=((race.elapsed-r.finishTime)*220/trackLength)%1;a.speed=220;}
    animateCraft(a.mesh,time,a.speed/560,a.stun<=0&&Math.sin(time+i)> .96);
    const f=trackFrame(a.t);a.mesh.position.copy(f.p).addScaledVector(f.side,a.lane).addScaledVector(f.normal,3.7);
    a.mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.side.clone().negate(),f.normal,f.tan));
  }
  if(race)state.rank=standings(race).findIndex(r=>r.id===0)+1;
}
function density(){return craftDefs[craftIndex].mass;}

let qWas=false;
function updateCombat(dt){
  const q=keys.has('KeyQ')||actions.has('KeyQ');
  if(q&&!qWas&&state.weapon>.34){
    state.weapon-=.34; ping('EMP BURST','#ff3d81');
    for(const a of ai){let td=Math.abs(a.t-state.t);td=Math.min(td,1-td);if(td<.026&&(race.mode!=='team'||race.racers[ai.indexOf(a)+1].team!==race.team))a.stun=1.1;}
    flash.style.background='#ff3d81';flash.style.opacity=.08;setTimeout(()=>{flash.style.opacity=0;flash.style.background='white'},70);
  }
  qWas=q; state.weapon=Math.min(1,state.weapon+.018*dt);
}

function updatePickups(dt,time){
  for(const p of pickups){
    if(!p.active){p.respawn-=dt;if(p.respawn<=0){p.active=true;p.m.visible=true}continue;}
    p.m.rotation.x+=dt*2.2;p.m.rotation.y+=dt*3.7;p.m.scale.setScalar(1+Math.sin(time*5+p.t*30)*.18);
    let td=Math.abs(p.t-state.t);td=Math.min(td,1-td);
    if(td<.0028&&Math.abs(p.lane-state.lane)<9){
      p.active=false;p.m.visible=false;p.respawn=7;
      if(p.type==='boost'){state.boost=Math.min(1,state.boost+1/3); ping('BOOST OVERCHARGE','#21fff3')}
      if(p.type==='shield'){state.shield=1; ping('PHASE SHIELD','#8c6bff')}
      if(p.type==='weapon'){state.weapon=1; ping('EMP ARMED','#ff3d81')}
    }
  }
}

let cameraReady=false;
function updateCamera(dt,meta){
  const f=meta.f;
  const speedN=clamp(state.speed/650,0,1);
  const desired=player.position.clone().addScaledVector(f.tan,-61-speedN*7).addScaledVector(f.normal,27+speedN*2);
  const shake=reducedMotion?0:state.hit?.45:0;
  desired.x+=(Math.random()-.5)*shake*speedN; desired.y+=(Math.random()-.5)*shake*speedN; desired.z+=(Math.random()-.5)*shake*speedN;
  if(!cameraReady){camera.position.copy(desired);cameraReady=true;}
  // Chase the actual vehicle heading, not the circuit tangent.
  camera.position.copy(desired);
  const look=player.position.clone().addScaledVector(f.tan,23+speedN*14).addScaledVector(f.side,state.laneVel*.07);
  camera.up.copy(f.normal).applyAxisAngle(f.tan,state.bank*.1).normalize();
  camera.lookAt(look);
  chaseLight.position.copy(camera.position).addScaledVector(f.normal,20);chaseLight.target.position.copy(player.position);
  camera.fov=lerp(camera.fov,60+(reducedMotion?0:speedN*4+(meta.boosting?8:0)),1-Math.pow(.002,dt));camera.updateProjectionMatrix();
  if(bloom)bloom.strength=.22+(meta.boosting?.08:0);
  document.body.classList.toggle('boosting',meta.boosting);
}

function updateHUD(){
  document.querySelector('#speed').innerHTML=`${String(Math.round(Math.abs(state.speed)*DISPLAY_SPEED)).padStart(3,'0')} <small>${state.speed<-.5?'REV':'KM/H'}</small>`;
  document.querySelector('#sector').textContent=`${String(race?.phase==='countdown'?1:Math.floor(state.t*6)+1).padStart(2,'0')} / 06`;
  document.querySelector('#lap').textContent=`${state.lap} / 3`;
  document.querySelector('#rank').innerHTML=`${state.rank}<span> / 8</span>`;
  document.querySelector('#boostFill').style.transform=`scaleX(${state.boost})`;
  document.querySelector('#shieldFill').style.transform=`scaleX(${state.shield})`;
  document.querySelector('#weaponFill').style.transform=`scaleX(${state.weapon})`;
  for(const id of ['boost','shield','weapon']) document.querySelector('#'+id+'Value').textContent=String(Math.round(state[id]*100)).padStart(2,'0')+'%';
  document.querySelector('#courseProgress').style.width=`${state.t*100}%`;
  const p=curve.getPointAt(state.t);document.querySelector('#mapPlayer').setAttribute('cx',p.x/1350*63+90);document.querySelector('#mapPlayer').setAttribute('cy',p.z/1350*63+70);
  document.querySelector('#raceTime').textContent=new Date(simulationTime*1000).toISOString().slice(14,22);

}

// Course map uses the same spline as the playable circuit.
const mapPoints=Array.from({length:161},(_,i)=>{const p=curve.getPointAt(i/160);return `${(p.x/1350*63+90).toFixed(1)},${(p.z/1350*63+70).toFixed(1)}`}).join(' ');
document.querySelector('#mapPath').setAttribute('points',mapPoints);
document.querySelector('.kart-options').innerHTML=craftDefs.map((d,i)=>`<button data-craft="${i}" aria-pressed="false" style="--kart-color:#${d.color.toString(16).padStart(6,'0')}"><span>${String(i+1).padStart(2,'0')}<i class="kart-swatch"></i></span><strong>${d.name}</strong><small>${d.tag}</small></button>`).join('');
document.querySelectorAll('[data-craft]').forEach(el=>el.addEventListener('click',()=>setCraft(Number(el.dataset.craft))));
const beforeBayDecor=new Set(scene.children);
// A soft sky gradient, sculpted islands and trackside props give the course a readable scale.
const sky=new THREE.Mesh(new THREE.SphereGeometry(6500,24,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,vertexShader:`varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vP;void main(){float h=normalize(vP).y;vec3 c=mix(vec3(.68,.83,.86),vec3(.16,.43,.64),smoothstep(-.05,.8,h));gl_FragColor=vec4(c,1.);}`}));scene.add(sky);
const grass=new THREE.MeshStandardMaterial({color:0x7fa98b,roughness:.95});
const cliff=new THREE.MeshStandardMaterial({color:0x9eaeaa,roughness:.94,flatShading:true});
const leaves=new THREE.MeshStandardMaterial({color:0x4a9077,roughness:.9});
const trunk=new THREE.MeshStandardMaterial({color:0x806c55,roughness:.9});
for(let i=0;i<26;i++){
  const f=trackFrame(i/26),island=new THREE.Group();
  island.position.copy(f.p).addScaledVector(f.side,(i%2?1:-1)*(150+(i%3)*40)).addScaledVector(f.normal,-95);
  const rock=new THREE.Mesh(new THREE.IcosahedronGeometry(1,1),cliff);rock.scale.set(125,78,115);island.add(rock);
  const lawn=new THREE.Mesh(new THREE.SphereGeometry(1,16,8),grass);lawn.scale.set(121,25,110);lawn.position.y=50;island.add(lawn);
  for(let n=0;n<4;n++){
    const x=Math.sin(n*4+i)*75,z=Math.cos(n*4+i)*60;
    const stem=new THREE.Mesh(new THREE.CylinderGeometry(2,3,30,6),trunk);stem.position.set(x,77,z);island.add(stem);
    const leaf=new THREE.Mesh(new THREE.IcosahedronGeometry(17+(n%2)*7,1),leaves);leaf.scale.y=1.4;leaf.position.set(x,101,z);island.add(leaf);
  }scene.add(island);
}
const cloudMat=new THREE.MeshStandardMaterial({color:0xf3f5e9,roughness:1});
for(let i=0;i<22;i++){
  const a=i/22*Math.PI*2;
  const cloud=new THREE.Group();cloud.position.set(Math.cos(a)*2800,550+(i%4)*100,Math.sin(a)*2800);
  for(let n=0;n<3;n++){const m=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),cloudMat);m.scale.set(150+n*30,50+n*9,80);m.position.x=n*100;cloud.add(m);}scene.add(cloud);
}
function signTexture(title,subtitle,color='#214554'){
  const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d');
  ctx.fillStyle=color;ctx.fillRect(0,0,1024,256);ctx.fillStyle='#ffdb98';ctx.fillRect(0,0,16,256);
  ctx.textAlign='center';ctx.fillStyle='#fff6df';ctx.font='bold 90px Arial';ctx.fillText(title,512,128);
  ctx.fillStyle='#c0dce2';ctx.font='24px Arial';ctx.fillText(subtitle,512,188);
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
const startFrame=trackFrame(0),startGate=new THREE.Group();startGate.position.copy(startFrame.p);
startGate.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(startFrame.side.clone().negate(),startFrame.normal,startFrame.tan));
for(const x of [-44,44]){const post=new THREE.Mesh(new THREE.BoxGeometry(3,35,3),structureMat);post.position.set(x,17,0);startGate.add(post);}
const banner=new THREE.Mesh(new THREE.BoxGeometry(90,19,2),new THREE.MeshStandardMaterial({map:signTexture('APEX CLUB','BAY CIRCUIT  /  START — FINISH'),roughness:.6}));banner.position.y=35;startGate.add(banner);
const gridWhite=new THREE.MeshStandardMaterial({color:0xfff5d8}),gridDark=new THREE.MeshStandardMaterial({color:0x213841});
for(let x=0;x<12;x++)for(let z=0;z<2;z++){const tile=new THREE.Mesh(new THREE.BoxGeometry(6.3,.12,3),((x+z)%2)?gridWhite:gridDark);tile.position.set((x-5.5)*6.3,.1,z*3);startGate.add(tile);}scene.add(startGate);
for(let i=0;i<34;i++){
  const f=trackFrame((i+.5)/34),next=trackFrame((i+.5)/34+.015),turn=f.tan.clone().cross(next.tan).dot(f.normal);
  if(Math.abs(turn)<.035)continue;
  const board=new THREE.Mesh(new THREE.BoxGeometry(19,10,1.5),new THREE.MeshStandardMaterial({map:signTexture(turn>0?'› › ›':'‹ ‹ ‹','DRIFT ZONE','#da8650'),roughness:.8}));
  board.position.copy(f.p).addScaledVector(f.side,turn>0?49:-49).addScaledVector(f.normal,11);
  board.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.side.clone().negate(),f.normal,f.tan));scene.add(board);
}
const bayDecor=scene.children.filter(o=>!beforeBayDecor.has(o));
let citadel=null,selectedScene='bay';const showroom=createShowroom();let lobbyTime=0;
function selectScene(name){
 selectedScene=name==='citadel'?'citadel':'bay';const ancient=selectedScene==='citadel';
 if(ancient&&!citadel){citadel=createCitadel(trackFrame,trackLength);scene.add(citadel);}
 if(citadel)citadel.visible=ancient;
 [...bayTrackObjects,...bayDecor,sea].forEach(o=>o.visible=!ancient);
 scene.background.set(ancient?0xc9baa0:0x83bed8);scene.fog.color.set(ancient?0xc9baa0:0x9bcadb);
 dir.color.set(ancient?0xffd49b:0xffe6c3);
 trackMat.uniforms.citadel.value=ancient?1:0;
 document.body.dataset.scene=selectedScene;
 document.querySelectorAll('[data-scene]').forEach(b=>{const on=b.dataset.scene===selectedScene;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 document.querySelector('.track-title').textContent=ancient?'Jade Citadel':'Bay Circuit';
 document.querySelector('#sceneCaption').textContent=ancient?'JADE CITADEL / ANCIENT WALL RUN':'BAY CIRCUIT / COASTAL GRAND PRIX';
 document.querySelector('.navigation .label').textContent=ancient?'JADE CITADEL / LIVE MAP':'BAY CIRCUIT / LIVE MAP';
}
document.querySelectorAll('[data-scene]').forEach(b=>b.addEventListener('click',()=>selectScene(b.dataset.scene)));
const rivalLabels=document.createElement('div');rivalLabels.id='rivalLabels';document.querySelector('.race-ui').append(rivalLabels);
const nameTags=ai.map(()=>{const el=document.createElement('div');el.className='rival-tag';rivalLabels.append(el);return el;});
const mapDots=ai.map(()=>{const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');circle.setAttribute('r','2.7');document.querySelector('#mapRivals').append(circle);return circle;});
let lastRaceUI=-1;
function updateRaceHUD(){
  if(!race)return;
  mobile.update(state);
  document.body.classList.toggle('drifting',state.drift.active);document.body.classList.toggle('charged',state.drift.charge>.78);
  document.querySelector('#boostValue').textContent=`${Math.floor(state.boost*3+.01)} / 3`;
  document.querySelector('#driftFill').style.width=`${state.drift.charge*100}%`;
  document.querySelector('#driftPercent').textContent=state.nitro>0?`${state.nitro.toFixed(1)}s`:state.miniTurbo>0?`${state.miniTurbo.toFixed(1)}s`:`${Math.round(state.drift.charge*100)}%`;
  document.querySelector('#boostCountdown').style.transform=`scaleX(${state.nitro>0?state.nitro/2.1:state.miniTurbo/1.5})`;
  document.querySelector('#boostTitle').textContent=state.nitro>0?'NITRO':state.miniTurbo>0?'MINI TURBO':'TURBO';
  document.querySelector('#driftLabel').textContent=state.nitro>0?'NITRO BOOST':state.miniTurbo>0?'MINI TURBO':state.drift.active?(state.drift.charge>=.78?'SUPER TURBO READY':state.drift.charge>=.32?'TURBO READY':'DRIFT / CHARGING'):(matchMedia('(pointer:coarse), (max-width:950px)').matches?'HOLD DRIFT + STEER':'HOLD SPACE + STEER');
  document.querySelector('#driftHint').textContent=state.drift.charge>.78?(document.querySelector('#toggleDrift').checked?'Super turbo ready · Tap SPACE':'Super turbo ready · Release SPACE'):state.drift.charge>.32?'Turbo ready · Keep charging to upgrade':(document.querySelector('#toggleDrift').checked?'Tap SPACE again to release boost':'Hold SPACE to slide · Release to boost');
  if(Math.abs(race.elapsed-lastRaceUI)<.1&&race.phase==='racing')return;lastRaceUI=race.elapsed;
  const ordered=standings(race),scores=teamScores(race);
  document.querySelector('#blueScore').textContent=scores.blue;document.querySelector('#redScore').textContent=scores.red;
  document.querySelector('#leaderboard').innerHTML=ordered.map((r,i)=>`<div class="leader-row ${r.id===0?'you':''}"><b>${i+1}</b><i class="team-dot ${race.mode==='team'?r.team:'solo'}"></i><span>${r.name}</span><strong>${r.finishTime!==null?'FINISH':r.id===0?'YOU':'AI'}</strong></div>`).join('');
  if(race.racers[0].finishTime!==null){document.querySelector('#driftLabel').textContent='FINISHED / AWAITING RESULTS';document.querySelector('#driftHint').textContent=`Waiting for racers · ${Math.max(0,Math.ceil(20-(race.elapsed-race.firstFinish)))}s remaining`;}
  ai.forEach((a,i)=>{
    const r=race.racers[i+1],p=a.mesh.position.clone().add(new THREE.Vector3(0,13,0)).project(camera);
    const el=nameTags[i],visible=p.z>-1&&p.z<1&&Math.abs(p.x)<.95&&Math.abs(p.y)<.85&&a.mesh.position.distanceTo(player.position)<450;
    el.hidden=!visible;el.style.left=`${(p.x*.5+.5)*100}%`;el.style.top=`${(-p.y*.5+.5)*100}%`;
    el.textContent=`${r.name} · ${race.mode==='team'?(r.team===race.team?'TEAMMATE':'RIVAL'):'AI'}`;el.dataset.team=race.mode==='team'?r.team:'solo';
    const f=curve.getPointAt(a.t);mapDots[i].setAttribute('cx',f.x/1350*63+90);mapDots[i].setAttribute('cy',f.z/1350*63+70);mapDots[i].setAttribute('fill',race.mode==='solo'?'#ffd38b':r.team==='blue'?'#65c4ff':'#ff8997');
  });
}

function finishRace(){
  race.phase='finished';keys.clear();actions.clear();mobile.clear();document.querySelector('#results').hidden=false;document.querySelector('#raceAgain').focus();
  const scores=teamScores(race,true),ordered=standings(race);
  const winner=scores.blue===scores.red?'DRAW':scores.blue>scores.red?'BLUE TEAM WINS':'RED TEAM WINS';
  document.querySelector('#resultTitle').textContent=race.mode==='team'?winner:ordered[0].id===0?'YOU WIN!':'Race complete';
  document.querySelector('#resultSubtitle').textContent=race.mode==='team'?`BLUE ${scores.blue} : ${scores.red} RED · Points awarded to finishers`:`Your position: P${state.rank} · Bay Circuit / 3 laps`;
  document.querySelector('#resultRows').innerHTML=ordered.map((r,i)=>`<tr class="${r.id===0?'you':''}"><td>${String(i+1).padStart(2,'0')}</td><td><i class="team-dot ${race.mode==='team'?r.team:'solo'}"></i>${r.name}${r.id===0?' / YOU':' / AI'}</td><td>${r.finishTime===null?'DNF':formatTime(r.finishTime)}</td><td>${r.finishTime===null?0:SCORE_TABLE[i]}</td></tr>`).join('');
}
function formatTime(t){return `${Math.floor(t/60).toString().padStart(2,'0')}:${(t%60).toFixed(2).padStart(5,'0')}`;}
function returnLobby(){race=null;helpOpen=false;keys.clear();actions.clear();mobile.clear();document.querySelector('#lobby').hidden=false;document.querySelector('#results').hidden=true;document.querySelector('#controlsPanel').hidden=true;document.body.classList.remove('in-race','boosting','drifting','charged');raceEffects.reset();streaks.material.opacity=0;setCraft(craftIndex);document.querySelector('#raceStart').focus();}
document.querySelector('#raceStart').addEventListener('click',reset);
document.querySelector('#raceAgain').addEventListener('click',reset);
document.querySelectorAll('[data-lobby]').forEach(el=>el.addEventListener('click',returnLobby));
document.querySelectorAll('[data-mode]').forEach(el=>el.addEventListener('click',()=>{selectedMode=el.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b===el);b.setAttribute('aria-pressed',String(b===el));});document.querySelector('#teamChoice').hidden=selectedMode!=='team';setCraft(craftIndex);}));
document.querySelectorAll('[data-team]').forEach(el=>el.addEventListener('click',()=>{selectedTeam=el.dataset.team;document.querySelectorAll('[data-team]').forEach(b=>{b.classList.toggle('active',b===el);b.setAttribute('aria-pressed',String(b===el));});setCraft(craftIndex);}));
function loop(){
  requestAnimationFrame(loop);const elapsed=Math.min(clock.getDelta(),.08);
  if(document.hidden||helpOpen){audio.update(0,false,false,false);return;}
  let dt=0;
  if(race?.phase==='countdown'){
    race.countdown-=elapsed;document.querySelector('#countdown').textContent=race.countdown>0?Math.ceil(race.countdown):'GO!';
    if(race.countdown<=0){race.phase='racing';document.querySelector('#countdown').hidden=true;ping('GO! / FULL THROTTLE','#ffdf87');}
  }else if(race?.phase==='racing'){
    dt=elapsed;race.elapsed+=dt;simulationTime=race.elapsed;
    if(actions.has('KeyR')){reset();dt=0;}
  }
  const time=simulationTime;
  if(!race){
    audio.update(0,false,false,false);
    lobbyTime+=elapsed;
    showroom.render(renderer,player,lobbyTime,reducedMotion);
    return;
  }else{
    let meta;const steps=Math.max(1,Math.ceil(dt/(1/120))),step=dt/steps;
    race.elapsed-=dt;
    for(let i=0;i<steps;i++){race.elapsed+=step;meta=updatePlayer(step,race.elapsed);updateAI(step,race.elapsed);actions.delete('ShiftLeft');actions.delete('ShiftRight');}
    audio.update(state.speed/650,state.drift.active,meta.boosting,race.phase==='racing'&&race.racers[0].finishTime===null);
    if(dt>0&&race.racers[0].finishTime===null){updatePickups(dt,time);updateCombat(dt);}
    updateCamera(elapsed,meta);updateSpeedFX(time,meta);updateHUD();updateRaceHUD();raceEffects.update(dt,player,state,meta.f,meta.boosting);
    if(race.phase==='racing'&&shouldFinish(race))finishRace();
  }
  actions.clear();trackMat.uniforms.time.value=time;sea.material.uniforms.time.value=time*.15;if(composer&&document.querySelector('#qualitySetting').value==='quality')composer.render();else renderer.render(scene,camera);
}
let driverMounted=false;
function showDriver(){if(driverMounted)return;try{mountDriverStudio(document.querySelector('#driverStudio'),()=>!race&&document.querySelector('#settingsDialog').open&&!document.querySelector('[data-settings-panel=driver]').hidden);driverMounted=true;}catch{document.querySelector('#driverStudio .driver-action').textContent='3D preview unavailable on this device';}}

document.querySelector('#motionSetting').checked=reducedMotion;
function saveSettings(){try{localStorage.setItem('apex-settings',JSON.stringify({toggleDrift:document.querySelector('#toggleDrift').checked,motion:reducedMotion,audio:document.querySelector('#audioSetting').checked,quality:document.querySelector('#qualitySetting').value}));}catch{}}
function applyQuality(){const low=document.querySelector('#qualitySetting').value==='performance';renderer.setPixelRatio(Math.min(devicePixelRatio,low?1:1.6));renderer.setSize(innerWidth,innerHeight);if(!low)ensureComposer();composer?.setPixelRatio(renderer.getPixelRatio());composer?.setSize(innerWidth,innerHeight);if(bloom)bloom.enabled=!low;saveSettings();}
if(mobileDevice)document.querySelector('#qualitySetting').value='performance';
try{const saved=JSON.parse(localStorage.getItem('apex-settings')||'null');if(saved){document.querySelector('#toggleDrift').checked=!!saved.toggleDrift;reducedMotion=!!saved.motion;document.querySelector('#motionSetting').checked=reducedMotion;document.querySelector('#audioSetting').checked=saved.audio!==false;document.querySelector('#qualitySetting').value=saved.quality==='performance'?'performance':'quality';}}catch{}
audio.setEnabled(document.querySelector('#audioSetting').checked);
document.querySelector('#toggleDrift').addEventListener('change',saveSettings);
document.querySelector('#audioSetting').addEventListener('change',e=>{audio.setEnabled(e.target.checked);saveSettings();});
document.querySelector('#motionSetting').addEventListener('change',e=>{reducedMotion=e.target.checked;saveSettings();});
document.querySelector('#qualitySetting').addEventListener('change',applyQuality);
applyQuality();
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();toggleControls(true);document.querySelector('#runtimeError').hidden=false;});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&race?.phase==='racing')toggleControls(true);});
setCraft(craftIndex);
loop();

addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);composer?.setSize(innerWidth,innerHeight)});

const settingsDialog=document.querySelector('#settingsDialog');
document.querySelector('#openSettings').addEventListener('click',()=>settingsDialog.showModal());
document.querySelector('#closeSettings').addEventListener('click',()=>settingsDialog.close());
settingsDialog.addEventListener('click',e=>{if(e.target===settingsDialog){const r=settingsDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)settingsDialog.close();}});
document.querySelectorAll('[data-settings]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-settings]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelectorAll('[data-settings-panel]').forEach(panel=>panel.hidden=panel.dataset.settingsPanel!==button.dataset.settings);
 if(button.dataset.settings==='driver')showDriver();
}));
