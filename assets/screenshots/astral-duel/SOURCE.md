# Astral Duel / 星域决斗 — creator and verification record

## Creator and model attribution / 作者与模型参与

- Creator: [Ryan-fm](https://github.com/Ryan-fm), submitted from the creator's authenticated account.
- Development record: iterative Codex collaboration on gameplay design, React/TypeScript UI, the Three.js arena and summoning ritual, the Node.js/Socket.IO rules server, collection/deck features, and testing.
- **GPT-6 Astra attribution is pending creator confirmation.** Codex collaboration alone does not identify the model. This is an explicit outstanding admission requirement under [CONTRIBUTING.md](../../../CONTRIBUTING.md#什么样的作品适合收录--what-belongs-here), so the submission remains a draft.
- **GPT-6 Astra 的具体参与仍待作者确认。** 已确认上述 Codex 多轮开发工作，不能仅凭 Codex 工具名称断言使用了 GPT-6 Astra；本投稿保持草稿。

## Public release and scope / 公开试玩与范围

- [Play on Toy](https://www.bilibili.com/toy/astral-duel-game/index.html): published on 2026-10-09, Toy ID `42086522945536`, visibility PUBLIC. The latest four-strategy version was opened in Chrome after publication.
- Free browser game with a Chinese interface, WebGL, mouse/touch controls, and no mandatory game login or installation. Progress is saved in the current browser.
- Toy supports AI duels, three tutorials, four challenges, summoning, collection and deck editing. Real online PK and friend rooms require deploying the separate full-version server; Toy does not simulate online players.
- Four distinct free 40-card presets cover tempo, spell control, defense/counterplay and tribute pressure. Only the dragon/tribute preset includes Blue-Eyes. Tutorials use low-level monsters; challenges cover tribute summons, quick-spell breakthrough, trap reversal and graveyard revival. These are classic small-pool strategy templates, not the complete modern OCG or competitively calibrated archetypes.
- Arena, cards and effects use Three.js; monsters remain 2.5D sprites/card projections. The side inspector, board targeting and placement, public-stat damage preview and chain-response tray were exercised. Key phone buttons measured at least 44 CSS pixels high at 844×390.

## Actual screenshots / 实机截图

Captured by the creator's Codex session in Chrome on **2026-10-09**, without synthetic UI or concept rendering. All PNGs are below 4 MB.

| File | Size | Version and visible behavior |
| --- | --- | --- |
| [gameplay.png](gameplay.png) | 1280×720 | Toy platform preview of the published build: Summoned Skull attacks Luster Dragon; the player can activate Mirror Force. This is the README cover. |
| [strategies.png](strategies.png) | 1280×720 | Same Toy build: lobby with four preset strategies. |
| [revival-mobile.png](revival-mobile.png) | 844×390 | Local full-server build: graveyard-revival challenge and card inspector. |
| [summon-mobile.png](summon-mobile.png) | 844×390 | Local full-server build: Summoned Skull's purple summon effect. |
| [strategies-mobile.png](strategies-mobile.png) | 844×390 | Local full-server build: preset choice on a phone-sized landscape viewport. |

The local and Toy versions share the UI and use different connection adapters. Mobile screenshots document the local version, not a claim of live multiplayer on Toy.

## Verification / 验证记录

For game source revision `a5dc6fa3beb6032e9145321d2690af54764cce20`, checked 2026-10-09:

- 49 rule, real two-client network, collection, static-adapter and battle-display tests passed, covering the four presets and all seven tutorials/challenges.
- Full-server and Toy production builds passed. All 28 protected runtime files remained intact.
- Toy preflight reported no ERROR/WARN. Platform checks covered initialization, four-preset selection, completed trap-response tutorial, completed graveyard-revival challenge, and persistence of an existing browser save across the update.
- The Toy bundle guard rejects unresolved server filesystem calls.
- Full game source and its CI logs are private. These are recorded development checks, not publicly inspectable CI evidence; no private source/CI URL is presented as a public resource.

## Material credit / 素材说明

Unofficial Yu-Gi-Oh fan prototype. Yu-Gi-Oh card names and card fronts are third-party content; generated arena/monster/ritual artwork and game code are separate. Original catalog text follows the repository's CC0 contribution terms. Game screenshots contain third-party card artwork and do not relicense it or claim official affiliation.
