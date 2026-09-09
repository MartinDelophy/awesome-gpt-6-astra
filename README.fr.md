<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 20](https://img.shields.io/badge/Cases-20-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Une sélection de jeux intéressants créés avec GPT-6 Astra.**

Des idées ludiques, des jeux à essayer et des récits de développement pour inspirer les prochains créateurs.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
**Français** · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proposer un jeu](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuer](CONTRIBUTING.md)

</div>

Cette page traduit le [README anglais](README.md). Consultez l’original pour vérifier les dernières mises à jour ; les corrections de traduction sont les bienvenues.

## Pour commencer

Découvrez **19 jeux pour navigateur et 1 bac à sable interactif d’art à particules** : stratégie territoriale des Trois Royaumes, puzzles en bois à emboîtement et à glissement, fusion de fruits déformables, vol à une touche, combats sur tapis volant, défense d’île par un réseau électrique, survie en pleine nature, pêche sous-marine, gestion d’un restaurant de sushis et agriculture insulaire, course de karts sur Bay Circuit, balade côtière à vélo avec un pélican, jouets de table adaptés en 3D et Orbital Garden. Cliquez sur un titre pour ouvrir la démo ou le code source avec ses instructions de lancement.

Mise à jour du catalogue : **2026-09-09**. L’utilisation du modèle est renseignée d’après les déclarations des créateurs ou des contributeurs ; les points non confirmés sont signalés dans chaque fiche. Cette date correspond à la maintenance du catalogue, pas à un nouveau test de tous les jeux.

- **Envie de jouer ?** Parcourez les genres ci-dessous.
- **Vous avez créé un jeu ?** [Proposez votre projet](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) avec un lien jouable ou son code source, une capture en jeu et une explication de votre utilisation de GPT-6 Astra.
- **Vous avez découvert un beau projet ?** Recommandez une œuvre publique en citant son créateur.

Cette liste est maintenue par la communauté et n’est pas affiliée à OpenAI. Une sélection invite à explorer un projet ; elle ne constitue ni un test de performances ni une recommandation officielle.

## Jeux

- [Action et arcade](#action-arcade)
- [Casse-têtes et réflexion](#puzzles)
- [Stratégie et simulation](#strategy-simulation)
- [Jeux de rôle et aventure](#rpg-adventures)
- [Plateforme et course](#platformers-racing)
- [Expérimental et multijoueur](#experimental-multiplayer)

<a id="action-arcade"></a>

### Action et arcade

Jeux de tir, de combat, de survie, de rythme et tous ceux qui donnent envie de refaire une partie.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — Un jeu de vol en 3D à une touche : battez des ailes pour traverser les passages et augmenter votre score.
  - Créateur: [Ayi1337](https://github.com/Ayi1337)
  - Plateforme: Navigateur, conçu pour mobile.
  - GPT-6 Astra: [Tests en une seule génération et prompts d’origine du créateur](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Ressources: [Code source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [HTML autonome](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Aperçu: ![Écran de démarrage de Mosswing avec le personnage volant et les passages entre les piliers de pierre.](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Pilotez un tapis volant autour d’un monde sphérique, traversez des anneaux, lancez des sorts et affrontez des ennemis et des boss.
  - Créateur: [threapchills](https://github.com/threapchills)
  - Plateforme: Navigateur sur ordinateur, avec clavier et souris ; nécessite WebGL 2.
  - GPT-6 Astra: Le créateur indique dans la [section About du dépôt](https://github.com/threapchills/MagicCarpetWizard) que le jeu a été réalisé avec GPT-6 Astra.
  - Ressources: [Code source et instructions de lancement](https://github.com/threapchills/MagicCarpetWizard) · Technologies: Three.js, Vite.
  - Aperçu: ![Écran de démarrage de Magic Carpet Wizard avec le pilote du tapis, la ville et un anneau de vol lumineux.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Un jeu de tir à projectiles avec trois chasseurs, cinq secteurs, des boss à plusieurs phases et un tir automatique.
  - Créateur: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — Selon le créateur, réalisé avec GPT-6 Astra ultra et amélioré par itérations.
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - Aperçu: ![THUNDERFALL — Capture du jeu](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Défendez une balise contre des vagues de chars ennemis dans six secteurs en 3D, avec des murs de briques destructibles, une accélération et une impulsion électromagnétique.
  - Créateur: [chat01.ai](https://linux.do/u/bandaot)
  - Plateforme: Navigateur compatible WebGL 2, interface chinoise ; commandes clavier/souris et tactiles décrites dans le manuel. Combat lancé sans connexion ni paiement.
  - GPT-6 Astra: L’utilisation de GPT-6 Astra et son rôle attendent la confirmation du créateur.
  - Aperçu: ![IRON BASTION / 钢铁防线 — Capture du jeu](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — Un jeu de combat de bonshommes bâtons en développement, avec coups de poing, pieds, uppercuts, shurikens et parades ; entraînement contre un bot et menus en ligne/amis.
  - Créateur: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plateforme: Navigateur de bureau, clavier ; entraînement sans connexion. Multijoueur en ligne et manette non testés indépendamment.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — Le créateur indique explicitement avoir utilisé GPT-6 Astra pour ce jeu de combat multijoueur encore en développement.
  - Aperçu: ![Stick Fighter — Capture du jeu](assets/screenshots/stick-fighter/gameplay.jpg)

<a id="puzzles"></a>

### Casse-têtes et réflexion

Énigmes logiques, défis de physique, jeux de mots et petits mécanismes ingénieux.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Un jeu de fusion de pastèques reposant sur la déformation et les collisions de fruits souples.
  - Créateur: [Ayi1337](https://github.com/Ayi1337)
  - Plateforme: Navigateur moderne ; le créateur propose aussi une version HTML autonome à télécharger.
  - GPT-6 Astra: [Tests en une seule génération et prompts d’origine du créateur](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Ressources: [Code source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML autonome](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Aperçu: ![Partie de Melon Lab avec des fruits souples dans le récipient de fusion et les commandes de physique.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Éliminez au moins trois bulles voisines de même couleur ; les grands groupes créent des bombes et des arcs-en-ciel. Modes détente, niveaux et chronométré.
  - Créateur: zding
  - Plateforme: Navigateur, interface chinoise ; lancement vérifié sans connexion ni paiement.
  - GPT-6 Astra: L’utilisation de GPT-6 Astra et son rôle attendent la confirmation du créateur.
  - Aperçu: ![Q弹消消乐 — Capture du jeu](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Démontez un casse-tête en bois à six pièces imbriquées et résolvez deux configurations de taquin Huarong Dao dans un atelier 3D, avec indices et annulation des déplacements.
  - Créateur: [MartinDelophy](https://github.com/MartinDelophy) (à l’origine du projet et de sa soumission).
  - Plateforme: Navigateur moderne avec WebGL 2 ; interface en chinois, commandes à la souris, au clavier et au toucher. Gratuit, sans connexion à un compte ni clé API ; la progression reste dans le navigateur actuel.
  - Participation du modèle: [Journal de création](works/sunjing-puzzles/CREATION.md) — Travail itératif dans Codex sur la conception du jeu, les visuels 3D procéduraux, les règles, le solveur et les tests ; l’utilisation exacte de GPT-6 Astra attend la confirmation du créateur (soumission provisoire).
  - Ressources: [Code source et instructions de lancement](works/sunjing-puzzles/README.md) · [Demandes](works/sunjing-puzzles/PROMPTS.md) · Technologies: React, Vinext/Vite, Three.js.
  - Aperçu: ![Casse-tête en bois à six pièces de Sunjing sur un établi 3D vert, avec les numéros des pièces et les commandes d’extraction.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

<a id="strategy-simulation"></a>

### Stratégie et simulation

Défense de tours, cartes stratégiques, gestion, construction et bacs à sable de simulation.

- **[Spy or Lie](https://spyorlie.com/)** — Un jeu de stratégie sur plateau hexagonal contre un ordinateur : posez des agents cachés, bluffez et encerclez les groupes ennemis pour enchaîner les captures.
  - Créateur: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Plateforme: Navigateur, interface anglaise ; premier tour et réponse de l’ordinateur vérifiés sans connexion ni paiement.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — Selon le créateur, Astra a transformé sa conception en démo jouable en une seule génération ; le développement n’a pas été audité indépendamment.
  - Aperçu: ![Spy or Lie — Capture du jeu](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Dirigez Wei, Shu ou Wu dans une campagne au tour par tour sur 15 villes : gérez l’or et les céréales, commandez un effectif de 108 officiers dotés chacun d’un portrait généré par IA et affrontez les factions de l’IA pour unifier le pays.
  - Créateur: [MartinDelophy](https://github.com/MartinDelophy) (à l’origine du projet et de sa soumission).
  - Plateforme: Navigateur moderne ; interface en chinois, commandes à la souris et au toucher. Gratuit, sans connexion à un compte ni clé API ; les sauvegardes locales peuvent être importées et exportées.
  - GPT-6 Astra: [Journal de création](works/three-kingdoms/CREATION.md) — Utilisation confirmée par le créateur, avec une collaboration itérative dans Codex sur les règles, l’interface, l’IA, l’équilibrage et les tests ; le terrain et les portraits des officiers ont été réalisés avec des outils de génération d’images.
  - Ressources: [Code source et instructions de lancement](works/three-kingdoms/README.md) · [Demandes](works/three-kingdoms/PROMPTS.md) · Technologies: React, TypeScript, Vinext/Vite.
  - Aperçu: ![Partie de Three Kingdoms montrant une carte des villes au lavis, les commandes de ressources et les portraits des officiers.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Reliez un réseau électrique sur une île miniature, construisez et améliorez vos tours, et gérez une puissance limitée pour défendre un phare contre dix vagues et un boss final.
  - Créateur: [stackloomdev](https://github.com/stackloomdev)
  - Plateforme: Navigateurs modernes sur ordinateur et mobile, en chinois et en anglais ; gratuit, sans connexion ni clé API. Le son facultatif nécessite Web Audio.
  - GPT-6 Astra: [Journal de développement et contribution du modèle](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Utilisé pour la conception du jeu, le code, les illustrations procédurales et les tests au fil de plusieurs itérations ; il ne s’agit pas d’un test en une seule génération.
  - Ressources: [Code source et instructions de lancement](https://github.com/stackloomdev/last-beacon) · [Besoins et notes d’itération](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Technologies: JavaScript, Canvas 2D, Web Audio.
  - Aperçu: ![Last Beacon en anglais : des tourelles, des mortiers et une tour de givre alimentés par le réseau défendent l’île contre les ennemis du sentier côtier.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — Simulation de survie dans une colonie souterraine : dirigez trois habitants, creusez et construisez tout en gérant oxygène, nourriture et électricité.
  - Créateur: dudu
  - Plateforme: Navigateur avec Canvas, interface chinoise, souris et clavier ; lancement vérifié sans connexion ni paiement.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — Le contributeur indique un développement entièrement réalisé avec GPT-6 Astra ; déclaration non vérifiée indépendamment.
  - Aperçu: ![缺氧 · 小小星球 — Capture du jeu](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — Une aventure dans une tour pixelisée de quinze étages, fondée sur les calculs attaque/défense, des ressources limitées et trois couleurs de clés.
  - Créateur: yw
  - Plateforme: Navigateur, interface chinoise ; lancement vérifié sans connexion ni paiement.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — Le contributeur fournit le prompt dans la rubrique GPT-6 Astra ; la contribution exacte du modèle n’est pas vérifiée indépendamment.
  - Aperçu: ![魔塔 · 永夜之阶 — Capture du jeu](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Jeu de survie et de stratégie sur navigateur présenté comme une recréation de Don't Starve. La capture soumise montre l’exploration d’une forêt, la collecte de ressources, un inventaire et des jauges de santé, de faim et de santé mentale.
  - Créateur: dudu
  - Plateforme: Navigateur ; la capture montre une interface en chinois et des commandes au clavier. Les conditions de paiement et de connexion à un compte ne sont pas précisées ; démo non vérifiée indépendamment.
  - GPT-6 Astra: [Déclaration de la personne ayant soumis le jeu](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — La personne ayant soumis le jeu attribue l’ensemble du développement à GPT-6 Astra.
  - Ressources: Aucun code source public ni journal de développement distinct n’a été fourni.
  - Aperçu: ![Capture de 永恒荒野 fournie dans l’Issue #26 : un personnage près d’un feu de camp en forêt, avec inventaire, jauges de survie et mini-carte.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Une recréation de Dave the Diver pour navigateur, mêlant pêche sous-marine au harpon, gestion d’un restaurant de sushis et agriculture insulaire.
  - Créateur: dudu
  - Plateforme: Navigateur ; interface en chinois, commandes à la souris et au clavier. Accès et lancement d’une plongée vérifiés sans connexion à un compte ni paiement.
  - GPT-6 Astra: [Déclaration de la personne ayant soumis le jeu](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — La personne ayant soumis le jeu attribue l’ensemble du développement à GPT-6 Astra.
  - Ressources: Aucun code source public ni journal de développement distinct n’a été fourni.
  - Aperçu: ![Recréation de Dave the Diver en jeu : un plongeur parmi les poissons, avec les indicateurs d’oxygène et de profondeur ainsi que l’inventaire des prises.](assets/screenshots/dave-the-diver/gameplay.jpg)

<a id="rpg-adventures"></a>

### Jeux de rôle et aventure

Jeux de rôle, exploration, aventures narratives et histoires interactives.

*En attente du premier jeu.*

<a id="platformers-racing"></a>

### Plateforme et course

Parkour, défis de plateforme, courses et jeux centrés sur les déplacements et les itinéraires.

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Disputez trois tours sur Bay Circuit, choisissez parmi six karts et chargez des mini-turbos à utiliser en sortie de virage pour progresser au classement individuel ou marquer des points en équipe de 4 contre 4.
  - Créateur: Ryan
  - Plateforme: Navigateur sur ordinateur avec WebGL 2 et clavier ; gratuit, sans connexion à un compte ni clé API. Fonctionne sur un serveur HTTP local ou un hébergement statique ; Three.js est fourni localement. Courses par équipe locales : une personne et sept pilotes IA.
  - Participation du modèle: [Journal de développement](works/apex-club/CREATION.md) — Travail itératif dans Codex sur le gameplay, le code, les visuels procéduraux et les tests ; l’attribution à GPT-6 Astra attend la confirmation du créateur.
  - Ressources: [Code source et instructions de lancement](works/apex-club/README.md) · [Besoins et notes d’itération](works/apex-club/PROMPTS.md) · [Conversation GPT partagée](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Technologies: JavaScript, Three.js.
  - Aperçu: ![Course par équipe APEX CLUB sur Bay Circuit, avec les karts voisins, la progression des tours, les points d’équipe en direct et une mini-carte.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Parcourez une côte 3D changeante avec un pélican à vélo : alternez entre trois voies, sautez ou baissez-vous pour éviter les obstacles, enchaînez les collectes de poissons et utilisez boucliers, aimants et un sprint invincible de six secondes.
  - Créateur: [chat01.ai](https://chat01.ai) (crédité dans la soumission).
  - Plateforme: Navigateurs sur ordinateur et mobile, au clavier ou au toucher ; gratuit et sans connexion à un compte selon la soumission. Démo non vérifiée indépendamment.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — La personne ayant soumis le jeu indique une génération à partir d’un seul prompt ; le journal de développement lié n’a pas été vérifié indépendamment.
  - Ressources: [Journal de développement partagé](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Aperçu: ![Écran titre de PELICAN PEDAL avec un pélican à vélo au bord de la mer ; capture fournie dans l’Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — Course 3D contre cinq adversaires IA, avec choix de voitures et de circuits, contre-la-montre, dérapages et nitro.
  - Créateur: zding
  - Plateforme: Navigateur, interface chinoise ; lancement vérifié sans connexion ni paiement.
  - GPT-6 Astra: L’utilisation de GPT-6 Astra et son rôle attendent la confirmation du créateur.
  - Aperçu: ![狂飙赛车 · OVERDRIVE — Capture du jeu](assets/screenshots/overdrive/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### Expérimental et multijoueur

Mécaniques originales, compétition en ligne et expériences coopératives.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — Un bac à sable interactif d’art à particules : transformez 48 000 points lumineux en fleur, en anneau gravitationnel ou en galaxie, perturbez la sculpture et exportez un instant sous forme d’affiche.
  - Créateur: [jackroc](https://github.com/jackroc)
  - Plateforme: Navigateur moderne avec WebGL ; cliquez sur le titre pour essayer en ligne. Gratuit, sans connexion ni clé API ; le fichier HTML autonome fonctionne aussi hors ligne. L’ambiance sonore facultative nécessite Web Audio.
  - GPT-6 Astra: [Historique de création et contribution du modèle](works/orbital-garden/README.md#模型与创作记录) — Le créateur a utilisé GPT-6 Astra ultra pour le concept, le code et les textes, avec une relecture collaborative ; il ne s’agit pas d’un test en une seule génération.
  - Ressources: [Code source et instructions de lancement](works/orbital-garden/README.md) · [HTML autonome](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Technologies: WebGL natif, Web Audio, Canvas 2D.
  - Aperçu: ![Fleur de particules vert menthe d’Orbital Garden, avec choix de forme, réglages de vitalité et de vitesse du temps, et export en affiche.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Quatre adaptations 3D de jouets de table : brisez la glace sous un pingouin, guidez des lapins à travers des pièges, équilibrez des astronautes sur une plateforme et résolvez des casse-têtes de stationnement.
  - Créateur: [asmoyou](https://github.com/asmoyou)
  - Plateforme: Navigateurs sur ordinateur, tablette et mobile ; gratuit, sans connexion à un compte. Jeu local à tour de rôle sur un même écran pour 2 à 4 participants, adversaires informatiques compris, ainsi que des puzzles solo ; pas de multijoueur en ligne. Démo non vérifiée indépendamment.
  - GPT-6 Astra: [Déclaration du créateur](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — Selon le créateur, GPT-6 Astra a réalisé de façon autonome l’implémentation des jeux et les tests à partir de descriptions de jouets et de fonctionnalités demandées.
  - Ressources: [Code source et instructions de lancement](https://github.com/asmoyou/toy2game) · [Licence non commerciale](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Code source consultable ; utilisation non commerciale gratuite, utilisation commerciale soumise à l’autorisation écrite préalable de l’auteur. Technologies: TypeScript, React, Vite, Three.js.
  - Aperçu: ![Vue d’ensemble de Toy2Game avec quatre scènes 3D réelles : glace du pingouin, pièges des lapins, équilibre des astronautes et sortie du parking. Image fournie par asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

## Ce que contient une fiche

Une recommandation utile explique clairement de quel jeu il s’agit, où l’essayer et pourquoi il figure dans cette liste.

| Information | Contenu attendu |
| --- | --- |
| Jeu et créateur | Le titre du jeu et un lien vers son créateur ou son équipe d’origine |
| Intérêt du jeu | Une phrase sur la mécanique principale, sans discours promotionnel creux |
| Accès | Un lien jouable ou un dépôt public contenant le code source et les instructions de lancement |
| Capture en jeu | Au moins une capture réelle du jeu avec une URL d’image accessible publiquement |
| Plateforme et prérequis | Navigateur / ordinateur / mobile ; précisez les paiements, la connexion ou le matériel particulier requis |
| Rôle d’Astra | Déclaration du créateur, journal de développement ou document public expliquant la contribution de GPT-6 Astra |
| Ressources de développement | Code source, technologies et récit de création, selon les ressources disponibles |

L’utilisation du modèle est attribuée d’après les déclarations publiques du créateur ; les affirmations sans preuve ne sont pas présentées comme des faits confirmés. Les prototypes jouables sont les bienvenus et l’ouverture du code n’est pas obligatoire.

## Participer à la maintenance

[Proposez un jeu dans une issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) ou ouvrez une pull request. Le format des fiches est décrit dans le [guide de contribution](CONTRIBUTING.md).

Merci de [signaler les liens cassés ou les informations incorrectes](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), notamment les erreurs d’attribution et les changements de conditions d’accès.

## Licence

Les textes originaux de cette sélection et les éléments visuels créés pour ce dépôt sont versés au domaine public sous [CC0 1.0](LICENSE). Les jeux, codes, images, marques et autres contenus tiers liés conservent leurs licences et droits respectifs. Leur présence dans cette liste ne modifie pas leurs autorisations d’utilisation.
