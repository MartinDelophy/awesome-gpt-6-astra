import { WIDTH, HEIGHT, SHIPS, WEAPONS, STAGES, UPGRADES, STAGE_SECONDS, BOSS_AT, DROP_TTL } from './data.js';

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const TAU = Math.PI * 2;
const dist2 = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
export function segmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const t = clamp(((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy || 1), 0, 1);
  return Math.hypot(px - x1 - t * dx, py - y1 - t * dy);
}
export function seededRandom(seed) {
  let state = seed >>> 0;
  return () => { state += 0x6D2B79F5; let t = state; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function chooseWeapon(random) {
  let value = random();
  for (const [id, weapon] of Object.entries(WEAPONS)) { value -= weapon.weight; if (value < 0) return id; }
  return 'nova';
}

export class Game {
  constructor(seed = Date.now()) { this.seed = seed; this.rng = seededRandom(seed); this.reset(); }
  reset() {
    this.mode = 'hangar'; this.time = 0; this.stageIndex = 0; this.stageTime = 0; this.bossDefeatedAt = null;
    this.score = 0; this.kills = 0; this.grazes = 0; this.combo = 0; this.comboTimer = 0;
    this.continues = 0; this.stageKills = 0; this.bossKills = 0; this.noDropKills = 0;
    this.upgrades = { damage: 0, fireRate: 0, hull: 0, shield: 0, magnet: 0, wingmen: 0, reactor: 0 };
    this.enemies = []; this.bullets = []; this.shots = []; this.beams = []; this.drops = []; this.effects = []; this.events = [];
    this.shake = 0; this.flash = 0; this.id = 0; this.practice = false; this.choices = [];
    this.player = { x: WIDTH / 2, y: HEIGHT - 135, shipId: 0, health: 5, maxHealth: 5, shield: 2, maxShield: 2, invulnerable: 0, weapon: 'pulse', weaponLevel: 1, bank: 0, overdrive: 20, overdriveTime: 0, bombs: 2, levels: { pulse: 1, laser: 0, arc: 0, nova: 0 } };
  }
  emit(type, details = {}) { if (this.events.length < 160) this.events.push({ type, ...details }); }
  drainEvents() { return this.events.splice(0); }
  start({ shipId = 0, difficulty = 'normal', practiceStage = null } = {}) {
    this.reset(); this.rng = seededRandom(this.seed);
    const ship = SHIPS[shipId] || SHIPS[0];
    this.difficulty = difficulty === 'arcade' ? 'arcade' : 'normal';
    this.danger = this.difficulty === 'arcade' ? 1.23 : 1;
    this.player = { ...this.player, shipId: ship.id, health: ship.health, maxHealth: ship.health, shield: ship.shield, maxShield: ship.shield, bombs: ship.bombStock };
    if (ship.id === 1) { this.player.weapon = 'laser'; this.player.levels.laser = 1; }
    this.practice = Number.isInteger(practiceStage) && practiceStage >= 0 && practiceStage < STAGES.length;
    this.mode = 'playing'; this.enterStage(this.practice ? practiceStage : 0);
  }
  enterStage(index) {
    this.stageIndex = index; this.stageTime = 0; this.nextWave = 1.8; this.waveIndex = 0; this.bossSpawned = false; this.bossDefeated = false; this.bossDefeatedAt = null; this.stageKills = 0;
    this.enemies = []; this.bullets = []; this.shots = []; this.beams = []; this.drops = []; this.effects = [];
    this.player.x = WIDTH / 2; this.player.y = HEIGHT - 135; this.player.invulnerable = 2;
    this.player.overdriveTime = 0; this.fireTimer = 0; this.missileTimer = 0; this.sinceHit = 0;
    this.player.shield = this.player.maxShield;
    this.emit('stage', { index });
  }
  pause() { if (this.mode === 'playing') { this.mode = 'paused'; this.emit('pause'); } }
  resume() { if (this.mode === 'paused') { this.mode = 'playing'; this.emit('resume'); } }
  continueRun() {
    if (this.mode !== 'gameover' || this.continues >= 3) return false;
    this.continues++; this.score = Math.floor(this.score * .65); this.combo = 0;
    this.player.health = this.player.maxHealth; this.player.bombs = Math.max(2, this.player.bombs);
    this.player.overdrive = 50; this.mode = 'playing'; this.enterStage(this.stageIndex); return true;
  }
  selectUpgrade(id) {
    if (this.mode !== 'upgrade' || !this.choices.some(c => c.id === id)) return false;
    const p = this.player;
    if (id === 'bomb') p.bombs = Math.min(5, p.bombs + 2);
    else this.upgrades[id]++;
    if (id === 'hull') { p.maxHealth++; p.health = Math.min(p.maxHealth, p.health + 2); }
    if (id === 'shield') { p.maxShield++; p.shield = p.maxShield; }
    p.health = Math.min(p.maxHealth, p.health + 2); p.bombs = Math.min(5, p.bombs + 1);
    this.mode = 'playing'; this.enterStage(this.stageIndex + 1); return true;
  }
  makeChoices() {
    const options = UPGRADES.filter(u => u.id !== 'wingmen' || this.upgrades.wingmen < 2);
    for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(this.rng() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
    this.choices = options.slice(0, 3);
  }
  fx(type, x, y, color = '#ffe0a0', size = 20, text = '') {
    if (this.effects.length >= 180) this.effects.shift();
    this.effects.push({ type, x, y, age: 0, ttl: type === 'text' ? 1.25 : type === 'explosion' ? .7 : .4, color, size, text });
  }
  addCharge(n) { this.player.overdrive = Math.min(100, this.player.overdrive + n * (1 + this.upgrades.reactor * .3)); }
  bomb() {
    const p = this.player;
    if (this.mode !== 'playing' || !p.bombs) return false;
    p.bombs--; p.invulnerable = Math.max(p.invulnerable, 2.2); this.bullets.length = 0; this.beams.length = 0;
    for (const enemy of [...this.enemies]) this.damageEnemy(enemy, enemy.type === 'boss' ? 480 : 800);
    this.fx('ring', p.x, p.y, '#bbf5ff', 680); this.shake = 10; this.flash = .6; this.emit('bomb'); return true;
  }
  overdrive() {
    const p = this.player;
    if (this.mode !== 'playing' || p.overdrive < 100 || p.overdriveTime > 0) return false;
    p.overdrive = 0; p.overdriveTime = 8; p.invulnerable = Math.max(p.invulnerable, 1);
    this.bullets.length = 0; this.beams.length = 0; this.fx('ring', p.x, p.y, '#f8ca6a', 280); this.emit('overdrive'); return true;
  }
  update(dt, input = {}) {
    if (this.mode !== 'playing' || !Number.isFinite(dt) || dt <= 0) return;
    // Substeps retain swept collisions and stable patterns on slow/mobile frames.
    let remaining = Math.min(dt, .12);
    while (remaining > 1e-8 && this.mode === 'playing') { const h = Math.min(remaining, 1 / 60); this.step(h, input); remaining -= h; }
  }
  step(dt, input) {
    this.time += dt; this.stageTime += dt; this.sinceHit += dt;
    this.comboTimer -= dt; if (this.comboTimer <= 0) this.combo = 0;
    this.shake = Math.max(0, this.shake - dt * 24); this.flash = Math.max(0, this.flash - dt * 2);
    const p = this.player, ship = SHIPS[p.shipId];
    p.invulnerable = Math.max(0, p.invulnerable - dt); p.overdriveTime = Math.max(0, p.overdriveTime - dt);
    if (this.sinceHit >= 13 && p.shield < p.maxShield) { p.shield++; this.sinceHit = 6; this.fx('ring', p.x, p.y, '#80ddff', 40); }
    let dx = Number(input.dx) || 0, dy = Number(input.dy) || 0;
    if (input.pointer && Number.isFinite(input.targetX) && Number.isFinite(input.targetY)) { dx = input.targetX - p.x; dy = input.targetY - p.y; }
    const length = Math.hypot(dx, dy), maxMove = ship.speed * (input.slow ? .48 : 1) * dt;
    const move = input.pointer ? Math.min(length, maxMove * 1.45) : length > 0 ? maxMove : 0;
    const deltaX = length ? dx / length * move : 0;
    p.x = clamp(p.x + deltaX, 18, WIDTH - 18); p.y = clamp(p.y + (length ? dy / length * move : 0), 88, HEIGHT - 35);
    p.bank += (clamp(deltaX / (dt * 350), -1, 1) - p.bank) * Math.min(1, dt * 12);
    this.fireTimer -= dt; this.missileTimer -= dt;
    if (this.fireTimer <= 0) this.firePlayer();
    if (this.missileTimer <= 0 && this.upgrades.wingmen) { this.missileTimer = .42; for (let i = 0; i < this.upgrades.wingmen; i++) this.addShot(p.x + (i ? 1 : -1) * 26, p.y, -Math.PI / 2, 'missile', 18, 380, 5, { homing: 5 }); }
    if (!this.bossSpawned && this.stageTime >= BOSS_AT) this.spawnBoss();
    if (this.stageTime >= this.nextWave && (!this.bossSpawned || this.bossDefeated)) { this.spawnWave(); this.nextWave = this.stageTime + (this.bossDefeated ? 3.4 : 3.8 - this.stageIndex * .24); }
    this.updateEnemies(dt); this.updateShots(dt); this.updateBullets(dt); this.updateBeams(dt); this.updateDrops(dt);
    this.effects.forEach(e => { e.age += dt; if (e.type === 'text') e.y -= dt * 20; });
    this.effects = this.effects.filter(e => e.age < e.ttl);
    this.enemies = this.enemies.filter(e => !e.dead && e.y < HEIGHT + 90 && e.x > -160 && e.x < WIDTH + 160);
    // Late boss kills still grant a full active-time window to collect their drops.
    if (this.mode === 'playing' && this.bossDefeated && this.stageTime >= Math.max(STAGE_SECONDS, this.bossDefeatedAt + DROP_TTL)) this.completeStage();
  }
  addShot(x, y, angle, type, damage, speed = 660, r = 4, extra = {}) {
    if (this.shots.length >= 320) return;
    const p = this.player;
    this.shots.push({ x, y, prevX: x, prevY: y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, r, age: 0, type, color: WEAPONS[type]?.color || '#e2edff', damage: damage * SHIPS[p.shipId].damage * (1 + this.upgrades.damage * .15) * (p.overdriveTime ? 1.65 : 1), hit: new Set(), ...extra });
  }
  firePlayer() {
    const p = this.player, lv = p.weaponLevel;
    this.fireTimer += .145 / (SHIPS[p.shipId].fireRate * (1 + this.upgrades.fireRate * .12) * (p.overdriveTime ? 1.4 : 1));
    const n = 3 + 2 * Math.floor((lv - 1) / 2);
    if (p.weapon === 'pulse') {
      for (let i = 0; i < n; i++) this.addShot(p.x, p.y - 25, -Math.PI / 2 + (i - (n - 1) / 2) * .095, 'pulse', 9 + lv * 1.5);
    } else if (p.weapon === 'laser') {
      const count = lv >= 3 ? 2 : 1;
      for (let i = 0; i < count; i++) this.addShot(p.x + (count === 2 ? (i ? 7 : -7) : 0), p.y - 24, -Math.PI / 2, 'laser', 26 + lv * 3, 1000, 5, { pierce: 4 });
    } else if (p.weapon === 'arc') {
      for (const sign of [-1, 1]) this.addShot(p.x + sign * 14, p.y - 18, -Math.PI / 2 + sign * .24, 'arc', 13 + lv * 2, 510, 5, { homing: 4.8 });
      if (lv >= 3) this.addShot(p.x, p.y - 25, -Math.PI / 2, 'arc', 13 + lv * 2, 560, 5, { homing: 4 });
    } else {
      this.addShot(p.x, p.y - 24, -Math.PI / 2, 'nova', 38 + lv * 5, 600, 8, { blast: 48 + lv * 4 });
      for (const sign of [-1, 1]) this.addShot(p.x, p.y - 22, -Math.PI / 2 + sign * .15, 'pulse', 10 + lv * 2);
    }
    if (Math.floor(this.time * 5) !== this.lastShotSound) { this.lastShotSound = Math.floor(this.time * 5); this.emit('shot', { weapon: p.weapon }); }
  }
  spawnEnemy(type, x, y = -35, extra = {}) {
    if (this.enemies.length >= 65) return null;
    const specs = { scout: [28, 16, 43, 85], interceptor: [38, 18, 48, 150], gunship: [125, 29, 73, 43], laser: [165, 26, 70, 37], carrier: [240, 31, 86, 35], mine: [42, 15, 38, 65] };
    const [hp, r, w, speed] = specs[type] || specs.scout;
    const e = { id: ++this.id, type, x, baseX: x, y, age: 0, hp: hp * (1 + this.stageIndex * .17), maxHp: hp * (1 + this.stageIndex * .17), r, w, h: w * .8, speed, fire: .9 + this.rng() * .7, flash: 0, angle: 0, stage: this.stageIndex, phase: 1, seed: this.rng() * TAU, ...extra };
    this.enemies.push(e); return e;
  }
  spawnWave() {
    const s = this.stageIndex, wave = this.waveIndex++, kind = wave % 8;
    if (this.bossDefeated) {
      for (let i = 0; i < 4; i++) this.spawnEnemy(wave % 3 === 1 ? 'interceptor' : 'scout', 75 + i * 105, -40 - i * 28, { side: i % 2 ? -1 : 1, path: 'sine' });
      if (wave % 3 === 0) this.spawnEnemy('carrier', 240, -100);
      return;
    }
    if (kind === 0 || kind === 3) {
      for (let i = 0; i < 5; i++) this.spawnEnemy('scout', 60 + i * 90, -35 - Math.abs(2 - i) * 30, { path: 'sine' });
    } else if (kind === 1 || kind === 5) {
      const side = Math.floor(wave / 4) % 2 ? -1 : 1;
      for (let i = 0; i < 3 + (s > 1 ? 1 : 0); i++) this.spawnEnemy('interceptor', side > 0 ? 60 : 420, -40 - i * 72, { side });
    } else if (kind === 2) {
      this.spawnEnemy('gunship', 120); this.spawnEnemy(s ? 'laser' : 'gunship', 360, -95);
    } else if (kind === 4) {
      this.spawnEnemy('carrier', WIDTH / 2); for (const x of [90, 390]) this.spawnEnemy('scout', x, -70);
    } else if (kind === 6) {
      this.spawnEnemy('laser', s % 2 ? 100 : 380); this.spawnEnemy('gunship', s % 2 ? 380 : 100, -85);
    } else {
      for (let i = 0; i < 4; i++) this.spawnEnemy(s >= 2 ? 'mine' : 'scout', 70 + i * 110, -40 - i * 40);
      if (s >= 3) this.spawnEnemy('carrier', 240, -180);
    }
  }
  spawnBoss() {
    this.bossSpawned = true; this.bullets.length = 0; this.beams.length = 0;
    this.enemies = this.enemies.filter(e => e.type === 'carrier');
    const stage = STAGES[this.stageIndex], hp = stage.bossHp * (this.difficulty === 'arcade' ? 1.15 : 1);
    this.enemies.push({ id: ++this.id, type: 'boss', x: WIDTH / 2, y: -140, baseX: WIDTH / 2, w: 172, h: 125, r: 64, age: 0, hp, maxHp: hp, fire: 2.2, laserTimer: 4, pattern: 0, phase: 1, transition: 0, stage: this.stageIndex, flash: 0, angle: 0 });
    this.emit('boss', { name: stage.bossName });
  }
  bullet(x, y, angle, speed = 145, type = 'aim', extra = {}) {
    if (this.bullets.length >= 720) return;
    this.bullets.push({ x, y, prevX: x, prevY: y, angle, speed: speed * this.danger, vx: Math.cos(angle) * speed * this.danger, vy: Math.sin(angle) * speed * this.danger, r: type === 'mine' ? 8 : 4.5, age: 0, type, color: type === 'drift' || type === 'spiral' ? '#ff9eaf' : '#ffbd7c', turn: 0, life: 8, ...extra });
  }
  fan(x, y, angle, count, spread, speed, type = 'aim', extra = {}) { for (let i = 0; i < count; i++) this.bullet(x, y, angle + (i - (count - 1) / 2) * spread, speed, type, extra); }
  laser(x, y, angle, extra = {}) {
    if (this.beams.length >= 14) return;
    this.beams.push({ x, y, angle, length: 1000, width: 14, age: 0, warn: 1.05, duration: .7, color: '#ff676f', owner: 'enemy', ...extra });
  }
  updateEnemies(dt) {
    for (const e of this.enemies) {
      if (e.dead) continue;
      e.age += dt; e.flash = Math.max(0, e.flash - dt); e.fire -= dt;
      if (e.type === 'boss') {
        e.y += (155 - e.y) * Math.min(1, dt * 1.6);
        e.x = WIDTH / 2 + Math.sin(e.age * (.65 + e.stage * .07)) * (e.stage === 4 ? 65 : 100);
        e.transition = Math.max(0, e.transition - dt);
        if (e.age > 2 && e.transition <= 0 && e.fire <= 0) { this.bossPattern(e); e.fire = (1.3 - e.phase * .13) / this.danger; }
        e.laserTimer -= dt;
        if (e.age > 2 && e.transition <= 0 && e.laserTimer <= 0) { this.bossLasers(e); e.laserTimer = Math.max(3.5, 6.8 - e.phase * .65 - e.stage * .25); }
      } else {
        e.y += e.speed * dt;
        if (e.type === 'scout' && e.path === 'sine') e.x = e.baseX + Math.sin(e.age * 1.8 + e.seed) * 26;
        if (e.type === 'interceptor') { e.x += (e.side || 1) * 65 * dt; e.angle = -(e.side || 1) * .22; }
        if (e.type === 'carrier') e.x = e.baseX + Math.sin(e.age) * 65;
        if (e.fire <= 0 && e.y > 25 && e.y < HEIGHT - 170) {
          const a = Math.atan2(this.player.y - e.y, this.player.x - e.x);
          if (e.type === 'laser') { this.laser(e.x, e.y + 20, a, { width: 11, warn: 1.1, duration: .55 }); e.fire = 3.8; }
          else if (e.type === 'gunship') { this.fan(e.x, e.y + 22, a, 3 + 2 * (e.stage > 1), .19, 125 + e.stage * 10, e.stage ? 'drift' : 'aim', { turn: e.stage ? Math.sin(e.seed) * .22 : 0 }); e.fire = 1.65; }
          else if (e.type === 'carrier') { this.fan(e.x, e.y + 28, Math.PI / 2, 6, .32, 115, 'drift', { turn: Math.sin(e.age) * .28 }); e.fire = 2; }
          else if (e.type === 'mine') { this.fan(e.x, e.y, Math.PI / 2, 8, TAU / 8, 100, 'spiral', { turn: .32 }); e.fire = 6; }
          else { this.fan(e.x, e.y + 15, a, e.stage > 2 ? 2 : 1, .15, 130 + e.stage * 12); e.fire = e.type === 'interceptor' ? 1.8 : 2.7; }
        }
      }
      if (this.mode === 'playing' && dist2(e, this.player) < (e.r * .65 + 5) ** 2) this.hitPlayer();
    }
  }
  bossPattern(e) {
    const a = Math.atan2(this.player.y - e.y, this.player.x - e.x), turn = (e.pattern++ % 2 ? -1 : 1);
    const phase = e.phase, s = e.stage;
    if (s === 0) {
      for (const side of [-1, 1]) this.fan(e.x + side * 48, e.y + 34, a + side * .08, 3 + phase * 2, .13, 120 + phase * 16);
    } else if (s === 1) {
      this.fan(e.x, e.y + 30, Math.PI / 2 + Math.sin(e.age) * .4, 8 + phase * 2, .23, 130, 'drift', { turn: turn * .36 });
      if (phase > 1) this.fan(e.x, e.y + 25, a, 3, .14, 205, 'fast');
    } else if (s === 2) {
      const count = 18 + phase * 2, gap = Math.atan2(this.player.y - e.y, this.player.x - e.x) + turn * .2;
      for (let i = 0; i < count; i++) { const angle = i * TAU / count + e.age * .12; if (Math.abs(Math.atan2(Math.sin(angle - gap), Math.cos(angle - gap))) > .23) this.bullet(e.x, e.y, angle, 110 + phase * 12, 'spiral', { turn: turn * .14 }); }
    } else if (s === 3) {
      this.fan(e.x, e.y + 35, a, 9 + phase * 2, .17, 92, 'drift', { turn: turn * .23, accel: 23 });
      if (phase > 1) for (const side of [-1, 1]) this.bullet(e.x + side * 56, e.y + 15, Math.PI / 2 + side * .3, 80, 'mine', { life: 2.1, split: true });
    } else {
      const count = 16 + phase * 4;
      for (let i = 0; i < count; i++) this.bullet(e.x, e.y, e.age * .5 + i * TAU / count, 115 + phase * 10, 'spiral', { turn: turn * .27 });
      if (e.pattern % 2 === 0) this.fan(e.x, e.y + 30, a, 5, .11, 210, 'fast');
    }
  }
  bossLasers(e) {
    const a = Math.atan2(this.player.y - e.y, this.player.x - e.x);
    if (e.stage === 0) this.laser(e.x, e.y + 35, a, { width: 18, warn: 1.2, duration: .8 });
    else if (e.stage === 1) for (const side of [-1, 1]) this.laser(e.x + side * 55, e.y + 15, a + side * .28, { width: 13, warn: 1.2 });
    else if (e.stage === 2) for (const x of [65, 240, 415]) this.laser(x, 0, Math.PI / 2, { width: 20, warn: 1.4, duration: 1 });
    else if (e.stage === 3) for (const side of [-1, 1]) this.laser(e.x + side * 60, e.y + 30, Math.PI / 2 + side * .42, { width: 16, warn: 1.3, duration: 1.1, sweep: -side * .18 });
    else for (const side of [-1, 0, 1]) this.laser(e.x + side * 55, e.y + 30, a + side * .42, { width: 17, warn: 1.35, duration: .85 });
  }
  damageEnemy(e, damage) {
    if (e.dead) return;
    if (e.type === 'boss' && (e.age < 2 || e.transition > 0)) return;
    e.hp -= damage; e.flash = .065;
    // Phase barriers stop a single burst from skipping the flagship's mechanics.
    if (e.type === 'boss' && e.phase < 3) {
      const threshold = e.maxHp * (e.phase === 1 ? .65 : .3);
      if (e.hp <= threshold) {
        e.hp = threshold; e.phase++; e.transition = 1.15; e.fire = .25; e.laserTimer = .7;
        this.bullets.length = 0; this.beams.length = 0;
        this.fx('ring', e.x, e.y, '#c5b5ff', 130); this.emit('bossPhase', { phase: e.phase });
      }
    }
    if (e.hp > 0) return;
    e.dead = true; this.kills++; this.stageKills++; this.combo++; this.comboTimer = 3.6;
    const multiplier = Math.min(5, 1 + Math.floor(this.combo / 8));
    const value = (e.type === 'boss' ? 12000 : e.type === 'carrier' ? 600 : e.type === 'scout' ? 100 : 250) * multiplier;
    this.score += value; this.addCharge(e.type === 'boss' ? 35 : e.type === 'scout' ? 1.8 : 4);
    this.fx('explosion', e.x, e.y, e.type === 'boss' ? '#ffe0a5' : '#ffb679', e.type === 'boss' ? 140 : e.r * 1.6);
    if (e.type !== 'scout' || this.combo % 5 === 0) this.fx('text', e.x, e.y, '#e4efff', 14, `+${value}`);
    if (e.type === 'boss') {
      this.bossDefeated = true; this.bossDefeatedAt = this.stageTime; this.bossKills++; this.bullets.length = 0; this.beams.length = 0;
      this.shake = 14; this.flash = .7;
      this.spawnDrop(e.x - 45, e.y, 'weapon', this.stageIndex >= 2 ? 'nova' : 'arc');
      this.spawnDrop(e.x + 45, e.y, 'repair'); this.spawnDrop(e.x, e.y + 50, 'bomb');
      this.emit('bossDefeated');
    } else {
      this.noDropKills++;
      if (e.type === 'carrier' || this.rng() < .19 || this.noDropKills >= 13) { this.spawnDrop(e.x, e.y, 'weapon'); this.noDropKills = 0; }
      else if (this.rng() < .04) this.spawnDrop(e.x, e.y, this.rng() < .6 ? 'shield' : 'repair');
      this.emit('kill');
    }
  }
  updateShots(dt) {
    for (const shot of this.shots) {
      shot.age += dt; shot.prevX = shot.x; shot.prevY = shot.y;
      if (shot.homing) {
        let target = null, nearest = Infinity;
        for (const e of this.enemies) { const d = dist2(shot, e); if (!e.dead && e.y > 0 && d < nearest) { nearest = d; target = e; } }
        if (target) { const speed = Math.hypot(shot.vx, shot.vy), angle = Math.atan2(shot.vy, shot.vx), desired = Math.atan2(target.y - shot.y, target.x - shot.x); const delta = Math.atan2(Math.sin(desired - angle), Math.cos(desired - angle)); const next = angle + clamp(delta, -shot.homing * dt, shot.homing * dt); shot.vx = Math.cos(next) * speed; shot.vy = Math.sin(next) * speed; }
      }
      shot.x += shot.vx * dt; shot.y += shot.vy * dt;
      for (const enemy of this.enemies) {
        if (enemy.dead || shot.dead || shot.hit.has(enemy.id)) continue;
        if (segmentDistance(enemy.x, enemy.y, shot.prevX, shot.prevY, shot.x, shot.y) < enemy.r + shot.r) {
          shot.hit.add(enemy.id); this.damageEnemy(enemy, shot.damage);
          if (shot.blast) { this.fx('ring', shot.x, shot.y, '#ffd478', shot.blast); for (const other of this.enemies) if (other !== enemy && !other.dead && dist2(shot, other) < (shot.blast + other.r) ** 2) this.damageEnemy(other, shot.damage * .5); }
          if (!shot.pierce || shot.hit.size >= shot.pierce) shot.dead = true;
        }
      }
    }
    this.shots = this.shots.filter(s => !s.dead && s.age < 4 && s.y > -50 && s.y < HEIGHT + 50 && s.x > -60 && s.x < WIDTH + 60);
  }
  hitPlayer() {
    const p = this.player;
    if (p.invulnerable > 0 || this.mode !== 'playing') return;
    if (this.difficulty === 'normal' && p.shield === 0 && p.health <= 1 && p.bombs > 0) { this.bomb(); this.emit('autobomb'); return; }
    if (p.shield > 0) p.shield--; else p.health--;
    p.invulnerable = 2.1; this.sinceHit = 0; this.combo = 0; this.shake = 6;
    this.fx('ring', p.x, p.y, '#ffb09c', 65); this.emit('hit');
    if (p.health <= 0) { this.mode = 'gameover'; this.emit('gameover'); }
  }
  updateBullets(dt) {
    const pending = [];
    for (const b of this.bullets) {
      b.prevX = b.x; b.prevY = b.y; b.age += dt;
      b.angle += b.turn * dt; b.speed += (b.accel || 0) * dt;
      b.vx = Math.cos(b.angle) * b.speed; b.vy = Math.sin(b.angle) * b.speed; b.x += b.vx * dt; b.y += b.vy * dt;
      const d = segmentDistance(this.player.x, this.player.y, b.prevX, b.prevY, b.x, b.y);
      if (d < 5 + b.r) { this.hitPlayer(); b.dead = true; }
      else if (d < 23 + b.r && !b.grazed && this.player.invulnerable <= 0) { b.grazed = true; this.grazes++; this.score += 25; this.addCharge(1.4); if (this.grazes % 4 === 0) this.fx('text', this.player.x, this.player.y - 25, '#a6ffdf', 12, 'GRAZE +25'); }
      if (b.split && b.age >= b.life) { b.dead = true; pending.push(b); }
    }
    this.bullets = this.bullets.filter(b => !b.dead && b.age < b.life && b.x > -100 && b.x < WIDTH + 100 && b.y > -120 && b.y < HEIGHT + 80);
    for (const b of pending) this.fan(b.x, b.y, b.age, 8, TAU / 8, 140, 'drift', { turn: .2 });
  }
  updateBeams(dt) {
    for (const beam of this.beams) {
      beam.age += dt;
      if (beam.age >= beam.warn && beam.age < beam.warn + beam.duration) {
        beam.angle += (beam.sweep || 0) * dt;
        const d = segmentDistance(this.player.x, this.player.y, beam.x, beam.y, beam.x + Math.cos(beam.angle) * beam.length, beam.y + Math.sin(beam.angle) * beam.length);
        if (d < beam.width * .5 + 4) this.hitPlayer();
      }
    }
    this.beams = this.beams.filter(b => b.age < b.warn + b.duration);
  }
  spawnDrop(x, y, kind = 'weapon', weapon = null) {
    if (this.drops.length > 24) this.drops.shift();
    this.drops.push({ x: clamp(x, 26, WIDTH - 26), y: clamp(y, 105, HEIGHT - 65), vx: (this.rng() < .5 ? -1 : 1) * (32 + this.rng() * 28), vy: 37 + this.rng() * 30, age: 0, ttl: DROP_TTL, kind, weapon: weapon || chooseWeapon(this.rng), phase: this.rng() * TAU });
  }
  updateDrops(dt) {
    const p = this.player;
    for (const drop of this.drops) {
      drop.age += dt;
      if (drop.age >= drop.ttl) { drop.dead = true; continue; }
      const distance = Math.sqrt(dist2(drop, p)), magnet = 50 + this.upgrades.magnet * 32;
      if (distance < magnet && distance > 1) { drop.x += (p.x - drop.x) / distance * 210 * dt; drop.y += (p.y - drop.y) / distance * 210 * dt; }
      else { drop.x += (drop.vx + Math.sin(drop.age * 2 + drop.phase) * 17) * dt; drop.y += drop.vy * dt; }
      if (drop.x < 24 || drop.x > WIDTH - 24) { drop.vx *= -1; drop.x = clamp(drop.x, 24, WIDTH - 24); }
      if (drop.y < 100 || drop.y > HEIGHT - 60) { drop.vy *= -1; drop.y = clamp(drop.y, 100, HEIGHT - 60); }
      if (dist2(drop, p) < 29 ** 2) this.collectDrop(drop);
    }
    this.drops = this.drops.filter(d => !d.dead);
  }
  collectDrop(drop) {
    const p = this.player; drop.dead = true;
    let label;
    if (drop.kind === 'weapon') {
      p.weapon = drop.weapon; p.levels[drop.weapon] = Math.min(5, p.levels[drop.weapon] + 1); p.weaponLevel = p.levels[drop.weapon];
      label = `${WEAPONS[drop.weapon].name} Lv.${p.weaponLevel}`; this.addCharge(5);
    } else if (drop.kind === 'repair') { p.health = Math.min(p.maxHealth, p.health + 2); label = '机体修复 +2'; }
    else if (drop.kind === 'shield') { p.shield = Math.min(p.maxShield, p.shield + 1); label = '护盾恢复'; }
    else { p.bombs = Math.min(5, p.bombs + 1); label = '震荡炸弹 +1'; }
    this.score += 150; this.fx('text', p.x, p.y - 40, WEAPONS[drop.weapon]?.color || '#bcffe7', 17, label); this.emit('pickup', { label });
  }
  completeStage() {
    this.score += 3000 + this.player.health * 300; this.bullets.length = 0; this.beams.length = 0;
    if (this.practice || this.stageIndex === STAGES.length - 1) { this.mode = 'victory'; this.emit('victory', { practice: this.practice }); }
    else { this.mode = 'upgrade'; this.makeChoices(); this.emit('clear', { index: this.stageIndex }); }
  }
}
