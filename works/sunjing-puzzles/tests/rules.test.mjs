import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { canRemove, nextRemoval, canSlide, solvedBoard } from '../lib/game.ts';
const lock = JSON.parse(
  fs.readFileSync(new URL('../lib/lock.json', import.meta.url)),
);
const boards = JSON.parse(
  fs.readFileSync(new URL('../lib/boards.json', import.meta.url)),
);
const workerSource = fs.readFileSync(
  new URL('../public/solver-worker.js', import.meta.url),
  'utf8',
);
function solve(board) {
  let response;
  const self = {
    postMessage: (value) => {
      response = value;
    },
  };
  vm.runInNewContext(workerSource, { self, Uint8Array, Map, Set });
  self.onmessage({ data: { request: 1, board } });
  assert.ok(!response.error, response.error);
  return response.result;
}
test('six wooden pieces are solid connected parts with no initial overlap', () => {
  const all = new Set();
  for (const p of lock) {
    const cells = new Set(p.cells.map((c) => c.join(',')));
    assert.equal(cells.size, p.cells.length);
    const seen = new Set([p.cells[0].join(',')]);
    const q = [p.cells[0]];
    for (const c of q)
      for (let axis = 0; axis < 3; axis++)
        for (const sign of [-1, 1]) {
          const n = [...c];
          n[axis] += sign;
          const k = n.join(',');
          if (cells.has(k) && !seen.has(k)) {
            seen.add(k);
            q.push(n);
          }
        }
    assert.equal(seen.size, cells.size, `piece ${p.id} is disconnected`);
    for (const c of cells) {
      assert.ok(!all.has(c), 'overlapping wood');
      all.add(c);
    }
  }
});
test('only the key starts free, and swept collision rejects jumping through blockers', () => {
  assert.deepEqual(
    lock.filter((p) => canRemove(lock, [], p.id, 1).ok).map((p) => p.id),
    [0],
  );
  for (const p of lock.slice(1))
    for (const s of [-1, 1])
      assert.equal(canRemove(lock, [], p.id, s).ok, false);
});
test('a complete legitimate removal sequence wins for either axial direction', () => {
  for (const sign of [-1, 1]) {
    const removed = [];
    for (const id of [0, 2, 1, 3, 4, 5]) {
      assert.equal(canRemove(lock, removed, id, sign).ok, true);
      removed.push(id);
      assert.equal(canRemove(lock, removed, id, sign).ok, false);
    }
    assert.equal(nextRemoval(lock, removed), null);
  }
});
test('computed lock hints always lead to a complete dismantling', () => {
  const removed = [];
  while (removed.length < lock.length) {
    const move = nextRemoval(lock, removed);
    assert.ok(move);
    assert.equal(canRemove(lock, removed, move.id, move.sign).ok, true);
    removed.push(move.id);
  }
  assert.equal(new Set(removed).size, 6);
});
test('Huarong moves reject boundaries, overlap and diagonals', () => {
  assert.equal(canSlide(boards.classic, 'cao', 0, -1), false);
  assert.equal(canSlide(boards.classic, 'cao', 0, 1), false);
  assert.equal(canSlide(boards.classic, 'cao', 1, 1), false);
  assert.equal(canSlide(boards.classic, 'bing3', 1, 0), true);
  assert.equal(solvedBoard(boards.classic), false);
});
for (const [level, steps] of [
  ['beginner', 10],
  ['classic', 116],
])
  test(`${level} solver returns ${steps} legal one-cell moves ending at the exit`, () => {
    let board = structuredClone(boards[level]);
    const result = solve(board);
    assert.equal(result.moves.length, steps);
    for (const move of result.moves) {
      assert.equal(canSlide(board, move.id, move.dx, move.dy), true);
      board = board.map((p) =>
        p.id === move.id ? { ...p, x: p.x + move.dx, y: p.y + move.dy } : p,
      );
    }
    assert.equal(solvedBoard(board), true);
    assert.equal(solve(board).moves.length, 0);
  });
test('hints work after a legal detour and preserve real piece identities', () => {
  let board = structuredClone(boards.beginner);
  const move = solve(board).moves[0];
  board = board.map((p) =>
    p.id === move.id ? { ...p, x: p.x + move.dx, y: p.y + move.dy } : p,
  );
  const result = solve(board);
  assert.equal(result.moves.length, 9);
  for (const m of result.moves) {
    assert.equal(canSlide(board, m.id, m.dx, m.dy), true);
    board = board.map((p) =>
      p.id === m.id ? { ...p, x: p.x + m.dx, y: p.y + m.dy } : p,
    );
  }
  assert.equal(solvedBoard(board), true);
});
