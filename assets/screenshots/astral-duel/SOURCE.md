# Yu-Gi-Oh! Ruins Duel / 游戏王：遗迹决斗 — creator and verification record

## Creator and model attribution / 作者与模型参与

- Creator: [Ryan-fm](https://github.com/Ryan-fm), submitted from the creator's authenticated account.
- Iterative Codex collaboration covered gameplay, React/TypeScript UI, Three.js effects, the Node.js/Socket.IO rules server, collection, decks and testing.
- **GPT-6 Astra attribution awaits creator confirmation.** Codex collaboration does not establish the model. This admission requirement under [CONTRIBUTING.md](../../../CONTRIBUTING.md#什么样的作品适合收录--what-belongs-here) is still outstanding; the submission remains Draft.
- **GPT-6 Astra 的具体参与仍待作者确认，本投稿保持草稿。**

## Current release / 当前版本

2026-10-10 source revision `8bcc39d` restores the previous faithful card-front presentation and transparent Blue-Eyes / Dark Magician illustrations after the creator rejected the procedural monster meshes. The rotatable model viewer is removed. Illustrations are sprites, not finished sculpted 3D models. Three.js still handles perspective zones, picking, card placement and summon/attack effects.

Players freely choose **古罗马遗迹 / Roman ruins** or **霓虹都市 / neon waterfront** through the AI-mode panel or settings. Full-server friend rooms also let the host choose; both clients receive the same arena, and changing it resets readiness. The saved preference applies to the next duel; active duels retain their arena. Transparent ground and fine zone outlines integrate with the detailed illustrated floors instead of covering them with an opaque stone slab. Compact contextual controls and server-legal drag placement remain.

- [Formal Toy page](https://www.bilibili.com/toy/astral-duel-game/index.html), ID `42086522945536`, PUBLIC. The previous compact battle UI was published before this release. Current tested preview: https://www.bilibili.com/toy/preview/preview_efm3A8hD/index.html . The same bundle was submitted on 2026-10-10; receipt and creator-list status are **auditing**. Submission preview: https://www.bilibili.com/toy/preview/preview_teqjeSnP/index.html . The formal URL retains its prior published version while this update is reviewed.
- Free Chinese WebGL game with mouse/touch controls, no mandatory installation or game login. Toy saves progress in the current browser and supports AI practice, three tutorials, four challenges, summoning, collection and deck editing. Real matching and friend rooms require the separate full-version server; Toy does not simulate online players.
- Four free 40-card presets cover tempo, spell control, defensive counterplay and tribute pressure. Only the dragon preset includes Blue-Eyes. This is a classic small-pool prototype, not the complete modern OCG.
- The user-supplied Blue-Eyes entry artwork is preserved. Click/tap, Enter or Space enters the live lobby. Card rules and stats are independent of arena selection and cosmetics.

## Verification / 验证

- 62 game tests passed: rules, actual two-client networking, collection, static adapter, battle display, drag legality, hidden-monster protection, free arena selection, saved defaults, active-duel stability, room permissions and both-client scene agreement. Four tests for the removed mesh functionality were retired; its hidden-state test remains. Earlier counts of 65 describe the superseded mesh build.
- Full-server and Toy builds passed; 28 protected runtime files remained intact. Toy doctor returned no ERROR/WARN. Source and CI are private, so recorded results are not offered as publicly inspectable CI evidence.
- Local 1280×720 and Chrome 844×390 checks completed native pointer placement into zone 2, keyboard pickup/cancellation, attacks reducing opposing LP to 7700, and the trap tutorial. Important phone controls measured at least 44 CSS pixels high. No real-device performance claim is made.
- Current Toy preview was exercised in Chrome at its normal viewport: both arena choices, preserved 34-ticket collection, saved city preference, city attack and victory, Roman trap response. No platform mobile claim is inferred from a browser wrapper resize.
- Catalogue validation: 27 tests passed, README metadata parsed, and git diff --check passed.

## Actual screenshots / 实机截图

All images are browser captures from the creator's Codex session, not concept renders. Current local captures use 2026-10-10 source `8bcc39d`. Each PNG is below 4 MB; the README cover is below 1 MiB. Older captures remain explicitly historical.

| File | Size | Source and visible behavior |
| --- | --- | --- |
| [gameplay.png](gameplay.png) | 1152×648 | Current local full-server city arena, restored card fronts, contextual attack controls. Resized intact from 1280×720. |
| [arena-picker.png](arena-picker.png) | 1280×720 | Current local full-server: two free scene thumbnails, city selected. |
| [city-arena.png](city-arena.png) | 1280×720 | Current local full-server: city arena with no card inspector. |
| [battle-mobile.png](battle-mobile.png) | 844×390 | Current local full-server Roman attack panel with 44px confirm button. |
| [battle-wide.png](battle-wide.png) | 1280×720 | Current local full-server Roman arena and trap-response tray. |
| [entry.png](entry.png) | 1280×720 | Earlier local entry update, current title and user-supplied opening image. |
| [entry-mobile.png](entry-mobile.png) | 844×390 | Earlier local entry update with complete artwork and 190×48 prompt. |
| [strategies.png](strategies.png) | 1501×832 | Earlier local rename build `30749a3`: lobby and four presets. |
| [strategies-mobile.png](strategies-mobile.png) | 844×390 | Earlier local rename build: mobile landscape title and presets. |
| [revival-mobile.png](revival-mobile.png) | 844×390 | Historical `a5dc6fa`: graveyard revival challenge. |
| [summon-mobile.png](summon-mobile.png) | 844×390 | Historical `a5dc6fa`: Summoned Skull summon effect. |
| [response-mobile.png](response-mobile.png) | 844×390 | Historical simplified HUD `814dcc5`, before the monster rollback: trap response. |
| [kuriboh-model.png](kuriboh-model.png) | 1280×720 | Superseded mesh experiment; this viewer has been removed. |
| [roman-kuriboh.png](roman-kuriboh.png) | 1280×720 | Superseded raised stone arena and mesh experiment; not current presentation. |
| [drag-mobile.png](drag-mobile.png) | 844×390 | Historical `909d5e5`: keyboard pickup and legal defense zones. |

## Material credit / 素材说明

Unofficial Yu-Gi-Oh fan prototype. Card names/fronts contain third-party artwork; screenshots do not relicense it or imply official affiliation. The opening illustration was supplied by the user. Generated original portraits, arena/ritual artwork and a warm limestone texture are separate. Original catalogue prose follows the repository's contribution terms. The public catalogue contains no private server source or secrets.
