// Original synthesized score and driving audio; activated by a user gesture only.
export function createRaceAudio(){
 let context,master,engine,engineGain,tyreGain,boostGain,musicGain,promptGain,enabled=true,beat=0,nextBeat=0;
 const volumes={music:.25,engine:.65,prompt:.75};let engineBus;
 function tone(freq,time,duration,gain,bus,type='sine'){
  const o=context.createOscillator(),g=context.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(0,time);g.gain.linearRampToValueAtTime(gain,time+.015);g.gain.exponentialRampToValueAtTime(.001,time+duration);o.connect(g).connect(bus);o.start(time);o.stop(time+duration+.02);
 }
 function start(){
  if(context){context.resume().catch(()=>{});return;}
  try{
   context=new AudioContext();master=context.createGain();master.gain.value=enabled?.22:0;master.connect(context.destination);
   engineBus=context.createGain();engineBus.gain.value=volumes.engine;engineBus.connect(master);musicGain=context.createGain();musicGain.gain.value=volumes.music;musicGain.connect(master);promptGain=context.createGain();promptGain.gain.value=volumes.prompt;promptGain.connect(master);
   engine=context.createOscillator();engine.type='sawtooth';engineGain=context.createGain();engineGain.gain.value=0;const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=700;engine.connect(filter).connect(engineGain).connect(engineBus);engine.start();
   const buffer=context.createBuffer(1,context.sampleRate,context.sampleRate);const data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
   for(const type of ['tyre','boost']){const source=context.createBufferSource();source.buffer=buffer;source.loop=true;const f=context.createBiquadFilter();f.type=type==='tyre'?'bandpass':'lowpass';f.frequency.value=type==='tyre'?1600:650;const g=context.createGain();g.gain.value=0;source.connect(f).connect(g).connect(engineBus);source.start();if(type==='tyre')tyreGain=g;else boostGain=g;}
  }catch{context=null;}
 }
 return {start,setEnabled(v){enabled=v;if(master)master.gain.setTargetAtTime(v?.22:0,context.currentTime,.06);},setVolume(kind,value){volumes[kind]=Math.max(0,Math.min(1,value));const bus={music:musicGain,engine:engineBus,prompt:promptGain}[kind];if(bus)bus.gain.setTargetAtTime(volumes[kind],context.currentTime,.04);},cue(kind){if(!context)return;const notes={ready:[880,1320],mini:[660,990,1320],nitro:[220,440,880],hit:[120,90],complete:[523,659,784],end:[440,330]}[kind]||[660];notes.forEach((n,i)=>tone(n,context.currentTime+i*.07,.16,.22,promptGain));},update(speed,drifting,boosting,active,lap=1){
  if(!context||!engineGain)return;const t=context.currentTime;speed=Math.max(0,speed);
  const gear=Math.floor(speed*4);engine.frequency.setTargetAtTime(42+speed*160-gear*17,t,.09);engineGain.gain.setTargetAtTime(active?.12+speed*.1:0,t,.06);tyreGain.gain.setTargetAtTime(active?Math.min(1,Number(drifting))*.3:0,t,.06);boostGain.gain.setTargetAtTime(active&&boosting?.48:0,t,.05);
  if(active&&t>=nextBeat){const melody=[220,277.18,329.63,415.3,329.63,277.18,246.94,329.63];tone(melody[beat%8],t,.16,.10,musicGain,'triangle');if(beat%2===0)tone(110,t,.13,.12,musicGain);beat++;nextBeat=t+(lap===3?.23:.30);}if(!active)nextBeat=t;
 }};
}
