// All sound is synthesized locally after a user gesture; no audio files or requests.
export class Sound {
  constructor(enabled = true) { this.enabled = enabled; this.ctx = null; this.master = null; this.musicAt = 0; this.beat = 0; this.lastKill = 0; }
  async unlock() {
    try {
      if (!this.ctx) {
        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) return;
        this.ctx = new Audio(); this.master = this.ctx.createGain(); this.master.gain.value = this.enabled ? .32 : 0; this.master.connect(this.ctx.destination);
        this.noise = this.ctx.createBuffer(1, this.ctx.sampleRate * .5, this.ctx.sampleRate);
        const samples = this.noise.getChannelData(0);
        for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === 'suspended') await this.ctx.resume();
      this.musicAt = this.ctx.currentTime;
    } catch { /* Audio is optional, including browsers that block audio contexts. */ }
  }
  setEnabled(enabled) { this.enabled = enabled; if (this.master) this.master.gain.setTargetAtTime(enabled ? .32 : 0, this.ctx.currentTime, .03); }
  tone(freq, end, duration, volume = .1, type = 'triangle', delay = 0) {
    if (!this.ctx || !this.enabled || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime + delay, oscillator = this.ctx.createOscillator(), gain = this.ctx.createGain();
    oscillator.type = type; oscillator.frequency.setValueAtTime(Math.max(15, freq), now); oscillator.frequency.exponentialRampToValueAtTime(Math.max(15, end), now + duration);
    gain.gain.setValueAtTime(.0001, now); gain.gain.exponentialRampToValueAtTime(Math.max(.0002, volume), now + .006); gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    oscillator.connect(gain); gain.connect(this.master); oscillator.start(now); oscillator.stop(now + duration + .02);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  }
  hiss(duration, volume, cutoff = 1800) {
    if (!this.ctx || !this.enabled || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime, src = this.ctx.createBufferSource(), filter = this.ctx.createBiquadFilter(), gain = this.ctx.createGain();
    src.buffer = this.noise; filter.type = 'lowpass'; filter.frequency.value = cutoff;
    gain.gain.setValueAtTime(volume, now); gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    src.connect(filter); filter.connect(gain); gain.connect(this.master); src.start(now); src.stop(now + duration);
    src.onended = () => { src.disconnect(); filter.disconnect(); gain.disconnect(); };
  }
  event(type) {
    if (!this.ctx || !this.enabled) return;
    if (type === 'shot') this.tone(760, 300, .065, .028, 'triangle');
    if (type === 'kill' && this.ctx.currentTime - this.lastKill > .09) { this.lastKill = this.ctx.currentTime; this.hiss(.15, .12, 1900); this.tone(110, 35, .17, .12); }
    if (type === 'pickup') { [587, 740, 988].forEach((f, i) => this.tone(f, f, .11, .09, 'sine', i * .055)); }
    if (type === 'hit') { this.hiss(.2, .22); this.tone(190, 45, .28, .23, 'sawtooth'); }
    if (type === 'bomb' || type === 'bossDefeated') { this.hiss(.48, .35, 1000); this.tone(130, 22, .65, .4); }
    if (type === 'boss') { for (let i = 0; i < 3; i++) this.tone(440, 220, .3, .13, 'sawtooth', i * .42); }
    if (type === 'overdrive') { this.tone(150, 1400, .7, .18, 'sawtooth'); this.hiss(.22, .14, 4500); }
    if (type === 'clear' || type === 'victory') { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, f, .35, .13, 'triangle', i * .1)); }
    if (type === 'gameover') { [392, 330, 261, 196].forEach((f, i) => this.tone(f, f * .95, .4, .14, 'triangle', i * .18)); }
  }
  tick(playing, stage) {
    if (!this.ctx || !this.enabled || !playing || this.ctx.state !== 'running') { if (this.ctx) this.musicAt = this.ctx.currentTime; return; }
    const now = this.ctx.currentTime;
    if (now < this.musicAt) return;
    this.musicAt = now + 60 / (128 + stage * 3) / 2;
    const step = this.beat++ % 32, root = [55, 61.735, 65.406, 58.27, 73.416][stage] || 55;
    const notes = [0, 7, 12, 7, 3, 10, 15, 10, 5, 12, 17, 12, 3, 10, 15, 19];
    const f = root * 2 ** (notes[step % 16] / 12);
    this.tone(f * 4, f * 4, .14, .019, 'triangle');
    if (step % 4 === 0) { this.tone(115, 35, .15, .16, 'sine'); this.tone(f, f, .25, .055, 'triangle'); }
    if (step % 4 === 2) this.hiss(.065, .045, 3000);
    if (step % 2) this.hiss(.025, .016, 6500);
  }
}
