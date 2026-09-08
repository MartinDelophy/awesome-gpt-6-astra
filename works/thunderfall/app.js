import { Game, clamp } from './engine.js';
import { WIDTH, HEIGHT, SHIPS, WEAPONS, STAGES, STAGE_SECONDS, DROP_TTL } from './data.js';
import { drawFrame } from './render.js';
import { Sound } from './audio.js';

const $ = id => document.getElementById(id);
const storage = { get(key, fallback) { try { return JSON.parse(localStorage.getItem(`thunderfall:${key}`)) ?? fallback; } catch { return fallback; } }, set(key, value) { try { localStorage.setItem(`thunderfall:${key}`, JSON.stringify(value)); } catch { /* Play remains available with storage blocked. */ } } };
const game = new Game();
const sound = new Sound(storage.get('sound', true) === true);
const canvas = $('game-canvas'), ctx = canvas.getContext('2d', { alpha: false });
const keys = new Set();
const input = { dx: 0, dy: 0, pointer: false, targetX: 240, targetY: 665, slow: false };
const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = storage.get('reducedMotion', reducedQuery.matches), selectedShip = 0, focusMode = false, pointer = null;
let best = Number(storage.get('best', 0)) || 0, lastMode = '', lastStage = -1, lastWeapon = '', lastVitals = '', lastHud = 0;
let announcementUntil = 0, toastUntil = 0, idleTime = 0, last = performance.now(), accumulator = 0;
let pauseReason = '航线已冻结，补给与战斗计时也一起暂停。';
const formatScore = n => Math.max(0, Math.floor(n)).toLocaleString('en-US').padStart(7, '0');
const formatTime = t => `${Math.floor(t / 60).toString().padStart(2, '0')}:${Math.floor(t % 60).toString().padStart(2, '0')}`;
const arrow = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';

$('mission-route').innerHTML = STAGES.map((s, i) => `<li class="${i === 0 ? 'active' : ''}"><span class="route-number">0${i + 1}</span><div><strong>${s.name}</strong><small>${s.enName}</small></div><span class="route-time">02:00</span></li>`).join('');
$('ship-picker').innerHTML = SHIPS.map(s => `<button class="ship-choice" data-ship="${s.id}" aria-pressed="${s.id === 0}" style="--ship-color:${s.color}"><small>${s.code}</small><strong>${s.name}</strong><span>${s.role}</span></button>`).join('');
$('best-score').textContent = formatScore(best);
function chooseShip(id) {
  if (game.mode !== 'hangar') return;
  selectedShip = id; game.player.shipId = id;
  const ship = SHIPS[id];
  for (const button of $('ship-picker').children) button.setAttribute('aria-pressed', Number(button.dataset.ship) === id);
  $('ship-code').textContent = `${ship.code} / ${['FALCON', 'PRISM', 'BASTION'][id]}`;
  $('ship-description').textContent = ship.description;
  $('ship-stats').innerHTML = `<span>机体 <b>${ship.health}</b></span><span>护盾 <b>${ship.shield}</b></span><span>速度 <b>${ship.speed}</b></span><span>炸弹 <b>${ship.bombStock}</b></span>`;
  game.player.weapon = id === 1 ? 'laser' : 'pulse'; game.player.weaponLevel = 1; lastWeapon = ''; updateHud(true);
}
$('ship-picker').addEventListener('click', e => { const button = e.target.closest('[data-ship]'); if (button) chooseShip(Number(button.dataset.ship)); });
function resetInput() { keys.clear(); input.pointer = false; input.dx = 0; input.dy = 0; pointer = null; }
function focusCanvas() { canvas.focus({ preventScroll: true }); }
function start() {
  const value = $('run-mode').value;
  resetInput(); focusMode = false; input.slow = false; $('focus-button').setAttribute('aria-pressed', 'false');
  game.start({ shipId: selectedShip, difficulty: $('difficulty').value, practiceStage: value === 'campaign' ? null : Number(value) });
  accumulator = 0; last = performance.now(); lastMode = ''; lastStage = -1;
  sound.unlock(); syncMode(); updateHud(true); focusCanvas(); window.scrollTo(0, 0);
}
$('start-button').addEventListener('click', start);
function pause(reason) { if (game.mode !== 'playing') return; pauseReason = reason || '航线已冻结，补给与战斗计时也一起暂停。'; resetInput(); game.pause(); syncMode(); }
function resume() { resetInput(); game.resume(); accumulator = 0; last = performance.now(); syncMode(); focusCanvas(); sound.unlock(); }
$('pause-button').addEventListener('click', () => pause());
$('bomb-button').addEventListener('click', () => { game.bomb(); updateHud(true); });
$('overdrive-button').addEventListener('click', () => { if (!game.overdrive() && game.mode === 'playing') toast('擦弹、击杀和拾取武器可获得充能'); updateHud(true); });
$('focus-button').addEventListener('click', () => { focusMode = !focusMode; $('focus-button').setAttribute('aria-pressed', focusMode); });
function toHangar() {
  resetInput(); game.reset(); game.drainEvents(); lastMode = ''; lastStage = -1; lastWeapon = ''; announcementUntil = 0;
  $('stage-announcement').hidden = true; $('toast').hidden = true; chooseShip(selectedShip); syncMode(); updateHud(true); $('start-button').focus({ preventScroll: true });
}
function button(label, className, action) { const element = document.createElement('button'); element.className = className; element.innerHTML = label; element.addEventListener('click', action); return element; }
function syncMode() {
  if (lastMode === game.mode) return;
  lastMode = game.mode;
  document.body.classList.toggle('in-flight', game.mode !== 'hangar');
  $('hangar').hidden = game.mode !== 'hangar'; $('hud').hidden = game.mode === 'hangar';
  const show = ['paused', 'upgrade', 'gameover', 'victory'].includes(game.mode);
  $('overlay').hidden = !show;
  if (!show) return;
  resetInput(); $('stage-announcement').hidden = true;
  $('overlay-content').replaceChildren(); $('overlay-actions').replaceChildren();
  const title = $('overlay-title'), kicker = $('overlay-kicker'), desc = $('overlay-description'), actions = $('overlay-actions');
  if (game.mode === 'paused') {
    kicker.textContent = 'FLIGHT ON HOLD'; title.textContent = '呼吸一下，再出发。'; desc.textContent = pauseReason;
    actions.append(button(`继续战斗 ${arrow}`, 'primary-button', resume), button('结束本次战役，返回机库', 'secondary-button', toHangar));
  } else if (game.mode === 'upgrade') {
    kicker.textContent = `SECTOR 0${game.stageIndex + 1} / CLEAR`; title.textContent = '航路已打开。';
    desc.textContent = '选择一项本局强化。另附过关补给：机体 +2、护盾补满、炸弹 +1。';
    const choices = document.createElement('div'); choices.className = 'upgrade-choices';
    for (const [i, choice] of game.choices.entries()) choices.append(button(`<span>0${i + 1}</span><span><strong>${choice.name}<small>${choice.description}</small></strong></span><span>↗</span>`, 'upgrade-choice', () => { game.selectUpgrade(choice.id); lastStage = -1; syncMode(); updateHud(true); focusCanvas(); }));
    $('overlay-content').append(choices);
  } else {
    const won = game.mode === 'victory';
    kicker.textContent = game.practice ? 'TRAINING REPORT' : won ? 'MISSION ACCOMPLISHED' : 'SIGNAL LOST';
    title.textContent = won ? game.practice ? '演练完成。' : '天穹，重归黎明。' : '这不是最后一次出击。';
    desc.textContent = won ? game.practice ? '单关练习已结束。准备好后，尝试完整五关战役。' : `五大空域已全部解放。${game.continues ? `本次续战 ${game.continues} 次。` : '一命航程，一路到底。'}` : `抵达第 ${game.stageIndex + 1} 空域 · ${STAGES[game.stageIndex].name}。${game.continues < 3 ? '可续战重开当前关，保留强化，分数扣除 35%。' : '本局续战次数已用完，返回机库再挑战。'}`;
    $('overlay-content').innerHTML = `<div class="result-grid"><div><small>作战得分</small><strong>${formatScore(game.score)}</strong></div><div><small>有效战斗时间</small><strong>${formatTime(game.time)}</strong></div><div><small>击落敌机</small><strong>${game.kills}</strong></div><div><small>擦弹次数</small><strong>${game.grazes}</strong></div></div>`;
    if (!game.practice && game.score > best) { best = game.score; storage.set('best', best); $('best-score').textContent = formatScore(best); }
    if (!won && game.continues < 3) actions.append(button(`继续作战 <small>${3 - game.continues} 次机会</small>${arrow}`, 'primary-button', () => { game.continueRun(); lastStage = -1; syncMode(); updateHud(true); focusCanvas(); }));
    actions.append(button(`返回机库 ${arrow}`, won || game.continues >= 3 ? 'primary-button' : 'secondary-button', toHangar));
  }
  const first = $('overlay').querySelector('button'); first?.focus({ preventScroll: true });
}
function updateHud(force = false) {
  const p = game.player, playing = game.mode === 'playing';
  $('score').textContent = formatScore(game.score); $('elapsed').textContent = formatTime(game.time);
  $('hud-stage').textContent = `${game.practice ? '演练' : '0' + (game.stageIndex + 1) + ' / 05'}`;
  $('multiplier').textContent = `×${Math.min(5, 1 + Math.floor(game.combo / 8))}`;
  const vitals = `${p.health}/${p.maxHealth}/${p.shield}/${p.maxShield}`;
  if (force || lastVitals !== vitals) {
    lastVitals = vitals;
    $('hull').innerHTML = Array.from({ length: p.maxHealth }, (_, i) => `<i class="${i >= p.health ? 'empty' : ''}"></i>`).join('');
    $('shield').innerHTML = Array.from({ length: p.maxShield }, (_, i) => `<i class="${i >= p.shield ? 'empty' : ''}"></i>`).join('');
    $('hull').setAttribute('aria-label', `机体 ${p.health}/${p.maxHealth}`); $('shield').setAttribute('aria-label', `护盾 ${p.shield}/${p.maxShield}`);
  }
  const boss = game.enemies.find(e => e.type === 'boss' && !e.dead);
  $('boss-hud').hidden = !boss;
  if (boss) { $('boss-name').textContent = STAGES[game.stageIndex].bossName; $('boss-phase').textContent = `PHASE ${boss.phase}/3`; $('boss-fill').style.width = `${Math.max(0, boss.hp / boss.maxHp) * 100}%`; }
  $('bomb-count').textContent = p.bombs; $('bomb-button').disabled = !playing || p.bombs <= 0;
  $('overdrive-button').disabled = !playing; $('overdrive-button').classList.toggle('ready', p.overdrive >= 100 || p.overdriveTime > 0);
  $('overdrive-button').setAttribute('aria-label', p.overdriveTime > 0 ? `雷霆爆发中，剩余${Math.ceil(p.overdriveTime)}秒` : `雷霆爆发，充能${Math.floor(p.overdrive)}%，100%可用`);
  $('charge-label').textContent = p.overdriveTime > 0 ? `爆发中 · ${p.overdriveTime.toFixed(1)}s` : `E · ${Math.floor(p.overdrive)}%`;
  $('charge-fill').style.width = `${p.overdriveTime > 0 ? p.overdriveTime / 8 * 100 : p.overdrive}%`;
  $('focus-button').disabled = !playing; $('pause-button').disabled = !playing;
  $('stage-progress-fill').style.width = `${Math.min(1, game.stageTime / STAGE_SECONDS) * 100}%`;
  const weapon = WEAPONS[p.weapon], key = `${p.weapon}:${p.weaponLevel}`;
  if (lastWeapon !== key || force) {
    lastWeapon = key; $('weapon-name').textContent = weapon.name; $('weapon-description').textContent = weapon.description;
    $('weapon-emblem').textContent = weapon.label; $('weapon-emblem').style.color = weapon.color; $('weapon-emblem').style.borderColor = weapon.color;
    $('weapon-tier').textContent = `${({ pulse: 'BLUE', laser: 'GREEN', arc: 'PURPLE', nova: 'GOLD' })[p.weapon]} / ${weapon.rarity}`;
    $('weapon-tier').style.color = weapon.color;
    $('weapon-level').innerHTML = Array.from({ length: 5 }, (_, i) => `<i class="${i < p.weaponLevel ? 'active' : ''}" style="${i < p.weaponLevel ? `background:${weapon.color}` : ''}"></i>`).join('');
    $('weapon-mini').textContent = `${weapon.label} / ${weapon.name} LV.${p.weaponLevel}`; $('weapon-mini').style.color = weapon.color;
  }
  if (lastStage !== game.stageIndex || force) {
    lastStage = game.stageIndex;
    for (const [i, row] of [...$('mission-route').children].entries()) { row.classList.toggle('active', i === game.stageIndex); row.classList.toggle('complete', i < game.stageIndex && !game.practice); }
  }
  $('flight-state').textContent = game.mode === 'hangar' ? 'HANGAR 01' : `${game.practice ? 'TRAINING' : 'SECTOR'} 0${game.stageIndex + 1}`;
  const salvageSeconds = Math.max(0, Math.ceil(Math.max(STAGE_SECONDS, (game.bossDefeatedAt ?? 0) + DROP_TTL) - game.stageTime));
  $('bottom-tip').textContent = game.mode === 'hangar' ? 'AUTO FIRE / DRAG TO FLY' : game.bossDefeated ? `奖励清场 · 拾取补给 / ${salvageSeconds}s` : game.bossSpawned ? 'BOSS ENGAGED' : 'GRAZE +25 / MAX COMBO ×5';
}
function announce(kicker, title, detail, seconds = 2.7) {
  $('announcement-kicker').textContent = kicker; $('announcement-title').textContent = title; $('announcement-detail').textContent = detail;
  $('stage-announcement').hidden = false; announcementUntil = game.time + seconds;
}
function toast(text) { $('toast').textContent = text; $('toast').hidden = false; toastUntil = performance.now() + 2500; }
function processEvents() {
  for (const event of game.drainEvents()) {
    sound.event(event.type);
    if (event.type === 'stage') announce(`SECTOR 0${event.index + 1} / ${STAGES[event.index].enName}`, STAGES[event.index].name, STAGES[event.index].tip, 3.3);
    if (event.type === 'boss') announce('WARNING / HOSTILE FLAGSHIP', event.name, '多阶段火力 · 注意激光预警', 2.2);
    if (event.type === 'bossDefeated') announce('FLAGSHIP DESTROYED', '空域已压制', '继续清场，抢收首领补给', 2);
    if (event.type === 'bossPhase') toast(`Boss 第 ${event.phase} 阶段 · 短暂护盾后切换火力`);
    if (event.type === 'autobomb') toast('致命一击保护 · 自动消耗 1 枚炸弹');
    if (event.type === 'overdrive') toast('雷霆爆发 / 8 秒强化火力 · 仍需躲弹');
    if (event.type === 'pickup') toast(event.label);
  }
}
canvas.addEventListener('pointerdown', e => {
  if (game.mode !== 'playing' || pointer !== null || (e.pointerType === 'mouse' && e.button !== 0)) return;
  e.preventDefault(); focusCanvas();
  pointer = { id: e.pointerId, x: e.clientX, y: e.clientY, shipX: game.player.x, shipY: game.player.y };
  input.pointer = true; input.targetX = game.player.x; input.targetY = game.player.y;
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
  if (!pointer || pointer.id !== e.pointerId || game.mode !== 'playing') return;
  e.preventDefault(); const rect = canvas.getBoundingClientRect();
  input.targetX = clamp(pointer.shipX + (e.clientX - pointer.x) / rect.width * WIDTH * 1.15, 18, WIDTH - 18);
  input.targetY = clamp(pointer.shipY + (e.clientY - pointer.y) / rect.height * HEIGHT * 1.15, 88, HEIGHT - 35);
});
function endPointer(e) { if (pointer?.id === e.pointerId) { pointer = null; input.pointer = false; } }
canvas.addEventListener('pointerup', endPointer); canvas.addEventListener('pointercancel', endPointer); canvas.addEventListener('lostpointercapture', endPointer);
window.addEventListener('keydown', e => {
  if ($('help-dialog').open || e.target.closest('select,input,textarea') || !['playing', 'paused'].includes(game.mode)) return;
  const key = e.key.toLowerCase();
  if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'w', 'a', 's', 'd', 'shift'].includes(key)) { e.preventDefault(); keys.add(key); }
  if (e.repeat) return;
  if (key === 'p' || key === 'escape') { e.preventDefault(); game.mode === 'playing' ? pause() : resume(); }
  if (key === ' ' && !e.target.closest('button')) { e.preventDefault(); game.bomb(); }
  if (key === 'e') { e.preventDefault(); game.overdrive(); }
});
window.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
window.addEventListener('keydown', e => {
  if (e.key !== 'Tab' || $('overlay').hidden || $('help-dialog').open) return;
  const buttons = [...$('overlay').querySelectorAll('button:not(:disabled)')];
  const first = buttons[0], last = buttons.at(-1);
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) { pause('你刚离开了战场。所有计时已暂停，准备好再继续。'); resetInput(); } });
window.addEventListener('blur', () => { pause('窗口已失去焦点，战斗自动暂停。'); resetInput(); });
$('sound-button').addEventListener('click', () => { sound.setEnabled(!sound.enabled); storage.set('sound', sound.enabled); sound.unlock(); updateSound(); });
function updateSound() { $('sound-button').setAttribute('aria-pressed', sound.enabled); $('sound-button').setAttribute('aria-label', sound.enabled ? '关闭声音' : '开启声音'); $('sound-label').textContent = sound.enabled ? '声音' : '静音'; }
function updateReduced() { $('reduced-button').setAttribute('aria-pressed', reducedMotion); $('reduced-button').textContent = `减少装饰动态：${reducedMotion ? '开启' : '关闭'}`; }
$('reduced-button').addEventListener('click', () => { reducedMotion = !reducedMotion; storage.set('reducedMotion', reducedMotion); updateReduced(); });
reducedQuery.addEventListener?.('change', e => { reducedMotion = e.matches; updateReduced(); });
$('help-button').addEventListener('click', () => { pause('玩法说明已打开。关闭说明后，可继续战斗。'); $('help-dialog').showModal(); });
document.querySelectorAll('.dialog-close').forEach(b => b.addEventListener('click', () => $('help-dialog').close()));
function resize() {
  const rect = canvas.getBoundingClientRect(), ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.round(rect.width * ratio)); canvas.height = Math.max(1, Math.round(rect.height * ratio));
  ctx?.setTransform(canvas.width / WIDTH, 0, 0, canvas.height / HEIGHT, 0, 0);
}
new ResizeObserver(resize).observe(canvas);
function frame(now) {
  const dt = Math.min(.12, (now - last) / 1000); last = now; idleTime += Math.min(.05, dt);
  input.dx = Number(keys.has('d') || keys.has('arrowright')) - Number(keys.has('a') || keys.has('arrowleft'));
  input.dy = Number(keys.has('s') || keys.has('arrowdown')) - Number(keys.has('w') || keys.has('arrowup'));
  input.slow = focusMode || keys.has('shift');
  if (game.mode === 'playing' && !$('help-dialog').open) {
    accumulator += dt;
    while (accumulator >= 1 / 60 && game.mode === 'playing') { game.update(1 / 60, input); accumulator -= 1 / 60; }
  } else accumulator = 0;
  processEvents(); syncMode();
  if (now - lastHud > 100) { updateHud(); lastHud = now; }
  if (game.time >= announcementUntil) $('stage-announcement').hidden = true;
  if (now >= toastUntil) $('toast').hidden = true;
  if (ctx) drawFrame(ctx, game, { idleTime, reducedMotion });
  sound.tick(game.mode === 'playing', game.stageIndex);
  requestAnimationFrame(frame);
}
if (!ctx) { $('start-button').disabled = true; $('start-button').textContent = '此浏览器不支持 Canvas 2D'; }
chooseShip(0); updateSound(); updateReduced(); syncMode(); resize(); requestAnimationFrame(frame);
