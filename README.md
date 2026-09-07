<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**A collection of interesting games made with GPT-6 Astra.**

Playful ideas, games you can try, and development stories that inspire the next creator.

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Submit a game](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribute](CONTRIBUTING.md)

</div>

## Start here

Explore **5 browser games and 1 interactive particle-art sandbox**: soft-body fruit merging, one-tap flight, magic-carpet combat, island power-grid tower defense, Bay Circuit kart racing, and Orbital Garden. Click a title to open its demo or source with setup instructions.

Last checked: **2026-09-05**. Creator statements, source links, and demo availability have been checked. Model attribution is author-reported; the games have not been play-tested for this list.

- **Looking for something to play?** Browse the genres below.
- **Built a game?** [Submit your project](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) with a playable or source link, a gameplay screenshot, and a description of how you used GPT-6 Astra.
- **Found a great project?** Recommend someone else's public work and credit its creator.

This is a community-maintained list with no affiliation to OpenAI. Inclusion is an invitation to explore, not a benchmark or an official endorsement.

## Games

- [Action & arcade](#action--arcade)
- [Puzzles & brain games](#puzzles--brain-games)
- [Strategy & simulation](#strategy--simulation)
- [RPGs & adventures](#rpgs--adventures)
- [Platformers & racing](#platformers--racing)
- [Experimental & multiplayer](#experimental--multiplayer)

### Action & arcade

Shooters, fighters, survival games, rhythm games, and anything that invites one more round.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — A 3D tap-to-flap game about flying through gaps and building your score.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Browser, designed for mobile.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Fly a magic carpet through a spherical world, thread rings, cast spells, and fight enemies and bosses.
  - Creator: [threapchills](https://github.com/threapchills)
  - Platform: Desktop browser with mouse and keyboard; requires WebGL 2.
  - GPT-6 Astra: The creator attributes the game to GPT-6 Astra in the [repository About section](https://github.com/threapchills/MagicCarpetWizard).
  - Resources: [Source and setup instructions](https://github.com/threapchills/MagicCarpetWizard) · Built with: Three.js and Vite.

### Puzzles & brain games

Logic puzzles, physics challenges, word games, and clever little mechanisms.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — A watermelon merging game built around soft-body fruit deformation and collisions.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Modern browser; the creator also provides a downloadable standalone HTML version.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)

### Strategy & simulation

Tower defense, strategic card games, management games, building, and simulation sandboxes.

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Connect a power grid across a miniature island, build and upgrade towers, and balance limited power to defend a lighthouse through ten waves and a final boss.
  - Creator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Modern desktop and mobile browsers, with Chinese and English support; free, no login or API key. Optional sound requires Web Audio.
  - GPT-6 Astra: [Creator's development log and model contribution](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Used for gameplay design, code, procedural artwork, and tests through multiple iterations; not a one-shot test.
  - Resources: [Source and setup instructions](https://github.com/stackloomdev/last-beacon) · [Requirements and iteration notes](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Built with: JavaScript, Canvas 2D, and Web Audio.
  - Preview: ![Last Beacon gameplay in English: powered sentinels, mortars, and a frost tower defend the island against enemies following the coastal path.](assets/screenshots/last-beacon/gameplay-en.png)

### RPGs & adventures

Role-playing, exploration, narrative adventures, and interactive stories.

*Waiting for the first game.*

### Platformers & racing

Parkour, platform challenges, racing, and games built around movement and routes.

- **[APEX CLUB — Bay Kart Grand Prix](works/apex-club/README.md)** — Race three laps around Bay Circuit, choose from six karts, and charge corner-exit mini turbos to climb the solo rankings or score for a 4v4 team.
  - Creator: [MartinDelophy](https://github.com/MartinDelophy) (submitting account).
  - Platform: Desktop browser with WebGL 2 and a keyboard; free, no login or API key. Requires a local HTTP server and Internet access for Three.js. Team races are local: one human and seven AI racers.
  - Model participation: [Development record](works/apex-club/CREATION.md) — Iterative Codex work on gameplay, code, procedural visuals and tests; GPT-6 Astra attribution awaits creator confirmation.
  - Resources: [Source and setup](works/apex-club/README.md) · [Request and iteration summary](works/apex-club/PROMPTS.md) · Built with: JavaScript, Three.js.
  - Preview: ![APEX CLUB team race on Bay Circuit with nearby karts, lap progress, live team points and a minimap.](assets/screenshots/apex-club/gameplay.png)

### Experimental & multiplayer

Unusual mechanics, online competition, and cooperative experiences.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — An interactive particle-art sandbox: morph 48,000 light points between a flower, a gravity ring, and a galaxy, disturb the sculpture, and export a moment as a poster.
  - Creator: [jackroc](https://github.com/jackroc)
  - Platform: Modern browser with WebGL; click the title to try it online. Free, no login or API key; the standalone HTML also works offline. Optional ambient sound requires Web Audio.
  - GPT-6 Astra: [Creation record and model contribution](works/orbital-garden/README.md#模型与创作记录) — The creator used GPT-6 Astra ultra for the concept, code, and copy, with collaborative review; not a one-shot test.
  - Resources: [Source and setup instructions](works/orbital-garden/README.md) · [Standalone HTML](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Built with: native WebGL, Web Audio, and Canvas 2D.

## What an entry includes

A useful recommendation makes it easy to understand what a game is, where to try it, and why it belongs here.

| Detail | What to include |
| --- | --- |
| Game & creator | The game title and a link to its original creator or team |
| Why it is interesting | One sentence about the core mechanic, without promotional filler |
| Access | A playable link, or a public source repository with setup instructions |
| Gameplay screenshot | At least one actual gameplay screenshot with a publicly accessible image URL |
| Platform & requirements | Browser / desktop / mobile; disclose payment, login, or special hardware requirements |
| Astra's role | A creator statement, development log, or public record explaining how GPT-6 Astra contributed |
| Development resources | Source code, technology, and the making-of story, where available |

Model use is attributed to the creator's public description; unsupported claims will not be presented as confirmed facts. Playable prototypes are welcome, and open source is optional.

## Help maintain the list

[Submit a game through an issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml), or open a pull request. See the [contribution guide](CONTRIBUTING.md) for the entry format.

Please [report broken links or incorrect information](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), including attribution errors or changed access requirements.

## License

Original curated text and artwork in this repository are dedicated to the public domain under [CC0 1.0](LICENSE). Linked games, code, images, trademarks, and other third-party materials retain their own licenses and rights. Listing a project does not change its permissions.
