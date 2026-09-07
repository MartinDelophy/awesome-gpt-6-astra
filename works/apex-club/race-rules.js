export const SCORE_TABLE = [15, 12, 10, 8, 6, 4, 2, 1];
export const TEAM_COLORS = { blue: 0x44baff, red: 0xff6377 };
export const PILOTS = ['You', 'NOVA', 'MILO', 'KIRA', 'AXEL', 'LUNA', 'ZEKE', 'ECHO'];

export function createRace(mode = 'team', team = 'blue') {
  return {
    mode, team, phase: 'countdown', countdown: 3, elapsed: 0, firstFinish: null,
    racers: PILOTS.map((name, i) => ({
      id: i, name, team: i % 2 === 0 ? team : (team === 'blue' ? 'red' : 'blue'),
      progress: -.004 - Math.floor(i / 2) * .005, finishTime: null,
      lane: i % 2 === 0 ? -13 : 13, speed: 0,
    })),
  };
}

export function standings(race) {
  return [...race.racers].sort((a, b) => {
    if (a.finishTime !== null && b.finishTime !== null) return a.finishTime - b.finishTime || a.id - b.id;
    if (a.finishTime !== null) return -1;
    if (b.finishTime !== null) return 1;
    return b.progress - a.progress || a.id - b.id;
  });
}

export function advanceRacer(race, racer, distance, dt) {
  if (racer.finishTime !== null) return;
  const previous = racer.progress;
  racer.progress += distance;
  if (racer.progress >= 3) {
    const fraction = distance > 0 ? (3 - previous) / distance : 1;
    racer.finishTime = race.elapsed - dt + dt * Math.max(0, Math.min(1, fraction));
    racer.progress = 3;
    race.firstFinish = Math.min(race.firstFinish ?? Infinity, racer.finishTime);
  }
}

export function teamScores(race, final = false) {
  const scores = { blue: 0, red: 0 };
  standings(race).forEach((racer, place) => {
    if (!final || racer.finishTime !== null) scores[racer.team] += SCORE_TABLE[place];
  });
  return scores;
}

export function shouldFinish(race) {
  return race.racers.every(r => r.finishTime !== null) ||
    (race.firstFinish !== null && race.elapsed - race.firstFinish >= 20);
}

export function updateDrift(drift, { held, steer, speed, turn = 0, blocked = false }, dt) {
  if (blocked || speed < 110) {
    drift.active = false; drift.charge = 0; drift.direction = 0;
    return 0;
  }
  if (drift.active && !held) {
    const reward = drift.charge >= .78 ? 1.5 : drift.charge >= .32 ? .8 : 0;
    drift.active = false; drift.charge = 0; drift.direction = 0;
    return reward;
  }
  if (!drift.active && held && steer !== 0 && speed > 170) {
    drift.active = true; drift.direction = Math.sign(steer); drift.charge = 0;
  }
  if (drift.active) {
    // Keep the slide alive through countersteer and short straight sections.
    drift.charge = Math.min(1, drift.charge + dt * (steer === drift.direction ? .62 : .38));
  }
  return 0;
}
