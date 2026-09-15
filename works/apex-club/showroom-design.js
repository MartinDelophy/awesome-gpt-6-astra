import * as THREE from 'three';

export function createClubShowroom(){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#080f19');scene.fog=new THREE.Fog('#080f19',80,240);
 const camera=new THREE.PerspectiveCamera(43,1,.1,300);
 const material=(color,metalness=0,roughness=.6)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
 const graphite=material(0x1b2a38,.45,.42),steel=material(0x4c6372,.65,.35),rubber=material(0x171e25,0,.9),orange=material(0xe89943,.3,.4),blue=material(0x163e53,.4,.45);
 const warm=new THREE.MeshBasicMaterial({color:0xffdeac}),cool=new THREE.MeshBasicMaterial({color:0x67d7e4});
 const box=(parent,mat,x,y,z,w,h,d)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
 scene.add(new THREE.HemisphereLight(0xb6d6ee,0x101722,.8));
 for(const [color,intensity,x,y,z] of [[0xffebd0,3.2,12,30,23],[0x80dcea,2.5,-27,12,4],[0x91a9e4,2,18,15,-36]]){const light=new THREE.DirectionalLight(color,intensity);light.position.set(x,y,z);scene.add(light);if(x===12){light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:100});light.shadow.normalBias=.08;}}
 // An inset maintenance deck, with a bevelled edge and separate steel footings.
 const deck=new THREE.Mesh(new THREE.CylinderGeometry(19,20,1.1,80),graphite);deck.position.y=-4;deck.receiveShadow=true;scene.add(deck);
 const rim=new THREE.Mesh(new THREE.TorusGeometry(19,.08,6,96),warm);rim.rotation.x=Math.PI/2;rim.position.y=-3.43;scene.add(rim);
 for(const x of [-11,11])box(scene,steel,x,-4.9,0,7,1,24);
 for(const z of [-13,13])for(const x of [-7,-3.5,0,3.5,7])box(scene,orange,x,-3.4,z,2.2,.07,1.1);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(240,220),material(0x0e1b29,.3,.42));floor.rotation.x=-Math.PI/2;floor.position.y=-5.5;floor.receiveShadow=true;scene.add(floor);
 for(let x=-90;x<=90;x+=18)box(scene,graphite,x,-5.47,0,.045,.02,180);
 for(let z=-80;z<=80;z+=18)box(scene,graphite,0,-5.46,z,200,.02,.045);
 // Open bay to the coast: door frame, rolling shutter and a horizon behind it.
 box(scene,graphite,-56,17,-40,24,46,3);box(scene,graphite,51,17,-40,28,46,3);box(scene,graphite,0,40,-40,112,8,3);
 box(scene,steel,-42,14,-38,2,42,4);box(scene,steel,35,14,-38,2,42,4);
 box(scene,warm,-40.6,15,-35,.25,32,.25);box(scene,cool,33.6,15,-35,.25,32,.25);
 const portal=new THREE.Mesh(new THREE.PlaneGeometry(75,48),new THREE.ShaderMaterial({vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;void main(){vec3 sea=mix(vec3(.03,.18,.23),vec3(.16,.38,.43),vUv.y);vec3 sky=mix(vec3(.55,.68,.69),vec3(.17,.37,.49),vUv.y);vec3 c=mix(sea,sky,smoothstep(.40,.42,vUv.y));c+=vec3(.4,.27,.10)*exp(-70.*distance(vUv,vec2(.25,.55)));gl_FragColor=vec4(c,1.);}'}));portal.position.set(-3,16,-52);scene.add(portal);
 const horizonMat=material(0x21434a,0,1);
 for(let i=0;i<5;i++){const hill=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),horizonMat);hill.scale.set(9+i*2,4+i%2*3,2);hill.position.set(-28+i*14,10,-50);scene.add(hill);}
 const beaconBase=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.8,12,16),material(0xe1d6bc));beaconBase.position.set(-18,14,-48);scene.add(beaconBase);box(scene,warm,-18,20.5,-48,2.5,1.5,2.5);const cap=new THREE.Mesh(new THREE.ConeGeometry(2,2,16),graphite);cap.position.set(-18,22,-48);scene.add(cap);
 box(scene,cool,-22,2,12,.13,.13,25);box(scene,cool,22,2,12,.13,.13,25);
 const door=new THREE.Group();scene.add(door);for(let i=0;i<9;i++)box(door,graphite,-3,29+i*2,-39,75,1.9,1.2);
 for(const x of [-29,-15,0,15,29]){box(scene,graphite,x,30,-23,1,2,32);box(scene,warm,x,28.9,-23,.5,.12,20);}
 // Tool chest: drawers, individual handles, caster wheels and a work lamp.
 box(scene,blue,-31,.5,-17,12,12,7);box(scene,steel,-31,6.8,-17,13,.7,8);
 for(let y=-3;y<6;y+=2){box(scene,graphite,-31,y,-13.35,11,1.75,.3);box(scene,steel,-31,y+.5,-13.0,7,.15,.25);}
 for(const x of [-35,-27])for(const z of [-19,-15]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.7,12),rubber);wheel.rotation.z=Math.PI/2;wheel.position.set(x,-4.8,z);scene.add(wheel);}
 box(scene,steel,-33,11,-18,.4,8,.4);box(scene,warm,-31.5,15,-18,4,.25,2);
 for(const z of [-16,-21])for(let i=0;i<3;i++){const tire=new THREE.Mesh(new THREE.TorusGeometry(2.9,1,10,24),rubber);tire.rotation.x=Math.PI/2;tire.position.set(26,-4.4+i*1.7,z);scene.add(tire);}
 const signCanvas=document.createElement('canvas');signCanvas.width=512;signCanvas.height=128;const ctx=signCanvas.getContext('2d');ctx.fillStyle='#142736';ctx.fillRect(0,0,512,128);ctx.fillStyle='#f1d9ad';ctx.font='700 59px sans-serif';ctx.fillText('APEX / 01',35,85);const signMap=new THREE.CanvasTexture(signCanvas);signMap.colorSpace=THREE.SRGBColorSpace;
 const sign=new THREE.Mesh(new THREE.PlaneGeometry(22,5.5),new THREE.MeshBasicMaterial({map:signMap}));sign.position.set(-26,22,-36.3);scene.add(sign);
 let selectionAt=-10,lastTime=0;
 return {scene,camera,select(){selectionAt=lastTime;},render(renderer,player,time,reduced,launch=0){
  lastTime=time;if(player.parent!==scene)scene.add(player);
  const switchMotion=reduced?0:Math.max(0,1-(time-selectionAt)/.65);
  player.position.set(0,0,0);player.rotation.set(0,-.48+switchMotion*.3+(reduced?0:Math.sin(time*.14)*.05),0);
  door.position.y=launch*23;
  const {width,height}=renderer.domElement.getBoundingClientRect(),desktop=width>1024,landscape=width/height>1.5;
  const entrance=reduced||!desktop?1:Math.min(1,time/1.5),ease=1-(1-entrance)**3;
  camera.aspect=width/height;camera.fov=desktop?43:landscape?55:70;
  camera.position.set(28+ease*3,12+ease*5,35+ease*8-launch*3);camera.lookAt(0,0,-launch*5);
  camera.setViewOffset(width,height,desktop?width*.15:landscape?width*.19:0,desktop?-height*.035:landscape?0:height*.20,width,height);camera.updateProjectionMatrix();
  renderer.render(scene,camera);
 }};
}
