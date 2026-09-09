import * as THREE from 'three';

export function createPickupFactory(){
 const metal=new THREE.MeshStandardMaterial({color:0x263647,metalness:.65,roughness:.32});
 const silver=new THREE.MeshStandardMaterial({color:0xc9dae0,metalness:.55,roughness:.26});
 const colors={boost:0x25ded3,shield:0x9876ff,weapon:0xff597f};
 const materials=Object.fromEntries(Object.entries(colors).map(([type,color])=>[type,new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.35,metalness:.25,roughness:.28})]));
 const geometries={tank:new THREE.CylinderGeometry(2,2,5.3,16),cap:new THREE.CylinderGeometry(2.15,2.15,.65,16),core:new THREE.SphereGeometry(2.1,16,12),ring:new THREE.TorusGeometry(2.9,.22,6,32)};
 const add=(g,geo,mat,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);g.add(m);return m;};
 function shieldGeometry(){const s=new THREE.Shape();s.moveTo(-2.8,2.8);s.lineTo(2.8,2.8);s.lineTo(2.5,-.5);s.quadraticCurveTo(1.8,-2.5,0,-3.5);s.quadraticCurveTo(-1.8,-2.5,-2.5,-.5);s.closePath();return new THREE.ExtrudeGeometry(s,{depth:.8,bevelEnabled:true,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1});}
 const shield=shieldGeometry();
 return function createPickup(type){
  const group=new THREE.Group(),body=new THREE.Group(),accent=materials[type];group.add(body);group.name=`${type} collectible`;
  if(type==='boost'){
   add(body,geometries.tank,metal);
   for(const y of [-2.6,2.6])add(body,geometries.cap,silver,0,y);
   for(let i=0;i<4;i++){const a=i*Math.PI/2,m=add(body,new THREE.BoxGeometry(.65,3.5,.18),accent,Math.sin(a)*2,0,Math.cos(a)*2);m.rotation.y=a;}
   add(body,new THREE.CylinderGeometry(.75,.75,1,12),metal,0,3.2);
   const valve=add(body,new THREE.BoxGeometry(2,.35,.65),silver,0,3.7);valve.rotation.y=.4;
  }else if(type==='shield'){
   add(body,shield,silver,0,0,-.65);
   const face=add(body,shield,accent,0,0,-.04);face.scale.set(.8,.8,1);
   for(const z of [-.95,1.1]){add(body,new THREE.BoxGeometry(.5,3.1,.2),silver,0,.1,z);add(body,new THREE.BoxGeometry(2.1,.5,.2),silver,0,.4,z);}
  }else{
   add(body,geometries.core,accent);
   for(let i=0;i<3;i++){const ring=add(body,geometries.ring,metal);ring.rotation.set(i*Math.PI/3,Math.PI/4,0);}
   for(const y of [-2.7,2.7])add(body,new THREE.CylinderGeometry(.8,.8,.7,12),silver,0,y);
  }
  const halo=add(group,new THREE.TorusGeometry(4,.1,6,40),accent,0,-5.8);halo.rotation.x=Math.PI/2;
  // Ground locator stays still while the collectible gently turns above it.
  const disk=add(group,new THREE.CircleGeometry(3.9,32),new THREE.MeshBasicMaterial({color:colors[type],transparent:true,opacity:.09,depthWrite:false,side:THREE.DoubleSide}),0,-5.85);disk.rotation.x=-Math.PI/2;
  group.userData.animate=(time,reduced)=>{body.rotation.y=reduced?.35:time*.7;body.position.y=reduced?0:Math.sin(time*2)*.4;};
  return group;
 };
}
