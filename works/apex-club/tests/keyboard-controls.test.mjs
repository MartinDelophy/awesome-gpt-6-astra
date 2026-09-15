import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {DEFAULT_BINDINGS,createKeyboardState,assignBinding,loadBindings,formatKeys,resolveKey} from '../keyboard-controls.js';
import {stepHandling} from '../driving-model.js';
const source=readFileSync(new URL('../game.js',import.meta.url),'utf8');
test('holding accelerate before GO accelerates; release clears it; actions wait for GO',()=>{
 const keyboard=createKeyboardState(()=>DEFAULT_BINDINGS),keys=keyboard.keys,listeners={},actions=new Set(),race={phase:'countdown'};
 const context={keyboard,keys,actions,race,helpOpen:false,document:{querySelector:()=>({open:false,checked:false})},addEventListener:(t,f)=>listeners[t]=f};
 vm.runInNewContext(source.slice(source.indexOf("addEventListener('keydown', e =>"),source.indexOf("addEventListener('blur',()=>")),context);
 const event=code=>({code,repeat:false,preventDefault(){}});
 listeners.keydown(event('ArrowUp'));listeners.keydown(event('ControlLeft'));
 assert(keys.has('KeyW'));assert.equal(actions.size,0);listeners.keyup(event('ControlLeft'));
 race.phase='racing';
 const state={speed:0,heading:0,x:0,z:0,vx:0,vz:0,drift:{active:false}},kart={max:300,accel:100,turn:1};
 for(let i=0;i<60;i++)stepHandling(state,{throttle:keys.has('KeyW'),steer:0,brake:false},kart,1/60);
 assert(state.speed>90);assert(state.z>20);
 listeners.keydown(event('ArrowDown'));
 for(let i=0;i<15;i++)stepHandling(state,{throttle:keys.has('KeyW'),brake:keys.has('KeyS'),steer:0},kart,1/60);
 assert.equal(state.speed,0);
 listeners.keyup(event('ArrowUp'));listeners.keyup(event('ArrowDown'));assert.equal(keys.size,0);
 listeners.keydown(event('ControlLeft'));assert(actions.has('ShiftLeft'));
});

test('rebinding drives canonical actions and releases on the physical key',()=>{
 const bindings={...DEFAULT_BINDINGS,accelerate:'KeyI',left:'KeyJ',right:'KeyL',mini:'KeyF'};
 const input=createKeyboardState(()=>bindings);
 assert.equal(input.press({code:'KeyW'}),null);
 assert.equal(input.press({code:'KeyI'}).code,'KeyW');
 assert.equal(input.press({code:'KeyJ'}).code,'KeyA');
 assert.equal(input.press({code:'KeyL'}).code,'KeyD');
 assert.equal(input.press({code:'KeyF'}).code,'KeyE');
 input.release('KeyJ');assert(!input.keys.has('KeyA'));assert(input.keys.has('KeyW'));
 input.clear();assert.equal(input.keys.size,0);
 assert.equal(input.press({code:'KeyI',repeat:true}).fresh,false);assert.equal(input.keys.size,0);
 assert(input.press({code:'KeyI'}).fresh);
});
test('releasing an alternate key does not release a still held action',()=>{
 const input=createKeyboardState(()=>DEFAULT_BINDINGS);
 input.press({code:'KeyA'});input.press({code:'ArrowLeft'});input.release('KeyA');assert(input.keys.has('KeyA'));
 input.release('ArrowLeft');assert(!input.keys.has('KeyA'));
 assert(input.press({code:'ShiftLeft'}).fresh);assert.equal(input.press({code:'ShiftRight'}).fresh,false);
 input.release('ShiftLeft');assert(input.keys.has('Space'));input.release('ShiftRight');assert.equal(input.keys.size,0);
});
test('conflicts, reserved and browser shortcut keys are rejected',()=>{
 assert.equal(assignBinding(DEFAULT_BINDINGS,'mini','ArrowUp').conflict,'accelerate');
 assert.equal(assignBinding(DEFAULT_BINDINGS,'mini','ShiftRight').conflict,'drift');
 for(const code of ['Escape','Tab','MetaLeft','F5'])assert.equal(assignBinding(DEFAULT_BINDINGS,'mini',code).error,'unsupported');
 const input=createKeyboardState(()=>DEFAULT_BINDINGS);
 for(const modifier of ['metaKey','altKey'])assert.equal(input.press({code:'KeyR',[modifier]:true}),null);
 assert.equal(input.keys.size,0);assert.equal(resolveKey(DEFAULT_BINDINGS,'ArrowLeft'),'KeyA');
});
test('stored bindings validate atomically and default restoration is deterministic',()=>{
 const valid={...DEFAULT_BINDINGS,mini:'KeyF'};
 assert.deepEqual(loadBindings(JSON.stringify(valid)),valid);
 for(const raw of ['broken','null','{}',JSON.stringify({...valid,mini:'ArrowUp'}),JSON.stringify({...valid,left:99})])assert.deepEqual(loadBindings(raw),DEFAULT_BINDINGS);
 assert.deepEqual(loadBindings(JSON.stringify(DEFAULT_BINDINGS)),DEFAULT_BINDINGS);
});
test('hints substitute swapped keys simultaneously after translation',()=>{
 const bindings={...DEFAULT_BINDINGS,accelerate:'KeyE',mini:'KeyW',drift:'KeyF'};
 assert.equal(formatKeys('W → E · SPACE',bindings),'E → W · F');
 assert.equal(formatKeys('Release SPACE, then press E',bindings,()=> '松开空格，再按 E'),'松开F，再按 W');
 assert.equal(formatKeys('TEAM RACE',bindings),'TEAM RACE');
 assert.equal(formatKeys('SPEED KM/H',{...bindings,pause:'KeyP'}),'SPEED KM/H');
});

test('QQ-style layout keeps steering, drift, nitro and mini on separate hands',()=>{
 const input=createKeyboardState(()=>DEFAULT_BINDINGS);
 assert.equal(input.press({code:'ArrowUp'}).code,'KeyW');
 assert.equal(input.press({code:'ArrowRight'}).code,'KeyD');
 assert.equal(input.press({code:'ShiftLeft',shiftKey:true}).code,'Space');
 assert.equal(input.press({code:'ControlLeft',ctrlKey:true,shiftKey:true}).code,'ShiftLeft');
 input.release('ControlLeft');input.release('ShiftLeft');
 assert.equal(input.press({code:'KeyW'}).code,'KeyE');
 assert(input.keys.has('KeyW'));assert(input.keys.has('KeyD'));assert(!input.keys.has('Space'));
 assert.equal(resolveKey(DEFAULT_BINDINGS,'Space'),null);
});
