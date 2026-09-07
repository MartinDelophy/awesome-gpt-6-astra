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
  racer.progress += Math.max(0, distance);
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

export function updateDrift(drift, { held, steer, speed, turn, blocked = false }, dt) {
  let reward = 0;
  const eligible = held && steer !== 0 && speed > 170 && Math.abs(turn) > .035 && !blocked;
  if (eligible) {
    drift.active = true;
    drift.charge = Math.min(1, drift.charge + dt * .6);
    drift.direction = steer;
  } else if (drift.active) {
    // Releasing the drift key converts a controlled drift into a mini turbo.
    if (!held && !blocked && drift.charge >= .32) reward = drift.charge >= .78 ? 1.5 : .8;
    drift.active = false;
    drift.charge = 0;
  }
  return reward;
}
