# Astral Duel / 星域决斗 — source and verification notes

- Creator: Ryan-fm (https://github.com/Ryan-fm), submitted by the creator's authenticated account.
- Development: iterative Codex collaboration on the game design, React/TypeScript UI, Three.js arena and summon ritual, Node/Socket.IO rules server, collection/deck features and tests.
- Exact GPT-6 Astra attribution has not yet been confirmed by the creator. This draft does not assert that all work or art was made by GPT-6 Astra.
- Checked on 2026-10-09 in Chrome: the Toy preview loads directly without game login or installation, and opens the summoning screen. Local equivalent static build was played through the trap-chain tutorial and win screen. Ten-pull results, collection and owned-card deck validation were checked; 34 engine/network/collection/static-adapter tests pass.
- Screenshot: actual 1280×720 gameplay from the same Toy static build, captured 2026-10-09. It is not a rendered mockup or AI-generated UI.
- Toy preview: https://www.bilibili.com/toy/preview/preview_2Yf8hxwp/index.html
- Publication: awaiting creator confirmation to submit to Toy review; replace preview title link with the canonical published URL before marking the PR ready.
- Browser build: free Chinese-interface human-vs-AI practice, guided challenges, card collection, summoning and deck editing. Progress stays in this browser. Real online PK and friend rooms require deploying the separate server from the full source version; the static Toy build does not simulate online players.
- Assets: unofficial Yu-Gi-Oh fan prototype; Yu-Gi-Oh card names and card fronts are third-party assets. Generated arena/monster/ritual artwork and code are separate. This catalog contribution does not relicense third-party game artwork or claim official affiliation.
- Source repository is private: https://github.com/Ryan-fm/astral-duel-game. It is not presented as a public source download.
