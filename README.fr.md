<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**Une sélection de jeux intéressants créés avec GPT-6 Astra.**

Des idées ludiques, des jeux à essayer et des récits de développement pour inspirer les prochains créateurs.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
**Français** · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Proposer un jeu](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribuer](CONTRIBUTING.md)

</div>

Cette page traduit le [README anglais](README.md). Consultez l’original pour vérifier les dernières mises à jour ; les corrections de traduction sont les bienvenues.

## Pour commencer

Découvrez **6 jeux pour navigateur et 1 bac à sable interactif d’art à particules** : fusion de fruits déformables, vol à une touche, combats sur tapis volant, défense d’île par un réseau électrique, course de karts sur Bay Circuit, balade côtière à vélo avec un pélican et Orbital Garden. Cliquez sur un titre pour ouvrir la démo ou le code source avec ses instructions de lancement.

Dernière vérification : **2026-09-05**. Les déclarations des créateurs, les liens vers le code source et l’accessibilité des démos ont été vérifiés. L’utilisation du modèle est déclarée par les auteurs ; les jeux n’ont pas été testés en jeu pour cette liste.

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

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Pilotez un tapis volant autour d’un monde sphérique, traversez des anneaux, lancez des sorts et affrontez des ennemis et des boss.
  - Créateur: [threapchills](https://github.com/threapchills)
  - Plateforme: Navigateur sur ordinateur, avec clavier et souris ; nécessite WebGL 2.
  - GPT-6 Astra: Le créateur indique dans la [section About du dépôt](https://github.com/threapchills/MagicCarpetWizard) que le jeu a été réalisé avec GPT-6 Astra.
  - Ressources: [Code source et instructions de lancement](https://github.com/threapchills/MagicCarpetWizard) · Technologies: Three.js, Vite.

<a id="puzzles"></a>

### Casse-têtes et réflexion

Énigmes logiques, défis de physique, jeux de mots et petits mécanismes ingénieux.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — Un jeu de fusion de pastèques reposant sur la déformation et les collisions de fruits souples.
  - Créateur: [Ayi1337](https://github.com/Ayi1337)
  - Plateforme: Navigateur moderne ; le créateur propose aussi une version HTML autonome à télécharger.
  - GPT-6 Astra: [Tests en une seule génération et prompts d’origine du créateur](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Ressources: [Code source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [HTML autonome](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)

<a id="strategy-simulation"></a>

### Stratégie et simulation

Défense de tours, cartes stratégiques, gestion, construction et bacs à sable de simulation.

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Reliez un réseau électrique sur une île miniature, construisez et améliorez vos tours, et gérez une puissance limitée pour défendre un phare contre dix vagues et un boss final.
  - Créateur: [stackloomdev](https://github.com/stackloomdev)
  - Plateforme: Navigateurs modernes sur ordinateur et mobile, en chinois et en anglais ; gratuit, sans connexion ni clé API. Le son facultatif nécessite Web Audio.
  - GPT-6 Astra: [Journal de développement et contribution du modèle](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Utilisé pour la conception du jeu, le code, les illustrations procédurales et les tests au fil de plusieurs itérations ; il ne s’agit pas d’un test en une seule génération.
  - Ressources: [Code source et instructions de lancement](https://github.com/stackloomdev/last-beacon) · [Besoins et notes d’itération](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Technologies: JavaScript, Canvas 2D, Web Audio.
  - Aperçu: ![Last Beacon en anglais : des tourelles, des mortiers et une tour de givre alimentés par le réseau défendent l’île contre les ennemis du sentier côtier.](assets/screenshots/last-beacon/gameplay-en.png)

<a id="rpg-adventures"></a>

### Jeux de rôle et aventure

Jeux de rôle, exploration, aventures narratives et histoires interactives.

*En attente du premier jeu.*

<a id="platformers-racing"></a>

### Plateforme et course

Parkour, défis de plateforme, courses et jeux centrés sur les déplacements et les itinéraires.

- **[APEX CLUB — Bay Kart Grand Prix](works/apex-club/README.md)** — Disputez trois tours sur Bay Circuit, choisissez parmi six karts et chargez des mini-turbos à utiliser en sortie de virage pour progresser au classement individuel ou marquer des points en équipe de 4 contre 4.
  - Créateur: [MartinDelophy](https://github.com/MartinDelophy) (compte ayant soumis l’entrée).
  - Plateforme: Navigateur sur ordinateur avec WebGL 2 et clavier ; gratuit, sans connexion à un compte ni clé API. Nécessite un serveur HTTP local et un accès Internet pour charger Three.js. Les courses par équipe sont locales : une personne et sept pilotes IA.
  - Participation du modèle: [Journal de développement](works/apex-club/CREATION.md) — Travail itératif dans Codex sur le gameplay, le code, les visuels procéduraux et les tests ; l’attribution à GPT-6 Astra attend la confirmation du créateur.
  - Ressources: [Code source et instructions de lancement](works/apex-club/README.md) · [Besoins et notes d’itération](works/apex-club/PROMPTS.md) · Technologies: JavaScript, Three.js.
  - Aperçu: ![Course par équipe APEX CLUB sur Bay Circuit, avec les karts voisins, la progression des tours, les points d’équipe en direct et une mini-carte.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Parcourez une côte 3D changeante avec un pélican à vélo : alternez entre trois voies, sautez ou baissez-vous pour éviter les obstacles, enchaînez les collectes de poissons et utilisez boucliers, aimants et un sprint invincible de six secondes.
  - Créateur: [chat01.ai](https://chat01.ai) (crédité dans la soumission).
  - Plateforme: Navigateurs sur ordinateur et mobile, au clavier ou au toucher ; gratuit et sans connexion à un compte selon la soumission. Démo non vérifiée indépendamment.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — La personne ayant soumis le jeu indique une génération à partir d’un seul prompt ; le journal de développement lié n’a pas été vérifié indépendamment.
  - Ressources: [Journal de développement partagé](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Aperçu: ![Écran titre de PELICAN PEDAL avec un pélican à vélo au bord de la mer ; capture fournie dans l’Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

<a id="experimental-multiplayer"></a>

### Expérimental et multijoueur

Mécaniques originales, compétition en ligne et expériences coopératives.

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — Un bac à sable interactif d’art à particules : transformez 48 000 points lumineux en fleur, en anneau gravitationnel ou en galaxie, perturbez la sculpture et exportez un instant sous forme d’affiche.
  - Créateur: [jackroc](https://github.com/jackroc)
  - Plateforme: Navigateur moderne avec WebGL ; cliquez sur le titre pour essayer en ligne. Gratuit, sans connexion ni clé API ; le fichier HTML autonome fonctionne aussi hors ligne. L’ambiance sonore facultative nécessite Web Audio.
  - GPT-6 Astra: [Historique de création et contribution du modèle](works/orbital-garden/README.md#模型与创作记录) — Le créateur a utilisé GPT-6 Astra ultra pour le concept, le code et les textes, avec une relecture collaborative ; il ne s’agit pas d’un test en une seule génération.
  - Ressources: [Code source et instructions de lancement](works/orbital-garden/README.md) · [HTML autonome](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Technologies: WebGL natif, Web Audio, Canvas 2D.

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
