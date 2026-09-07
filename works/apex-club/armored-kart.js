import * as THREE from 'three';

// Original, fully modelled off-road kart inspired by the supplied heavy-buggy reference.
// +Z is forward. Ground contact is y=-3.4, matching the race chassis convention.
export function createArmoredKart(teamColor=0x44baff,{driver=true}={}){
  const model=new THREE.Group();model.name='TITAN Armored Buggy';
  const paint=new THREE.MeshPhysicalMaterial({color:0x29bfc5,metalness:.42,roughness:.27,clearcoat:1,clearcoatRoughness:.2});
  const edge=new THREE.MeshStandardMaterial({color:0x173c46,metalness:.65,roughness:.32});
  const dark=new THREE.MeshStandardMaterial({color:0x172027,metalness:.45,roughness:.42});
  const rubber=new THREE.MeshStandardMaterial({color:0x202326,roughness:.94});
  const treadMat=new THREE.MeshStandardMaterial({color:0x303437,roughness:.89});
  const alloy=new THREE.MeshStandardMaterial({color:0xc3d0d3,metalness:.8,roughness:.24});
  const seatMat=new THREE.MeshStandardMaterial({color:0x423b36,roughness:.82});
  const red=new THREE.MeshStandardMaterial({color:0xca3c32,metalness:.3,roughness:.35});
  const trim=new THREE.MeshStandardMaterial({color:teamColor,metalness:.35,roughness:.35});trim.userData.craftColor=true;
  const glass=new THREE.MeshPhysicalMaterial({color:0x163748,metalness:.75,roughness:.1,clearcoat:1});
  const lamp=new THREE.MeshStandardMaterial({color:0x80b2d4,emissive:0x3387bb,emissiveIntensity:.25,metalness:.3,roughness:.17});
  const amber=new THREE.MeshStandardMaterial({color:0xffb041,emissive:0xff861b,emissiveIntensity:.45});
  const wheels=[],engines=[],parts={};
  function group(name){const g=new THREE.Group();g.name=name;model.add(g);parts[name]=g;return g;}
  const chassis=group('Chassis & skid plate'),body=group('Bevelled armor'),suspension=group('Independent suspension'),cockpit=group('Cockpit'),engine=group('Rear engine & exhaust'),details=group('Lights & hardware');
  function mesh(parent,geo,mat,x=0,y=0,z=0){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  function box(parent,mat,x,y,z,w,h,d,bevel=.12){
    const shape=new THREE.Shape();shape.moveTo(-w/2,-h/2);shape.lineTo(w/2,-h/2);shape.lineTo(w/2,h/2);shape.lineTo(-w/2,h/2);shape.closePath();
    const g=new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:bevel>0,bevelSegments:2,steps:1,bevelSize:bevel,bevelThickness:bevel,curveSegments:1});g.translate(0,0,-d/2);return mesh(parent,g,mat,x,y,z);
  }
  function ball(parent,mat,x,y,z,a,b,c){const m=mesh(parent,new THREE.SphereGeometry(1,20,12),mat,x,y,z);m.scale.set(a,b,c);return m;}
  function tube(parent,mat,pts,r=.16){const curve=new THREE.CatmullRomCurve3(pts.map(p=>new THREE.Vector3(...p)));return mesh(parent,new THREE.TubeGeometry(curve,Math.min(144,Math.max(12,pts.length*7)),r,8,false),mat);}
  function rod(parent,mat,a,b,r=.18,r2=r){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b);const m=mesh(parent,new THREE.CylinderGeometry(r2,r,av.distanceTo(bv),12),mat);m.position.copy(av).add(bv).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),bv.sub(av).normalize());return m;}
  function disc(parent,mat,x,y,z,r,depth,axis='z'){const m=mesh(parent,new THREE.CylinderGeometry(r,r,depth,24),mat,x,y,z);m.rotation[axis==='x'?'z':'x']=Math.PI/2;return m;}
  function ring(parent,mat,x,y,z,r,t,axis='z'){const m=mesh(parent,new THREE.TorusGeometry(r,t,8,32),mat,x,y,z);if(axis==='x')m.rotation.y=Math.PI/2;if(axis==='y')m.rotation.x=Math.PI/2;return m;}
  function panel(points,y,depth,mat=paint){const shape=new THREE.Shape();points.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:3,bevelSize:.18,bevelThickness:.15,steps:1});geo.rotateX(-Math.PI/2);return mesh(body,geo,mat,0,y,0);}
  box(chassis,dark,0,-.9,0,7.6,1.1,15.4,.22);
  box(chassis,alloy,0,-1.6,4.8,6.2,.32,6,.1);
  for(const s of [-1,1])rod(chassis,edge,[s*3,-.65,-7],[s*3,-.65,7],.3);
  // Broad hood, stepped front shoulders and separate rear fenders.
  panel([[-3.8,8.1],[-4.6,6.6],[-4.7,2.1],[-3.2,1.3],[3.2,1.3],[4.7,2.1],[4.6,6.6],[3.8,8.1]],2.2,1.2);
  panel([[-2.6,8.5],[-3.6,6.8],[-2.7,5.5],[2.7,5.5],[3.6,6.8],[2.6,8.5]],3.3,.48,alloy);
  for(const s of [-1,1]){
    const pts=[[s*3.1,-2.2],[s*6.6,-2.7],[s*7.2,-6.7],[s*5.5,-8.1],[s*3,-7.6]];
    panel(s<0?pts.reverse():pts,3.05,.68);
    box(body,alloy,s*4.0,1,-1.5,1.05,1.9,6.2,.15);
    box(body,dark,s*4.58,1.4,-1.5,.12,.9,4.7,.04);
    for(let j=0;j<4;j++)box(body,alloy,s*4.7,1.4,-3+j*.95,.16,.48,.48,.06);
    box(body,trim,s*4.1,3.05,.1,.9,.18,1.7,.04);
    // Narrow side louvres and an armored sill.
    for(let j=0;j<5;j++){const vent=box(body,dark,s*4.69,2.7,2.5+j*.52,.12,.46,.25,.025);vent.rotation.x=.22;}
    box(chassis,edge,s*4.7,-.1,-1.7,1,.6,5.8,.12);
  }
  // Front grille, bumper bars, lamps with separate bezel / lens / housing.
  box(body,edge,0,.7,7.4,4,3.1,1.1,.25);
  for(const x of [-1.1,0,1.1])box(details,alloy,x,.75,8.35,.18,2.25,.13,.025);
  tube(chassis,alloy,[[-5.1,-1.3,7.4],[-4.8,-1.5,9],[0,-1.5,9.6],[4.8,-1.5,9],[5.1,-1.3,7.4]],.24);
  for(const s of [-1,1]){
    disc(details,dark,s*3.35,1.1,7.9,1.2,.7);ring(details,alloy,s*3.35,1.1,8.3,1.02,.17);disc(details,lamp,s*3.35,1.1,8.4,.84,.18);
    ball(details,new THREE.MeshBasicMaterial({color:0xf4ffff}),s*3.55,1.36,8.53,.22,.3,.08);
    disc(details,dark,s*3.8,-1.1,9.15,.7,.5);ring(details,alloy,s*3.8,-1.1,9.45,.59,.12);disc(details,amber,s*3.8,-1.1,9.51,.43,.12);
    disc(details,amber,s*2.6,3.48,8.13,.22,.12);
  }
  // Open induction stacks on both sides of the central engine cover.
  box(body,dark,0,3.85,4.3,2.45,.72,4.2,.3);
  for(const s of [-1,1])for(let j=0;j<3;j++){
    const x=s*(1.8+j*.4),z=3+j*1.15;
    const base=mesh(engine,new THREE.CylinderGeometry(.57,.38,.7,20),alloy,x,4.03,z);base.rotation.z=s*-.2;
    disc(engine,dark,x,4.4,z,.43,.08,'y').rotation.x=0;
    ring(engine,alloy,x,4.48,z,.49,.08,'y');
  }
  // Bucket seat, segmented padding, belts, steering column and dashboard.
  box(cockpit,edge,0,2.75,-2,3.5,.65,4,.25);
  box(cockpit,seatMat,0,3.22,-1.95,2.85,.5,3.25,.2);
  const back=box(cockpit,seatMat,0,4.45,-3.2,2.8,2.7,.7,.27);back.rotation.x=-.14;
  box(cockpit,dark,0,5.85,-3.42,1.8,.6,.65,.2);
  for(const s of [-1,1]){box(cockpit,dark,s*1.42,3.7,-2.1,.35,1.3,3.1,.16);box(cockpit,trim,s*.65,4.5,-2.72,.25,2.15,.08,.03);}
  box(cockpit,alloy,0,3.55,-.7,.5,.27,.16,.05);
  box(cockpit,dark,0,3.9,.6,3.7,.85,.75,.2);
  for(const x of [-.7,.7]){disc(cockpit,alloy,x,4.02,.13,.32,.1);disc(cockpit,lamp,x,4.02,.04,.22,.04);}
  rod(cockpit,alloy,[0,2.3,.8],[0,4.25,-.2],.13);
  const steering=ring(cockpit,dark,0,4.45,-.4,1.02,.15);steering.rotation.x=-.35;
  for(let i=0;i<3;i++){const a=i*Math.PI*2/3;rod(cockpit,alloy,[0,4.45,-.4],[Math.sin(a)*.86,4.45+Math.cos(a)*.86,-.4],.07);}
  tube(cockpit,alloy,[[-2.15,2.6,-3.7],[-2.15,6.4,-3.7],[-1.6,7,-3.7],[1.6,7,-3.7],[2.15,6.4,-3.7],[2.15,2.6,-3.7]],.25);
  for(const s of [-1,1])rod(cockpit,edge,[s*2.1,5.9,-3.7],[s*3.3,3,-6.7],.16);
  // Rear engine block, exposed cooling fins, fans, tail lamps and twin exhausts.
  box(engine,dark,0,1.6,-5.9,4.8,3.1,3.7,.3);
  for(let j=0;j<7;j++)box(engine,alloy,0,.5+j*.33,-8.18,4.4,.11,.18,.02);
  for(const s of [-1,1]){
    disc(engine,edge,s*1.25,3.65,-5.9,1.08,.35,'y').rotation.x=0;ring(engine,alloy,s*1.25,3.88,-5.9,.89,.12,'y');
    for(let j=0;j<6;j++){const blade=box(engine,dark,s*1.25,3.9,-5.9,1.6,.1,.15,.01);blade.rotation.y=j*Math.PI/3;}
    tube(engine,alloy,[[s*2.1,.3,-5.7],[s*3,.1,-7],[s*2.8,.1,-8.5]],.38);
    ring(engine,dark,s*2.8,.1,-8.65,.38,.1);
    box(details,red,s*4.6,2.9,-8.3,1.5,.42,.24,.08);
    rod(details,dark,[s*5.2,3.8,-6.6],[s*5.4,8.4,-7.1],.07);
    ball(details,dark,s*5.4,8.4,-7.1,.14,.14,.14);
    const flameMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{tint:{value:new THREE.Color(0x43cfff)},time:{value:0},power:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform vec3 tint;void main(){float a=pow(1.-vUv.y,1.7);gl_FragColor=vec4(mix(tint,vec3(1.),pow(1.-vUv.y,4.)),a*.8);}`});
    const flame=mesh(model,new THREE.ConeGeometry(.43,1,12,3,true),flameMat,s*2.8,.1,-9);flame.rotation.x=-Math.PI/2;flame.userData.nozzleZ=-8.8;engines.push(flame);
  }
  // Four independent, steerable wheel assemblies. Tread blocks share one draw call per wheel.
  for(const s of [-1,1])for(const z of [-5.55,5.3]){
    const x=s*7.2,hub=new THREE.Group(),spin=new THREE.Group();hub.name=`${z>0?'Front':'Rear'} ${s>0?'left':'right'} wheel`;hub.position.set(x,0,z);hub.add(spin);model.add(hub);
    const tire=mesh(spin,new THREE.CylinderGeometry(3.05,3.05,2.8,40,1),rubber);tire.rotation.z=Math.PI/2;
    for(const face of [-1,1]){
      ring(spin,rubber,face*1.38,0,0,2.42,.55,'x');
      disc(spin,dark,face*1.57,0,0,1.94,.12,'x');ring(spin,alloy,face*1.65,0,0,1.94,.14,'x');ring(spin,paint,face*1.68,0,0,1.69,.14,'x');
      disc(spin,dark,face*1.73,0,0,.62,.19,'x');disc(spin,alloy,face*1.85,0,0,.32,.12,'x');
      for(let i=0;i<6;i++){const a=i*Math.PI/3;rod(spin,alloy,[face*1.73,Math.cos(a)*.53,Math.sin(a)*.53],[face*1.73,Math.cos(a+.19)*1.62,Math.sin(a+.19)*1.62],.15);}
    }
    const tread=new THREE.InstancedMesh(new THREE.BoxGeometry(.82,.19,.77),treadMat,72),pose=new THREE.Object3D();
    for(let i=0;i<24;i++)for(let j=0;j<3;j++){
      const a=(i+(j%2)*.5)/24*Math.PI*2;pose.position.set((j-1)*.91,Math.cos(a)*3.09,Math.sin(a)*3.09);pose.rotation.set(a,0,(j-1)*.16);pose.updateMatrix();tread.setMatrixAt(i*3+j,pose.matrix);
    }tread.castShadow=true;spin.add(tread);
    wheels.push({hub,tire:spin,front:z>0,baseY:0});
    for(const y of [-.8,.4]){rod(suspension,alloy,[s*3,y,z-1.2],[s*6.7,y,z],.15);rod(suspension,alloy,[s*3,y,z+1.2],[s*6.7,y,z],.15);}
    const a=new THREE.Vector3(s*4.8,2.9,z+(z>0?1.25:0)),b=new THREE.Vector3(s*6.2,-.15,z+(z>0?1.25:0));
    rod(suspension,alloy,a.toArray(),b.toArray(),.17);
    const axis=b.clone().sub(a),length=axis.length(),q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),axis.normalize());
    const spring=[];for(let i=0;i<=90;i++){const t=i/90,angle=t*Math.PI*14;spring.push(new THREE.Vector3(Math.cos(angle)*.37,t*length,Math.sin(angle)*.37).applyQuaternion(q).add(a).toArray());}tube(suspension,red,spring,.08);
  }
  // Fasteners use instancing and remain visible from the underside and rear.
  const bolts=new THREE.InstancedMesh(new THREE.CylinderGeometry(.10,.10,.12,6),alloy,24),pose=new THREE.Object3D();
  for(let i=0;i<24;i++){const s=i%2?1:-1;pose.position.set(s*(i<12?4.2:5.3),i<12?3.65:3.87,i<12?2.3+Math.floor(i/2)*.9:-3.2-Math.floor((i-12)/2)*.72);pose.updateMatrix();bolts.setMatrixAt(i,pose.matrix);}details.add(bolts);
  if(driver){
    const occupant=group('Race driver');ball(occupant,trim,0,4.35,-1.65,1,1.25,.8);ball(occupant,alloy,0,6.25,-1.4,1.22,1.25,1.2);ball(occupant,glass,0,6.32,-.44,1.03,.48,.4);
    for(const s of [-1,1])rod(occupant,dark,[s*.85,4.65,-1.1],[s*.74,4.35,-.1],.27);
  }
  model.userData={wheels,engines,parts,fx:{wheelX:7.2,wheelZ:-5.55,nozzleX:2.8,nozzleY:.1,nozzleZ:-9}};
  return model;
}
