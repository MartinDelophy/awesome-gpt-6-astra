# 验证记录 / Validation record

Checked on **2026-09-08**, release **v0.2.0**, from the source copied into this repository with a fresh `npm ci` installation. Environment: Node.js 22.14.0 and npm 10.9.2 on macOS.

## 可复现检查 / Reproducible checks

From `works/three-kingdoms`:

| Command | Result |
| --- | --- |
| `npm ci --registry=https://registry.npmjs.org` | Passed using the committed lockfile. |
| `npm test` | **23 passed, 0 failed.** |
| `npm run lint` | Passed. |
| `npm run typecheck` | Passed. |
| `npm run build` | Passed; exported `dist/client/index.html` and its assets. |

The regression suite checks the connected and symmetric 15-city map, equal starting resources, 108 unique officers and portrait assignments, recruitment and morale, administration costs, officer recovery, troop limits, combat predictions and losses, reinforcement conservation, occupation income, action budgets, AI information fairness, coordinated sieges, campaign validity, win/loss handling, save continuity and legacy migration. It also verifies deterministic AI muster turns and the existence/dimensions of all portrait atlases.

The repository copy fixes form-label associations and the marching destination's troop-count text. The troop slider uses a value bounded by the current command limit without a follow-up state-setting effect. The corrected source and static export are also used for the Vercel demo.

Two narrow lint exceptions are documented in the code: browser-local storage hydration/save feedback synchronizes external state after mount, and a named `role="img"` exposes a CSS-cropped atlas portrait to assistive technology. Accessibility linting remains enabled elsewhere; no formal accessibility audit is claimed.

## 平衡模拟 / Balance simulations

The [balance report](docs/balance-v2.md) records 54 campaigns of 80 turns before the final muster adjustment, three 160-turn probes afterward, and a high-wall siege scenario. These were bounded development experiments, separate from the 23 reproducible regression checks. They do **not** prove identical win rates against human players or guarantee that AI-only campaigns always finish.

## 网页与实机截图 / Web release and screenshots

The public [Vercel demo](https://sanguo-jiangshan.vercel.app) was accessible without login. The map and officer-roster views were opened in the browser to capture the submitted screenshots. Each image is 1440 × 900 and below 4 MB; [SOURCE.md](../../assets/screenshots/three-kingdoms/SOURCE.md) records the date and version.

This establishes that the captured views ran in that browser; it is not a claim of a complete browser campaign, cross-browser coverage or device-specific mobile testing. Save data remains browser-origin-local and requires JSON export/import when moving domains.

## 目录集成 / Collection integration

- All **12** existing root README languages include the new game exactly once, in the strategy category, with the same demo, source, creation-record and preview targets.
- Introductory counts are **13 browser games plus 1 interactive sandbox**; existing entries and their original check date are retained.
- The existing `website/npm test` suite passed **27 tests**.
- A direct parser check identified the new entry as a game and resolved its creator, Vercel demo, source README and committed screenshot correctly.
- The gallery reads the English README from the default branch at runtime; no website code or shipped fallback snapshot was changed for this submission.
