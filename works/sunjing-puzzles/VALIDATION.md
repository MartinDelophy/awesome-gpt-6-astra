# Sunjing — submission validation

Initial checks on **2026-09-07** used the source included in this contribution. The initial Sites deployment used the same application, rules, worker and package lock, with access metadata kept in an isolated publishing checkout. The Netlify and Vercel migration checks are recorded separately below.

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

## Initial public demo — 2026-09-07

The initial public deployment used Sites; the current entry point is [sunjing-puzzles.vercel.app](https://sunjing-puzzles.vercel.app).

Sites reported a successful deployment and `public` access. Separate HTTP requests with **no cookies or authorization headers** returned 200 for the root game page and `/solver-worker.js`; the responses contained the game's HTML and solver code. The public page also loaded in the browser, and selecting a hint then extracting a wooden piece updated the online game to one removed piece/one move.

The site has no account system, server database or model API calls. Progress is browser-local.

## Netlify migration — 2026-09-08

These results describe the earlier Netlify migration. That existing deployment remains optional; the collection's current playable link uses Vercel.

- Earlier production URL: [sunjing-puzzles.netlify.app](https://sunjing-puzzles.netlify.app). Published through the creator's signed-in Netlify account; no visitor login is required.
- Reused the validated static export because application code, puzzle rules, dependencies and build inputs are unchanged. Added only hosting configuration and documentation/link updates.
- Anonymous HTTPS requests returned **200** for all **16 public runtime files**: the root HTML, RSC payload, solver worker, favicon, CSS, JavaScript chunks and public manifests. Their SHA-256 hashes match the local export. Netlify omits the hidden build-only `.vite/manifest.json`; the browser does not request that file.
- Desktop browser checks confirmed a rendered 3D scene, the wooden-lock hint, one-piece extraction, undo, switching to introductory Huarong Dao, calculating a worker hint and applying the suggested move. No console errors were observed during these checks.
- Collection `website/npm test`: **27/27 passed**. All **12 README languages** parse to **10 works**, including exactly one Sunjing entry with the Netlify demo URL.
- Browser-local progress from the former origin does not transfer automatically to this new origin. No game code, screenshots, attribution claims or license grants were changed for the hosting migration.

## Vercel migration — 2026-09-08

- Current production URL: [sunjing-puzzles.vercel.app](https://sunjing-puzzles.vercel.app). Vercel reported the deployment ready. The existing validated static export was uploaded manually; Git-based automatic deployment is not configured.
- Anonymous HTTPS requests returned **200** for all **16 public runtime files**, excluding the standalone `404.html` page: the root HTML, RSC payload, solver worker, favicon, CSS, JavaScript chunks and public manifests. Every checked file's SHA-256 hash matched the original local export. The hidden build-only `.vite/manifest.json` was excluded from the uploaded static files.
- Desktop browser checks confirmed a rendered 3D scene, the wooden-lock hint, one-piece extraction and undo. In introductory Huarong Dao, the worker computed a hint selecting 丙兵; applying it changed the move count from 0 to 1. No console errors were observed during the Huarong Dao check.
- Collection `website/npm test`: **27/27 passed**. All **12 README languages** parse to **13 works**, including exactly one Sunjing entry with the Vercel demo URL. Each README preserves the latest upstream content, with only Sunjing's playable URL changed.
- The included `vercel.json` records future source-build settings. The application code, puzzle rules, solver, dependencies and historical screenshots were not changed for this migration.
- Progress remains browser-local and does not transfer automatically from the previous hosting origins. Model-attribution and licensing statements remain unchanged.

## Review items

- Exact **GPT-6 Astra use still needs a creator statement**; the original PR was prepared for draft review and was subsequently merged as PR #17. That merge does not resolve model attribution.
- A separate license for game-specific source is not asserted; the creator may choose it during review. Third-party notices are retained.
