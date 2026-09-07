# APEX CLUB — Bay Kart Grand Prix

A browser-based Three.js arcade kart racer with a race lobby, 3-lap races, solo and 4v4 AI team competition, charged drifting and mini turbos.

## Run

Run these commands from `works/apex-club`. If serving the collection root, open `/works/apex-club/`.

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Three.js 0.179.1 is included locally under `vendor/three`; the game has no runtime CDN dependency.

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
- **Space + direction at speed:** start a drift. Keep Space held to maintain the slide, including while countersteering or briefly straightening. Release Space to convert charge into a mini turbo; wall contact cancels charge.
- Release Space at 32% charge for a short mini turbo or 78% for a super mini turbo. Drifting also refills the nitro reservoir.
- Shift (either side): consume one nitro unit for a 2.1-second boost. Up to 3 units can be stored.
- Q: EMP affects nearby opponents, excluding teammates in team mode.
- H: pause/help; R: restart the entire race including AI and countdown.
- Choose from six karts before racing; the lobby previews the body kit and displays speed, acceleration, handling and drift charge rate.
- COMET: agile; APEX: balanced; BOLT: top speed; SLIDE: drift specialist (1.4× APEX charge rate); TITAN: heavy off-road styling with reduced collision displacement; VINTAGE: fastest acceleration with a lower top speed.
- Team races apply team paint while retaining each kart’s shape and handling. AI racers also use the expanded garage.

## Visuals

Procedural 3D karts with painted bodywork, drivers, helmets, wheels and rear wings; sea, landscaped islands, clouds, barriers, corner signs and start/finish gate. Drift sparks, dynamic exhaust, speed lines, live minimap and teammate labels.

## Verification

```sh
node --check game.js
npm test
```

Tests cover 4v4 allocation, absolute lap progress, finish crossing order, DNF timeout, scoring, charged-drift release and wall cancellation.

## Driver profile

The lobby includes an articulated helmeted 3D driver with a fitted racing suit, gloves, boots, reflective visor, studio lighting and contact shadows. Stand, Dance (Street Groove), and Victory animations blend between connected limb poses. Drag the avatar or focus its canvas and use Left/Right to rotate. Animations blend smoothly between poses and stop rendering during races or while the browser tab is hidden. Character geometry and animation are generated locally; no external character files are required.

## Release build

```sh
npm run build
```

Publish the contents of `dist/` to a static HTTPS host. There is no server, database, login or API key. The build adds a content revision to local JavaScript and CSS URLs to prevent stale modules after an update. The included `_headers` file sets conservative response headers on hosts that support it; configure equivalent headers elsewhere. Do not publish the project root, test artifacts or `output/`.

The supported game platform is a modern desktop browser with WebGL 2 and a keyboard. Phone touch controls and online multiplayer are not included. Resize support does not imply mobile gameplay support.

## Handling and accessibility

- Drift starts with a small hop, progressive yaw and tyre slip; countersteer adjusts the line without instantly reversing the slide.
- World-space tyre marks, smoke and sparks show the path of a drift. Blue charge upgrades to orange at the super-turbo threshold.
- Nitro and mini turbos use exhaust, a duration meter and controlled field-of-view changes. Excess speed decays gradually when boost expires.
- `Sound & display` contains optional procedural engine, tyre and boost audio; reduced camera motion; a lower-cost graphics mode; and a toggle drift key option. With toggle drift enabled, steer once to choose a direction, then tap Space to start and tap again to release.
- H or Escape pauses; losing window focus or hiding the tab pauses active racing. A startup error screen handles unsupported graphics or failed module loading.
- Thirteen automated tests cover racing and handling, including countersteer, boost decay, collision cancellation and frame-rate consistency.

## Third-party notice

Three.js 0.179.1 is distributed under the MIT license. The required runtime modules and the original notice are in `vendor/three/`. Procedural game geometry and audio do not load external models, textures or sound files.

## Gameplay preview

![Charged drift with a complete kart silhouette and world-space tyre marks.](../../assets/screenshots/apex-club/gameplay.png)

[Development record](CREATION.md) · [Request history](PROMPTS.md)



## TITAN armored buggy

Open `garage.html` for the 360-degree model showroom: front, side, rear and top views, orbit/zoom, three finishes, wireframe and an optional seated driver. TITAN replaces the former RALLY slot and is selected by default. The showroom and race share `armored-kart.js`, including steerable wheels and model-specific tyre/exhaust effect anchors.

The original procedural model follows the supplied heavy off-road racing reference: deep-tread tires, layered armor, double-wishbone suspension with coil springs, a bucket seat and roll hoop, intake stacks, rear cooling fans, twin exhausts and detailed front/rear lighting.

Run `npm run export:model` to generate `output/titan-armored-buggy.glb`. The portable GLB includes the full static vehicle with PBR materials and individual wheel/structural nodes; runtime flames and the optional driver are excluded. Instanced tire blocks are expanded for compatibility. Wheel animation remains controlled by the game.

![TITAN 3D garage](../../assets/screenshots/apex-club/titan-garage.jpg)
