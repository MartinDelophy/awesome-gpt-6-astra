import * as THREE from 'three';

// Locally generated, seamless masonry: no remote texture dependency.
function masonry(){
 const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');
 let seed=71;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 ctx.fillStyle='#343833';ctx.fillRect(0,0,512,512);
 for(let row=0;row<8;row++)for(let col=-1;col<5;col++){
  const x=col*128+(row%2)*64,y=row*64,v=82+Math.floor(random()*25);
  ctx.fillStyle=`rgb(${v+5},${v+8},${v+4})`;ctx.fillRect(x+2,y+2,124,60);
  ctx.fillStyle='rgba(219,216,190,.25)';ctx.fillRect(x+3,y+3,122,2);
  ctx.fillStyle='rgba(10,18,15,.35)';ctx.fillRect(x+3,y+58,122,3);
 }
 for(let i=0;i<24000;i++){const v=random()>.5?200:15;ctx.fillStyle=`rgba(${v},${v},${v},.12)`;ctx.fillRect(random()*512,random()*512,1+random()*3,1);}
 const map=new THREE.CanvasTexture(c);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
 const bump=map.clone();bump.colorSpace=THREE.NoColorSpace;
 return {map,bump};
}
export function createGateBuilder(){
 const tex=masonry();
 const stone=new THREE.MeshStandardMaterial({map:tex.map,bumpMap:tex.bump,bumpScale:.24,roughness:.94});
 const trim=new THREE.MeshStandardMaterial({color:0xaaa38a,roughness:.86});
 const wood=new THREE.MeshStandardMaterial({color:0x54251e,roughness:.78});
 const dark=new THREE.MeshStandardMaterial({color:0x203132,roughness:.76});
 const tile=new THREE.MeshStandardMaterial({color:0x465953,roughness:.58,metalness:.08});
 const brass=new THREE.MeshStandardMaterial({color:0xb59a61,roughness:.42,metalness:.6});
 const box=(g,mat,x,y,z,w,h,d)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);g.add(m);return m;};
 function roof(g,width,depth,y){
  // Curved barrel tiles sit above a solid eave; silhouette stays readable in motion.
  box(g,dark,0,y,0,width*2,1.2,depth*2);
  for(const sign of [-1,1]){
   const vertices=[],indices=[];
   for(let i=0;i<=10;i++){const t=i/10,h=y+9*(1-t)**1.6+1.5*t**8;vertices.push(-width,h,sign*t*depth,width,h,sign*t*depth);}
   for(let i=0;i<10;i++){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
   const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();
   const mat=dark.clone();mat.side=THREE.DoubleSide;g.add(new THREE.Mesh(geo,mat));
  }
  for(const sign of [-1,1])for(let x=-width;x<=width;x+=1.6){
   const pts=[];for(let i=0;i<=10;i++){const t=i/10;pts.push(new THREE.Vector3(x,y+9*(1-t)**1.6+1.5*t**8,sign*t*depth));}
   const m=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),10,.48,5,false),tile);g.add(m);
  }
  box(g,brass,0,y+9,0,width*2+2,.7,.9);
  for(const sign of [-1,1]){box(g,wood,0,y-1,sign*depth,width*2,1.1,1);for(let x=-width+2;x<width;x+=5){box(g,brass,x,y-2,sign*(depth-1),1,2,3);}}
 }
 return function buildGate(parent){
  const gate=new THREE.Group();gate.name='Stone arch gatehouse';parent.add(gate);
  // 68-unit clear opening exceeds the 64-unit driveable corridor, including at the arch spring.
  const outline=new THREE.Shape();outline.moveTo(-46,-5);outline.lineTo(-34,-5);outline.lineTo(-34,14);
  outline.absarc(0,14,34,Math.PI,0,true);outline.lineTo(34,-5);outline.lineTo(46,-5);outline.lineTo(46,62);outline.lineTo(-46,62);outline.closePath();
  const geometry=new THREE.ExtrudeGeometry(outline,{depth:16,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.35,bevelThickness:.35,curveSegments:32});
  // Extrude UVs are world units; each repeat covers a 16 by 16 masonry patch.
  const uv=geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)/16,uv.getY(i)/16);
  const body=new THREE.Mesh(geometry,stone);body.position.z=-8;gate.add(body);
  for(const z of [-8.6,8.6]){
   for(let i=0;i<23;i++){
    const a=i*Math.PI/23+.012,b=(i+1)*Math.PI/23-.012,s=new THREE.Shape();
    s.moveTo(Math.cos(a)*34.5,14+Math.sin(a)*34.5);s.absarc(0,14,34.5,a,b,false);s.lineTo(Math.cos(b)*38,14+Math.sin(b)*38);s.absarc(0,14,38,b,a,true);s.closePath();
    const m=new THREE.Mesh(new THREE.ExtrudeGeometry(s,{depth:.8,bevelEnabled:true,bevelSize:.12,bevelThickness:.12,bevelSegments:1,steps:1}),trim);m.position.z=z;gate.add(m);
   }
   for(const x of [-36.2,36.2])for(let y=1;y<14;y+=3.3)box(gate,trim,x,y,z,3.3,3.1,1);
   box(gate,trim,0,60,z,94,2,2);
  }
  box(gate,trim,0,63,0,98,3,22);
  for(const x of [-35,-21,-7,7,21,35])for(const z of [-7,7]){
   box(gate,wood,x,73,z,1.8,18,1.8);box(gate,brass,x,65,z,2.5,1.2,2.5);
  }
  box(gate,wood,0,69,0,74,9,12);
  for(const z of [-6.2,6.2])for(let x=-33;x<=33;x+=3)box(gate,brass,x,70,z,.24,7,.3);
  roof(gate,43,14,81);roof(gate,30,10,93);
  for(const z of [-9.4,9.4]){
   box(gate,wood,0,55,z,18,5,1);box(gate,brass,0,57.5,z,18,.3,1.1);
   for(const x of [-5,0,5])box(gate,brass,x,55,z+Math.sign(z)*.6,1.4,2,.3);
  }
  return gate;
 };
}
