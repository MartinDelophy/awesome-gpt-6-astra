import {readFile,writeFile,mkdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import * as THREE from '../vendor/three/build/three.module.min.js';
const runtime=new URL('../vendor/three/build/three.module.min.js',import.meta.url).href;
async function localImport(relative){const source=(await readFile(new URL(relative,import.meta.url),'utf8')).replaceAll("from 'three'","from '"+runtime+"'");return import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));}
const {createArmoredKart}=await localImport('../armored-kart.js');
const {GLTFExporter}=await localImport('../vendor/three/examples/jsm/exporters/GLTFExporter.js');
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(result=>{this.result=result;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(result=>{this.result='data:application/octet-stream;base64,'+Buffer.from(result).toString('base64');this.onloadend?.();});}};
const car=createArmoredKart(0x29bfc5,{driver:false});
assert.equal(car.userData.wheels.length,4);
assert.equal(car.userData.wheels.filter(w=>w.front).length,2);
const remove=[],instances=[];
car.traverse(o=>{if(o.material?.isShaderMaterial)remove.push(o);if(o.isInstancedMesh)instances.push(o);});
for(const o of remove)o.removeFromParent();
for(const inst of instances){for(let i=0;i<inst.count;i++){const m=new THREE.Mesh(inst.geometry,inst.material);inst.getMatrixAt(i,m.matrix);m.matrix.decompose(m.position,m.quaternion,m.scale);m.applyMatrix4(inst.matrix);inst.parent.add(m);}inst.removeFromParent();}
car.traverse(o=>{o.userData={};if(o.geometry){const a=o.geometry.attributes.position.array;assert.ok(a.every(Number.isFinite),'geometry must be finite');}});
car.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(car),size=bounds.getSize(new THREE.Vector3());assert.ok(size.x>15&&size.z>18&&size.y>10);
const glb=await new GLTFExporter().parseAsync(car,{binary:true,onlyVisible:true,trs:true});
const bytes=Buffer.from(glb);assert.equal(bytes.toString('ascii',0,4),'glTF');assert.equal(bytes.readUInt32LE(4),2);assert.equal(bytes.readUInt32LE(8),bytes.length);
const jsonLength=bytes.readUInt32LE(12),doc=JSON.parse(bytes.toString('utf8',20,20+jsonLength));assert.ok(doc.meshes.length>20);assert.ok(doc.materials.length>5);
await mkdir(new URL('../output/',import.meta.url),{recursive:true});await writeFile(new URL('../output/titan-armored-buggy.glb',import.meta.url),bytes);
console.log(JSON.stringify({file:'output/titan-armored-buggy.glb',bytes:bytes.length,meshes:doc.meshes.length,materials:doc.materials.length,bounds:size.toArray()}));
