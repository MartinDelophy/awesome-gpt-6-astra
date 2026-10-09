# Yu-Gi-Oh! Ruins Duel / 游戏王：遗迹决斗 — creator and verification record

## Creator and model attribution / 作者与模型参与

- Creator: [Ryan-fm](https://github.com/Ryan-fm), submitted from the creator's authenticated account.
- Development record: iterative Codex collaboration on gameplay design, React/TypeScript UI, the Three.js arena and summoning ritual, the Node.js/Socket.IO rules server, collection/deck features, and testing.
- **GPT-6 Astra attribution is pending creator confirmation.** Codex collaboration alone does not identify the model. This is an explicit outstanding admission requirement under [CONTRIBUTING.md](../../../CONTRIBUTING.md#什么样的作品适合收录--what-belongs-here), so the submission remains a draft.
- **GPT-6 Astra 的具体参与仍待作者确认。** 已确认上述 Codex 多轮开发工作，不能仅凭 Codex 工具名称断言使用了 GPT-6 Astra；本投稿保持草稿。

## Public release and scope / 公开试玩与范围

Display name updated on 2026-10-10 to **游戏王：遗迹决斗 / Yu-Gi-Oh! Ruins Duel**. Existing repository names, Toy URL/slug and browser save keys are preserved; historical screenshots can show the earlier title. The rename preview (https://www.bilibili.com/toy/preview/preview_Bl19yMGw/index.html) visibly shows the new title and retained browser collection. Source revision `30749a3f32948367c948ade0c64a561cddf2d0be` passed 65 game tests, production builds, runtime integrity and Toy preflight; the 27 catalogue tests passed. The title fits desktop and 844×390 mobile landscape without overlapping header controls. New title and an actual renamed-game screenshot poster were approved on Toy (CLI status **published**, checked 2026-10-10); prior submission preview: https://www.bilibili.com/toy/preview/preview_SCDnx23l/index.html . The formal URL is unchanged.

- [Play on Toy](https://www.bilibili.com/toy/astral-duel-game/index.html): Toy ID `42086522945536`, visibility PUBLIC, previously published on 2026-10-09. The Roman arena / volumetric-monster update was previewed and exercised in Chrome, then submitted on 2026-10-10. Latest CLI status: **published**; the formal URL stays unchanged. The formal Toy page was opened in Chrome after approval and the Roman arena / entity-monster battle was visibly verified. Final tested preview: https://www.bilibili.com/toy/preview/preview_BTpeQTB3/index.html .
- Free browser game with a Chinese interface, WebGL, mouse/touch controls, and no mandatory game login or installation. Progress is saved in the current browser.
- Toy supports AI duels, three tutorials, four challenges, summoning, collection and deck editing. Real online PK and friend rooms require deploying the separate full-version server; Toy does not simulate online players.
- Four distinct free 40-card presets cover tempo, spell control, defense/counterplay and tribute pressure. Only the dragon/tribute preset includes Blue-Eyes. Tutorials use low-level monsters; challenges cover tribute summons, quick-spell breakthrough, trap reversal and graveyard revival. These are classic small-pool strategy templates, not the complete modern OCG or competitively calibrated archetypes.
- Arena, cards and effects use Three.js. The 2026-10-10 update replaces all 18 playable monsters with local volumetric mesh sculptures, physical materials, shadows, articulated idle/wing motion, summon materialization and attack motion. A rotatable/zoomable close-up is available for visible monsters. Face-down monsters never materialize. These are stylized prototype models; the finer sculpting/texturing and complete skeletal animation in the concept art are not claimed as finished. The arena now uses physical stone slabs, broken Roman columns, terraces and a generated nostalgic anime sunset backdrop. The side inspector, server-legal drag-and-drop placement, public-stat damage preview and chain-response tray were exercised. New original anime portraits, blue/red HUDs, bold outlined LP, brighter metal zones and a short card-front reveal adapt a Duel Links visual reference to the landscape board. Key phone buttons measured at least 44 CSS pixels high at 844×390.

The 2026-10-10 entry update uses the user-supplied Blue-Eyes illustration as a full-screen opening. Clicking/tapping the artwork or pressing Enter/Space mounts the existing live game and fades into the lobby. The complete 16:9 artwork is preserved at different aspect ratios; the entry supports browser and saved reduced-motion preferences. Before entry, the game connection and WebGL arena are not mounted. Local checks exercised click, Enter, Space and opening the AI-mode panel after entry. Source revision `2cfa5f1e267394ff3131d2c9408564d49d6356f8` passed 65 game tests, production builds and 28 protected-runtime checks; Toy preflight had no ERROR/WARN. The 27 catalogue tests also passed. Toy preview https://www.bilibili.com/toy/preview/preview_D0yb6TZ9/index.html visibly showed the entry illustration, successfully entered the lobby and preserved the existing 31-ticket browser collection. The entry bundle and opening-screen poster were submitted to Toy ID `42086522945536`; approved with CLI status **published** (checked before the battle UI update), submission preview https://www.bilibili.com/toy/preview/preview_TtO6xvrq/index.html . The opening update is available at the formal URL.

The simplified battle UI update (2026-10-10, source `814dcc522cf2b58fc5a304884a09675233b9c119`) expands the arena when no card is selected and shows a content-sized inspector only on selection. Repeated phase, strategy, card-name and action descriptions are removed from the standing HUD; effect rules and tutorial objectives remain available on demand. LP, phase, timer, legal drop zones, targets, tribute selection and chain responses remain visible when relevant. Local 1280×720 and 844×390 checks completed native pointer placement into zone 2, keyboard pickup/cancellation, attack confirmation (300 LP damage) and the trap-response tutorial. Important phone controls measured at least 44 CSS pixels high. All 65 game tests, both builds, protected-runtime checks and Toy preflight passed. Browser checks are not a phone-hardware performance certification. The latest platform preview https://www.bilibili.com/toy/preview/preview_sKAEBrNN/index.html was opened in Chrome at its normal desktop viewport. Checks confirmed the opening page, preserved 31-ticket collection, wide idle board, compact selected-card inspector and a successful attack reducing the opponent to 7700 LP; the update was submitted to Toy ID `42086522945536`, receipt status **auditing**. Submission preview: https://www.bilibili.com/toy/preview/preview_eIQ1JDfb/index.html . The previously published entry version remains available during review.

## Actual screenshots / 实机截图

Captured by the creator's Codex session on **2026-10-09 and 2026-10-10**, without synthetic UI or concept rendering. All PNGs are below 4 MB. The latest simplified battle captures use the local full-server build in Chrome (844×390) and the in-app browser (1280×720). Earlier platform checks are recorded separately below.

| File | Size | Version and visible behavior |
| --- | --- | --- |
| [entry.png](entry.png) | 1280×720 | 2026-10-10 local full-server build: user-supplied opening artwork with current title and click-to-enter prompt. |
| [entry-mobile.png](entry-mobile.png) | 844×390 | 2026-10-10 local full-server build: complete opening art on phone landscape, 190×48 CSS-pixel visible entry prompt; the whole viewport is clickable. |
| [gameplay.png](gameplay.png) | 1152×648 | 2026-10-10 local full-server simplified HUD: Battle Ox attack inspector, target and public damage estimate. Resized from intact 1280×720; below 1 MiB. |
| [strategies.png](strategies.png) | 1501×832 | 2026-10-10 local full-server rename build: 游戏王：遗迹决斗 lobby with four preset strategies. |
| [revival-mobile.png](revival-mobile.png) | 844×390 | Local full-server build: graveyard-revival challenge and card inspector. |
| [summon-mobile.png](summon-mobile.png) | 844×390 | Local full-server build: Summoned Skull's purple summon effect. |
| [strategies-mobile.png](strategies-mobile.png) | 844×390 | 2026-10-10 local full-server rename build: full new title and preset choice on a phone-sized landscape viewport. |
| [battle-mobile.png](battle-mobile.png) | 844×390 | 2026-10-10 local full-server simplified HUD: complete target, damage estimate and 44px confirm-attack control. |
| [battle-wide.png](battle-wide.png) | 1280×720 | 2026-10-10 local full-server simplified HUD: expanded board when no card is selected. |
| [response-mobile.png](response-mobile.png) | 844×390 | 2026-10-10 local full-server simplified HUD: compact Mirror Force response tray; tutorial was completed successfully. |
| [kuriboh-model.png](kuriboh-model.png) | 1280×720 | 2026-10-10 local full-server build: actual rotatable Kuriboh mesh, instanced fur, eyes and claws. |
| [roman-kuriboh.png](roman-kuriboh.png) | 1280×720 | 2026-10-10 local full-server build after dragging Kuriboh out of hand and summoning it on the stone arena. |
| [drag-mobile.png](drag-mobile.png) | 844×390 | Latest local build: keyboard pickup and highlighted legal defense drop zones. |

The older revival and summon screenshots document source revision `a5dc6fa`; the renamed lobby screenshots document `30749a3`; drag-mobile documents `909d5e5`; the new Roman arena and model captures document the 2026-10-10 update. The local and Toy versions share the UI and use different connection adapters. The table identifies each capture environment; no screenshot is a claim of live multiplayer on Toy.

## Verification / 验证记录

For game source revision `9afa79a675190f16a3ca5a0fc284a3da98b20f33`, checked 2026-10-10:

- 65 rule, real two-client network, collection, static-adapter, battle-display and drag-placement tests passed, covering the four presets, all seven tutorials/challenges and 11 drop legality / cancellation / hidden-target cases, plus five volumetric-model tests: full playable-pool coverage, hidden state, finite 3-axis geometry, mesh picking, motion and disposal.
- Full-server and Toy production builds passed. All 28 protected runtime files remained intact.
- Toy preflight reported no ERROR/WARN. Latest platform checks completed pointer drag placement in Chrome, keyboard placement in the in-app browser, the trap-response tutorial, 844×390 response layout and preservation of an existing browser collection. Local checks completed tribute and revival challenges, wrong-zone return, defense placement and direct quick-spell targeting.
- Final Roman/mesh platform preview: https://www.bilibili.com/toy/preview/preview_BTpeQTB3/index.html . Browser checks verified preserved collection, correct arena/model rendering, 844×390 response layout and a successful trap-tutorial result with the destroyed actor removed.
- The Toy bundle guard rejects unresolved server filesystem calls.
- Full game source and its CI logs are private. These are recorded development checks, not publicly inspectable CI evidence; no private source/CI URL is presented as a public resource.

## Material credit / 素材说明

Opening illustration supplied by the user and reused unchanged; its title and entry prompt are browser UI overlays.

Unofficial Yu-Gi-Oh fan prototype. Yu-Gi-Oh card names and card fronts are third-party content; generated original duelist portraits/HUD, arena/ritual artwork and custom monster mesh code are separate. Original catalog text follows the repository's CC0 contribution terms. Game screenshots contain third-party card artwork and do not relicense it or claim official affiliation.
