# APEX CLUB — Bay Kart Grand Prix

A browser-based Three.js arcade kart racer with a race lobby, 3-lap races, solo and 4v4 AI team competition, charged drifting and mini turbos.

## Run

From this directory (`works/apex-club` in the collection):

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Internet access is required to load Three.js 0.179.1 from jsDelivr.

## Race modes

- **Team:** one player and three AI teammates versus four AI opponents. Choose blue or red in the lobby.
- **Solo:** one player versus seven AI opponents.
- Local single-player simulation; no network multiplayer, friend invitations or room service is implemented.
- 3-second countdown, 3 laps, finish order, results table and replay/lobby actions.
- Rank scores: **15 / 12 / 10 / 8 / 6 / 4 / 2 / 1**. Team with more points wins; equal scores produce a draw.
- Race ends when all racers finish or 20 seconds after the first finish. Unfinished racers are DNF and score zero.
- Live team scores are provisional, based on current positions; results use confirmed finish positions.

## Controls

- Automatic acceleration is enabled by default and can be disabled in the lobby.
- W / Up: accelerate; S / Down: brake (also overrides automatic acceleration).
- A / D or Left / Right: steer.
- **Space + direction while cornering:** drift above the minimum speed. Charge grows while maintaining the drift; wall contact cancels charge.
- Release Space at 32% charge for a short mini turbo or 78% for a super mini turbo. Drifting also refills the nitro reservoir.
- Shift (either side): consume one nitro unit for a 2.1-second boost. Up to 3 units can be stored.
- Q: EMP affects nearby opponents, excluding teammates in team mode.
- H: pause/help; R: restart the entire race including AI and countdown.
- Choose from six karts before racing; the lobby previews the body kit and displays speed, acceleration, handling and drift charge rate.
- COMET: agile; APEX: balanced; BOLT: top speed; SLIDE: drift specialist (1.4× APEX charge rate); RALLY: heavy off-road styling with reduced collision displacement; VINTAGE: fastest acceleration with a lower top speed.
- Team races apply team paint while retaining each kart’s shape and handling. AI racers also use the expanded garage.

## Visuals

Procedural 3D karts with painted bodywork, drivers, helmets, wheels and rear wings; sea, landscaped islands, clouds, barriers, corner signs and start/finish gate. Drift sparks, dynamic exhaust, speed lines, live minimap and teammate labels.

## Verification

```sh
node --check game.js
node --test tests/race-rules.test.mjs
```

Tests cover 4v4 allocation, absolute lap progress, finish crossing order, DNF timeout, scoring, charged-drift release and wall cancellation.

## Driver profile

The lobby includes an articulated helmeted 3D driver with a fitted racing suit, gloves, boots, reflective visor, studio lighting and contact shadows. Stand, Dance (Street Groove), and Victory animations blend between connected limb poses. Drag the avatar or focus its canvas and use Left/Right to rotate. Animations blend smoothly between poses and stop rendering during races or while the browser tab is hidden. Character geometry and animation are generated locally; no external character files are required.

## Requirements

Use a modern desktop browser with WebGL 2 and a keyboard. Python 3 is sufficient to serve the game; Node.js 18+ is only needed for the rule tests. No build step, account or API key is required. Serve over HTTP instead of opening `index.html` as a local file. If serving the collection repository root, open `/works/apex-club/`.

## Development record

See [CREATION.md](CREATION.md) for the workflow and [PROMPTS.md](PROMPTS.md) for a summary of the requested iterations.

## Gameplay preview

![APEX CLUB team race on Bay Circuit, showing nearby karts, lap progress, team points and the live map.](../../assets/screenshots/apex-club/gameplay.png)

Captured from the playable local version on September 7, 2026.

## Third-party dependency

Three.js 0.179.1 is loaded from jsDelivr using the import map in `index.html`. Three.js is distributed under the [MIT license](https://github.com/mrdoob/three.js/blob/r179/LICENSE). Kart and driver geometry, the track and animation are procedural; no external character models or textures are loaded.
