import { ROSTERS, ALL_OFFICERS, type Officer } from './officers';
export { ALL_OFFICERS };
export type { Officer };
export type FactionId = 'wei' | 'shu' | 'wu' | 'qun';
export type Playable = Exclude<FactionId, 'qun'>;
export type Action = 'farm' | 'market' | 'recruit' | 'train' | 'wall';
export type City = {
  id: string;
  name: string;
  x: number;
  y: number;
  owner: FactionId;
  troops: number;
  farm: number;
  market: number;
  morale: number;
  wall: number;
  occupation: number;
};
export type Army = {
  id: number;
  owner: Playable;
  from: string;
  to: string;
  troops: number;
  officer: string;
  legacyRoute?: boolean;
  war: number;
  command: number;
  int: number;
  morale: number;
};
export type Log = {
  id: number;
  turn: number;
  text: string;
  kind: 'info' | 'good' | 'war';
};
export type Game = {
  version: 2;
  player: Playable;
  turn: number;
  ap: number;
  cities: City[];
  turnStartCities: City[];
  armies: Army[];
  resources: Record<Playable, { gold: number; food: number }>;
  logs: Log[];
  nextId: number;
  officerReadyAt: Record<string, number>;
  status: 'playing' | 'won' | 'lost';
};
export const FACTIONS = {
  wei: {
    name: '曹操',
    title: '中原雄主',
    seal: '曹',
    color: '#79a8d3',
    desc: '中原三城，名臣猛将兼备，内政与统军皆有所长。',
    capital: 'xuchang',
    motto: '挟天子以令诸侯',
    officers: ROSTERS.wei,
  },
  shu: {
    name: '刘备',
    title: '汉室之胄',
    seal: '刘',
    color: '#76bb98',
    desc: '西部三城，勇将云集，可经永安东向争夺荆州。',
    capital: 'chengdu',
    motto: '惟贤惟德，能服于人',
    officers: ROSTERS.shu,
  },
  wu: {
    name: '孙权',
    title: '江东之虎',
    seal: '孙',
    color: '#d37c6c',
    desc: '江淮三城，名帅善谋，可从江夏与下邳两面进取。',
    capital: 'jianye',
    motto: '江东子弟多才俊',
    officers: ROSTERS.wu,
  },
  qun: { name: '群雄', title: '割据势力', seal: '袁', color: '#b6a688' },
} as const;
export const PLAYABLE: Playable[] = ['wei', 'shu', 'wu'];
export const BALANCE = {
  version: '2.0 · 百将风云',
  recruits: 2500,
  recruitCap: 40000,
  restTurns: 2,
  retreatBase: 0.16,
};
const cityData: [string, string, number, number, FactionId, number][] = [
  ['xiliang', '西凉', 14, 19, 'shu', 9000],
  ['changan', '长安', 29, 33, 'qun', 6000],
  ['luoyang', '洛阳', 43, 28, 'wei', 11000],
  ['yecheng', '邺城', 63, 16, 'wei', 9000],
  ['xuchang', '许昌', 57, 39, 'wei', 16000],
  ['xiapi', '下邳', 81, 35, 'wu', 9000],
  ['hanzhong', '汉中', 22, 47, 'shu', 11000],
  ['xinye', '新野', 47, 51, 'qun', 7500],
  ['xiangyang', '襄阳', 46, 65, 'qun', 7500],
  ['jiangxia', '江夏', 64, 61, 'qun', 6000],
  ['jiangling', '江陵', 49, 81, 'qun', 7500],
  ['jianye', '建业', 84, 57, 'wu', 16000],
  ['chaisang', '柴桑', 74, 77, 'wu', 11000],
  ['yongan', '永安', 32, 74, 'qun', 6000],
  ['chengdu', '成都', 13, 67, 'shu', 16000],
];
export const ROADS: [string, string][] = [
  ['xuchang', 'luoyang'],
  ['xuchang', 'yecheng'],
  ['luoyang', 'changan'],
  ['yecheng', 'changan'],
  ['chengdu', 'hanzhong'],
  ['chengdu', 'xiliang'],
  ['hanzhong', 'yongan'],
  ['xiliang', 'yongan'],
  ['jianye', 'chaisang'],
  ['jianye', 'xiapi'],
  ['chaisang', 'jiangxia'],
  ['xiapi', 'jiangxia'],
  ['changan', 'xinye'],
  ['changan', 'xiangyang'],
  ['yongan', 'xiangyang'],
  ['yongan', 'jiangling'],
  ['jiangxia', 'jiangling'],
  ['jiangxia', 'xinye'],
  ['xinye', 'xiangyang'],
  ['xiangyang', 'jiangling'],
  ['jiangling', 'xinye'],
];
const LEGACY_ROADS: [string, string][] = [
  ['xiliang', 'changan'],
  ['xiliang', 'hanzhong'],
  ['changan', 'luoyang'],
  ['changan', 'hanzhong'],
  ['luoyang', 'yecheng'],
  ['luoyang', 'xuchang'],
  ['yecheng', 'xiapi'],
  ['xuchang', 'xiapi'],
  ['xuchang', 'xinye'],
  ['xiapi', 'jianye'],
  ['hanzhong', 'chengdu'],
  ['hanzhong', 'xinye'],
  ['hanzhong', 'yongan'],
  ['xinye', 'xiangyang'],
  ['xinye', 'jiangxia'],
  ['xiangyang', 'jiangxia'],
  ['xiangyang', 'jiangling'],
  ['jiangxia', 'jianye'],
  ['jiangxia', 'chaisang'],
  ['jiangling', 'chaisang'],
  ['jiangling', 'yongan'],
  ['jianye', 'chaisang'],
  ['yongan', 'chengdu'],
];
const legacyConnected = (from: string, to: string) =>
  LEGACY_ROADS.some(
    ([a, b]) => (a === from && b === to) || (b === from && a === to),
  );
export const ACTIONS: Record<
  Action,
  { name: string; gold: number; food: number; description: string }
> = {
  farm: {
    name: '开垦农田',
    gold: 850,
    food: 0,
    description: '农业 +1 · 每回合军粮 +500',
  },
  market: {
    name: '发展商贸',
    gold: 1000,
    food: 0,
    description: '商业 +1 · 每回合金钱 +180',
  },
  recruit: {
    name: '征募兵卒',
    gold: 650,
    food: 1500,
    description: '驻军 +2,500 · 新兵稀释士气',
  },
  train: {
    name: '操练军队',
    gold: 450,
    food: 450,
    description: '士气 +12 · 提高全军战力',
  },
  wall: {
    name: '修筑城防',
    gold: 650,
    food: 0,
    description: '城防 +12 · 增强据城防御',
  },
};
const clone = (g: Game): Game => JSON.parse(JSON.stringify(g));
export const neighbors = (id: string) =>
  ROADS.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));
export const getCity = (g: Game, id: string) =>
  g.cities.find((c) => c.id === id)!;
export const owned = (g: Game, owner: FactionId) =>
  g.cities.filter((c) => c.owner === owner);
export const maxAP = (g: Game, owner: Playable = g.player) =>
  Math.min(5, 3 + Math.floor(Math.max(0, owned(g, owner).length - 3) / 5));
export const getOfficer = (id: string) => ALL_OFFICERS.find((o) => o.id === id);
export const officerAvailable = (g: Game, id: string) =>
  (g.officerReadyAt[id] || 0) <= g.turn &&
  !g.armies.some((a) => a.officer === id);
export const restRemaining = (g: Game, id: string) =>
  Math.max(0, (g.officerReadyAt[id] || 0) - g.turn);
export const combatSkill = (o: Pick<Officer, 'command' | 'war' | 'int'>) =>
  o.command * 0.45 + o.war * 0.35 + o.int * 0.2;
export const leaderCapacity = (o: Pick<Officer, 'command'>) =>
  Math.round((8000 + o.command * 100) / 500) * 500;
export const marchFood = (troops: number, o: Pick<Officer, 'int'>) =>
  Math.ceil(troops * 0.22 * (1 - o.int * 0.002));
export const attackPower = (
  troops: number,
  o: Pick<Officer, 'command' | 'war' | 'int'>,
  morale: number,
) => troops * (0.62 + combatSkill(o) * 0.0065) * (0.65 + morale * 0.0045);
export const defensePower = (c: City) =>
  c.troops * (1 + c.wall / 220) * (0.65 + c.morale * 0.0045);
function log(g: Game, text: string, kind: Log['kind'] = 'info') {
  g.logs.unshift({ id: g.nextId++, turn: g.turn, text, kind });
  g.logs = g.logs.slice(0, 100);
}
function reserve(g: Game, id: string) {
  g.officerReadyAt[id] = g.turn + BALANCE.restTurns;
}
export function income(g: Game, owner: Playable = g.player) {
  const cities = owned(g, owner);
  const troops =
    cities.reduce((n, c) => n + c.troops, 0) +
    g.armies.filter((a) => a.owner === owner).reduce((n, a) => n + a.troops, 0);
  const administration = 1 / (1 + 0.045 * Math.max(0, cities.length - 3));
  return {
    gold: Math.floor(
      cities.reduce(
        (n, c) => n + (240 + c.market * 180) * (c.occupation > 0 ? 0.5 : 1),
        0,
      ) * administration,
    ),
    food:
      Math.floor(
        cities.reduce(
          (n, c) => n + (1100 + c.farm * 500) * (c.occupation > 0 ? 0.5 : 1),
          0,
        ),
      ) - Math.ceil(troops * 0.055),
  };
}
export function newGame(player: Playable = 'shu'): Game {
  const g: Game = {
    version: 2,
    player,
    turn: 1,
    ap: 3,
    cities: cityData.map(([id, name, x, y, owner, troops]) => ({
      id,
      name,
      x,
      y,
      owner,
      troops,
      farm: 1,
      market: 1,
      morale: 75,
      wall: 35,
      occupation: 0,
    })),
    turnStartCities: [],
    armies: [],
    resources: {
      wei: { gold: 4200, food: 18000 },
      shu: { gold: 4200, food: 18000 },
      wu: { gold: 4200, food: 18000 },
    },
    logs: [],
    nextId: 1,
    officerReadyAt: {},
    status: 'playing',
  };
  g.turnStartCities = JSON.parse(JSON.stringify(g.cities));
  log(
    g,
    `百将风云 · ${FACTIONS[player].name}领三城、三万六千兵起兵。108 位武将各展所长。`,
    'good',
  );
  return g;
}
export function advisor(
  g: Game,
  type: Action,
  owner: Playable = g.player,
  chosen?: string,
): Officer | undefined {
  if (chosen && chosen !== 'auto')
    return FACTIONS[owner].officers.find(
      (o) => o.id === chosen && officerAvailable(g, o.id),
    );
  const score = (o: Officer) =>
    type === 'farm' || type === 'market'
      ? o.int
      : type === 'wall'
        ? o.command * 0.5 + o.int * 0.5
        : type === 'train'
          ? o.command * 0.5 + o.war * 0.5
          : o.command * 0.7 + o.int * 0.3;
  return FACTIONS[owner].officers
    .filter((o) => officerAvailable(g, o.id))
    .sort((a, b) => score(b) - score(a) || a.id.localeCompare(b.id))[0];
}
export function actionQuote(
  g: Game,
  type: Action,
  id: string,
  owner: Playable = g.player,
  chosen?: string,
) {
  const officer = advisor(g, type, owner, chosen),
    city = getCity(g, id),
    base = ACTIONS[type];
  const level =
    type === 'farm'
      ? city?.farm || 1
      : type === 'market'
        ? city?.market || 1
        : 1;
  const discount = officer
    ? Math.min(0.2, Math.max(0, officer.int - 50) * 0.004)
    : 0;
  const scale =
    type === 'farm' || type === 'market' ? 1 + 0.2 * (level - 1) : 1;
  return {
    officer,
    gold: Math.ceil(base.gold * scale * (1 - discount)),
    food: base.food,
    discount: Math.round(discount * 100),
  };
}
export function actionError(
  g: Game,
  type: Action,
  id: string,
  owner: Playable = g.player,
  ap = g.ap,
  chosen?: string,
): string | null {
  if (!ACTIONS[type]) return '未知城池指令。';
  const c = g.cities.find((c) => c.id === id);
  if (g.status !== 'playing') return '战局已结束，请另启新局。';
  if (!c || c.owner !== owner) return '只能向己方城池下令。';
  if (ap < 1) return '本回合政令已用尽。';
  const q = actionQuote(g, type, id, owner, chosen),
    r = g.resources[owner];
  if (!q.officer) return '没有可执行指令的待命武将。';
  if (r.gold < q.gold || r.food < q.food) return '钱粮不足，请等待下回合产出。';
  if ((type === 'farm' && c.farm >= 5) || (type === 'market' && c.market >= 5))
    return '已达到五级上限。';
  if (type === 'train' && c.morale >= 100) return '士气已满。';
  if (type === 'wall' && c.wall >= 100) return '城防已满。';
  if (type === 'recruit' && c.troops + BALANCE.recruits > BALANCE.recruitCap)
    return '本城征兵上限四万，剩余位置不足2,500人。';
  return null;
}
function perform(
  g: Game,
  type: Action,
  c: City,
  owner: Playable,
  chosen?: string,
) {
  const q = actionQuote(g, type, c.id, owner, chosen);
  g.resources[owner].gold -= q.gold;
  g.resources[owner].food -= q.food;
  reserve(g, q.officer!.id);
  if (type === 'farm') c.farm++;
  if (type === 'market') c.market++;
  if (type === 'recruit') {
    c.morale = Math.min(
      c.morale,
      Math.round(
        (c.troops * c.morale + BALANCE.recruits * 50) /
          (c.troops + BALANCE.recruits),
      ),
    );
    c.troops += BALANCE.recruits;
  }
  if (type === 'train') c.morale = Math.min(100, c.morale + 12);
  if (type === 'wall') c.wall = Math.min(100, c.wall + 12);
  return q;
}
export function act(
  game: Game,
  type: Action,
  id: string,
  chosen?: string,
): Game {
  const error = actionError(game, type, id, game.player, game.ap, chosen);
  if (error) throw new Error(error);
  const g = clone(game),
    c = getCity(g, id);
  const q = perform(g, type, c, g.player, chosen);
  g.ap--;
  log(
    g,
    `${q.officer!.name}在${c.name}${ACTIONS[type].name}，${ACTIONS[type].description.split(' · ')[0]}，耗金${q.gold}。`,
    'good',
  );
  return g;
}
export function predict(
  g: Game,
  from: string,
  to: string,
  troops: number,
  officerId: string,
) {
  const c = getCity(g, from),
    d = getCity(g, to),
    o = getOfficer(officerId);
  if (!c || !d || !o)
    return {
      ratio: 0,
      win: false,
      survivors: 0,
      defenderSurvivors: 0,
      retreat: 0,
    };
  return combatResult(troops, o, c.morale, d);
}
export function combatResult(
  troops: number,
  o: Pick<Officer, 'command' | 'war' | 'int'>,
  morale: number,
  target: City,
) {
  const attack = attackPower(troops, o, morale),
    defense = defensePower(target),
    win = attack > defense;
  return {
    ratio: attack / Math.max(1, defense),
    win,
    survivors: win
      ? Math.max(
          1,
          Math.floor(troops * (1 - (0.65 * defense) / Math.max(1, attack))),
        )
      : 0,
    defenderSurvivors: win
      ? 0
      : Math.max(
          1,
          Math.floor(
            target.troops * (1 - (0.55 * attack) / Math.max(1, defense)),
          ),
        ),
    retreat: win
      ? 0
      : Math.floor(troops * (BALANCE.retreatBase + o.int * 0.0014)),
  };
}
export function marchError(
  g: Game,
  from: string,
  to: string,
  troops: number,
  officerId: string,
  owner: Playable = g.player,
  ap = g.ap,
): string | null {
  if (g.status !== 'playing') return '战局已结束。';
  if (ap < 1) return '政令不足。';
  const c = g.cities.find((c) => c.id === from),
    target = g.cities.find((c) => c.id === to);
  if (!c || c.owner !== owner || !target) return '出发城池无效。';
  if (!neighbors(from).includes(to)) return '只能行军至道路相连的城池。';
  if (!Number.isInteger(troops) || troops < 1000 || troops > c.troops - 1000)
    return '至少出兵一千，且须留守一千兵卒。';
  const o = FACTIONS[owner].officers.find((o) => o.id === officerId);
  if (!o || !officerAvailable(g, officerId))
    return '该武将正在执行军令或休整。';
  if (troops > leaderCapacity(o))
    return `${o.name}最多统领${leaderCapacity(o).toLocaleString()}兵，请分兵出征。`;
  if (g.resources[owner].food < marchFood(troops, o)) return '出征军粮不足。';
  return null;
}
function dispatch(
  g: Game,
  from: string,
  to: string,
  troops: number,
  officerId: string,
  owner: Playable,
) {
  const c = getCity(g, from),
    o = getOfficer(officerId)!;
  c.troops -= troops;
  g.resources[owner].food -= marchFood(troops, o);
  reserve(g, officerId);
  g.armies.push({
    id: g.nextId++,
    owner,
    from,
    to,
    troops,
    officer: officerId,
    war: o.war,
    command: o.command,
    int: o.int,
    morale: c.morale,
  });
  log(
    g,
    `${FACTIONS[owner].name}军 · ${o.name}率${troops.toLocaleString()}兵，自${c.name}进军${getCity(g, to).name}。`,
    'war',
  );
}
export function march(
  game: Game,
  from: string,
  to: string,
  troops: number,
  officerId: string,
): Game {
  const error = marchError(game, from, to, troops, officerId);
  if (error) throw new Error(error);
  const g = clone(game);
  dispatch(g, from, to, troops, officerId, g.player);
  g.ap--;
  return g;
}
export function planningGarrison(g: Game, target: City): City {
  const start = g.turnStartCities?.find(
    (c) => c.id === target.id && c.owner === target.owner,
  );
  // Every faction plans from the same visible start-of-turn defensive information.
  if (start)
    return {
      ...target,
      troops: start.troops,
      morale: start.morale,
      wall: start.wall,
    };
  return {
    ...target,
    troops:
      target.troops +
      g.armies
        .filter((a) => a.from === target.id && a.owner === target.owner)
        .reduce((n, a) => n + a.troops, 0),
  };
}
function projectedTarget(g: Game, target: City, owner: Playable): City {
  const result = planningGarrison(g, target);
  for (const a of g.armies.filter(
    (a) => a.to === target.id && a.owner === owner,
  )) {
    if (result.owner === owner) result.troops += a.troops;
    else {
      const r = combatResult(a.troops, a, a.morale, result);
      result.troops = r.win ? r.survivors : r.defenderSurvivors;
      if (r.win) {
        result.owner = owner;
        result.wall = Math.max(10, result.wall - 20);
        result.morale = Math.max(35, a.morale - 6);
      } else result.wall = Math.max(0, result.wall - 6);
    }
  }
  return result;
}
type SiegeOrder = { from: string; to: string; troops: number; officer: string };
function coordinatedSiege(
  g: Game,
  owner: Playable,
  target: City,
  budget: number,
): SiegeOrder[] {
  if (budget < 2) return [];
  const estimate = projectedTarget(g, target, owner);
  if (estimate.owner === owner) return [];
  const sources = owned(g, owner).filter((c) =>
    neighbors(c.id).includes(target.id),
  );
  const remaining = new Map(sources.map((c) => [c.id, c.troops]));
  const officers = FACTIONS[owner].officers
    .filter((o) => officerAvailable(g, o.id))
    .sort((a, b) => combatSkill(b) - combatSkill(a));
  const orders: SiegeOrder[] = [];
  let food = g.resources[owner].food;
  for (const o of officers) {
    if (orders.length >= budget) break;
    const source = sources
      .slice()
      .sort((a, b) => remaining.get(b.id)! - remaining.get(a.id)!)[0];
    if (!source) break;
    const n =
      Math.floor(
        Math.min(remaining.get(source.id)! - 4000, leaderCapacity(o)) / 500,
      ) * 500;
    if (n < 3500) break;
    const cost = marchFood(n, o);
    if (cost > food) continue;
    orders.push({ from: source.id, to: target.id, troops: n, officer: o.id });
    remaining.set(source.id, remaining.get(source.id)! - n);
    food -= cost;
    const outcome = combatResult(n, o, source.morale, estimate);
    if (outcome.win) return orders.length >= 2 ? orders : [];
    estimate.troops = outcome.defenderSurvivors;
    estimate.wall = Math.max(0, estimate.wall - 6);
  }
  return [];
}
export function isMusterTurn(turn: number, owner: Playable) {
  let seed = (turn + PLAYABLE.indexOf(owner) * 1337) >>> 0;
  seed = Math.imul(seed ^ (seed >>> 16), 0x21f0aaad);
  seed = Math.imul(seed ^ (seed >>> 15), 0x735a2d97);
  return ((seed ^ (seed >>> 15)) >>> 0) % 100 < 20;
}
function ai(g: Game, owner: Playable, budget = maxAP(g, owner)) {
  if (!owned(g, owner).length) return;
  const muster = isMusterTurn(g.turn, owner);
  let used = 0;
  for (let ap = budget; ap > 0; ap--) {
    const officers = FACTIONS[owner].officers
      .filter((o) => officerAvailable(g, o.id))
      .sort(
        (a, b) => combatSkill(b) - combatSkill(a) || a.id.localeCompare(b.id),
      );
    const cities = owned(g, owner).sort(
      (a, b) => b.troops - a.troops || a.id.localeCompare(b.id),
    );
    const frontier = cities.filter((c) =>
      neighbors(c.id).some((id) => getCity(g, id).owner !== owner),
    );
    let did = false;
    // Logistics has priority when the food balance cannot support another wave.
    const inc = income(g, owner);
    if (g.resources[owner].food < 5000 || inc.food < 0) {
      const c = cities
        .slice()
        .sort((a, b) => a.farm - b.farm)
        .find((c) => !actionError(g, 'farm', c.id, owner, ap));
      if (c) {
        perform(g, 'farm', c, owner);
        used++;
        continue;
      }
    }
    for (const c of muster ? [] : frontier) {
      for (const o of officers.slice(0, 8)) {
        const hostile = neighbors(c.id)
          .map((id) => getCity(g, id))
          .filter((t) => t.owner !== owner)
          .sort(
            (a, b) =>
              defensePower(planningGarrison(g, a)) -
              defensePower(planningGarrison(g, b)),
          );
        for (const t of hostile) {
          const estimate = projectedTarget(g, t, owner);
          if (estimate.owner === owner) continue;
          const reserveTroops =
            t.owner === 'qun'
              ? 2000
              : Math.max(
                  3000,
                  Math.min(6500, Math.round((c.troops * 0.23) / 500) * 500),
                );
          const n =
            Math.floor(
              Math.min(c.troops - reserveTroops, leaderCapacity(o)) / 500,
            ) * 500;
          const ratio =
            n > 0 ? combatResult(n, o, c.morale, estimate).ratio : 0;
          const siege =
            c.troops >= leaderCapacity(o) + reserveTroops &&
            ratio >= 0.8 &&
            c.morale >= 72;
          if (
            n >= 3500 &&
            (ratio >= 1.12 || siege) &&
            !marchError(g, c.id, t.id, n, o.id, owner, ap)
          ) {
            dispatch(g, c.id, t.id, n, o.id, owner);
            did = true;
            break;
          }
        }
        if (did) break;
      }
      if (did) break;
    }
    if (did) {
      used++;
      continue;
    }
    const enemyCities = g.cities
      .filter(
        (c) =>
          c.owner !== owner &&
          neighbors(c.id).some((id) => getCity(g, id).owner === owner),
      )
      .sort(
        (a, b) =>
          defensePower(planningGarrison(g, a)) -
          defensePower(planningGarrison(g, b)),
      );
    const siegePlan =
      !muster &&
      enemyCities
        .map((t) => coordinatedSiege(g, owner, t, ap))
        .find((plan) => plan.length > 0);
    if (siegePlan) {
      for (const order of siegePlan)
        dispatch(g, order.from, order.to, order.troops, order.officer, owner);
      used += siegePlan.length;
      ap -= siegePlan.length - 1;
      continue;
    }
    const tired = frontier.find(
      (c) =>
        c.morale < 78 &&
        c.troops >= 8000 &&
        !actionError(g, 'train', c.id, owner, ap),
    );
    if (tired) {
      perform(g, 'train', tired, owner);
      used++;
      continue;
    }
    // Reinforce before recruiting, so rear armies remain useful after fronts move.
    for (const c of cities) {
      if (
        frontier.some((t) => t.id === c.id) ||
        c.troops < 6500 ||
        !officers.length
      )
        continue;
      const queue = [{ id: c.id, path: [] as string[] }],
        seen = new Set([c.id]);
      let step: string | undefined;
      while (queue.length) {
        const node = queue.shift()!;
        if (frontier.some((t) => t.id === node.id)) {
          step = node.path[0];
          break;
        }
        for (const id of neighbors(node.id))
          if (!seen.has(id) && getCity(g, id).owner === owner) {
            seen.add(id);
            queue.push({ id, path: [...node.path, id] });
          }
      }
      const o = officers[0],
        n =
          Math.floor(Math.min(c.troops - 2500, leaderCapacity(o)) / 500) * 500;
      if (step && !marchError(g, c.id, step, n, o.id, owner, ap)) {
        dispatch(g, c.id, step, n, o.id, owner);
        did = true;
        break;
      }
    }
    if (did) {
      used++;
      continue;
    }
    const recruit = frontier
      .slice()
      .sort((a, b) => a.troops - b.troops)
      .find(
        (c) => c.troops < 27000 && !actionError(g, 'recruit', c.id, owner, ap),
      );
    if (recruit) {
      perform(g, 'recruit', recruit, owner);
      used++;
      continue;
    }
    const type: Action =
      g.resources[owner].gold < 2400
        ? 'market'
        : g.turn % 3 === 0
          ? 'wall'
          : 'market';
    const c = cities
      .slice()
      .sort((a, b) => a.market - b.market)
      .find((c) => !actionError(g, type, c.id, owner, ap));
    if (c) {
      perform(g, type, c, owner);
      used++;
    } else break;
  }
  if (owner === g.player) g.ap = Math.max(0, g.ap - used);
}
export function autoOrders(game: Game, owner: Playable = game.player): Game {
  const g = clone(game);
  if (g.status === 'playing')
    ai(g, owner, owner === g.player ? g.ap : maxAP(g, owner));
  return g;
}
export function checkOutcome(g: Game) {
  if (!owned(g, g.player).length && !g.armies.some((a) => a.owner === g.player))
    g.status = 'lost';
  else if (
    owned(g, g.player).length === g.cities.length &&
    !g.armies.some((a) => a.owner !== g.player)
  )
    g.status = 'won';
}
export function endTurn(game: Game): Game {
  if (game.status !== 'playing') throw new Error('战局已结束。');
  const g = clone(game);
  const order = PLAYABLE.slice(g.turn % 3).concat(
    PLAYABLE.slice(0, g.turn % 3),
  );
  for (const f of order) if (f !== g.player) ai(g, f);
  const armies = [...g.armies].sort(
    (a, b) => order.indexOf(a.owner) - order.indexOf(b.owner) || a.id - b.id,
  );
  g.armies = [];
  for (const a of armies) {
    const target = getCity(g, a.to),
      o = getOfficer(a.officer)!;
    if (target.owner === a.owner) {
      const total = target.troops + a.troops;
      target.morale = Math.round(
        (target.troops * target.morale + a.troops * a.morale) / total,
      );
      target.troops = total;
      log(
        g,
        `${o.name}抵达${target.name}，增援${a.troops.toLocaleString()}兵。`,
      );
      continue;
    }
    const result = combatResult(a.troops, a, a.morale, target);
    if (result.win) {
      target.owner = a.owner;
      target.troops = result.survivors;
      target.wall = Math.max(10, target.wall - 20);
      target.morale = Math.max(35, a.morale - 6);
      target.occupation = 2;
      log(
        g,
        `${o.name}攻克${target.name}！余部${result.survivors.toLocaleString()}兵，安民两回合。`,
        a.owner === g.player ? 'good' : 'war',
      );
    } else {
      target.troops = result.defenderSurvivors;
      target.wall = Math.max(0, target.wall - 6);
      const origin = getCity(g, a.from),
        retreatCity =
          origin.owner === a.owner
            ? origin
            : owned(g, a.owner)
                .slice()
                .sort((a, b) => a.troops - b.troops)[0];
      if (retreatCity) {
        const total = retreatCity.troops + result.retreat;
        retreatCity.morale = Math.round(
          (retreatCity.troops * retreatCity.morale +
            result.retreat * Math.max(30, a.morale - 12)) /
            total,
        );
        retreatCity.troops = total;
      }
      log(
        g,
        `${o.name}攻打${target.name}失利${retreatCity ? `，${result.retreat.toLocaleString()}兵撤至${retreatCity.name}` : '，退路断绝'}。`,
        'war',
      );
    }
  }
  for (const f of PLAYABLE) {
    const inc = income(g, f),
      r = g.resources[f];
    r.gold += inc.gold;
    r.food += inc.food;
    if (r.food < 0) {
      r.food = 0;
      for (const c of owned(g, f)) {
        c.troops = Math.floor(c.troops * 0.92);
        c.morale = Math.max(30, c.morale - 8);
      }
      log(g, `${FACTIONS[f].name}粮尽，军队减员8%。`, 'war');
    }
  }
  for (const c of g.cities) c.occupation = Math.max(0, c.occupation - 1);
  g.turn++;
  g.turnStartCities = JSON.parse(JSON.stringify(g.cities));
  g.ap = maxAP(g);
  checkOutcome(g);
  if (g.status === 'won') log(g, '十五城尽归麾下，天下一统！', 'good');
  else if (g.status === 'lost') log(g, '最后一城失守，且待重整旗鼓。', 'war');
  else log(g, `${dateLabel(g.turn)} · 钱粮已入库，休整结束的武将重新待命。`);
  return g;
}
export function dateLabel(turn: number) {
  return `${208 + Math.floor((turn - 1) / 12)}年 · ${['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][(turn - 1) % 12]}月`;
}
export const STORAGE_KEY = 'sanguo-jiangshan-v1';
export function loadGame(raw: string): Game {
  const data = JSON.parse(raw);
  const fail = (): never => {
    throw new Error('存档损坏或版本不兼容。');
  };
  const finite = (v: unknown, min: number, max: number) =>
    typeof v === 'number' &&
    Number.isFinite(v) &&
    Number.isInteger(v) &&
    v >= min &&
    v <= max;
  if (!data || ![1, 2].includes(data.version)) fail();
  const migrated = data.version === 1;
  if (migrated) {
    data.version = 2;
    data.officerReadyAt = {};
    if (Array.isArray(data.cities))
      for (const c of data.cities) c.occupation = 0;
    if (Array.isArray(data.armies))
      for (const a of data.armies) {
        const o = getOfficer(a.officer);
        if (!o) fail();
        a.legacyRoute = legacyConnected(a.from, a.to);
        a.command = o!.command;
        a.int = o!.int;
        data.officerReadyAt[a.officer] = data.turn + 2;
      }
  }
  const g = data as Game;
  if (
    !PLAYABLE.includes(g.player) ||
    !finite(g.turn, 1, 100000) ||
    !finite(g.ap, 0, 6) ||
    !['playing', 'won', 'lost'].includes(g.status) ||
    !finite(g.nextId, 1, 100000000)
  )
    fail();
  if (
    !Array.isArray(g.cities) ||
    g.cities.length !== cityData.length ||
    g.cities.some((c) => !c) ||
    new Set(g.cities.map((c) => c.id)).size !== cityData.length
  )
    fail();
  for (const c of g.cities) {
    const base = cityData.find((d) => d[0] === c.id);
    if (
      !base ||
      !['wei', 'shu', 'wu', 'qun'].includes(c.owner) ||
      !finite(c.troops, 0, 1e8) ||
      !finite(c.farm, 1, 5) ||
      !finite(c.market, 1, 5) ||
      !finite(c.morale, 0, 100) ||
      !finite(c.wall, 0, 100) ||
      !finite(c.occupation, 0, 2)
    )
      fail();
    c.name = base![1];
    c.x = base![2];
    c.y = base![3];
  }
  for (const f of PLAYABLE)
    if (
      !g.resources?.[f] ||
      !finite(g.resources[f].gold, 0, 1e12) ||
      !finite(g.resources[f].food, 0, 1e12)
    )
      fail();
  if (
    !g.officerReadyAt ||
    typeof g.officerReadyAt !== 'object' ||
    Array.isArray(g.officerReadyAt)
  )
    fail();
  for (const [id, turn] of Object.entries(g.officerReadyAt))
    if (!getOfficer(id) || !finite(turn, 0, g.turn + 2)) fail();
  if (!Array.isArray(g.armies) || g.armies.length > 108) fail();
  for (const a of g.armies) {
    if (
      !a ||
      !PLAYABLE.includes(a.owner) ||
      (!neighbors(a.from).includes(a.to) &&
        !(a.legacyRoute === true && legacyConnected(a.from, a.to))) ||
      !finite(a.troops, 1000, 1e8) ||
      !finite(a.id, 1, 1e8) ||
      !finite(a.war, 0, 100) ||
      !finite(a.command, 0, 100) ||
      !finite(a.int, 0, 100) ||
      !finite(a.morale, 0, 100) ||
      !FACTIONS[a.owner].officers.some((o) => o.id === a.officer)
    )
      fail();
  }
  if (
    new Set(g.armies.map((a) => a.officer)).size !== g.armies.length ||
    new Set(g.armies.map((a) => a.id)).size !== g.armies.length
  )
    fail();
  if (
    !Array.isArray(g.logs) ||
    g.logs.length > 100 ||
    g.logs.some(
      (l) =>
        !l ||
        !finite(l.id, 1, 1e8) ||
        !finite(l.turn, 1, 100000) ||
        typeof l.text !== 'string' ||
        l.text.length > 400 ||
        !['info', 'good', 'war'].includes(l.kind),
    )
  )
    fail();
  if (!g.turnStartCities) {
    g.turnStartCities = g.cities.map((c) => ({
      ...c,
      troops:
        c.troops +
        g.armies
          .filter((a) => a.from === c.id && a.owner === c.owner)
          .reduce((n, a) => n + a.troops, 0),
    }));
  }
  if (
    !Array.isArray(g.turnStartCities) ||
    g.turnStartCities.length !== g.cities.length ||
    new Set(g.turnStartCities.map((c) => c?.id)).size !== g.cities.length
  )
    fail();
  for (const c of g.turnStartCities) {
    if (
      !c ||
      !g.cities.some((t) => t.id === c.id) ||
      !['wei', 'shu', 'wu', 'qun'].includes(c.owner) ||
      !finite(c.troops, 0, 1e8) ||
      !finite(c.morale, 0, 100) ||
      !finite(c.wall, 0, 100)
    )
      fail();
  }
  g.ap = Math.min(g.ap, maxAP(g));
  if (migrated)
    log(
      g,
      '旧战局已保留，108位武将与新规则现已生效；新开局采用三方均衡配置。',
      'good',
    );
  return g;
}
