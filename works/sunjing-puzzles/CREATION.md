# Sunjing / 榫境 — creation record

## Attribution and review status

- **Project initiator / submitting account:** [MartinDelophy](https://github.com/MartinDelophy), confirmed for this contribution.
- **Confirmed workflow:** iterative work with Codex, including assistant implementation and two delegated rules-research tasks.
- **Unconfirmed model identity:** the available creation record does not provide a creator statement or independently verifiable export identifying GPT-6 Astra. We do not infer this from the collection's title, the current assistant, or the task's model label. **GPT-6 Astra attribution awaits creator confirmation.**
- The original contribution was prepared for draft review for that reason; PR #17 was subsequently merged. This record does not treat that merge as model confirmation. It is not presented as a one-shot benchmark.

## Original creation — 2026-09-05

The creator requested a polished, easy-to-operate browser site inspired by traditional Chinese mechanical puzzles, mentioning Zhuge Liang and Luban locks, with a local Git repository prepared for later publication.

The assistant developed the Sunjing identity, deep-green workbench, Chinese interface, procedural wood shading and Three.js scene. It implemented piece picking, camera orbit/zoom, extraction, Huarong Dao moves, hints, undo, restart, success feedback, keyboard/touch controls and device-local progress. No generated illustration was used as a substitute for gameplay.

Two delegated research tasks validated the underlying puzzles. One checked connected voxel pieces, non-overlap and swept axial removal for the six-piece teaching lock. The other verified the beginner and classic Huarong Dao boards and a BFS solver that preserves actual piece IDs while canonicalizing equivalent block shapes for search. The assistant integrated those results and added eight automated rule checks.

The lock remains a **teaching reconstruction of interlocking joinery**, not a precise reproduction of a named historical object. No historical invention is attributed to Zhuge Liang or Luban as an established fact.

## Submission preparation — 2026-09-07

The original desktop directory was no longer present. Source was restored from the complete delivery archive saved by the original task (SHA-256: `167fcd3ce6a36399609fa1afb9e371fee4cf4f3ca7d009010af155d12595c66b`). No unpublished conversation dump or private workspace file is included.

For this contribution, the assistant removed personal launcher paths, unused scaffold components and dedicated Sites/Cloudflare runtime wiring. It retained the game and changed the package to a portable static export, with hosting metadata kept outside the public source. Known vulnerable pinned dependencies were updated within the existing React/Vinext/Vite stack, together with compatible peer dependencies. It also clarified undo scope and replaced a deprecated shadow-map setting with its supported equivalent.

The creator subsequently requested a public playable URL as well as the PR. The static game was initially published publicly through Sites. Its current public URL is [sunjing-puzzles.netlify.app](https://sunjing-puzzles.netlify.app).

Validation performed for this submission is recorded in [VALIDATION.md](VALIDATION.md). Screenshots show actual execution of the submitted game on 2026-09-07. The author may supply a model-use statement and choose a separate game-source license during review; this record does not invent either.

## Netlify migration — 2026-09-08

The creator requested a Netlify address for the submitted game. The existing validated static export was deployed to the creator's Netlify account, then the playable links in all twelve catalog translations and project documentation were updated. A small `netlify.toml` records reproducible build settings. The game's application, puzzle rules, solver and dependencies were not changed for the migration.
