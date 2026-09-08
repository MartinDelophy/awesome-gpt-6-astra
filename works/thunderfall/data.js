// Original campaign and balance data. Runtime mechanics live in engine.js.
export const WIDTH = 480;
export const HEIGHT = 800;
export const STAGE_SECONDS = 120;
export const BOSS_AT = 88;
export const DROP_TTL = 10;

export const SHIPS = [
  {
    id: 0,
    name: '鹰隼',
    code: 'F-01',
    role: '高速均衡型',
    description: '灵活转向，均衡火力。适合穿梭弹幕、追逐补给。',
    color: '#77e8ff',
    health: 5,
    shield: 2,
    speed: 330,
    damage: 1,
    fireRate: 1,
    bombStock: 2,
  },
  {
    id: 1,
    name: '棱镜',
    code: 'P-02',
    role: '高能突击型',
    description: '火力更强，装甲较轻。把握攻击窗口击穿机群。',
    color: '#c7a3ff',
    health: 4,
    shield: 2,
    speed: 300,
    damage: 1.08,
    fireRate: 1,
    bombStock: 2,
  },
  {
    id: 2,
    name: '堡垒',
    code: 'B-03',
    role: '重装生存型',
    description: '厚重装甲，额外炸弹。用持久生存换取反击机会。',
    color: '#ffc875',
    health: 7,
    shield: 3,
    speed: 260,
    damage: 0.9,
    fireRate: 0.95,
    bombStock: 3,
  },
];

// Weights describe weapon selection conditional on an enemy dropping a weapon.
// The runtime separately decides whether the enemy drops anything at all.
export const WEAPONS = {
  pulse: {
    name: '风暴脉冲',
    rarity: '蓝色',
    color: '#69b9ff',
    label: 'P',
    description: '扇形散射覆盖宽阔空域，适合清理分散敌机。',
    weight: 0.48,
  },
  laser: {
    name: '翡翠光束',
    rarity: '绿色',
    color: '#7af0b8',
    label: 'L',
    description: '高能激光穿透前后目标，适合纵向机群与首领。',
    weight: 0.28,
  },
  arc: {
    name: '紫电追猎',
    rarity: '紫色',
    color: '#c795ff',
    label: 'A',
    description: '追踪弹转向寻找敌机，让闪避时也能持续输出。',
    weight: 0.18,
  },
  nova: {
    name: '日冕新星',
    rarity: '金色',
    color: '#ffd36b',
    label: 'N',
    description: '爆裂弹制造范围伤害，适合击破密集阵列。',
    weight: 0.06,
  },
};

export const STAGES = [
  {
    name: '晨曦海港',
    enName: 'DAWN HARBOR',
    bossName: '裂翼巡航舰',
    color: '#68ced9',
    description: '从深青色海港升空，在斥候编队与扇形弹幕中打开航路。',
    bossHp: 6000,
    theme: 'coast',
    tip: '机身中央的小光点才是受击核心。自动开火时专注移动。',
  },
  {
    name: '翡翠峡谷',
    enName: 'EMERALD CANYON',
    bossName: '峡谷织网者',
    color: '#87e4a7',
    description: '穿越层叠绿谷，辨认会横向漂移的电弧弹。',
    bossHp: 10500,
    theme: 'canyon',
    tip: '漂移弹会改变横向位置。保留侧向空间，避免贴死边缘。',
  },
  {
    name: '冰川阵列',
    enName: 'FROST ARRAY',
    bossName: '寒霜裁决者',
    color: '#a7e6ff',
    description: '掠过冰蓝色阵列，在预警线亮起时躲开激光封锁。',
    bossHp: 16500,
    theme: 'ice',
    tip: '激光先预警再发射；预警期间离开射线，别等光束点亮。',
  },
  {
    name: '熔核工厂',
    enName: 'MOLTEN FOUNDRY',
    bossName: '熔核双生体',
    color: '#ff946b',
    description: '冲入橘红色熔核工厂，在加速弹阵与交错漂移弹之间寻路。',
    bossHp: 22000,
    theme: 'foundry',
    tip: '本关首领的激光会扫动。预警后继续观察光束方向，保留侧移空间。',
  },
  {
    name: '天穹核心',
    enName: 'SKY REACTOR',
    bossName: '天穹·终焉引擎',
    color: '#ffd277',
    description: '驶入暗金色深空核心，应对激光、漂移弹与多阶段首领的合围。',
    bossHp: 28000,
    theme: 'core',
    tip: '炸弹可以解围。留意充能与护盾，在安全窗口集中输出。',
  },
];

export const UPGRADES = [
  { id: 'damage', name: '高能弹头', description: '武器伤害 +15%。', tag: '火力' },
  { id: 'fireRate', name: '超频炮组', description: '射速 +12%。', tag: '火力' },
  { id: 'hull', name: '复合装甲', description: '机体上限 +1，并修复 2 点机体。', tag: '生存' },
  { id: 'shield', name: '相位护盾', description: '护盾上限 +1，并补满护盾。', tag: '生存' },
  { id: 'magnet', name: '牵引力场', description: '补给吸附范围 +32 像素。', tag: '补给' },
  { id: 'wingmen', name: '僚机编队', description: '增加 1 架协同射击的僚机，最多 2 架。', tag: '支援' },
  { id: 'bomb', name: '应急军备', description: '补充 2 枚炸弹，库存最多 5 枚。', tag: '支援' },
  { id: 'reactor', name: '聚能反应堆', description: '擦弹与击杀获得的充能 +30%。', tag: '充能' },
];
