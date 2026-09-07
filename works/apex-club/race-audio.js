// Procedural engine/tyre/boost audio; starts only after an explicit race gesture.
export function createRaceAudio(){
  let context,master,engine,engineGain,tyre,tyreGain,boost,boostGain,enabled=true;
  function start(){
    if(context){context.resume().catch(()=>{});return;}
    try{
      context=new AudioContext();master=context.createGain();master.gain.value=enabled?.16:0;master.connect(context.destination);
      engine=context.createOscillator();engine.type='sawtooth';engineGain=context.createGain();engineGain.gain.value=0;
      const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=520;engine.connect(filter).connect(engineGain).connect(master);engine.start();
      const buffer=context.createBuffer(1,context.sampleRate*2,context.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
      tyre=context.createBufferSource();tyre.buffer=buffer;tyre.loop=true;const tyreFilter=context.createBiquadFilter();tyreFilter.type='bandpass';tyreFilter.frequency.value=1200;tyreFilter.Q.value=2;
      tyreGain=context.createGain();tyreGain.gain.value=0;tyre.connect(tyreFilter).connect(tyreGain).connect(master);tyre.start();
      boost=context.createBufferSource();boost.buffer=buffer;boost.loop=true;const boostFilter=context.createBiquadFilter();boostFilter.type='lowpass';boostFilter.frequency.value=650;
      boostGain=context.createGain();boostGain.gain.value=0;boost.connect(boostFilter).connect(boostGain).connect(master);boost.start();
    }catch{context=null;}
  }
  return {start,setEnabled(value){enabled=value;if(master)master.gain.setTargetAtTime(enabled?.16:0,context.currentTime,.08);},update(speed,drifting,boosting,active){
    if(!context||!engineGain)return;const t=context.currentTime;
    engine.frequency.setTargetAtTime(38+speed*120,t,.08);engineGain.gain.setTargetAtTime(active?.12+speed*.1:0,t,.1);
    tyreGain.gain.setTargetAtTime(active&&drifting?.34:0,t,.06);boostGain.gain.setTargetAtTime(active&&boosting?.65:0,t,.05);
  }};
}
