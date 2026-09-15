import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from '../vendor/three/build/three.module.min.js';
import {circuitPoints,roadHalfWidth} from '../track-layout.js';
const source=readFileSync(new URL('../game.js',import.meta.url),'utf8');
function harness(){
 const nodes=new Map(),history=[],buttons=['bay','citadel'].map(name=>({dataset:{scene:name},classList:{toggle(){}},setAttribute(k,v){this[k]=v;}}));
 const scene=new THREE.Scene();scene.background=new THREE.Color();scene.fog=new THREE.FogExp2();
 const context=vm.createContext({THREE,circuitPoints,roadHalfWidth,URL,URLSearchParams,up:new THREE.Vector3(0,1,0),scene,world:new THREE.Group(),location:{search:'',href:'https://game.test/?test=retained',assign(){throw Error('Map selection must not reload the document');}},history:{pushState(_s,_t,url){history.push(url.href);}},
 document:{body:{dataset:{}},querySelectorAll(){return buttons;},querySelector(selector){if(!nodes.has(selector))nodes.set(selector,{setAttribute(k,v){this[k]=v;}});return nodes.get(selector);}},
 keyboard:{clear(){}},actions:new Set(),mobile:{clear(){}},ghost:new THREE.Group(),sea:new THREE.Group(),dir:{color:new THREE.Color()},ambientLight:{color:new THREE.Color()},race:null,launchElapsed:null,cameraReady:true});
 const geometry=source.slice(source.indexOf('let requestedScene='),source.indexOf('function createTrack()'));
 // Use real spline/physics samples and the production cache/switch functions. Builders are counted stand-ins for GPU assets.
 vm.runInContext(geometry+`
 let roadBuilds=0,decorBuilds=0,citadelBuilds=0,previews=0,records=0;
 let trackMat,bayTrackObjects,structureMat,bayDecor,citadel=null,selectedScene='bay';
 const pickups=[{t:.1,lane:12,m:new THREE.Object3D()}];
 function buildRoad(){roadBuilds++;trackMat={uniforms:{citadel:{value:0}}};structureMat={};const road=new THREE.Group(),rails=new THREE.Group();world.add(road,rails);bayTrackObjects=[rails];}
 function buildDecor(){decorBuilds++;const island=new THREE.Group(),sign=new THREE.Group();sign.userData.sharedTrack=true;scene.add(island,sign);bayDecor=[island];}
 function createCitadel(){citadelBuilds++;return new THREE.Group();}
 function updateScenePreview(){previews++;}function updateLobbyRecord(){records++;}
 buildRoad();buildDecor();
 `+source.slice(source.indexOf('const sceneCache='),source.indexOf("document.querySelectorAll('button[data-scene]').forEach(b=>b.addEventListener"))+`
 selectScene('bay');
 `,context);
 return {run:code=>vm.runInContext(code,context),nodes,history,buttons};
}
test('switching routes updates geometry, pickups, HUD and URL without navigation',()=>{
 const h=harness(),bay=h.run('roadSamples'),length=h.run('trackLength');
 h.run("selectScene('citadel')");
 assert.notEqual(h.run('roadSamples'),bay);assert.notEqual(h.run('trackLength'),length);
 assert.equal(h.run('selectedScene'),'citadel');assert.equal(h.run('trackMat.uniforms.citadel.value'),1);
 assert.equal(h.nodes.get('.track-title').textContent,'Jade Citadel');assert(h.nodes.get('#mapPath').points.length>100);
 assert.equal(h.history[0],'https://game.test/?test=retained&scene=citadel');
 assert(h.run('pickups[0].m.position.distanceTo(trackFrame(.1).p)>0'));
 assert.equal(h.run('cameraReady'),false);
});
test('repeated switches reuse two routes and hide inactive world and decoration',()=>{
 const h=harness(),bay=h.run('curve'),bayObjects=h.run('routeObjects');
 h.run("selectScene('citadel')");const ancient=h.run('citadel'),citadelRoad=h.run('routeObjects');
 assert(bayObjects.every(o=>!o.visible));assert.equal(ancient.visible,true);
 h.run("selectScene('bay')");assert.equal(h.run('curve'),bay);assert.equal(ancient.visible,false);assert(citadelRoad.every(o=>!o.visible));assert(bayObjects.every(o=>o.visible));
 for(let i=0;i<5;i++)h.run("selectScene('citadel');selectScene('bay')");
 assert.equal(h.run('roadBuilds'),2);assert.equal(h.run('decorBuilds'),2);assert.equal(h.run('citadelBuilds'),1);assert.equal(h.run('sceneCache.size'),2);
});
test('same-map clicks, browser history and race guards do not cause extra navigation',()=>{
 const h=harness();h.run("selectScene('bay');selectScene('citadel',{historyMode:'none'})");assert.equal(h.history.length,0);
 h.run("race={phase:'racing'};selectScene('bay')");assert.equal(h.run('selectedScene'),'citadel');
 h.run("race=null;launchElapsed=.2;selectScene('bay')");assert.equal(h.run('selectedScene'),'citadel');
});
