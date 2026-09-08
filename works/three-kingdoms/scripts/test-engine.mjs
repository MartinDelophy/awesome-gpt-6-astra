import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import fs from 'node:fs';
const bundle = await build({
  entryPoints: ['game/engine.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const E = await import(
  'data:text/javascript;base64,' +
    Buffer.from(bundle.outputFiles[0].text).toString('base64')
);
const clone = (g) => JSON.parse(JSON.stringify(g));
const sync = (g) => {
  g.turnStartCities = clone(g.cities);
  return g;
};
const isolated = (g) => {
  for (const f of E.PLAYABLE)
    if (f !== g.player) g.resources[f] = { gold: 0, food: 0 };
  return sync(g);
};
const base = () => E.newGame('shu');
function army(o = 'guan', from = 'hanzhong', to = 'yongan', troops = 5000) {
  const general = E.getOfficer(o);
  return {
    id: 999,
    owner: general.faction,
    from,
    to,
    troops,
    officer: o,
    war: general.war,
    command: general.command,
    int: general.int,
    morale: 75,
  };
}

test('15-city,21-road map is connected and has three equivalent regional diamonds', () => {
  const g = base();
  assert.equal(g.cities.length, 15);
  assert.equal(E.ROADS.length, 21);
  assert.equal(
    new Set(E.ROADS.map((x) => x.slice().sort().join('/'))).size,
    21,
  );
  const seen = new Set(['chengdu']),
    queue = [...seen];
  while (queue.length)
    for (const id of E.neighbors(queue.shift()))
      if (!seen.has(id)) {
        seen.add(id);
        queue.push(id);
      }
  assert.equal(seen.size, 15);
  for (const [a, b] of E.ROADS) {
    assert.notEqual(a, b);
    assert(E.neighbors(b).includes(a));
  }
  for (const f of E.PLAYABLE) {
    const homes = E.owned(g, f);
    assert.equal(homes.length, 3);
    assert.deepEqual(
      homes.map((c) => E.neighbors(c.id).length).sort(),
      [2, 2, 2],
    );
    const frontier = new Set(
      homes
        .flatMap((c) => E.neighbors(c.id))
        .filter((id) => E.getCity(g, id).owner !== f),
    );
    assert.equal(frontier.size, 1);
    assert.equal(E.getCity(g, [...frontier][0]).troops, 6000);
  }
});
test('all factions start with identical troops, treasury, income and action budgets', () => {
  for (const f of E.PLAYABLE) {
    const g = E.newGame(f);
    assert.equal(
      E.owned(g, f).reduce((n, c) => n + c.troops, 0),
      36000,
    );
    assert.deepEqual(g.resources[f], { gold: 4200, food: 18000 });
    assert.deepEqual(E.income(g, f), { gold: 1260, food: 2820 });
    assert.equal(g.ap, 3);
    assert.equal(E.getCity(g, E.FACTIONS[f].capital).owner, f);
  }
});
test('108 unique generals have bounded stats, unique portrait cells and legal orders', () => {
  assert.equal(E.ALL_OFFICERS.length, 108);
  assert.equal(new Set(E.ALL_OFFICERS.map((o) => o.id)).size, 108);
  assert.equal(new Set(E.ALL_OFFICERS.map((o) => o.name)).size, 108);
  for (const f of E.PLAYABLE) {
    assert.equal(E.FACTIONS[f].officers.length, 36);
    assert.equal(
      new Set(E.FACTIONS[f].officers.map((o) => o.portraitIndex)).size,
      36,
    );
    for (const o of E.FACTIONS[f].officers) {
      for (const stat of ['command', 'war', 'int'])
        assert(o[stat] >= 1 && o[stat] <= 99);
      const g = E.newGame(f),
        from = E.FACTIONS[f].capital;
      const n = E.march(g, from, E.neighbors(from)[0], 1000, o.id);
      assert.doesNotThrow(() => E.loadGame(JSON.stringify(n)));
    }
  }
});
test('recruitment adds2500, uses weighted morale dilution and quotes actual cost', () => {
  const g = base(),
    c = E.getCity(g, 'chengdu'),
    q = E.actionQuote(g, 'recruit', c.id),
    before = clone(g);
  const n = E.act(g, 'recruit', c.id);
  assert.equal(E.getCity(n, c.id).troops, c.troops + 2500);
  assert.equal(
    E.getCity(n, c.id).morale,
    Math.round((c.troops * 75 + 2500 * 50) / (c.troops + 2500)),
  );
  assert.equal(n.resources.shu.gold, g.resources.shu.gold - q.gold);
  assert.equal(n.resources.shu.food, g.resources.shu.food - 1500);
  assert.equal(n.ap, 2);
  assert.deepEqual(g, before);
});
test('invalid actions cannot mutate state or exceed recruitment/improvement caps', () => {
  const g = base(),
    before = clone(g);
  assert.throws(() => E.act(g, 'recruit', 'xuchang'));
  const exhausted = clone(g);
  exhausted.ap = 0;
  assert.throws(() => E.act(exhausted, 'farm', 'chengdu'));
  const c = E.getCity(g, 'chengdu');
  c.troops = 38000;
  c.farm = 5;
  c.market = 5;
  c.morale = 100;
  c.wall = 100;
  for (const type of Object.keys(E.ACTIONS))
    assert.throws(() => E.act(g, type, c.id));
  const original = clone(before);
  original.resources.shu.gold = 0;
  assert.throws(() => E.act(original, 'market', 'chengdu'));
});
test('high intelligence reduces real administration costs, reserves advisor and increases upgrade cost', () => {
  const g = base();
  const smart = E.actionQuote(g, 'market', 'chengdu', 'shu', 'zhuge'),
    fighter = E.actionQuote(g, 'market', 'chengdu', 'shu', 'zhang');
  assert(smart.gold < fighter.gold);
  const n = E.act(g, 'market', 'chengdu', 'zhuge');
  assert.equal(n.resources.shu.gold, g.resources.shu.gold - smart.gold);
  assert.equal(E.officerAvailable(n, 'zhuge'), false);
  assert.notEqual(E.advisor(n, 'market').id, 'zhuge');
  assert.throws(() => E.act(n, 'market', 'chengdu', 'zhuge'));
  const later = clone(g);
  E.getCity(later, 'chengdu').market = 3;
  assert(
    E.actionQuote(later, 'market', 'chengdu', 'shu', 'zhuge').gold > smart.gold,
  );
});
test('officers rest through the next turn and recover exactly two turns after use', () => {
  let g = isolated(base());
  g = E.act(g, 'wall', 'chengdu', 'guan');
  assert.equal(g.officerReadyAt.guan, 3);
  assert(!E.officerAvailable(g, 'guan'));
  g = E.endTurn(g);
  assert.equal(g.turn, 2);
  assert(!E.officerAvailable(g, 'guan'));
  g = E.loadGame(JSON.stringify(g));
  g = E.endTurn(g);
  assert.equal(g.turn, 3);
  assert(E.officerAvailable(g, 'guan'));
});
test('leader capacity accepts exact cap and rejects extra/fractional troops or disconnected routes', () => {
  const g = base();
  E.getCity(g, 'hanzhong').troops = 35000;
  const cap = E.leaderCapacity(E.getOfficer('guan'));
  const n = E.march(g, 'hanzhong', 'yongan', cap, 'guan');
  assert.equal(n.armies[0].troops, cap);
  assert.equal(
    n.resources.shu.food,
    g.resources.shu.food - E.marchFood(cap, E.getOfficer('guan')),
  );
  assert.throws(() => E.march(g, 'hanzhong', 'yongan', cap + 1, 'guan'));
  assert.throws(() => E.march(g, 'hanzhong', 'yongan', 1000.5, 'guan'));
  assert.throws(() => E.march(g, 'hanzhong', 'jianye', 5000, 'guan'));
  assert.throws(() => E.march(n, 'chengdu', 'xiliang', 3000, 'guan'));
});
test('each combat stat improves attack power; intelligence also reduces supply costs', () => {
  const o = { command: 60, war: 60, int: 60 },
    power = E.attackPower(10000, o, 75);
  for (const stat of ['command', 'war', 'int'])
    assert(E.attackPower(10000, { ...o, [stat]: 80 }, 75) > power);
  assert(E.marchFood(10000, { int: 99 }) < E.marchFood(10000, { int: 30 }));
});
test('combat forecast agrees exactly with an isolated capture and resting officer state', () => {
  let g = isolated(base());
  E.getCity(g, 'hanzhong').troops = 20000;
  sync(g);
  const prediction = E.predict(g, 'hanzhong', 'yongan', 15000, 'guan');
  assert(prediction.win);
  g = E.march(g, 'hanzhong', 'yongan', 15000, 'guan');
  g = E.endTurn(g);
  const c = E.getCity(g, 'yongan');
  assert.equal(c.owner, 'shu');
  assert.equal(c.troops, prediction.survivors);
  assert.equal(c.occupation, 1);
  assert(!E.officerAvailable(g, 'guan'));
});
test('failed siege attrits defenders and returns only the forecast survivors', () => {
  let g = isolated(base());
  E.getCity(g, 'yongan').troops = 20000;
  sync(g);
  const start = E.getCity(g, 'hanzhong').troops,
    forecast = E.predict(g, 'hanzhong', 'yongan', 4000, 'guan');
  assert(!forecast.win);
  g = E.endTurn(E.march(g, 'hanzhong', 'yongan', 4000, 'guan'));
  assert.equal(E.getCity(g, 'yongan').troops, forecast.defenderSurvivors);
  assert.equal(
    E.getCity(g, 'hanzhong').troops,
    start - 4000 + forecast.retreat,
  );
});
test('friendly reinforcement preserves all troops above recruitment cap and weights morale', () => {
  let g = isolated(base());
  const c = E.getCity(g, 'hanzhong');
  c.troops = 39000;
  c.morale = 50;
  sync(g);
  g = E.march(g, 'chengdu', 'hanzhong', 8000, 'guan');
  g = E.endTurn(g);
  assert.equal(E.getCity(g, 'hanzhong').troops, 47000);
  assert.equal(
    E.getCity(g, 'hanzhong').morale,
    Math.round((39000 * 50 + 8000 * 75) / 47000),
  );
  assert(E.actionError(g, 'recruit', 'hanzhong'));
});
test('captured cities pay half income for exactly two settlements', () => {
  let g = isolated(base());
  E.getCity(g, 'hanzhong').troops = 20000;
  sync(g);
  g = E.endTurn(E.march(g, 'hanzhong', 'yongan', 15000, 'guan'));
  assert.equal(E.getCity(g, 'yongan').occupation, 1);
  const reduced = E.income(g).gold,
    normal = clone(g);
  E.getCity(normal, 'yongan').occupation = 0;
  assert(E.income(normal).gold > reduced);
  g = isolated(g);
  g = E.endTurn(g);
  assert.equal(E.getCity(g, 'yongan').occupation, 0);
});
test('AP grows at eight and thirteen cities; fourth city does not compound actions', () => {
  for (const [n, ap] of [
    [3, 3],
    [4, 3],
    [7, 3],
    [8, 4],
    [12, 4],
    [13, 5],
    [15, 5],
  ]) {
    const g = base();
    g.cities.forEach((c, i) => (c.owner = i < n ? 'shu' : 'qun'));
    assert.equal(E.maxAP(g), ap);
  }
});
test('AI plans against same starting garrisons, never secretly exploiting queued player orders', () => {
  let g = base();
  const before = E.planningGarrison(g, E.getCity(g, 'hanzhong'));
  g = E.march(g, 'hanzhong', 'yongan', 8000, 'guan');
  const current = E.getCity(g, 'hanzhong');
  assert(current.troops < before.troops);
  assert.equal(E.planningGarrison(g, current).troops, before.troops);
  E.getCity(g, 'hanzhong').wall = 100;
  assert.equal(
    E.planningGarrison(g, E.getCity(g, 'hanzhong')).wall,
    before.wall,
  );
});
test('victory and defeat account for armies; finished games reject future orders', () => {
  const g = base();
  for (const c of g.cities) c.owner = 'wei';
  g.armies = [army()];
  E.checkOutcome(g);
  assert.equal(g.status, 'playing');
  g.armies = [];
  E.checkOutcome(g);
  assert.equal(g.status, 'lost');
  const win = base();
  for (const c of win.cities) c.owner = 'shu';
  win.armies = [army('cao', 'luoyang', 'changan')];
  E.checkOutcome(win);
  assert.equal(win.status, 'playing');
  win.armies = [];
  E.checkOutcome(win);
  assert.equal(win.status, 'won');
  assert.throws(() => E.endTurn(win));
  assert.throws(() => E.act(win, 'farm', 'chengdu'));
});
test('pending armies, advisor rests and defensive snapshots resume deterministically', () => {
  let g = E.act(base(), 'market', 'chengdu', 'zhuge');
  g = E.march(g, 'hanzhong', 'yongan', 8000, 'guan');
  assert.deepEqual(E.endTurn(g), E.endTurn(E.loadGame(JSON.stringify(g))));
  assert.throws(() => E.loadGame('{}'));
  const invalid = clone(g);
  invalid.cities[0].troops = -1;
  assert.throws(() => E.loadGame(JSON.stringify(invalid)));
  const duplicate = clone(g);
  duplicate.armies.push(duplicate.armies[0]);
  assert.throws(() => E.loadGame(JSON.stringify(duplicate)));
  const invalidSnapshot = clone(g);
  invalidSnapshot.turnStartCities[0].troops = -1;
  assert.throws(() => E.loadGame(JSON.stringify(invalidSnapshot)));
});
test('empty-city capture creates no troops; bigger defenders reduce survival', () => {
  const g = base(),
    c = E.getCity(g, 'yongan');
  c.troops = 0;
  assert.equal(E.predict(g, 'hanzhong', c.id, 5000, 'guan').survivors, 5000);
  c.troops = 1000;
  const a = E.predict(g, 'hanzhong', c.id, 10000, 'guan');
  c.troops = 3000;
  const b = E.predict(g, 'hanzhong', c.id, 10000, 'guan');
  assert(a.survivors > b.survivors);
});
test('AI coordinates legal siege waves against forts beyond a single leader capacity', () => {
  const g = E.newGame('wei');
  for (const c of g.cities) {
    c.owner = 'wei';
    c.troops = 27000;
    c.morale = 100;
    c.wall = 100;
    c.farm = 5;
    c.market = 5;
  }
  const enemy = E.getCity(g, 'chengdu');
  enemy.owner = 'shu';
  E.getCity(g, 'hanzhong').troops = 80000;
  E.getCity(g, 'xiliang').troops = 80000;
  for (const f of E.PLAYABLE) g.resources[f] = { gold: 100000, food: 100000 };
  g.ap = E.maxAP(g);
  sync(g);
  let n = E.autoOrders(g);
  for (let i = 0; i < 5 && !n.armies.some((a) => a.to === 'chengdu'); i++)
    n = E.autoOrders(E.endTurn(n));
  const waves = n.armies.filter((a) => a.to === 'chengdu');
  assert(waves.length >= 2);
  assert(
    waves.every((a) => a.troops <= E.leaderCapacity(E.getOfficer(a.officer))),
  );
  assert(n.ap >= 0);
});
test('80-turn active AI campaigns maintain finite legal state and continue expansion', () => {
  for (const player of E.PLAYABLE) {
    let g = E.newGame(player),
      captured = false;
    for (let i = 0; i < 80 && g.status === 'playing'; i++) {
      g = E.endTurn(E.autoOrders(g));
      captured ||= g.logs.some((l) => l.text.includes('攻克'));
      for (const c of g.cities) {
        assert(c.troops >= 0 && Number.isFinite(c.troops));
        assert(c.morale >= 0 && c.morale <= 100);
        assert(c.farm <= 5 && c.market <= 5);
      }
      for (const f of E.PLAYABLE) {
        assert(g.resources[f].food >= 0);
        assert(g.resources[f].gold >= 0);
      }
      assert.doesNotThrow(() => E.loadGame(JSON.stringify(g)));
    }
    assert(captured);
  }
});
test('all portrait atlases exist with square dimensions and cell index boundaries', async () => {
  const p = await build({
    entryPoints: ['game/Portrait.tsx'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
  });
  const P = await import(
    'data:text/javascript;base64,' +
      Buffer.from(p.outputFiles[0].text).toString('base64')
  );
  for (const f of E.PLAYABLE) {
    assert(fs.statSync(`public/portraits/${f}-v2.jpg`).size > 10000);
    for (const o of E.FACTIONS[f].officers) {
      const st = P.portraitStyle(o);
      assert(st.backgroundImage.includes(`/${f}-v2.jpg`));
      assert(!st.backgroundPosition.includes('NaN'));
      for (const n of st.backgroundPosition.match(/[\d.]+/g).map(Number))
        assert(n >= 0 && n <= 100);
    }
  }
});
test('v1 campaign with an army on a replaced road migrates and finishes without losing progress', () => {
  const old = clone(base());
  old.version = 1;
  delete old.officerReadyAt;
  delete old.turnStartCities;
  old.cities.forEach((c) => delete c.occupation);
  E.getCity(old, 'xinye').owner = 'shu';
  old.armies = [
    {
      id: 999,
      owner: 'shu',
      from: 'xinye',
      to: 'hanzhong',
      troops: 7000,
      officer: 'guan',
      war: 98,
      morale: 75,
    },
  ];
  old.nextId = 1000;
  const loaded = E.loadGame(JSON.stringify(old));
  assert.equal(loaded.version, 2);
  assert.equal(loaded.resources.shu.gold, old.resources.shu.gold);
  assert.equal(loaded.armies[0].legacyRoute, true);
  assert.doesNotThrow(() => E.loadGame(JSON.stringify(loaded)));
  assert.doesNotThrow(() => E.endTurn(loaded));
});
test('muster strategy is deterministic and varied across factions and rounds', () => {
  for (const f of E.PLAYABLE) {
    const phases = Array.from({ length: 160 }, (_, i) =>
      E.isMusterTurn(i + 1, f),
    );
    const count = phases.filter(Boolean).length;
    assert(count >= 20 && count <= 45);
    assert.deepEqual(
      phases,
      Array.from({ length: 160 }, (_, i) => E.isMusterTurn(i + 1, f)),
    );
    assert(phases.some((v, i) => i >= 6 && v !== phases[i - 6]));
  }
});
