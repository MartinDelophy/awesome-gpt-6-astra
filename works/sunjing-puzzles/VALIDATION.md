# Sunjing — submission validation

Checked on **2026-09-07** against the source included in this contribution. The deployed game uses the same application, rules, worker and package lock; its Sites access metadata lives in an isolated publishing checkout rather than this public source directory.

## Automated checks

- `npm test`: **8/8 passed**. Checks connected non-overlapping wood pieces, a unique initial key, swept collision, legal dismantling, Huarong Dao bounds/collisions, 10- and 116-step solution replay, and hints after a move.
- `npm run lint`: passed for application code. Copied scaffold UI primitives remain excluded by the existing lint configuration.
- `npm run typecheck`: passed.
- `npm run build`: passed with `output: 'export'`; static root and fallback pages are in `dist/client/`. The Three.js client chunk exceeds Vite's advisory 500 kB warning threshold; this is a size warning, not a build failure.
- `npm audit fix --registry=https://registry.npmjs.org`: completed with **0 known vulnerabilities** reported after updating compatible React, Vinext, Vite, RSC plugin and transitive dependencies. This is an audit snapshot, not a guarantee that no future issue exists.
- Collection `website/npm test`: **27/27 passed**.
- The collection parser was run on **both README.md and README.zh-CN.md**: each contains 8 works (7 games and 1 experimental sandbox), with Sunjing's author, public demo, source and screenshot URLs correctly extracted.

## Browser checks

The in-app desktop browser rendered the real WebGL scene. Checks exercised selecting a blocked wooden piece (rejected without incrementing moves), extracting the free key (one piece/one move), undo (restored piece/zero moves), restart, switching to Huarong Dao, calculating a hint and applying the suggested one-cell move. No browser console errors were observed in these checks.

The two screenshots were captured through the browser on 2026-09-07 from the running submission version, with the play area centered using its own navigation. They are JPEGs at the browser's native **1265 × 712** viewport, about 53 KB and 57 KB, with no synthetic additions. This is slightly below the guide's recommended 1280 px landscape width; the actual gameplay and controls remain visible and readable.

This is a bounded desktop check, not exhaustive device coverage. Phone touch behavior, screen readers and older GPUs have not been independently device-tested for this submission.

## Public demo

[https://sunjing-puzzles.hp20230404.chatgpt.site](https://sunjing-puzzles.hp20230404.chatgpt.site)

Sites reported a successful deployment and `public` access. Separate HTTP requests with **no cookies or authorization headers** returned 200 for the root game page and `/solver-worker.js`; the responses contained the game's HTML and solver code. The public page also loaded in the browser, and selecting a hint then extracting a wooden piece updated the online game to one removed piece/one move.

The site has no account system, server database or model API calls. Progress is browser-local.

## Review items

- Exact **GPT-6 Astra use still needs a creator statement**; this is why the PR is a draft.
- A separate license for game-specific source is not asserted; the creator may choose it during review. Third-party notices are retained.
