export type Vec3 = [number, number, number];
export type LockPiece = {
  id: number;
  name: string;
  axis: number;
  cells: Vec3[];
  color: string;
};
export type BoardPiece = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
export type GameId = 'lock' | 'huarong-easy' | 'huarong-classic';
export type Snapshot = {
  removed: number[];
  exits: Record<number, number>;
  board: BoardPiece[];
  moves: number;
};
export const NAMES: Record<string, string> = {
  cao: '曹操',
  guan: '关羽',
  zhang: '张飞',
  zhao: '赵云',
  ma: '马超',
  huang: '黄忠',
  bing1: '甲兵',
  bing2: '乙兵',
  bing3: '丙兵',
  bing4: '丁兵',
};
export const GAMES = [
  {
    id: 'lock' as GameId,
    title: '六合 · 孔明锁',
    label: '01 / INTERLOCK',
    desc: '六木相交，一隙可解',
    difficulty: 2,
    level: '空间 · 进阶',
    objective: '找到关键木，依次取出全部六根木块。',
    stage: '六 木 成 器',
    english: 'SIX PIECES. ONE WAY THROUGH.',
  },
  {
    id: 'huarong-easy' as GameId,
    title: '初见 · 华容道',
    label: '02 / FIRST STEPS',
    desc: '方寸之间，初探进退',
    difficulty: 1,
    level: '推理 · 入门',
    objective: '移动棋子，让曹操抵达下方中央出口。',
    stage: '方 寸 之 间',
    english: 'MAKE ROOM. FIND YOUR WAY.',
  },
  {
    id: 'huarong-classic' as GameId,
    title: '横刀 · 华容道',
    label: '03 / THE CLASSIC',
    desc: '横刀立马，步步为营',
    difficulty: 3,
    level: '推理 · 挑战',
    objective: '经典横刀立马布局，让曹操抵达出口。',
    stage: '步 步 为 营',
    english: 'A SMALL BOARD. A GRAND STRATEGY.',
  },
];
export function canSlide(
  board: BoardPiece[],
  id: string,
  dx: number,
  dy: number,
) {
  if (Math.abs(dx) + Math.abs(dy) !== 1) return false;
  const p = board.find((p) => p.id === id);
  if (!p) return false;
  const x = p.x + dx,
    y = p.y + dy;
  if (x < 0 || y < 0 || x + p.w > 4 || y + p.h > 5) return false;
  return !board.some(
    (q) =>
      q.id !== id &&
      x < q.x + q.w &&
      x + p.w > q.x &&
      y < q.y + q.h &&
      y + p.h > q.y,
  );
}
export function solvedBoard(board: BoardPiece[]) {
  return board.some((p) => p.id === 'cao' && p.x === 1 && p.y === 3);
}
export function canRemove(
  pieces: LockPiece[],
  removed: number[],
  id: number,
  sign: number,
) {
  const p = pieces.find((p) => p.id === id);
  if (!p || removed.includes(id)) return { ok: false, blocker: null };
  const occupied = new Map<string, number>();
  for (const q of pieces)
    if (q.id !== id && !removed.includes(q.id))
      for (const c of q.cells) occupied.set(c.join(','), q.id);
  for (let t = 1; t <= 20; t++)
    for (const c of p.cells) {
      const n = [...c];
      n[p.axis] += sign * t;
      const blocker = occupied.get(n.join(','));
      if (blocker !== undefined) return { ok: false, blocker };
    }
  return { ok: true, blocker: null };
}
export function nextRemoval(pieces: LockPiece[], removed: number[]) {
  for (const p of pieces)
    for (const sign of [1, -1])
      if (canRemove(pieces, removed, p.id, sign).ok) return { id: p.id, sign };
  return null;
}
