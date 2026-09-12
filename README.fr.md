<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**Une sélection de jeux intéressants créés avec GPT-6 Astra.**

Des idées ludiques, des jeux à essayer et des récits de développement pour inspirer les prochains créateurs.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
**Français** · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proposer un jeu](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuer](CONTRIBUTING.md)

</div>

Cette page traduit le [README anglais](README.md). Consultez l’original pour vérifier les dernières mises à jour ; les corrections de traduction sont les bienvenues.

## Pour commencer

Découvrez **86 jeux et projets interactifs** : stratégie territoriale des Trois Royaumes, puzzles en bois à emboîtement et à glissement, fusion de fruits déformables, 2048 de construction urbaine avec génération procédurale, vol à une touche, combats sur tapis volant, un jeu de tir à rideaux de balles en cinq niveaux, défense d’île par un réseau électrique, survie en pleine nature, pêche sous-marine, gestion d’un restaurant de sushis et agriculture insulaire, course de karts sur Bay Circuit, balade côtière à vélo avec un pélican, jouets de table adaptés en 3D, décoration intérieure en 3D et Orbital Garden. Cliquez sur un titre pour jouer directement dans le navigateur.

Mise à jour du catalogue : **2026-09-12**. L’utilisation du modèle est renseignée d’après les déclarations des créateurs ou des contributeurs ; les points non confirmés sont signalés dans chaque fiche. Cette date correspond à la maintenance du catalogue, pas à un nouveau test de tous les jeux.

- **Envie de jouer ?** Parcourez les genres ci-dessous.
- **Vous avez créé un jeu ?** [Proposez votre projet](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) avec un lien direct vers le jeu dans le navigateur, une capture en jeu et une explication de votre utilisation de GPT-6 Astra.
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

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — Jouez un match de football à onze entre Barcelone et le Real Madrid dans un stade 3D, avec passes, tirs et changement de joueur.
  - Créateur: [Mindblown / @mind](https://mindblown.ai/@mind)
  - Plateforme: Navigateur de bureau ; clavier et souris, sans connexion obligatoire.
  - GPT-6 Astra: [Notes de vérification](assets/screenshots/stadium-elite/SOURCE.md) — La publication Mindblown fournie cite Three.js et GPT-6 Astra.
  - Aperçu: ![Stadium Elite — El Clásico: Jouez un match de football à onze entre Barcelone et le Real Madrid dans un stade 3D, avec passes, tirs et changement de joueur.](assets/screenshots/stadium-elite/gameplay.png)

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

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — Un FPS de peinture inspiré de Van Gogh : six artistes, des armes distinctes et des manches à 20 points.
  - Créateur: [Peter Gostev](https://x.com/petergostev)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/gogh-strike/SOURCE.md).
  - Aperçu: ![Gogh Strike · Paint Clash — Capture du jeu](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Un cockpit de tir façon Asteroids avec quatre caméras, radar, doubles canons et vol inertiel.
  - Créateur: [Eyes Wide Open](https://x.com/DantesClown)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Aperçu: ![ASTEROIDS · Deepfield — Capture du jeu](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — Un FPS tactique dans un terminal portuaire sous la pluie, avec fusil détaillé, interface de combat et neuf ennemis.
  - Créateur: [hiraeth](https://x.com/WoahWurdz)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/blackwater/SOURCE.md).
  - Ressources: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Aperçu: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — Une arène fantastique avec quatre héros, six compétences par classe, duels contre l’IA et salons en ligne.
  - Créateur: [JUMPERZ](https://x.com/jumperz)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/cinderfall/SOURCE.md).
  - Aperçu: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Déplacez les membres d’un danseur articulé vers les cibles correspondantes pour marquer des points et prolonger une manche de breaking chronométrée.
  - Créateur: [Satrio](https://x.com/satrio_d)
  - Plateforme: Navigateur sur ordinateur, souris ; une manche chronométrée a été lancée sans connexion à un compte.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — Le créateur indique qu’Astra a amélioré son jeu de breakdance existant et sa présentation. [Notes de vérification](assets/screenshots/breakdance/SOURCE.md).
  - Aperçu: ![Un danseur articulé vise une cible avec le pied dans l’arène de breakdance chronométrée.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — Un FPS de navigateur sur le thème de la Seconde Guerre mondiale, avec apparences de soldats et de zombies, équipements d’armes, entraînement contre des bots et options de salon.
  - Créateur: [Rishi](https://x.com/0xRishi)
  - Plateforme: Navigateur sur ordinateur, clavier et souris ; entraînement contre des bots lancé sans compte. Multijoueur et manette non testés.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi indique avoir créé Astral War avec Astra, Three.js, Meshy et ElevenLabs. Le site actuel crédite également Vesper ; voir la note d’attribution. [Notes de vérification](assets/screenshots/astral-war/SOURCE.md).
  - Aperçu: ![Vue de combat d’Astral War avec l’arme et les commandes du champ de bataille.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Plongez depuis trois hauteurs, réalisez saltos et vrilles, puis visez un anneau flottant pour améliorer votre score d’entrée dans l’eau.
  - Créateur: [BubuAi](https://x.com/BubuStd)
  - Plateforme: Navigateur ; le jeu autonome démarre sans compte ni téléchargement. Un plongeon a été lancé lors du contrôle du 2026-09-09 ; clavier et commandes tactiles documentées.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — Le créateur annonce une réalisation avec Astra Pro et Three.js à partir d’un seul prompt. [Notes de vérification](assets/screenshots/flop-club/SOURCE.md).
  - Ressources: [Présentation du projet](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Aperçu: ![Un plongeur sur la plateforme haute, au-dessus de l’anneau cible et des commandes d’entrée dans l’eau.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Pilotez sur des circuits filaires au néon qui accélèrent à chaque boucle, en synchronisant accélérations et changements de phase pour survivre plus longtemps.
  - Créateur: [Thomas Ricouard](https://x.com/Dimillian)
  - Plateforme: Navigateur sur ordinateur ; un vol avec score a été lancé sans compte. WASD pour voler, Espace pour accélérer et Shift pour changer de phase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — Le créateur indique qu’Astra a produit le jeu et la musique à partir d’un brief visuel néon/synthwave et d’illustrations conceptuelles. [Notes de vérification](assets/screenshots/vector-dive/SOURCE.md).
  - Aperçu: ![Parcours de vol au néon de Vector Dive avec le vaisseau et les indicateurs de jeu.](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — Défendez une ville côtière contre des vagues de lapins turbulents avec trois armes, des passages sur les toits, des ruées et un grappin.
  - Créateur: [OpenDesign](https://x.com/OpenDesignHQ)
  - Plateforme: Navigateur sur ordinateur ; clavier et souris, sans compte ni téléchargement.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign identifie ce jeu Three.js comme la version GPT-6 Astra dans sa comparaison de deux modèles. [Notes de vérification](assets/screenshots/harbor-skirmish/SOURCE.md).
  - Aperçu: ![Vue à la première personne avec un fusil à Seabreeze, des lapins approchants, un compteur de vagues et les commandes d’armes.](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — Boxez durant trois rounds chronométrés dans un ring souterrain en 3D, en dosant coups, gardes, esquives et endurance.
  - Créateur: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plateforme: Navigateur sur ordinateur ; WASD pour bouger, J/K pour frapper, L pour bloquer et Espace pour esquiver ; sans compte ni téléchargement.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/sonic0828/status/2097601232877781344) — Le fil de présentation du créateur cite GPT-6 Astra pour la génération des mini-jeux ; la réponse consacrée à la boxe renvoie vers cette version. [Notes de vérification](assets/screenshots/underground-boxing/SOURCE.md).
  - Ressources: [Lien de lancement du créateur](https://x.com/sonic0828/status/2097601584410796401)
  - Aperçu: ![Deux boxeurs échangent des coups dans un ring souterrain éclairé, avec chronomètre, santé et endurance.](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — Alternez coups hauts et bas dans une rue au couchant, bloquez les ripostes et poussez l’adversaire dans une bouche d’égout en évitant les pots de fleurs qui tombent.
  - Créateur: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plateforme: Navigateur sur ordinateur ; A/D pour bouger, J/K pour frapper, U/I pour bloquer et Espace pour esquiver ; sans compte.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/sonic0828/status/2097601232877781344) — La présentation GPT-6 Astra du créateur comporte une réponse de lancement distincte qui renvoie vers ce jeu de combat de rue. [Notes de vérification](assets/screenshots/urban-champion-3d/SOURCE.md).
  - Ressources: [Lien de lancement du créateur](https://x.com/sonic0828/status/2097601861658587376)
  - Aperçu: ![Combattants bleu et rouge devant Sunset Mart, avec chronomètre du round et jauges d’endurance.](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — Survivez à un siège urbain de trois minutes grâce au tir automatique, aux esquives en mouvement, à l’expérience à ramasser et aux améliorations à choisir.
  - Créateur: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plateforme: Navigateur ; WASD ou glissement pour bouger, visée automatique ; sans compte ni téléchargement.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/sonic0828/status/2097601232877781344) — Le créateur nomme GPT-6 Astra dans l’annonce de la collection et propose cette version de survie 3D dans une réponse dédiée. [Notes de vérification](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - Ressources: [Lien de lancement du créateur](https://x.com/sonic0828/status/2097602391122264310)
  - Aperçu: ![Un survivant tire automatiquement sur les ennemis d’une rue, avec 14 éliminations et 166 secondes restantes.](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — Affrontez des vagues de virus informatiques dans une arène à la première personne dessinée en caractères ASCII, avec sprint, saut et glissade.
  - Créateur: [Acker Code](https://x.com/acker_code)
  - Plateforme: Navigateur sur ordinateur ; clavier et souris, sans compte. Cliquez dans l’arène pour capturer la souris ; Échap la libère.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/acker_code/status/2097542957070975286) — Le créateur crédite explicitement Codex et GPT-6 Astra pour ce jeu de tir en art ASCII. [Notes de vérification](assets/screenshots/ascii-district/SOURCE.md).
  - Aperçu: ![Cour ASCII envahie par des virus, avec 29 cartouches indiquées après un tir.](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — Gardez un capybara dansant en équilibre sur un bateau-dragon, penchez-vous contre les vagues et réussissez six figures en 40 secondes.
  - Créateur: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plateforme: Navigateur sur ordinateur ; jeu gratuit sans compte. Cliquez sur Play ; les fonctions de compte sont facultatives.
  - GPT-6 Astra: [Fiche du créateur](https://www.aigameshare.com/games/aura-farming-game) — Le créateur crédite GPT-6 Astra et Codex, ainsi que Blender, Three.js, ImageGen et WebAudio. [Notes de vérification](assets/screenshots/aura-farming/SOURCE.md).
  - Aperçu: ![Un capybara danse sur un bateau-dragon, avec commandes d’inclinaison et d’appui et défi de six figures.](assets/screenshots/aura-farming/gameplay.jpg)

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

- **[CityMaker](https://citymaker.0to1app.com)** — Un puzzle 2048 sur un quartier de 4×4 cases : fusionnez les bâtiments identiques pour parcourir onze niveaux architecturaux par ville, des maisons traditionnelles à une silhouette urbaine reconnaissable, dans douze villes avec rotation par pas de 45°.
  - Créateur: [Derek Wang](https://github.com/derek-wangpch)
  - Plateforme: Navigateurs sur ordinateur et mobile avec WebGL ; anglais, chinois simplifié et traditionnel. Gratuit, sans compte ni clé API ; progression par ville dans le navigateur actuel et installation possible sur l’écran d’accueil iOS.
  - GPT-6 Astra: [Historique de création](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — Le créateur indique avoir utilisé GPT-6 Astra pour la géométrie procédurale des 132 bâtiments, via références, recherche multivue, volumes fondés sur les silhouettes et validation par captures ; ce n’est pas un essai en un seul prompt.
  - Ressources: [Code et installation](https://github.com/derek-wangpch/OpenCityMaker) · [Notes de vérification](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Technologies : React, TypeScript, Vite et Three.js ; les 132 modèles de bâtiments sont des géométries procédurales originales.
  - Aperçu: ![Plateau de Hong Kong de CityMaker : bâtiments 3D low-poly sur grille 4×4, score, sélection des villes et rotation.](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — Tendez un lance-pierre et projetez de petits Bonkers contre des supports en bois pour renverser les structures et éliminer les cibles.
  - Créateur: [edmund5](https://x.com/edmund5)
  - Plateforme: Navigateur ; glissez pour viser, relâchez pour tirer. Jouable sans compte ; connexion Google facultative.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/edmund5/status/2097603093819261002) — Le créateur crédite GPT-6 Astra et Three.js pour le jeu, et Suno pour la musique de fond. [Notes de vérification](assets/screenshots/bonkshot/SOURCE.md).
  - Aperçu: ![Premier puzzle de Grasslands après un tir : tour partiellement effondrée, une cible restante et 2 200 points.](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — Explorez une serre scellée, réparez des conduites d’eau en cuivre, disposez plantes et lumière réfléchie, et sauvez sa dernière graine.
  - Créateur: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plateforme: Navigateur ; cliquez sur Play puis Begin. Gratuit, sans compte ; commandes en anglais et chinois.
  - GPT-6 Astra: [Fiche du créateur](https://www.aigameshare.com/games/greenhouse-escape-room) — Le créateur cite GPT-6 Astra et Codex comme outils de développement, avec ImageGen et WebAudio. [Notes de vérification](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - Aperçu: ![Salle Waterworks de la serre, avec dispositif de tuyaux à neuf cases, chronomètre et inventaire.](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### Stratégie et simulation

Défense de tours, cartes stratégiques, gestion, construction et bacs à sable de simulation.

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — Pilotez le petit remorqueur Mallow lors de trois voyages côtiers : remorquez des objets dont le poids modifie accélération et virages, livrez-les à la grue du port et récupérez finalement une lentille de phare.
  - Créateur: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plateforme: Navigateur sur ordinateur fixe ou portable, interface en anglais ; gratuit, sans connexion à un compte ni installation. Pilotage au clavier ou par clic sur l’eau, progression sauvegardée dans le navigateur actuel ; jeu sur téléphone non vérifié.
  - GPT-6 Astra: [Déclaration du créateur](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — Le créateur a utilisé GPT-6 Astra dans Codex pour développer et affiner par itérations le jeu Canvas, la physique du remorquage, la livraison à la grue, l’interface, la météo et l’audio, en assurant la direction et les essais en jeu. Les graphismes proviennent séparément de la génération d’images ; musique et effets sonores sont synthétisés avec Web Audio.
  - Ressources: [itch.io](https://mafuta.itch.io/tidehook) · [Bande-annonce de gameplay](https://youtu.be/wlEh8gnDOnU) · JavaScript natif, Canvas 2D, Vite et Web Audio ; dépôt source privé. [Vérification et source de la capture (anglais)](assets/screenshots/tidehook/SOURCE.md)
  - Aperçu: ![Capture fournie par le créateur, version du 2026-09-11 : Mallow remorque une lourde charge entre les îles de The Old Sound, avec distance au port et mini-carte.](assets/screenshots/tidehook/gameplay.png)

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Aménagez trois maisons en 3D, réglez matériaux et éclairage puis visitez-les à hauteur des yeux ; sauvegardes locales et import GLB.
  - Créateur: [Ryan-fm](https://github.com/Ryan-fm)
  - Plateforme: Navigateur de bureau WebGL ; interface chinoise et anglaise. Gratuit, sans connexion. Quest physique non testé.
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Développement itératif avec Codex documenté ; l’attribution précise à GPT-6 Astra attend confirmation du créateur.
  - Ressources: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - Aperçu: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Des échecs contre l’ordinateur sur un plateau 3D orientable, avec personnages miniatures, historique et annulation.
  - Créateur: [에코_eco](https://x.com/echo3042)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Aperçu: ![Little Kingdom Chess / 작은 왕국 체스 — Capture du jeu](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Assemblez un véhicule sans moteur avec des pièces de récupération, puis dévalez une pente ; départ dans un atelier à la première personne.
  - Créateur: [TheLabGuy](https://x.com/hermesailab)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/junk-run/SOURCE.md).
  - Aperçu: ![JUNK RUN — Capture du jeu](assets/screenshots/junk-run/gameplay.jpg)

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

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — Un roguelike de cartes sur les startups : recrutez une équipe et affrontez imitateurs, bugs et factures cloud.
  - Créateur: [Peter Yang](https://x.com/petergyang)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/no-moat/SOURCE.md).
  - Aperçu: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Construisez un village médiéval en 3D détaillé, avec routes, travailleurs et chaînes de production.
  - Créateur: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/the-free-game/SOURCE.md).
  - Ressources: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Aperçu: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Récoltez financements et GPU, construisez centres de données et armées, puis devancez les laboratoires d’IA vers l’ASI ou détruisez leurs quartiers généraux.
  - Créateur: [timour kosters](https://x.com/timourxyz)
  - Plateforme: Navigateur sur ordinateur ; stratégie en temps réel satirique gratuite. Début de partie contre l’ordinateur et collecte de ressources vérifiés sans compte.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — Le créateur explique avoir développé en deux jours avec Astra ce jeu inspiré d’Age of Empires. [Notes de vérification](assets/screenshots/agi-of-empires/SOURCE.md).
  - Aperçu: ![Champ de bataille d’AGI of Empires, compteurs de ressources et quartier général.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Jouez au go sur des réseaux de rues et des graphes inhabituels, avec jeu local à tour de rôle sur le même appareil et options entre amis.
  - Créateur: [Boris Power](https://x.com/BorisMPower)
  - Plateforme: Navigateur ; plateau local ouvert sans compte. Parties en ligne entre amis non testées.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — Le créateur décrit ce go multijoueur sur graphes arbitraires comme une création d’Astra en un seul prompt. [Notes de vérification](assets/screenshots/atlas-go/SOURCE.md).
  - Aperçu: ![Pierres noires et blanches sur le graphe en nid d’abeille d’Atlas Go.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Collectez des matières premières, alimentez les machines et reliez des convoyeurs pour transformer une clairière en usine opérationnelle.
  - Créateur: [Dan](https://x.com/aidaniil)
  - Plateforme: Navigateur sur ordinateur ; tutoriel invité accessible sans compte, mais sauvegarde nécessitant une connexion à un compte. Multijoueur non vérifié indépendamment.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — Le créateur indique l’avoir construit avec son frère à l’aide d’Astra, Blender MCP et Cloudflare Durable Objects, en s’inspirant de Satisfactory et Besiege. [Notes de vérification](assets/screenshots/ironwood/SOURCE.md).
  - Aperçu: ![Machines, convoyeurs et tutoriel de gestion des ressources d’Ironwood.](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — Un RTS solo avec construction de base, capture de positions et commandement des forces terrestres et aériennes.
  - Créateur: [Mustafa Akın](https://x.com/mustafaakin)
  - Plateforme: Navigateur de bureau ; clavier et souris, sans connexion obligatoire.
  - GPT-6 Astra: [Notes de vérification](assets/screenshots/dust-front/SOURCE.md) — La publication Mustafa Akın fournie indique ChatGPT Astra et Blender MCP, avec environ 40 prompts incluant la création des ressources.
  - Aperçu: ![DUST FRONT: Un RTS solo avec construction de base, capture de positions et commandement des forces terrestres et aériennes.](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Construisez une base, disputez des zones de ressources et commandez chars, infanterie, avions et drones contre des armées contrôlées par l’IA dans un jeu de stratégie en temps réel de guerre moderne, avec espions et renseignement pour prendre l’avantage.
  - Créateur: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Plateforme: Navigateur sur ordinateur, interface en chinois, souris et clavier ; une partie solo a été lancée sans connexion, paiement ni installation.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — Dans la publication liée, le créateur indique avoir utilisé « GPT Astra » pour réaliser ce jeu de stratégie en temps réel ; la version exacte du modèle et le processus détaillé ne sont pas précisés.
  - Références: [Soumission](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Notes de vérification (anglais)](assets/screenshots/frontline-command/SOURCE.md)
  - Aperçu: ![Frontline Command : base, trois chars sélectionnés et placement d’une centrale pendant une partie ; v0.8, capture du 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — Visez avec un pousse-pièces 3D, combinez pièces spéciales et reliques, et terminez six manches avec un nombre limité de lâchers et des objectifs de score.
  - Créateur: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - Plateforme: Navigateur ; cliquez sur Play, gratuit et sans compte. Sauvegardes de compte facultatives.
  - GPT-6 Astra: [Fiche du créateur](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — Le créateur crédite GPT-6 Astra aux côtés de GPT-5.6 Sol et Codex ; la fiche ne distingue pas leurs contributions. [Notes de vérification](assets/screenshots/mintfall/SOURCE.md).
  - Aperçu: ![Plateau 3D de Mintfall à la manche 1, avec 33 points, 44 lâchers et commandes des pièces spéciales.](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — Guidez une caravane vers l’ouest, rationnez les vivres, gérez réparations et chasse, et prenez des décisions sur la piste de l’Oregon.
  - Créateur: [Biswas](https://x.com/bis_waz)
  - Plateforme: Navigateur sur ordinateur ; commencez avec le groupe fictif proposé, sans compte ni installation.
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas indique avoir utilisé GPT-6 Astra pour cette version moderne en 3D de The Oregon Trail et fournit le lien jouable. [Notes de vérification](assets/screenshots/westward/SOURCE.md).
  - Aperçu: ![Chariot et bœufs en route vers la Kansas River, avec 25 miles parcourus et panneau de provisions.](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### Jeux de rôle et aventure

Jeux de rôle, exploration, aventures narratives et histoires interactives.

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — Explorez un action-RPG au style voxel, combattez les Hollowborn avec Spark Bolt et Sunburst, esquivez par téléportation et réveillez la porte solaire.
  - Créateur: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - Plateforme: Navigateur de bureau ; clavier et souris, sans connexion obligatoire.
  - GPT-6 Astra: Utilisation non confirmée pour ce jeu : la réponse fournie du créateur autorise son inclusion, sans préciser le modèle ni son rôle. [Notes de vérification](assets/screenshots/the-sunshard/SOURCE.md).
  - Aperçu: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — Une aventure multijoueur rétro avec monde partagé, compétences, récolte et combat, accessible en invité.
  - Créateur: [Rohan Varma](https://x.com/TheRohanVarma)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/lumbridge/SOURCE.md).
  - Aperçu: ![Lumbridge / Elderwood Realms — Capture du jeu](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — Une aventure atmosphérique en pointer-cliquer, en quatre chapitres et treize énigmes : comparer le Présent à son Écho, recueillir des indices et percer le mystère d’un observatoire figé à 00:17.
  - Créateur: [stackloomdev](https://github.com/stackloomdev)
  - Plateforme: Navigateurs sur ordinateur et mobile ; chinois et anglais. Jouable gratuitement en ligne, sans connexion, installation ni clé API. Effets WebGL facultatifs, avec retour aux illustrations originales si nécessaire.
  - GPT-6 Astra: [Journal de développement](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Développement itératif dans Codex : récit, énigmes, textes bilingues, code, effets 3D procéduraux et tests.
  - Ressources: [Source et lancement](https://github.com/stackloomdev/silent-meridian) · [Provenance des illustrations](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Technologies: JavaScript, WebGL, Web Audio.
  - Aperçu: ![Silent Meridian en jeu : observatoire avec mécanisme 3D en laiton, repères d’indices, commandes Présent/Écho et journal d’enquête.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — Un RPG d’action inspiré de Legend, avec guerrier, mage et taoïste, équipement, donjons et combat automatique.
  - Créateur: [知识猫AI实验室](https://x.com/GeekCatX)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/mir176/SOURCE.md).
  - Aperçu: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Une adaptation 3D non officielle de Zork mêlant exploration à la première personne, énigmes, combats et journal.
  - Créateur: [Ethan Mollick](https://x.com/emollick)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/zork/SOURCE.md).
  - Aperçu: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Explorez Springfield à pied et en voiture dans une recréation non officielle pour navigateur, avec missions, circulation et poursuites policières.
  - Créateur: [Dwayne](https://x.com/CtrlAltDwayne)
  - Plateforme: Navigateur sur ordinateur ; première mission chargée sans compte après un important chargement initial de ressources. Campagne complète non testée.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — Le créateur décrit la reconstruction pour le Web avec GPT-6 Astra ; le dépôt crédite aussi Claude pour une aide au chargement. Les ressources du jeu original conservent leurs droits. [Notes de vérification](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Ressources: [Code et installation](https://github.com/Vheissu/hit-and-run-web)
  - Aperçu: ![Homer à Springfield, avec objectif de la première mission et mini-carte.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Parcourez une vallée ensoleillée en 2.5D, suivez les sentiers et rassemblez trois lettres du vent dans une aventure d’exploration paisible.
  - Créateur: [Tushar](https://x.com/TusharXo)
  - Plateforme: Navigateur, hébergement Crayon ; page publique et lecteur intégré vérifiés.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar décrit Astra générant sentiers et ressources ; une annonce ultérieure présente la version jouable avec Astra, Three.js et Crayon. [Notes de vérification](assets/screenshots/crayon-adventure/SOURCE.md).
  - Ressources: [Annonce de lancement du créateur](https://x.com/TusharXo/status/2096741535891251261)
  - Aperçu: ![Un personnage explore une vallée fleurie, avec l’objectif des lettres du vent visible.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Enquêtez à Blackthorn Manor dans un mystère policier en pointer-cliquer : examinez les scènes et suivez les indices pour identifier le meurtrier.
  - Créateur: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Plateforme: Navigateur ; entrée interactive du manoir ouverte sans compte. Scènes générées ultérieures non testées intégralement.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — Le créateur crédite GPT Astra et H3 Max pour ce jeu d’enquête génératif. [Notes de vérification](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Aperçu: ![Entrée du manoir avec porte cliquable et texte initial de l’enquête.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Explorez des îles flottantes, sautez et planez entre communautés, et accomplissez les quêtes de leurs habitants.
  - Créateur: [timour kosters](https://x.com/timourxyz)
  - Plateforme: Navigateur sur ordinateur, clavier et souris ; page et commandes de l’édition avec quêtes vérifiées.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — Le créateur indique qu’Astra a réalisé un jeu 3D jouable avec PNJ et quêtes inspirés de lieux d’Edge City. [Notes de vérification](assets/screenshots/skyward-gathering/SOURCE.md).
  - Aperçu: ![Vue des îles flottantes de Skyward, avec commandes d’exploration et journal.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Alternez magie musicale d’Anna et superpouvoirs de Leo pour réveiller les fleurs mélodieuses et explorer Wonder Garden.
  - Créateur: [Dharma Utomo](https://x.com/dharmautomo)
  - Plateforme: Navigateur ; quête initiale lancée sans compte. WASD pour bouger, Espace pour sauter, E pour le pouvoir et Tab pour changer de héros.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — Le créateur explique que GPT-6 Astra l’a aidé à construire l’aventure 3D et partage une vidéo de ses enfants la testant. [Notes de vérification](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Aperçu: ![Monde d’aventure 3D d’Anna et Leo avec interface de quêtes.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Explorez Rainmist Haven et avancez vers des donjons avec combos à l’épée, compétences élémentaires et mouvements d’esquive.
  - Créateur: [UModeler X PicoBerry](https://x.com/UModeler)
  - Plateforme: Navigateur sur ordinateur ; clavier et souris, sans compte. Laissez les ressources 3D initiales finir de charger.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/UModeler/status/2097792348407099553) — Le créateur indique que PicoBerry a généré les ressources et GPT-6 Astra le RPG d’action Three.js qui les exploite. [Notes de vérification](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - Ressources: [Lien de lancement du créateur](https://x.com/UModeler/status/2097792351129178451)
  - Aperçu: ![Deller esquive près d’une fontaine et d’étals à Rainmist Haven, avec santé, mana et compétences.](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — Recrutez une équipe, descendez un donjon de cent étages et combinez épées, boules de feu et rôles des compagnons dans une partie à mort permanente.
  - Créateur: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - Plateforme: Navigateur sur ordinateur, Wavedash ; jeu de base accessible sans compte. Comptes facultatifs et déblocages anticipés payants de personnages disponibles.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/tonysurix/status/2097873333551616355) — Le créateur affirme explicitement que ce jeu d’exploration de donjons en équipe a été créé avec GPT-6 Astra. [Notes de vérification](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - Aperçu: ![Le héros et un chevalier recruté lancent une boule de feu au premier étage, avec santé du groupe et mini-carte.](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — Explorez une île après un naufrage, cherchez des indices à la première personne et résolvez des énigmes environnementales vers le phare.
  - Créateur: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - Plateforme: Navigateur sur ordinateur ; attendez l’île puis cliquez sur Begin expedition. Gratuit, sans compte ni installation.
  - GPT-6 Astra: [Journal du créateur](https://smallweblab.com/posts/sunlandia/) — Le créateur a commencé avec GPT-5.6 Sol, reçu l’aide de Fable, puis terminé le jeu avec GPT-6 Astra. [Notes de vérification](assets/screenshots/sunlandia/SOURCE.md).
  - Aperçu: ![Rivage de Sunlandia à la première personne, avec épave, ponton cassé et objectif de chercher de l’aide.](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — Faites grandir un organisme microscopique dans une coquille d’escargot inondée, collectez des nutriments et développez de nouvelles parties du corps en explorant.
  - Créateur: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - Plateforme: Navigateur ; bêta gratuite sans compte, avec cinq langues d’interface dont le chinois.
  - GPT-6 Astra: [Fil du créateur](https://x.com/Preda2005/status/2097954217180921928) — Marcio indique avoir décrit cette idée d’évolution d’un organisme à GPT-6 Astra et l’avoir développée jusqu’à la bêta liée. [Notes de vérification](assets/screenshots/nacar/SOURCE.md).
  - Aperçu: ![Petite cellule parmi des nutriments colorés, avec biomasse, évolution, inventaire et suivi des eaux explorées.](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### Plateforme et course

Parkour, défis de plateforme, courses et jeux centrés sur les déplacements et les itinéraires.

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Choisissez Rocco ou Pip pour trois parcours de plateformes dans la jungle : double saut, tonneaux à lancer et wagonnet vous aident à récupérer la cargaison perdue avant le boss final.
  - Créateur: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - Plateforme: Navigateur sur ordinateur fixe ou portable, interface en anglais ; gratuit, sans connexion à un compte ni installation. Commandes au clavier ; compatibilité manette annoncée par le créateur.
  - GPT-6 Astra: [Déclaration du créateur](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — Le créateur a utilisé GPT-6 Astra dans Codex pour le code, les mécaniques, les itérations et les tests, en assurant lui-même la direction et les essais en jeu. Les graphismes proviennent séparément de la génération d’images ; musique et effets sonores sont synthétisés avec Web Audio.
  - Ressources: [itch.io](https://mafuta.itch.io/barrelbound) · [Bande-annonce de gameplay](https://youtu.be/X87UqF_n3ro) · Phaser 3, Vite et Web Audio ; dépôt source privé. [Vérification et source de la capture (anglais)](assets/screenshots/barrelbound/SOURCE.md)
  - Aperçu: ![Capture fournie par le créateur, version de septembre 2026 : Rocco, tonneaux et parcours de bananes sur les plateformes en bois de Jungle Dock Dash.](assets/screenshots/barrelbound/gameplay.jpg)

- **[STORM RACE](https://storm-race.vercel.app/)** — Des courses de mini 4×4 avec garage en vue éclatée, boost et piste sèche, pluvieuse ou orageuse.
  - Créateur: [BubuAi](https://x.com/BubuStd)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/storm-race/SOURCE.md).
  - Aperçu: ![STORM RACE — Capture du jeu](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Un loup traverse trois niveaux au clair de lune, ramassant pièces et étoiles grâce au double saut et au dash.
  - Créateur: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Aperçu: ![FANG STARLIGHT RUN — Capture du jeu](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Pilotez un Bajaj à trois roues sur un circuit inspiré des hauts plateaux éthiopiens, face à cinq IA ou au chronomètre.
  - Créateur: [Guzo Technologies](https://x.com/guzotech)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Aperçu: ![Blue Bajaj Rally — Capture du jeu](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

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

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Descendez un puits en 3D en vous déplaçant uniquement à gauche et à droite sur des plateformes mobiles, fragiles ou intermittentes ; évitez lasers et scies et ramassez cristaux et puces de survie.
  - Créateur: [chat01.ai](https://linux.do/u/bandaot)
  - Plateforme: Navigateur sur ordinateur, interface chinoise, touches A/D ou flèches. Démarrage vérifié sans compte ni paiement ; mobile non testé.
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — Le journal partagé porte la mention GPT-6 Pro et décrit la génération du jeu et ses révisions successives ; GPT-6 Astra n’y est pas explicitement identifié.
  - Ressources: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Aperçu: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Trois tours de course avec dérapages, nitro et objets ; le jeu actuel, 疾风赛道, propose aussi un mode en ligne pour 2 à 4 joueurs.
  - Créateur: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plateforme: Navigateur, gratuit, sans compte. Selon le créateur, un VPN/proxy peut être nécessaire. Démarrage solo vérifié ; multijoueur non testé.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Selon le créateur : Première version avec Qwen3.8 Max, deuxième entièrement reconstruite avec Astra.
  - Aperçu: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Dérapez sur un circuit tropical de karting, utilisez des objets et affrontez sept rivaux sur trois tours.
  - Créateur: [Pietro Schirano](https://x.com/skirano)
  - Plateforme: Navigateur ; course de trois tours lancée sans compte. Conduite, dérapage et objets au clavier, plus boutons tactiles à l’écran.
  - GPT-6 Astra: [Attribution du modèle](https://openai.com/index/gpt-6-astra/) — La page de lancement d’Astra d’OpenAI renvoie vers ce kart interactif et crédite Pietro Schirano. La publication de découverte sur X vient de la communauté, pas du créateur. [Notes de vérification](assets/screenshots/tidal-rush/SOURCE.md).
  - Ressources: [Découverte sur X](https://x.com/alexgetmancom/status/2095598460921614825)
  - Aperçu: ![Circuit tropical de Tidal Rush, avec position de course et commandes de dérapage.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Sautez dans un décor gothique en pixel art, tailladez ou écrasez les ennemis, ou invoquez une attaque dans une courte aventure à défilement horizontal.
  - Créateur: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Plateforme: Navigateur, interface japonaise ; clavier et prise en charge des smartphones annoncée par le créateur. Un niveau disponible.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — Le créateur mentionne environ 25 minutes de développement avec Astra et une correction de l’animation de marche ; la musique est créditée séparément à Suno. [Notes de vérification](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Aperçu: ![LUNA combat dans une rue gothique sous une lune rouge, avec santé et jauge d’invocation.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Faites courir des cyclistes astronautes autour d’anneaux planétaires, collectez de la poussière d’étoiles, profitez de l’aspiration et accélérez dans l’Orbital Cup.
  - Créateur: [Crayon](https://x.com/usecrayon)
  - Plateforme: Navigateur sur Crayon ; clavier et commandes tactiles documentées. La page publique propose course, contre-la-montre et promenade infinie.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon crédite GPT-6 Astra, Crayon Pro et Three.js pour ce jeu de vélo spatial. [Notes de vérification](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Aperçu: ![Cyclistes astronautes sur un anneau planétaire, avec tours, classement et poussière d’étoiles.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Courez, sautez et balancez-vous dans quatre niveaux de jungle, ramassez des trésors et évitez les crocodiles pour améliorer votre temps.
  - Créateur: [Ben Nash](https://x.com/bennash)
  - Plateforme: Navigateur, clavier et commandes à l’écran ; niveau initial et instructions chargés sans compte.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — Le créateur le présente explicitement comme un jeu de quatre niveaux inspiré de Pitfall et réalisé avec GPT-6 Astra. [Notes de vérification](assets/screenshots/one-more-vine/SOURCE.md).
  - Aperçu: ![Niveau de plateformes dans la jungle avec lianes, trésors, fosses et crocodiles.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Explorez le monde souterrain 1-2 de Mario avec Ryu Hayabusa de Ninja Gaiden et le char de Battle City : sauts, escalade et combats en défilement latéral pour Ryu, combats en vue de dessus pour le char, ou relais ninja puis char pour sauver la princesse.
  - Créateur: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Plateforme: Navigateur sur ordinateur, interface en chinois, clavier recommandé ; gratuit, sans connexion ni installation.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — Le créateur indique avoir utilisé GPT-6 Astra pour développer et déboguer le code et les interactions par itérations, en apportant lui-même les orientations de jeu et les retours ; ce n’est pas une génération en une seule requête.
  - Ressources: [Présentation du projet](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Vidéo](https://www.bilibili.com/video/BV1erYt69EFP/) · [Vérification et sources des images (anglais)](assets/screenshots/mario-mix-2/SOURCE.md)
  - Droits: Jeu de fans non officiel ; les personnages, images et musiques classiques restent la propriété de leurs ayants droit. Les crédits des ressources figurent sur la page du jeu original.
  - Aperçu: ![Mario Mix II — miniature vidéo fournie par le créateur, et non capture de jeu.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Capture d’écran: ![Le char de Mario Mix II tire à l’entrée du monde 1-2 ; version 1.0 en cours de jeu, capture du 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Foncez dans la circulation de Bengaluru, évitez nids-de-poule et motos de livraison, puis utilisez l’accélération ou un mouvement latéral pour vous frayer un passage.
  - Créateur: [Ravi Theja](https://x.com/ravithejads)
  - Plateforme: Navigateur sur ordinateur ; clavier avec accélération automatique facultative, sans compte.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/ravithejads/status/2097181044625887392) — Le créateur attribue ce jeu de course routière à Bengaluru à GPT-6 Astra. [Notes de vérification](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - Aperçu: ![Voiture bleue du joueur dans Bengaluru, avec position, vitesse, chronomètre et indications de commandes.](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — Affrontez trois skieurs en descente, franchissez portes et obstacles, et gardez de l’avance sur l’avalanche.
  - Créateur: [Sonic的奇思妙想](https://x.com/sonic0828)
  - Plateforme: Navigateur sur ordinateur ; A/D pour tourner, Espace pour sauter et Shift pour accélérer ; sans compte ni téléchargement.
  - GPT-6 Astra: [Déclaration du créateur](https://x.com/sonic0828/status/2097601232877781344) — Le créateur attribue la collection de mini-jeux à GPT-6 Astra et fournit ce jeu de ski dans une réponse dédiée. [Notes de vérification](assets/screenshots/skicross/SOURCE.md).
  - Ressources: [Lien de lancement du créateur](https://x.com/sonic0828/status/2097601732297814300)
  - Aperçu: ![Quatre skieurs sur une piste enneigée, avec bonus de porte, classement, vitesse et distance de l’avalanche.](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — Grimpez sur un mur moussu, attrapez des mouches pour retrouver de l’adhérence et abritez-vous dans des trous avant que la pluie n’emporte l’araignée.
  - Créateur: [Luiz Piccini](https://piccini.app/)
  - Plateforme: Navigateur ; gratuit, sans compte. WASD ou joystick à l’écran.
  - GPT-6 Astra: [Game Bench du créateur](https://game-bench.piccini.app/) — Game Bench étiquette cette création publiée GPT-6 Astra canary, high, datée du 2026-09-05 et construite à partir de son brief de jeu commun. [Notes de vérification](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - Aperçu: ![Araignée à deux mètres sur un mur de briques moussu, avec adhérence, mouches, abri et joystick.](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — Pilotez des motos dans la circulation des villes indiennes, slalomez entre bus et rickshaws et utilisez coups de pied, coups de poing et accélérations.
  - Créateur: [Kishore](https://x.com/GetKishore)
  - Plateforme: Navigateur sur ordinateur ; gratuit, sans compte. Acceptez ou modifiez le pseudonyme généré avant la première course.
  - GPT-6 Astra: [Fil de développement du créateur](https://x.com/GetKishore/status/2097906401159102811) — Kishore décrit les itérations du jeu 3D réalisé avec Astra à partir de références de rues et de tests répétés de circulation, collisions et combats entre pilotes. [Notes de vérification](assets/screenshots/desi-mayhem/SOURCE.md).
  - Aperçu: ![Course de motos à Chennai avec pilote, circulation, mini-carte, position et chronomètre.](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — Pilotez un engin sur un océan galactique, suivez les portes lumineuses et choisissez une course de deux tours ou une dérive infinie.
  - Créateur: [Aniket J](https://x.com/aniketjart)
  - Plateforme: Navigateur ; attendez les ressources 3D puis cliquez sur Ride the current. Gratuit, sans compte.
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket crédite GPT-6 Astra, Blender MCP et Crayon ; il décrit une expérience avec de nouvelles itérations de gameplay prévues. [Notes de vérification](assets/screenshots/cosmic-tides/SOURCE.md).
  - Aperçu: ![Course de Cosmic Tides vers une porte lumineuse au-dessus d’une mer galactique, avec tours et vitesse.](assets/screenshots/cosmic-tides/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### Expérimental et multijoueur

Mécaniques originales, compétition en ligne et expériences coopératives.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Six jeux de navigateur, dont rallye en montagne, snowboard et course antigravité ; une seule entrée pour cette collection.
  - Créateur: [Antonio Leiva](https://x.com/antonioleivag)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/astra-arcade/SOURCE.md).
  - Aperçu: ![ASTRA Arcade — Capture du jeu](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — Un jeu de fans Chao Garden multijoueur non officiel : choisissez un personnage Sonic et interagissez avec les Chao.
  - Créateur: [Hank](https://x.com/h4nkdog)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/chao-party/SOURCE.md).
  - Aperçu: ![Chao Party — Capture du jeu](assets/screenshots/chao-party/gameplay.jpg)

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

- **[Jelly Baby](https://jelly.scottsun.io/)** — Un bac à sable physique sur une table ensoleillée : faites sauter et étirez une gelée, avec balançoire et trampoline.
  - Créateur: [Scott](https://x.com/scottstts)
  - Plateforme: Navigateur de bureau ; ouvert sans connexion ni paiement. Mobile non testé.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — Le créateur indique avoir utilisé Astra pour développer ce projet. [Notes de vérification (anglais)](assets/screenshots/jelly-baby/SOURCE.md).
  - Ressources: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Aperçu: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Défendez un cœur arc-en-ciel avec des obus rebondissants et des bonus, en solo, en coopération locale ou en combat en ligne.
  - Créateur: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Plateforme: Navigateur, gratuit, sans compte. Selon le créateur, un VPN/proxy peut être nécessaire. Démarrage solo vérifié ; multijoueur non testé.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Selon le créateur : Première version avec GPT-6 Astra Pro, améliorations avec GPT-6 Astra dans Codex.
  - Aperçu: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — Peignez un cerf-volant et volez au-dessus des toits en gérant la tension du fil, en vol libre ou dans un défi chronométré de lumières célestes.
  - Créateur: [Tushar / @TusharXo](https://x.com/TusharXo)
  - Plateforme: Navigateur ; choisissez un personnage, entrez sur le toit et sélectionnez Fly. Gratuit, sans compte.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar crédite explicitement GPT-6 Astra et Crayon pour ce jeu Three.js et cite Images 2.5 pour les visuels. [Notes de vérification](assets/screenshots/above-the-rooftops/SOURCE.md).
  - Aperçu: ![Défi de cerf-volant au-dessus de la ville, avec altitude, tension du fil, progression des lumières et direction.](assets/screenshots/above-the-rooftops/gameplay.jpg)

## Ce que contient une fiche

Une recommandation utile explique clairement de quel jeu il s’agit, où l’essayer et pourquoi il figure dans cette liste.

| Information | Contenu attendu |
| --- | --- |
| Jeu et créateur | Le titre du jeu et un lien vers son créateur ou son équipe d’origine |
| Intérêt du jeu | Une phrase sur la mécanique principale, sans discours promotionnel creux |
| Accès | Un lien pour jouer dans le navigateur sans téléchargement, installation, configuration locale ni connexion à un compte |
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
