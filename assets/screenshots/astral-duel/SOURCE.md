# Astral Duel / 星域决斗 — creator and verification record

## Creator and model attribution / 作者与模型参与

- Creator: [Ryan-fm](https://github.com/Ryan-fm), submitted from the creator's authenticated account.
- Development record: iterative Codex collaboration on gameplay design, React/TypeScript UI, the Three.js arena and summoning ritual, the Node.js/Socket.IO rules server, collection/deck features, and testing.
- **GPT-6 Astra attribution is pending creator confirmation.** Codex collaboration alone does not identify the model. This is an explicit outstanding admission requirement under [CONTRIBUTING.md](../../../CONTRIBUTING.md#什么样的作品适合收录--what-belongs-here), so the submission remains a draft.
- **GPT-6 Astra 的具体参与仍待作者确认。** 已确认上述 Codex 多轮开发工作，不能仅凭 Codex 工具名称断言使用了 GPT-6 Astra；本投稿保持草稿。

## Public release and scope / 公开试玩与范围

- [Play on Toy](https://www.bilibili.com/toy/astral-duel-game/index.html): Toy ID `42086522945536`, visibility PUBLIC, previously published on 2026-10-09. The Roman arena / volumetric-monster update was previewed and exercised in Chrome, then submitted on 2026-10-10. Latest CLI status: **auditing**; the formal URL stays unchanged. Final tested preview: https://www.bilibili.com/toy/preview/preview_BTpeQTB3/index.html .
- Free browser game with a Chinese interface, WebGL, mouse/touch controls, and no mandatory game login or installation. Progress is saved in the current browser.
- Toy supports AI duels, three tutorials, four challenges, summoning, collection and deck editing. Real online PK and friend rooms require deploying the separate full-version server; Toy does not simulate online players.
- Four distinct free 40-card presets cover tempo, spell control, defense/counterplay and tribute pressure. Only the dragon/tribute preset includes Blue-Eyes. Tutorials use low-level monsters; challenges cover tribute summons, quick-spell breakthrough, trap reversal and graveyard revival. These are classic small-pool strategy templates, not the complete modern OCG or competitively calibrated archetypes.
- Arena, cards and effects use Three.js. The 2026-10-10 update replaces all 18 playable monsters with local volumetric mesh sculptures, physical materials, shadows, articulated idle/wing motion, summon materialization and attack motion. A rotatable/zoomable close-up is available for visible monsters. Face-down monsters never materialize. These are stylized prototype models; the finer sculpting/texturing and complete skeletal animation in the concept art are not claimed as finished. The arena now uses physical stone slabs, broken Roman columns, terraces and a generated nostalgic anime sunset backdrop. The side inspector, server-legal drag-and-drop placement, public-stat damage preview and chain-response tray were exercised. New original anime portraits, blue/red HUDs, bold outlined LP, brighter metal zones and a short card-front reveal adapt a Duel Links visual reference to the landscape board. Key phone buttons measured at least 44 CSS pixels high at 844×390.

## Actual screenshots / 实机截图

Captured by the creator's Codex session on **2026-10-09 and 2026-10-10**, without synthetic UI or concept rendering. All PNGs are below 4 MB. Latest Toy battle captures use Chrome; the drag preview uses the local in-app browser.

| File | Size | Version and visible behavior |
| --- | --- | --- |
| [gameplay.png](gameplay.png) | 1152×638 | 2026-10-10 final Toy platform preview: Roman ruins, volumetric Luster Dragon / Summoned Skull and Mirror Force response. Resized from the intact 1501×832 capture to keep the README cover under 1 MiB. |
| [strategies.png](strategies.png) | 1280×720 | Previous four-strategy Toy build: lobby with four preset strategies. |
| [revival-mobile.png](revival-mobile.png) | 844×390 | Local full-server build: graveyard-revival challenge and card inspector. |
| [summon-mobile.png](summon-mobile.png) | 844×390 | Local full-server build: Summoned Skull's purple summon effect. |
| [strategies-mobile.png](strategies-mobile.png) | 844×390 | Local full-server build: preset choice on a phone-sized landscape viewport. |
| [battle-mobile.png](battle-mobile.png) | 844×390 | 2026-10-10 final Toy platform preview: entity monsters, ruin arena and 44px response controls. |
| [kuriboh-model.png](kuriboh-model.png) | 1280×720 | 2026-10-10 local full-server build: actual rotatable Kuriboh mesh, instanced fur, eyes and claws. |
| [roman-kuriboh.png](roman-kuriboh.png) | 1280×720 | 2026-10-10 local full-server build after dragging Kuriboh out of hand and summoning it on the stone arena. |
| [drag-mobile.png](drag-mobile.png) | 844×390 | Latest local build: keyboard pickup and highlighted legal defense drop zones. |

The older revival, summon and preset screenshots document source revision `a5dc6fa`; drag-mobile documents `909d5e5`; the new Roman arena and model captures document the 2026-10-10 update. The local and Toy versions share the UI and use different connection adapters. The table identifies each capture environment; no screenshot is a claim of live multiplayer on Toy.

## Verification / 验证记录

For game source revision `9afa79a675190f16a3ca5a0fc284a3da98b20f33`, checked 2026-10-10:

- 65 rule, real two-client network, collection, static-adapter, battle-display and drag-placement tests passed, covering the four presets, all seven tutorials/challenges and 11 drop legality / cancellation / hidden-target cases, plus five volumetric-model tests: full playable-pool coverage, hidden state, finite 3-axis geometry, mesh picking, motion and disposal.
- Full-server and Toy production builds passed. All 28 protected runtime files remained intact.
- Toy preflight reported no ERROR/WARN. Latest platform checks completed pointer drag placement in Chrome, keyboard placement in the in-app browser, the trap-response tutorial, 844×390 response layout and preservation of an existing browser collection. Local checks completed tribute and revival challenges, wrong-zone return, defense placement and direct quick-spell targeting.
- Final Roman/mesh platform preview: https://www.bilibili.com/toy/preview/preview_BTpeQTB3/index.html . Browser checks verified preserved collection, correct arena/model rendering, 844×390 response layout and a successful trap-tutorial result with the destroyed actor removed.
- The Toy bundle guard rejects unresolved server filesystem calls.
- Full game source and its CI logs are private. These are recorded development checks, not publicly inspectable CI evidence; no private source/CI URL is presented as a public resource.

## Material credit / 素材说明

Unofficial Yu-Gi-Oh fan prototype. Yu-Gi-Oh card names and card fronts are third-party content; generated original duelist portraits/HUD, arena/ritual artwork and custom monster mesh code are separate. Original catalog text follows the repository's CC0 contribution terms. Game screenshots contain third-party card artwork and do not relicense it or claim official affiliation.
