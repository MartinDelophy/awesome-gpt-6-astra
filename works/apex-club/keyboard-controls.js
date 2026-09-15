// Physical keyboard keys map to stable game actions; touch controls use those actions directly.
export const CANONICAL_ACTIONS=Object.freeze({accelerate:'KeyW',brake:'KeyS',left:'KeyA',right:'KeyD',drift:'Space',mini:'KeyE',nitro:'ShiftLeft',emp:'KeyQ',pause:'KeyH',restart:'KeyR'});
export const DEFAULT_BINDINGS=Object.freeze({accelerate:'ArrowUp',brake:'ArrowDown',left:'ArrowLeft',right:'ArrowRight',drift:'ShiftLeft',mini:'KeyW',nitro:'ControlLeft',emp:'KeyQ',pause:'KeyH',restart:'KeyR'});
export const ACTION_LABELS=Object.freeze({accelerate:'Accelerate',brake:'Brake / reverse',left:'Steer left',right:'Steer right',drift:'Drift',mini:'Mini boost',nitro:'Nitro',emp:'EMP',pause:'Pause / resume',restart:'Restart race'});
const aliases={KeyA:'left',KeyD:'right',KeyS:'brake'};
export const normalizeKey=code=>({ShiftRight:'ShiftLeft',ControlRight:'ControlLeft'})[code]||code;
export function keyLabel(code){return ({Space:'SPACE',ShiftLeft:'SHIFT',ShiftRight:'SHIFT',ControlLeft:'CTRL',ControlRight:'CTRL',ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→'})[code]||code.replace(/^(Key|Digit)/,'');}
export function supportedKey(code){return /^(Key[A-Z]|Digit[0-9]|Space|ShiftLeft|ControlLeft|ArrowUp|ArrowDown|ArrowLeft|ArrowRight)$/.test(normalizeKey(code));}
export function loadBindings(raw){
 try{const candidate=JSON.parse(raw);if(!candidate||typeof candidate!=='object')return {...DEFAULT_BINDINGS};
 const bindings={};for(const action of Object.keys(DEFAULT_BINDINGS)){const code=candidate[action];if(typeof code!=='string'||!supportedKey(code))return {...DEFAULT_BINDINGS};bindings[action]=normalizeKey(code);}
 if(new Set(Object.values(bindings)).size!==Object.keys(bindings).length)return {...DEFAULT_BINDINGS};return bindings;
 }catch{return {...DEFAULT_BINDINGS};}
}
export function assignBinding(bindings,action,code){
 if(!Object.hasOwn(DEFAULT_BINDINGS,action)||!supportedKey(code))return {error:'unsupported'};
 code=normalizeKey(code);const conflict=Object.keys(bindings).find(a=>a!==action&&bindings[a]===code);
 return conflict?{error:'conflict',conflict}:{bindings:{...bindings,[action]:code}};
}
export function resolveKey(bindings,code){
 const action=Object.keys(CANONICAL_ACTIONS).find(a=>bindings[a]===normalizeKey(code));
 if(action)return CANONICAL_ACTIONS[action];
 const alias=aliases[code];return alias&&bindings[alias]===DEFAULT_BINDINGS[alias]?CANONICAL_ACTIONS[alias]:null;
}
export function createKeyboardState(getBindings){
 const keys=new Set(),held=new Map();
 return {keys,clear(){held.clear();keys.clear();},release(code){const action=held.get(code);held.delete(code);if(action&&![...held.values()].includes(action))keys.delete(action);},
 press(event){if(event.metaKey||event.altKey)return null;
 // Ctrl is a racing key only when it is explicitly bound; never consume Command shortcuts.
 if(event.ctrlKey&&!Object.values(getBindings()).includes('ControlLeft'))return null;
 const action=resolveKey(getBindings(),event.code);if(!action)return null;
 if(held.has(event.code)||event.repeat)return {code:action,fresh:false};
 const fresh=!keys.has(action);held.set(event.code,action);keys.add(action);return {code:action,fresh};}};
}
// Translate the original instruction first, then substitute all bindings in one pass.
export function formatKeys(text,bindings,translate=s=>s){
 const tokens={W:'accelerate',S:'brake',A:'left',D:'right',SPACE:'drift',Space:'drift','空格':'drift',E:'mini',SHIFT:'nitro',Shift:'nitro',Q:'emp',H:'pause',R:'restart'};
 return translate(text).replace(/KM\/H/g,'km/h').replace(/\b(?:SPACE|Space|SHIFT|Shift|W|S|A|D|E|Q|H|R)\b|空格/g,token=>keyLabel(bindings[tokens[token]])).replace(/(↑|↓) \/ \1/g,'$1').replace(/← \/ → (?:or|或) ← \/ →/g,'← / →').replace(/km\/h/g,'KM/H');
}
