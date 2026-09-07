# APEX CLUB — creation record

## Attribution status

Submitted through the authenticated [MartinDelophy](https://github.com/MartinDelophy) account. Exact GPT-6 Astra attribution is awaiting creator confirmation; this pull request remains a draft until that statement is resolved. The model's precise identity is not inferred from the destination repository name.

## Workflow

The project was iterated in Codex from an existing browser racing prototype, using the creator's requests and screenshots as feedback. This was a multi-turn development process, not a one-shot benchmark.

The creator directed the racing genre, team mode, drifting, selectable vehicles, English interface, standing/dancing character and visual revisions. The assistant implemented and refined the interface, procedural Three.js scene, kart variants, local AI race rules, driver presentation, controls, tests and documentation.

## Implemented scope

- Three-lap solo racing and local 4v4 team racing: one human and seven AI racers.
- Six selectable karts with different handling and body styles.
- Cornering drifts with charged mini turbos, nitro and opponent-only EMP.
- English race setup, live HUD, results and keyboard help.
- Procedural helmeted driver with Stand, Dance and Victory poses, lighting and rotation controls.

No network multiplayer or friend-invitation service is implemented. No claim of photorealistic character animation is made.

## Validation

Eight automated rule tests cover team allocation, absolute progress, finish crossing order, race timeout/DNF, scoring and drift release/cancellation. Browser checks exercised the lobby, racing and replay flows. The gameplay screenshot in this contribution was captured from the running game on September 7, 2026.
