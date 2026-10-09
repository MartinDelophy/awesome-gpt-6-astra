# Astral Duel / 星域决斗 — source and verification notes

- Creator: Ryan-fm (https://github.com/Ryan-fm), submitted by the creator's authenticated account.
- Development: iterative Codex collaboration on the game design, React/TypeScript UI, Three.js arena and summon ritual, Node/Socket.IO rules server, collection/deck features and tests.
- Exact GPT-6 Astra attribution has not yet been confirmed by the creator. This draft does not assert that all work or art was made by GPT-6 Astra.
- Checked on 2026-10-09 in Chrome: the Toy preview loads directly without game login or installation, and opens the summoning screen. Local equivalent static build was played through the trap-chain tutorial and win screen. Ten-pull results, collection and owned-card deck validation were checked; 49 engine/network/collection/static-adapter tests pass.
- Screenshot: actual 1280×720 gameplay from the same Toy static build, captured 2026-10-09. It is not a rendered mockup or AI-generated UI.
- Toy release: https://www.bilibili.com/toy/astral-duel-game/index.html
- Publication: Toy CLI reports published on 2026-10-09, id 42086522945536, visibility PUBLIC. Exact Astra attribution remains unconfirmed.
- Browser build: free Chinese-interface human-vs-AI practice, guided challenges, card collection, summoning and deck editing. Progress stays in this browser. Real online PK and friend rooms require deploying the separate server from the full source version; the static Toy build does not simulate online players.
- Assets: unofficial Yu-Gi-Oh fan prototype; Yu-Gi-Oh card names and card fronts are third-party assets. Generated arena/monster/ritual artwork and code are separate. This catalog contribution does not relicense third-party game artwork or claim official affiliation.
- Source repository is private: https://github.com/Ryan-fm/astral-duel-game. It is not presented as a public source download.

## Strategy and interaction update — 2026-10-09

- Four different free 40-card presets: tempo, spell control, defense/counterplay, and tribute pressure. Only the tribute/dragon preset includes Blue-Eyes; the other three have no Blue-Eyes copies. These are classic small-pool strategy templates, not full modern archetypes or win-rate-calibrated competitive decks.
- Neutral tutorials use low-level monsters; four challenges cover tribute summoning, quick-spell breakthrough, trap reversal and graveyard revival. The tribute goal adapts to the selected preset.
- Card actions use a non-blocking side inspector, direct board target and placement selection, public-stat damage preview, and a prominent response tray. Phone controls were measured at 844×390; key buttons are at least 44 CSS pixels high.
- Featured summon effects depend on monster level and attribute, including acquired cards; the purple Summoned Skull revival was exercised on the local server. Monsters remain 2.5D sprites/card projections, while the arena, cards and effects use Three.js.
- Additional screenshots: `revival-mobile.png`, `summon-mobile.png`, and `strategies-mobile.png` are real 844×390 Chrome local-server captures dated 2026-10-09; they are not concept renders. The local game and Toy edition share the UI, with different connection adapters.
- Both full-server and Toy production builds pass, with the original 28 protected runtime files intact. Toy content preflight reports no ERROR/WARN. The browser-bundle guard rejects unresolved server filesystem calls.

- Latest platform preview checked: https://www.bilibili.com/toy/preview/preview_bFdwHmWd/index.html . Initialization, four-preset selection and the trap-response tutorial completed successfully in Chrome. `gameplay.png` is a real 1280×720 capture from this preview; `strategies.png` shows its four-preset lobby. The old browser save was retained across the build update.
