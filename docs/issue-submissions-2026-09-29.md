# Issue submissions reviewed on 2026-09-29

This review covers the four open submissions: [#83](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/83), [#104](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/104), [#109](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/109) and [#110](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/110). Only SANDLINE is added to the English and Chinese catalogs. The other submissions remain open for missing information and are not counted as games.

## SANDLINE — #109

- **Creator:** [xilinnihao-afk / 一海千寻的AI实验室](https://github.com/xilinnihao-afk).
- **Direct game:** <https://ihca.cn/sandline/>. The creator's [public article](https://zhuanlan.zhihu.com/p/2085289080955352314) links this HTTPS entry point; the source README still links an older IP address, which is not used as the catalog title link.
- **Gameplay:** single-player 3v3 tactical combat with AI teammates and opponents, cover, weapons, grenades and A/B bomb objectives. It is not online multiplayer.
- **Model attribution:** the public article is titled “GPT-6-astra发布后，我用Three.js做了一个能玩的手机FPS” and describes the weapon-feedback iteration. Submission #109 explicitly attributes implementation, animation, audio and debugging assistance to GPT-6 Astra across multiple iterations. These are public creator/submitter descriptions, not an independent audit of model sessions; no verbatim original prompt or one-shot claim is supplied.
- **Development resources:** [source](https://github.com/xilinnihao-afk/sandline-threejs-fps), [development journal](https://github.com/xilinnihao-afk/sandline-threejs-fps/blob/main/DEVLOG.md). The source release excludes third-party assets; the catalog links the hosted game rather than requiring local setup. Devlog test counts describe the creator's project and are not tests run by this catalog review.
- **Browser verification (2026-09-29):** opened the HTTPS title link in desktop Chrome, waited for all seven loading stages and selected “突入战场 / DEPLOY SQUAD”. Entered round 01 with a rendered battlefield, weapon HUD, A/B defense objective and a running countdown; observed an AI elimination in the kill feed. No login, installation, payment or API key was requested. This is an entry/start check, not a full playthrough.
- **Access:** WebGL browser, desktop keyboard/mouse or mobile landscape touch controls. The initial download takes several minutes in this review environment. Physical-phone performance and a complete match are not independently verified.

### Screenshot and rights

The README preview uses the public [image attached to submission #109](https://github.com/user-attachments/assets/0443c8e4-4060-49f2-af31-175138c4e6ab). The submitter dates it 2026-09-29. It is a 1728×826 JPEG, approximately 361 KiB, showing combat, a teammate, weapon HUD and the A-site bomb countdown. It was fetched without authentication and visually checked; it is a submission-provided capture, not a newly captured review image.

Original game source is MIT licensed. Third-party model, texture and audio permissions remain separate: see [ASSETS.md](https://github.com/xilinnihao-afk/sandline-threejs-fps/blob/main/ASSETS.md) and [NOTICE.md](https://github.com/xilinnihao-afk/sandline-threejs-fps/blob/main/NOTICE.md). Catalog inclusion does not relicense the game or its screenshot and assets.

## Pending submissions

| Issue | Review outcome | Information needed |
| --- | --- | --- |
| [#83 — Somethin / The Impossible Cathedral](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/83) | Not added; kept open. A previous maintainer comment already requested corrections; this review adds a short follow-up. | A complete playable HTTPS URL instead of “Gamerbunker”, an actual gameplay image, a consistent final title and creator credit, meaningful model-use and platform details instead of placeholders. Repeated development prompts do not demonstrate a running game. |
| [#104 — R Restaurant horror 3d](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/104) | Not added; kept open. Requirements were explained in Spanish. | A valid playable URL, a real gameplay screenshot, creator details, a concrete Astra contribution statement and a short description of implemented gameplay and controls. The supplied numeric URL and repeated creation requests are insufficient. |
| [#110 — MIDWAY 1942: Air Strike](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/110) | Candidate only; not added or counted. Kept open for attribution. | A public creator statement confirming whether GPT-6 Astra was used and explaining its role. The submission explicitly says model attribution is unconfirmed. Sharing an author with SANDLINE does not establish the model used for this game. |

## 中文摘要

本次正式收录 #109《沙线行动》，同步中英文目录、实机预览与数量。#83、#104 缺少有效入口、截图和模型说明；#110 已有入口与截图，但投稿明确表示模型归属待确认。其余三条均已留言说明待补资料，并保持开启，不计入正式收录数量。
