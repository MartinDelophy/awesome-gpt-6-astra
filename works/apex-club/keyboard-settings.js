import {DEFAULT_BINDINGS,ACTION_LABELS,keyLabel,assignBinding,formatKeys} from './keyboard-controls.js';
import {tr} from './localization.js';
export function mountKeyboardSettings({getBindings,setBindings}){
 const host=document.querySelector('#keyboardSettings'),grid=host.querySelector('.keybinding-grid'),status=host.querySelector('[role=status]');
 let pending=null;
 const buttons=new Map();
 // Capture only help text, before localization mutates it. Keep canonical action labels out of this pass.
 const copies=[];
 for(const root of document.querySelectorAll('#controlsPanel,#controlsToggle,#help,.telemetry,#driftMeter,.drift-tip,.settings-help,.race-settings')){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode()){const node=walker.currentNode;if(/\b(?:W|S|A|D|E|Q|H|R|SPACE|SHIFT|Shift)\b/.test(tr(node.nodeValue)))copies.push([node,node.nodeValue]);}
 }
 function refresh(){
  for(const [action,button]of buttons){const waiting=pending===action;button.textContent=waiting?tr('Press a key…'):keyLabel(getBindings()[action]);button.classList.toggle('listening',waiting);button.setAttribute('aria-pressed',String(waiting));button.setAttribute('aria-label',`${tr(ACTION_LABELS[action])}: ${button.textContent}`);}
  for(const [node,source]of copies)node.nodeValue=formatKeys(source,getBindings(),tr);
 }
 function cancel(message='Key change cancelled.'){if(!pending)return;pending=null;refresh();status.textContent=tr(message);}
 for(const [action,label]of Object.entries(ACTION_LABELS)){
  const row=document.createElement('div'),name=document.createElement('span'),button=document.createElement('button');
  name.textContent=tr(label);button.type='button';button.dataset.binding=action;row.append(name,button);grid.append(row);buttons.set(action,button);
  button.addEventListener('click',()=>{if(pending===action){cancel();return;}pending=action;refresh();status.textContent=tr('Press a letter, number, arrow, Space, Shift or Ctrl. Esc cancels.');});
  button.addEventListener('blur',()=>{if(pending===action)cancel();});
 }
 host.querySelector('[data-reset-keys]').addEventListener('click',()=>{pending=null;const saved=setBindings({...DEFAULT_BINDINGS});refresh();status.textContent=tr(saved?'Default keys restored.':'Keys changed for this session. Browser storage is unavailable.');});
 document.addEventListener('keydown',event=>{
  if(!pending)return;
  if(event.code==='Tab'){cancel();return;}
  event.preventDefault();event.stopImmediatePropagation();
  if(event.code==='Escape'){cancel();return;}
  if(event.repeat)return;
  const result=event.metaKey||event.altKey||(event.ctrlKey&&!['ControlLeft','ControlRight'].includes(event.code))?{error:'unsupported'}:assignBinding(getBindings(),pending,event.code);
  if(result.error){status.textContent=result.error==='conflict'?`${keyLabel(event.code)} · ${tr('Already assigned to')} ${tr(ACTION_LABELS[result.conflict])}. ${tr('Choose another key.')} `:tr('Use a letter, number, arrow, Space, Shift or Ctrl. Esc is reserved.');return;}
  const action=pending;pending=null;const saved=setBindings(result.bindings);refresh();status.textContent=saved?`${tr(ACTION_LABELS[action])} → ${keyLabel(result.bindings[action])} · ${tr('Saved')}`:tr('Keys changed for this session. Browser storage is unavailable.');
 },true);
 document.querySelector('#settingsDialog').addEventListener('close',()=>cancel());
 window.addEventListener('blur',()=>cancel());
 refresh();
 return refresh;
}
