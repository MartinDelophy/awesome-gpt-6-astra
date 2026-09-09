import * as THREE from 'three';

export function createShowroom(){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#080d17');scene.fog=new THREE.Fog('#080d17',65,180);
 const camera=new THREE.PerspectiveCamera(42,1,.1,300);
 scene.add(new THREE.HemisphereLight(0xcbdcff,0x161b30,2));
 for(const [color,intensity,x,y,z] of [[0xe3efff,4,15,30,20],[0x70aaff,5,-25,10,-15],[0xff914d,3,25,8,-20]]){const light=new THREE.DirectionalLight(color,intensity);light.position.set(x,y,z);scene.add(light);}
 const plinth=new THREE.Mesh(new THREE.CylinderGeometry(18,19,1,96),new THREE.MeshStandardMaterial({color:0x202a38,metalness:.8,roughness:.28}));plinth.position.y=-4;scene.add(plinth);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(18,.09,8,128),new THREE.MeshBasicMaterial({color:0xe8ad66}));ring.rotation.x=Math.PI/2;ring.position.y=-3.45;scene.add(ring);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshStandardMaterial({color:0x0b111d,roughness:.65,metalness:.3}));floor.rotation.x=-Math.PI/2;floor.position.y=-4.55;scene.add(floor);
 const grid=new THREE.GridHelper(200,40,0x30435e,0x182333);grid.position.y=-4.5;scene.add(grid);
 for(const x of [-35,35]){const strip=new THREE.Mesh(new THREE.BoxGeometry(.12,25,.12),new THREE.MeshBasicMaterial({color:0x597db2}));strip.position.set(x,8,-35);scene.add(strip);}
 return {scene,camera,render(renderer,player,time,reduced){
  if(player.parent!==scene)scene.add(player);
  player.position.set(0,0,0);player.rotation.set(0,-.5+(reduced?0:Math.sin(time*.18)*.35),0);
  const {width,height}=renderer.domElement.getBoundingClientRect();camera.aspect=width/height;camera.fov=width>1024?42:65;
  camera.position.set(30,18,40);camera.lookAt(0,-1,0);
  camera.setViewOffset(width,height,width>1024?width*.19:0,width>1024?-height*.09:height*.25,width,height);camera.updateProjectionMatrix();
  renderer.render(scene,camera);
 }};
}

export function createCitadel(trackFrame,trackLength){
 const group=new THREE.Group();group.name='Jade Citadel';
 const stone=new THREE.MeshStandardMaterial({color:0x687474,roughness:.95});
 const cap=new THREE.MeshStandardMaterial({color:0xa4a18c,roughness:.9});
 const red=new THREE.MeshStandardMaterial({color:0x8e352a,roughness:.65});
 const roof=new THREE.MeshStandardMaterial({color:0x263e3d,metalness:.25,roughness:.55});
 const gold=new THREE.MeshStandardMaterial({color:0xd6a55c,metalness:.5,roughness:.4});
 const glow=new THREE.MeshStandardMaterial({color:0xf2451c,emissive:0xff5623,emissiveIntensity:.7,roughness:.6});
 const cube=new THREE.BoxGeometry(1,1,1),pose=new THREE.Object3D();
 const walls=new THREE.InstancedMesh(cube,stone,640),merlons=new THREE.InstancedMesh(cube,cap,1280),courses=new THREE.InstancedMesh(cube,cap,1920);
 group.add(walls,merlons,courses);let wi=0,mi=0,ci=0;
 const orient=new THREE.Matrix4();
 for(let i=0;i<320;i++){
  const f=trackFrame(i/320);orient.makeBasis(f.side.clone().negate(),f.normal,f.tan);pose.quaternion.setFromRotationMatrix(orient);
  for(const side of [-1,1]){
   pose.position.copy(f.p).addScaledVector(f.side,side*43).addScaledVector(f.normal,-20);pose.scale.set(10,50,trackLength/320+2);pose.updateMatrix();walls.setMatrixAt(wi++,pose.matrix);
   for(const offset of [-.25,.25]){pose.position.copy(f.p).addScaledVector(f.side,side*43).addScaledVector(f.tan,offset*trackLength/320).addScaledVector(f.normal,9);pose.scale.set(10,8,trackLength/320*.23);pose.updateMatrix();merlons.setMatrixAt(mi++,pose.matrix);}
   for(const y of [-34,-18,-2]){pose.position.copy(f.p).addScaledVector(f.side,side*43).addScaledVector(f.normal,y);pose.scale.set(10.3,.6,trackLength/320+2);pose.updateMatrix();courses.setMatrixAt(ci++,pose.matrix);}
  }
 }
 const box=(parent,mat,x,y,z,sx,sy,sz)=>{const m=new THREE.Mesh(cube,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);parent.add(m);return m;};
 // Four gently upturned eaves, built as a real roof mesh rather than a flat decal.
 function eaves(parent,width,y){
  const v=[],idx=[];for(let side=0;side<4;side++)for(let i=0;i<9;i++)for(let j=0;j<2;j++){
   const u=i/8,a=side*Math.PI/2,x=(j?1:-1)*width*u,z=width*u;
   v.push(x*Math.cos(a)-z*Math.sin(a),y+8*(1-u)**2+2*u**6,x*Math.sin(a)+z*Math.cos(a));
  }
  for(let s=0;s<4;s++)for(let i=0;i<8;i++){const a=s*18+i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(v,3));g.setIndex(idx);g.computeVertexNormals();const m=new THREE.Mesh(g,roof);m.material.side=THREE.DoubleSide;parent.add(m);
 }
 for(let i=0;i<12;i++){
  const f=trackFrame((i+.3)/12),tower=new THREE.Group();tower.position.copy(f.p);tower.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.side.clone().negate(),f.normal,f.tan));group.add(tower);
  for(const x of [-53,53]){
   box(tower,stone,x,9,0,20,42,30);box(tower,cap,x,31,0,23,3,33);
   const pavilion=new THREE.Group();pavilion.position.set(x,32,0);tower.add(pavilion);
   for(const a of [-9,9])for(const b of [-12,12])box(pavilion,red,a,10,b,2,20,2);
   box(pavilion,red,0,7,0,16,12,19);box(pavilion,gold,0,13,10,13,2,.4);
   eaves(pavilion,19,19);eaves(pavilion,14,28);
  }
  if(i%3===0){box(tower,red,0,38,0,96,6,7);box(tower,gold,0,42,0,99,1,8);}
  for(const x of [-33,33]){
   box(tower,red,x,14,12,1,28,1);box(tower,gold,x,27,12,9,.7,1);
   const lantern=new THREE.Mesh(new THREE.SphereGeometry(3.2,10,8),glow);lantern.scale.y=1.35;lantern.position.set(x+(x<0?3:-3),23,12);tower.add(lantern);
   box(tower,gold,lantern.position.x,17,12,.3,5,.3);
  }
 }
 const mountainMat=new THREE.MeshStandardMaterial({color:0x617578,roughness:1,flatShading:true});
 const mountainGeo=new THREE.IcosahedronGeometry(1,1);
 for(let i=0;i<32;i++){const a=i/32*Math.PI*2,m=new THREE.Mesh(mountainGeo,mountainMat);m.position.set(Math.cos(a)*2300,-150,Math.sin(a)*2300);m.rotation.y=i*1.7;m.scale.set(350+i%4*110,280+i%5*95,320);group.add(m);}
 const land=new THREE.Mesh(new THREE.PlaneGeometry(10000,10000),new THREE.MeshStandardMaterial({color:0x626c59,roughness:1}));land.rotation.x=-Math.PI/2;land.position.y=-170;group.add(land);
 return group;
}
