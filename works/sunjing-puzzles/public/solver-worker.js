function solve(pieces) {
  const W = 4,
    H = 5;
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const goalIndex = pieces.findIndex((p) => p.id === 'cao');
  if (goalIndex < 0) throw new Error('Missing Cao Cao');
  const groupsMap = new Map();
  pieces.forEach((p, i) => {
    const type = i === goalIndex ? 'goal' : `${p.w}x${p.h}`;
    if (!groupsMap.has(type)) groupsMap.set(type, []);
    groupsMap.get(type).push(i);
  });
  const groups = [...groupsMap.values()];
  const key = (positions) =>
    groups
      .map((group) =>
        group
          .map((i) => positions[i])
          .sort((a, b) => a - b)
          .map((p) => String.fromCharCode(65 + p))
          .join(''),
      )
      .join('|');
  const masks = pieces.map(({ w, h }) =>
    Array.from({ length: 20 }, (_, p) => {
      const x = p % W,
        y = Math.floor(p / W);
      if (x + w > W || y + h > H) return 0;
      let mask = 0;
      for (let yy = 0; yy < h; yy++)
        for (let xx = 0; xx < w; xx++) mask |= 1 << (p + yy * W + xx);
      return mask;
    }),
  );
  const destinations = pieces.map(({ w, h }) =>
    Array.from({ length: 20 }, (_, p) => {
      const x = p % W,
        y = Math.floor(p / W);
      return directions.flatMap(([dx, dy]) => {
        const nx = x + dx,
          ny = y + dy;
        return nx < 0 || ny < 0 || nx + w > W || ny + h > H
          ? []
          : [{ p: ny * W + nx, dx, dy }];
      });
    }),
  );
  const start = Uint8Array.from(pieces.map((p) => p.y * W + p.x));
  let startMask = 0;
  for (let i = 0; i < pieces.length; i++) {
    const mask = masks[i][start[i]];
    if (!mask || mask & startMask)
      throw new Error('Invalid overlapping/out-of-bounds board');
    startMask |= mask;
  }
  const nodes = [{ positions: start, parent: -1, move: null }];
  const visited = new Set([key(start)]);
  for (let head = 0; head < nodes.length; head++) {
    const { positions } = nodes[head];
    if (positions[goalIndex] === 13) {
      const path = [];
      for (let i = head; nodes[i].parent !== -1; i = nodes[i].parent)
        path.push(nodes[i].move);
      return { moves: path.reverse(), visited: visited.size };
    }
    let occupied = 0;
    for (let i = 0; i < pieces.length; i++) occupied |= masks[i][positions[i]];
    for (let i = 0; i < pieces.length; i++) {
      const other = occupied ^ masks[i][positions[i]];
      for (const { p, dx, dy } of destinations[i][positions[i]]) {
        if (other & masks[i][p]) continue;
        const next = positions.slice();
        next[i] = p;
        const nextKey = key(next);
        if (visited.has(nextKey)) continue;
        visited.add(nextKey);
        nodes.push({
          positions: next,
          parent: head,
          move: { id: pieces[i].id, dx, dy },
        });
      }
    }
  }
  return null;
}

self.onmessage = ({ data }) => {
  try {
    const result = solve(data.board);
    self.postMessage({ request: data.request, result });
  } catch (error) {
    self.postMessage({ request: data.request, error: String(error) });
  }
};
