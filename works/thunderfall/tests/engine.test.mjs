import test from 'node:test';
import assert from 'node:assert/strict';
import { Game, segmentDistance, chooseWeapon, seededRandom } from '../engine.js';
import { WIDTH, HEIGHT, SHIPS, WEAPONS, STAGES, UPGRADES, STAGE_SECONDS, BOSS_AT, DROP_TTL } from '../data.js';

const FRAME = 1 / 60;
const near = (actual, expected, tolerance = 1e-7) => assert.ok(
  Math.abs(actual - expected) <= tolerance,
  `Expected ${actual} to be within ${tolerance} of ${expected}`,
);

// Keep the real update loop, collision methods, clock and boss lifecycle.
// These fixtures suppress incidental waves/shots to isolate the rule under test.
function quietGame(options = {}) {
  const game = new Game(0x5448554e);
  game.start(options);
  game.nextWave = Infinity;
  game.fireTimer = Infinity;
  game.missileTimer = Infinity;
  game.bossSpawned = true;
  game.player.invulnerable = 0;
  game.drainEvents();
  return game;
}

function advance(game, seconds, input = {}) {
  for (let remaining = seconds; remaining > 1e-9;) {
    const dt = Math.min(FRAME, remaining);
    game.update(dt, input);
    remaining -= dt;
  }
}

function pickup(game, kind, weapon) {
  game.spawnDrop(game.player.x, game.player.y, kind, weapon);
  game.update(FRAME);
  assert.equal(game.drops.length, 0, 'A nearby pickup must be collected by the update loop');
}

function defeatBossThroughPhases(game, boss) {
  assert.ok(boss && !boss.dead);
  if (boss.age < 2) advance(game, 2 - boss.age + FRAME);
  for (const [nextPhase, remainingHealth] of [[2, 0.65], [3, 0.3]]) {
    game.damageEnemy(boss, boss.maxHp * 10);
    assert.equal(boss.phase, nextPhase);
    near(boss.hp, boss.maxHp * remainingHealth);
    assert.ok(boss.transition > 0);
    assert.ok(!boss.dead);
    advance(game, 1.15 + FRAME);
    assert.equal(boss.transition, 0);
  }
  game.damageEnemy(boss, boss.hp);
  assert.equal(boss.dead, true);
}

test('campaign configuration has five two-minute stages and four weighted weapon types', () => {
  assert.equal(STAGES.length, 5);
  assert.equal(STAGE_SECONDS * STAGES.length, 600);
  assert.equal(BOSS_AT, 88);
  assert.equal(DROP_TTL, 10);
  assert.deepEqual(STAGES.map(stage => stage.theme), ['coast', 'canyon', 'ice', 'foundry', 'core']);
  near(Object.values(WEAPONS).reduce((sum, weapon) => sum + weapon.weight, 0), 1);
  assert.deepEqual([0.1, 0.6, 0.85, 0.99].map(value => chooseWeapon(() => value)), ['pulse', 'laser', 'arc', 'nova']);
  const a = seededRandom(42), b = seededRandom(42);
  assert.deepEqual(Array.from({ length: 20 }, a), Array.from({ length: 20 }, b));
});

test('three starting ships have real durability, speed and weapon differences', () => {
  const games = SHIPS.map(ship => quietGame({ shipId: ship.id }));
  assert.deepEqual(games.map(game => [game.player.health, game.player.shield, game.player.bombs]), [[5, 2, 2], [4, 2, 2], [7, 3, 3]]);
  assert.equal(games[1].player.weapon, 'laser');
  assert.equal(games[0].player.weapon, 'pulse');
  assert.equal(games[2].player.weapon, 'pulse');
  for (const game of games) advance(game, 0.1, { dx: 1 });
  assert.ok(games[0].player.x > games[1].player.x);
  assert.ok(games[1].player.x > games[2].player.x);
  games.forEach(game => game.addShot(240, 500, -Math.PI / 2, 'pulse', 100));
  near(games[0].shots[0].damage, 100);
  near(games[1].shots[0].damage, 108);
  near(games[2].shots[0].damage, 90);
});

test('movement keeps the hit core inside the playable area for keyboard and pointer input', () => {
  const game = quietGame();
  advance(game, 5, { dx: -1, dy: -1 });
  assert.equal(game.player.x, 18);
  assert.equal(game.player.y, 88);
  advance(game, 5, { pointer: true, targetX: WIDTH * 10, targetY: HEIGHT * 10 });
  assert.equal(game.player.x, WIDTH - 18);
  assert.equal(game.player.y, HEIGHT - 35);
});

test('weapon drops remain available until about ten active seconds and then expire', () => {
  const game = quietGame();
  game.spawnDrop(80, 130, 'weapon', 'arc');
  Object.assign(game.drops[0], { vx: 35, vy: 8, phase: 0 });
  advance(game, 9.95);
  assert.equal(game.drops.length, 1);
  near(game.drops[0].age, 9.95);
  advance(game, 0.1);
  assert.equal(game.drops.length, 0);
  assert.equal(game.player.weapon, 'pulse', 'Expiry must not equip an uncollected weapon');
});

test('drops spawn on screen and reflect from all four playable boundaries', () => {
  const cases = [
    { x: 25, y: 200, vx: -60, vy: 0, axis: 'x', velocity: 'vx', sign: 1 },
    { x: WIDTH - 25, y: 200, vx: 60, vy: 0, axis: 'x', velocity: 'vx', sign: -1 },
    { x: 70, y: 101, vx: 0, vy: -60, axis: 'y', velocity: 'vy', sign: 1 },
    { x: 70, y: HEIGHT - 61, vx: 0, vy: 60, axis: 'y', velocity: 'vy', sign: -1 },
  ];
  for (const boundary of cases) {
    const game = quietGame();
    game.spawnDrop(-500, HEIGHT + 500, 'weapon', 'pulse');
    const drop = game.drops[0];
    assert.ok(drop.x >= 24 && drop.x <= WIDTH - 24);
    assert.ok(drop.y >= 100 && drop.y <= HEIGHT - 60);
    Object.assign(drop, boundary, { phase: 0 });
    advance(game, 0.1);
    assert.equal(Math.sign(drop[boundary.velocity]), boundary.sign);
    assert.ok(drop.x >= 24 && drop.x <= WIDTH - 24);
    assert.ok(drop.y >= 100 && drop.y <= HEIGHT - 60);
  }
});

test('pause freezes the complete gameplay state, including drops, warnings, effects and cooldowns', () => {
  const game = quietGame();
  game.player.invulnerable = 2;
  game.player.overdriveTime = 6;
  game.player.overdrive = 100;
  game.fireTimer = 0.3;
  game.missileTimer = 0.4;
  game.comboTimer = 2;
  game.spawnDrop(60, 180, 'weapon', 'nova');
  game.spawnEnemy('scout', 70, 120);
  game.bullet(20, 150, Math.PI / 2, 130, 'drift', { turn: 0.3 });
  game.addShot(70, 600, -Math.PI / 2, 'pulse', 10);
  game.laser(400, 20, Math.PI / 2);
  game.fx('ring', 40, 50);
  advance(game, 0.1);
  game.pause();
  game.drainEvents();
  const frozen = JSON.stringify(game);
  advance(game, 12, { dx: 1, dy: 1 });
  assert.equal(game.bomb(), false);
  assert.equal(game.overdrive(), false);
  assert.equal(JSON.stringify(game), frozen);
  game.resume();
  game.update(FRAME);
  assert.ok(game.time > 0.1);
  assert.ok(game.drops[0].age > 0.1);
});

test('enemy laser warnings are harmless and the active beam damages the hit core', () => {
  const game = quietGame();
  game.laser(game.player.x, 120, Math.PI / 2, { warn: 1, duration: 0.6, width: 14 });
  const shield = game.player.shield;
  advance(game, 0.95);
  assert.equal(game.player.shield, shield);
  assert.equal(game.player.health, game.player.maxHealth);
  advance(game, 0.1);
  assert.equal(game.player.shield, shield - 1);
  advance(game, 0.65);
  assert.equal(game.beams.length, 0);
  assert.equal(game.player.shield, shield - 1, 'Hit invulnerability prevents repeated damage from one beam');
});

test('drift bullets curve over time rather than moving along a fixed line', () => {
  const game = quietGame();
  game.bullet(100, 100, Math.PI / 2, 100, 'drift', { turn: 0.4 });
  advance(game, 0.5);
  const bullet = game.bullets[0];
  assert.ok(bullet.x < 99);
  assert.ok(bullet.y > 145);
  near(bullet.angle, Math.PI / 2 + 0.2);
});

test('segment geometry handles endpoints, degenerate segments and diagonal projection', () => {
  near(segmentDistance(3, 4, 0, 0, 0, 0), 5);
  near(segmentDistance(-3, 4, 0, 0, 10, 0), 5);
  near(segmentDistance(13, 4, 0, 0, 10, 0), 5);
  near(segmentDistance(5, 3, 0, 0, 10, 0), 3);
  near(segmentDistance(3, 0, 0, 0, 3, 3), 3 / Math.sqrt(2));
});

test('fast bullets and player shots use swept collision instead of tunneling', () => {
  const game = quietGame();
  game.bullet(game.player.x, game.player.y - 90, Math.PI / 2, 12000);
  game.update(FRAME);
  assert.equal(game.player.shield, game.player.maxShield - 1);
  assert.equal(game.bullets.length, 0);
  const enemy = game.spawnEnemy('scout', game.player.x, game.player.y - 100, { speed: 0, fire: Infinity });
  game.addShot(game.player.x, game.player.y - 20, -Math.PI / 2, 'pulse', 100, 12000);
  game.update(FRAME);
  assert.equal(enemy.dead, true);
  assert.equal(game.kills, 1);
});

test('near misses graze once without damaging the player', () => {
  const game = quietGame();
  game.bullet(game.player.x + 18, game.player.y - 50, Math.PI / 2, 100);
  advance(game, 0.8);
  assert.equal(game.grazes, 1);
  assert.equal(game.player.shield, game.player.maxShield);
  assert.equal(game.player.health, game.player.maxHealth);
  assert.ok(game.player.overdrive > 20);
});

test('weapon pickups equip all four types, level up, remember levels and cap at five', () => {
  const game = quietGame();
  for (const weapon of Object.keys(WEAPONS)) {
    pickup(game, 'weapon', weapon);
    assert.equal(game.player.weapon, weapon);
    assert.ok(game.player.weaponLevel >= 1);
  }
  for (let i = 0; i < 8; i++) pickup(game, 'weapon', 'laser');
  assert.equal(game.player.weaponLevel, 5);
  pickup(game, 'weapon', 'arc');
  pickup(game, 'weapon', 'laser');
  assert.equal(game.player.weaponLevel, 5);
  game.player.health = 1;
  pickup(game, 'repair');
  assert.equal(game.player.health, 3);
  game.player.shield = 0;
  pickup(game, 'shield');
  assert.equal(game.player.shield, 1);
  game.player.bombs = 5;
  pickup(game, 'bomb');
  assert.equal(game.player.bombs, 5);
});

test('four equipped weapons create distinct spread, piercing, homing and explosive projectiles', () => {
  const game = quietGame();
  for (const weapon of Object.keys(WEAPONS)) {
    game.player.weapon = weapon;
    game.player.weaponLevel = 1;
    game.shots = [];
    game.firePlayer();
    assert.ok(game.shots.length > 0);
    if (weapon === 'pulse') {
      assert.equal(game.shots.length, 3);
      assert.ok(game.shots[0].vx < 0 && game.shots[2].vx > 0);
    }
    if (weapon === 'laser') assert.ok(game.shots[0].pierce > 1);
    if (weapon === 'arc') assert.ok(game.shots.every(shot => shot.homing > 0));
    if (weapon === 'nova') assert.ok(game.shots.some(shot => shot.blast > 0));
  }
});

test('weapon drops remain probabilistic while carriers and the dry-streak guarantee supply one', () => {
  const game = quietGame();
  // A valid high random draw intentionally misses both the ordinary weapon and repair rolls.
  game.rng = () => 0.9;
  for (let i = 0; i < 12; i++) {
    const enemy = game.spawnEnemy('scout', 100, 200);
    game.damageEnemy(enemy, enemy.hp);
  }
  assert.equal(game.drops.length, 0);
  const guaranteed = game.spawnEnemy('scout', 100, 200);
  game.damageEnemy(guaranteed, guaranteed.hp);
  assert.equal(game.drops.length, 1);
  assert.equal(game.drops[0].kind, 'weapon');
  assert.equal(game.noDropKills, 0);
  const carrier = game.spawnEnemy('carrier', 200, 200);
  game.damageEnemy(carrier, carrier.hp);
  assert.equal(game.drops.length, 2);
});

test('upgrades reject illegal calls and offer three unique choices with capped wingmen excluded', () => {
  const game = quietGame();
  const before = JSON.stringify(game);
  assert.equal(game.selectUpgrade('damage'), false);
  assert.equal(JSON.stringify(game), before);
  game.mode = 'upgrade';
  game.upgrades.wingmen = 2;
  for (let i = 0; i < 30; i++) {
    game.makeChoices();
    assert.equal(game.choices.length, 3);
    assert.equal(new Set(game.choices.map(choice => choice.id)).size, 3);
    assert.ok(game.choices.every(choice => UPGRADES.some(upgrade => upgrade.id === choice.id)));
    assert.ok(game.choices.every(choice => choice.id !== 'wingmen'));
  }
  const stage = game.stageIndex;
  assert.equal(game.selectUpgrade('__invalid__'), false);
  assert.equal(game.stageIndex, stage);
  assert.equal(game.mode, 'upgrade');
  const chosen = game.choices[0].id;
  game.bossDefeatedAt = 180;
  assert.equal(game.selectUpgrade(chosen), true);
  assert.equal(game.stageIndex, stage + 1);
  assert.equal(game.bossDefeatedAt, null, 'A new stage must not inherit the previous reward-window clock');
  assert.equal(game.mode, 'playing');
  assert.equal(game.selectUpgrade(chosen), false, 'The same reward cannot be redeemed twice');
});

test('each legal upgrade applies its promised category and respects resource caps', () => {
  for (const upgrade of UPGRADES) {
    const game = quietGame();
    game.mode = 'upgrade';
    game.choices = [upgrade];
    game.player.health = 1;
    game.player.shield = 0;
    game.player.bombs = upgrade.id === 'bomb' ? 4 : 0;
    assert.equal(game.selectUpgrade(upgrade.id), true);
    if (upgrade.id === 'bomb') assert.equal(game.player.bombs, 5);
    else assert.equal(game.upgrades[upgrade.id], 1);
    if (upgrade.id === 'hull') {
      assert.equal(game.player.maxHealth, 6);
      assert.equal(game.player.health, 5, 'Hull repair stacks with the separate two-point stage-clear repair');
    }
    if (upgrade.id === 'shield') {
      assert.equal(game.player.maxShield, 3);
      assert.equal(game.player.shield, 3);
    }
    if (upgrade.id === 'damage') {
      game.addShot(100, 300, -Math.PI / 2, 'pulse', 100);
      near(game.shots[0].damage, 115);
    }
    if (upgrade.id === 'fireRate') {
      game.firePlayer();
      assert.ok(game.fireTimer < 0.145);
    }
    if (upgrade.id === 'reactor') {
      game.player.overdrive = 0;
      game.addCharge(10);
      near(game.player.overdrive, 13);
    }
  }
});

test('stage-clear resupply is separate from the hull and bomb card rewards', () => {
  const results = {};
  for (const id of ['damage', 'hull', 'bomb']) {
    const game = quietGame();
    game.mode = 'upgrade';
    game.choices = [UPGRADES.find(upgrade => upgrade.id === id)];
    game.player.health = 1;
    game.player.bombs = 0;
    game.selectUpgrade(id);
    results[id] = { health: game.player.health, bombs: game.player.bombs };
  }
  assert.deepEqual(results.damage, { health: 3, bombs: 1 });
  assert.deepEqual(results.hull, { health: 5, bombs: 1 });
  assert.deepEqual(results.bomb, { health: 3, bombs: 3 });
});

test('magnet upgrades pull a pickup from farther away and wingmen launch independent missiles', () => {
  const withoutMagnet = quietGame(), withMagnet = quietGame();
  withMagnet.upgrades.magnet = 1;
  for (const game of [withoutMagnet, withMagnet]) {
    game.spawnDrop(game.player.x - 80, game.player.y, 'weapon', 'pulse');
    Object.assign(game.drops[0], { vx: 0, vy: 0, phase: 0 });
    game.update(FRAME);
  }
  assert.ok(withMagnet.drops[0].x > withoutMagnet.drops[0].x + 3);
  const game = quietGame();
  game.upgrades.wingmen = 2;
  game.missileTimer = 0;
  game.update(FRAME);
  assert.equal(game.shots.length, 2);
  assert.ok(game.shots.every(shot => shot.type === 'missile' && shot.homing > 0));
  assert.ok(game.shots[0].x < game.player.x && game.shots[1].x > game.player.x);
});

test('normal mode last-hit protection consumes a bomb while arcade mode can end the run', () => {
  for (const difficulty of ['normal', 'arcade']) {
    const game = quietGame({ difficulty });
    game.player.health = 1;
    game.player.shield = 0;
    game.player.bombs = 1;
    game.bullet(game.player.x, game.player.y - 5, Math.PI / 2, 100);
    game.update(FRAME);
    if (difficulty === 'normal') {
      assert.equal(game.mode, 'playing');
      assert.equal(game.player.health, 1);
      assert.equal(game.player.bombs, 0);
      assert.ok(game.drainEvents().some(event => event.type === 'autobomb'));
    } else {
      assert.equal(game.mode, 'gameover');
      assert.equal(game.player.health, 0);
      assert.equal(game.player.bombs, 1);
    }
  }
});

test('bosses are protected throughout their two-second entrance', () => {
  const game = quietGame();
  game.player.invulnerable = 1000;
  game.spawnBoss();
  const boss = game.enemies.find(enemy => enemy.type === 'boss');
  game.damageEnemy(boss, boss.maxHp * 10);
  assert.equal(boss.hp, boss.maxHp);
  advance(game, 1.95);
  game.damageEnemy(boss, boss.maxHp * 10);
  assert.equal(boss.hp, boss.maxHp);
  assert.equal(boss.phase, 1);
  assert.equal(game.bullets.length, 0);
  assert.equal(game.beams.length, 0);
  advance(game, 0.1);
  game.damageEnemy(boss, 100);
  assert.equal(boss.hp, boss.maxHp - 100);
  assert.equal(boss.phase, 1);
});

test('boss phase barriers cannot be skipped by burst damage and protect their full transition', () => {
  const game = quietGame();
  game.player.invulnerable = 1000;
  game.spawnBoss();
  const boss = game.enemies.find(enemy => enemy.type === 'boss');
  advance(game, 2.05);
  for (const [phase, healthFraction] of [[2, 0.65], [3, 0.3]]) {
    game.bullet(50, 100, Math.PI / 2);
    game.laser(400, 100, Math.PI / 2);
    game.damageEnemy(boss, boss.maxHp * 100);
    near(boss.hp, boss.maxHp * healthFraction);
    assert.equal(boss.phase, phase);
    near(boss.transition, 1.15);
    assert.ok(!boss.dead);
    assert.equal(game.bullets.length, 0);
    assert.equal(game.beams.length, 0);
    game.damageEnemy(boss, boss.maxHp * 100);
    near(boss.hp, boss.maxHp * healthFraction);
    advance(game, 1.1);
    game.damageEnemy(boss, boss.maxHp * 100);
    near(boss.hp, boss.maxHp * healthFraction);
    assert.ok(boss.transition > 0);
    assert.equal(game.bullets.length, 0);
    assert.equal(game.beams.length, 0);
    advance(game, 0.1);
    assert.equal(boss.transition, 0);
    assert.ok(game.bullets.length > 0, 'The next phase resumes firing after its barrier');
  }
  game.damageEnemy(boss, boss.maxHp * 100);
  assert.equal(boss.dead, true);
  assert.equal(game.bossKills, 1);
  assert.deepEqual(game.drainEvents().filter(event => event.type === 'bossPhase').map(event => event.phase), [2, 3]);
});

test('interceptor waves alternate left-to-right and right-to-left across wave cycles', () => {
  const game = quietGame();
  const entries = [];
  for (const waveIndex of [1, 5, 9, 13]) {
    game.enemies = [];
    game.waveIndex = waveIndex;
    game.spawnWave();
    assert.ok(game.enemies.length >= 3);
    assert.ok(game.enemies.every(enemy => enemy.type === 'interceptor'));
    const first = game.enemies[0], startX = first.x;
    entries.push({ x: startX, side: first.side });
    advance(game, 0.1);
    assert.equal(Math.sign(first.x - startX), first.side);
  }
  assert.deepEqual(entries, [{ x: 60, side: 1 }, { x: 420, side: -1 }, { x: 60, side: 1 }, { x: 420, side: -1 }]);
});

test('an undefeated boss blocks stage advancement beyond the two-minute minimum', () => {
  const game = quietGame();
  game.bossSpawned = false;
  game.player.invulnerable = 1000;
  advance(game, BOSS_AT - 0.1);
  assert.equal(game.bossSpawned, false);
  advance(game, 0.2);
  const boss = game.enemies.find(enemy => enemy.type === 'boss');
  assert.ok(boss);
  advance(game, STAGE_SECONDS + 0.1 - game.stageTime);
  assert.equal(game.mode, 'playing');
  assert.equal(game.stageIndex, 0);
  assert.equal(game.bossDefeated, false);
  assert.equal(game.bossKills, 0);
  defeatBossThroughPhases(game, boss);
  const defeatedAt = game.stageTime;
  near(game.bossDefeatedAt, defeatedAt);
  game.update(FRAME);
  assert.equal(game.mode, 'playing', 'Late boss rewards must not disappear on the killing frame');
  advance(game, DROP_TTL - 0.1 - FRAME);
  assert.equal(game.mode, 'playing');
  advance(game, 0.2);
  assert.equal(game.mode, 'upgrade');
  assert.equal(game.bossKills, 1);
  assert.ok(game.stageTime - defeatedAt >= DROP_TTL);
});

test('late final-boss rewards retain their ten-second pickup window and pause freezes that window', () => {
  const game = quietGame({ practiceStage: STAGES.length - 1 });
  game.player.invulnerable = 1000;
  advance(game, STAGE_SECONDS + 1);
  game.spawnBoss();
  const boss = game.enemies.find(enemy => enemy.type === 'boss');
  defeatBossThroughPhases(game, boss);
  const defeatedAt = game.stageTime;
  assert.ok(defeatedAt > STAGE_SECONDS);
  near(game.bossDefeatedAt, defeatedAt);
  assert.deepEqual(game.drops.map(drop => drop.kind), ['weapon', 'repair', 'bomb']);
  const weapon = game.drops.find(drop => drop.kind === 'weapon');
  // Keep one reward away from the ship to isolate availability from magnet pickup.
  Object.assign(weapon, { x: 30, y: 115, vx: 0, vy: 0, phase: 0 });
  advance(game, 1);
  game.pause();
  const pausedClock = game.stageTime, pausedAge = weapon.age;
  advance(game, 30);
  near(game.stageTime, pausedClock);
  near(weapon.age, pausedAge);
  near(game.bossDefeatedAt, defeatedAt);
  game.resume();
  advance(game, DROP_TTL - 1 - 0.05);
  assert.equal(game.mode, 'playing');
  assert.ok(game.drops.includes(weapon), 'The gold reward remains available near the end of its pickup window');
  near(game.stageTime - defeatedAt, 9.95);
  advance(game, 0.1);
  assert.equal(game.mode, 'victory');
  assert.ok(game.stageTime - defeatedAt >= DROP_TTL);
  game.reset();
  assert.equal(game.bossDefeatedAt, null);
});

test('five completed stages require at least 600 simulated active seconds and five boss deaths', () => {
  const game = quietGame();
  const stageDurations = [];
  for (let index = 0; index < STAGES.length; index++) {
    assert.equal(game.stageIndex, index);
    game.nextWave = Infinity;
    game.fireTimer = Infinity;
    game.missileTimer = Infinity;
    game.bossSpawned = false;
    game.player.invulnerable = 10000;
    const stageStarted = game.time;
    advance(game, BOSS_AT - 0.1);
    assert.equal(game.mode, 'playing');
    assert.equal(game.bossSpawned, false);
    advance(game, 0.2);
    const boss = game.enemies.find(enemy => enemy.type === 'boss');
    assert.ok(boss);
    defeatBossThroughPhases(game, boss);
    assert.equal(game.bossDefeated, true);
    assert.equal(game.mode, 'playing', 'An early boss kill must leave the reward-wave window running');
    advance(game, STAGE_SECONDS - 0.1 - game.stageTime);
    assert.equal(game.mode, 'playing');
    let guard = 0;
    while (game.mode === 'playing' && guard++ < 30) game.update(FRAME);
    const duration = game.time - stageStarted;
    assert.ok(duration >= STAGE_SECONDS - 1e-6);
    stageDurations.push(duration);
    if (index < STAGES.length - 1) {
      assert.equal(game.mode, 'upgrade');
      assert.equal(game.selectUpgrade(game.choices[0].id), true);
    }
  }
  assert.equal(game.mode, 'victory');
  assert.equal(game.bossKills, 5);
  assert.ok(game.time >= 600 - 1e-6);
  assert.ok(game.time < 601, 'Timing simulation should advance by frames without arbitrary time jumps');
  near(stageDurations.reduce((sum, duration) => sum + duration, 0), game.time);
});

test('continues are limited to three and replay the current stage without erasing elapsed play time', () => {
  const game = quietGame({ difficulty: 'arcade' });
  game.enterStage(2);
  game.time = 300;
  game.score = 10000;
  for (let death = 0; death < 4; death++) {
    game.stageTime = 55;
    game.player.health = 1;
    game.player.shield = 0;
    game.player.bombs = 0;
    game.player.invulnerable = 0;
    game.hitPlayer();
    assert.equal(game.mode, 'gameover');
    const previousScore = game.score;
    const continued = game.continueRun();
    assert.equal(continued, death < 3);
    assert.equal(game.continues, Math.min(death + 1, 3));
    assert.equal(game.time, 300);
    if (continued) {
      assert.equal(game.stageIndex, 2);
      assert.equal(game.stageTime, 0);
      assert.equal(game.bossDefeated, false);
      assert.equal(game.player.health, game.player.maxHealth);
      assert.equal(game.score, Math.floor(previousScore * 0.65));
    }
  }
  assert.equal(game.mode, 'gameover');
  assert.equal(game.continueRun(), false);
});

test('invalid or stalled frame deltas cannot fast-forward a stage', () => {
  const game = quietGame();
  for (const dt of [0, -1, NaN, Infinity]) game.update(dt);
  assert.equal(game.time, 0);
  game.update(60);
  near(game.time, 0.12);
  assert.equal(game.stageIndex, 0);
  assert.equal(game.mode, 'playing');
});
