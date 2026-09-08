<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/)

**GPT-6 Astra で作られた、遊んでみたくなるゲームを集めています。**

楽しいアイデア、実際に体験できる作品、そして次の作り手のヒントになる開発の記録。

[English](README.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[ゲームを投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [貢献する](CONTRIBUTING.md)

</div>

このページは [英語版 README](README.md) の翻訳です。最新の変更は原文で確認できます。翻訳の修正も歓迎します。

## はじめに

現在、**ブラウザーゲーム 11 作品と、インタラクティブなパーティクルアートのサンドボックス 1 作品**を掲載しています。木製の組木パズルとスライドパズル、柔らかい果物の合成、ワンボタン飛行、魔法の絨毯での戦闘、島の電力網を使うタワーディフェンス、荒野でのサバイバル、海湾サーキットのカートレース、ペリカンとの海岸サイクリング、卓上玩具の 3D ゲーム化、そして Orbital Garden。作品名をクリックすると、デモまたは実行手順付きのソースコードが開きます。

最終確認日：**2026-09-05**。作者によるモデル利用の説明、ソースコードへのリンク、デモへのアクセスを確認しています。モデルの利用状況は作者の申告に基づくもので、この一覧のための各作品のプレイテストは行っていません。

- **遊びたい方：** 下のジャンルから気になる作品を探してください。
- **ゲームを作った方：** [作品を投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)し、遊べる URL またはソースコード、実際のゲーム画面のスクリーンショット、GPT-6 Astra の使い方の説明を添えてください。
- **面白い作品を見つけた方：** 他の方が公開している作品の推薦も歓迎します。元の作者を明記してください。

この一覧はコミュニティが管理しており、OpenAI とは提携していません。掲載は作品を試すきっかけとしての紹介であり、性能評価や公式の推薦ではありません。

## ゲーム一覧

- [アクション・アーケード](#action-arcade)
- [パズル・頭脳ゲーム](#puzzles)
- [戦略・シミュレーション](#strategy-simulation)
- [RPG・アドベンチャー](#rpg-adventures)
- [プラットフォーム・レース](#platformers-racing)
- [実験的な作品・マルチプレイ](#experimental-multiplayer)

<a id="action-arcade"></a>

### アクション・アーケード

シューティング、格闘、サバイバル、リズムゲームなど、もう一度遊びたくなる作品。

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — ワンボタンで羽ばたく 3D 飛行ゲーム。障害物の隙間を通り抜けてスコアを伸ばします。
  - 作者: [Ayi1337](https://github.com/Ayi1337)
  - 対応環境: ブラウザー。モバイル向けに設計されています。
  - GPT-6 Astra: [作者の One Shot テストと元のプロンプト](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - 開発資料: [ソースコード](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [単一 HTML ファイル](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - プレビュー: ![Mosswing の開始画面。飛ぶキャラクターと石柱の間の隙間が見えます。](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 魔法の絨毯で球形の世界を飛び、リングをくぐり、魔法を放って敵やボスと戦います。
  - 作者: [threapchills](https://github.com/threapchills)
  - 対応環境: マウスとキーボードを使うデスクトップブラウザー。WebGL 2 が必要です。
  - GPT-6 Astra: 作者は[リポジトリの About 欄](https://github.com/threapchills/MagicCarpetWizard)で、GPT-6 Astra を使って制作したと説明しています。
  - 開発資料: [ソースコードと実行手順](https://github.com/threapchills/MagicCarpetWizard) · 使用技術: Three.js, Vite.
  - プレビュー: ![Magic Carpet Wizard の開始画面。絨毯の乗り手、街、光る飛行リングが見えます。](assets/screenshots/magic-carpet/gameplay.jpg)

<a id="puzzles"></a>

### パズル・頭脳ゲーム

論理パズル、物理の仕掛け、言葉遊び、工夫を凝らした小さな仕組み。

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — 柔らかい果物の変形と衝突を取り入れた、スイカ合成ゲーム。
  - 作者: [Ayi1337](https://github.com/Ayi1337)
  - 対応環境: モダンブラウザー。作者はダウンロードして使える単一 HTML 版も公開しています。
  - GPT-6 Astra: [作者の One Shot テストと元のプロンプト](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - 開発資料: [ソースコード](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [単一 HTML ファイル](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - プレビュー: ![Melon Lab のゲーム画面。合成用の容器に入った柔らかい果物と物理設定の操作部が見えます。](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — 同色の泡が三つ以上つながった場所を消します。大きな組は爆弾や虹になり、リラックス・ステージ・時間制限モードを選べます。
  - 作者: zding
  - 対応環境: ブラウザー、中国語 UI。ログインや支払いなしで起動を確認。
  - GPT-6 Astra: GPT-6 Astra の利用と担当範囲は作者の確認待ちです。
  - プレビュー: ![Q弹消消乐 — 実際のゲーム画面](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.hp20230404.chatgpt.site)** — 3D の木工作業台で 6 部品がかみ合う組木パズルを分解し、2 種類の華容道スライドパズルを解きます。ヒントと移動の取り消しに対応しています。
  - 作者: [MartinDelophy](https://github.com/MartinDelophy) （プロジェクトの発案者・投稿者）。
  - 対応環境: WebGL 2 対応のモダンブラウザー。中国語の画面で、マウス・キーボード・タッチ操作に対応。無料でログインや API キーは不要です。進行状況は現在のブラウザーに保存されます。
  - モデルの担当範囲: [制作記録](works/sunjing-puzzles/CREATION.md) — Codex でゲーム設計、手続き型の 3D グラフィックス、ルール、ソルバー、テストを繰り返し開発。GPT-6 Astra の具体的な利用は作者の確認待ちです（草稿としての投稿）。
  - 開発資料: [ソースコードと実行手順](works/sunjing-puzzles/README.md) · [要件の記録](works/sunjing-puzzles/PROMPTS.md) · 使用技術: React, Vinext/Vite, Three.js.
  - プレビュー: ![Sunjing の 6 部品の木製パズル。緑の 3D 作業台に、部品番号と引き抜き操作を表示しています。](assets/screenshots/sunjing-puzzles/gameplay.jpg)

<a id="strategy-simulation"></a>

### 戦略・シミュレーション

タワーディフェンス、戦略カードゲーム、経営、建築、シミュレーションのサンドボックス。

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — 小さな島で電力網をつなぎ、砲塔を建設・強化します。限られた電力を配分し、10 波の敵と最後のボスから灯台を守りましょう。
  - 作者: [stackloomdev](https://github.com/stackloomdev)
  - 対応環境: モダンなデスクトップ・モバイルブラウザー。中国語と英語に対応。無料で、ログインや API キーは不要です。任意のサウンド機能には Web Audio が必要です。
  - GPT-6 Astra: [作者の開発記録とモデルの担当範囲](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — ゲーム設計、コード、手続き型のグラフィックス、テストに使用し、複数回の改善を重ねています。One Shot テストではありません。
  - 開発資料: [ソースコードと実行手順](https://github.com/stackloomdev/last-beacon) · [要件と改善の記録](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 使用技術: JavaScript, Canvas 2D, Web Audio.
  - プレビュー: ![Last Beacon の英語画面。電力網につながった砲塔、迫撃砲、冷気の塔が、海岸沿いの道から来る敵から島を守っています。](assets/screenshots/last-beacon/gameplay-en.png)

- **[永恒荒野](https://starve.pages.dev/)** — Don't Starve の再現作品として投稿された、ブラウザー向けのサバイバル・戦略ゲームです。投稿画像には森の探索、資源の収集、所持品と、体力・空腹・正気度の表示が見られます。
  - 作者: dudu
  - 対応環境: ブラウザー。投稿画像では中国語の画面とキーボード操作を確認できます。料金やログインの要否は記載されていません。デモは独立に確認できていません。
  - GPT-6 Astra: [投稿者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — 投稿者によると、開発全体を GPT-6 Astra が担当しました。
  - 開発資料: 公開ソースコードや別途の開発記録は提供されていません。
  - プレビュー: ![Issue #26 に添付された永恒荒野の画面。森の焚き火のそばに立つキャラクターと、所持品、生存状態、ミニマップを表示しています。](assets/screenshots/eternal-wilderness/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG・アドベンチャー

ロールプレイング、探索、物語を楽しむ冒険、インタラクティブなストーリー。

*最初の作品をお待ちしています。*

<a id="platformers-racing"></a>

### プラットフォーム・レース

パルクール、足場を渡るアクション、レースなど、移動とルート選びが中心のゲーム。

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.mauve-ibex-1793.chatgpt.site)** — 海湾サーキットを 3 周するカートレース。6 種類のカートから選び、コーナーでミニターボをためて立ち上がりで加速し、個人順位や 4 対 4 のチーム得点を競います。
  - 作者: Ryan
  - 対応環境: WebGL 2 対応のデスクトップブラウザーでキーボード操作。無料でログインや API キーは不要です。ローカル HTTP サーバーまたは静的ホスティングで動作し、Three.js は同梱されています。チーム戦は人間 1 人と AI 7 台によるローカルレースです。
  - モデルの担当範囲: [開発記録](works/apex-club/CREATION.md) — Codex でゲームの仕組み、コード、手続き型のグラフィックス、テストを繰り返し改善しています。GPT-6 Astra の利用については作者の確認待ちです。
  - 開発資料: [ソースコードと実行手順](works/apex-club/README.md) · [要件と改善の記録](works/apex-club/PROMPTS.md) · [GPT の共有会話](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · 使用技術: JavaScript, Three.js.
  - プレビュー: ![APEX CLUB の海湾サーキットでのチーム戦。周囲のカート、周回数、現在のチーム得点、ミニマップを表示しています。](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — 自転車に乗るペリカンと、移り変わる 3D の海岸を走ります。3 車線を切り替え、ジャンプやかがむ動作で障害物をかわし、魚の連続収集、シールド、磁石、6 秒間の無敵ダッシュを活用します。
  - 作者: [chat01.ai](https://chat01.ai) （投稿で作者として記載）。
  - 対応環境: デスクトップとモバイルのブラウザーに対応し、キーボードまたはタッチで操作。投稿によると無料でログイン不要です。デモは独立に確認できていません。
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — 投稿者によると、1 つのプロンプトから生成された作品です。リンク先の開発記録は独立に確認できていません。
  - 開発資料: [共有された開発記録](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - プレビュー: ![PELICAN PEDAL のタイトル画面。海辺で自転車に乗るペリカン。Issue #10 に添付された画像。](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 五台の AI と競う 3D レース。車とコースを選び、タイムアタック、ドリフト、ニトロを楽しめます。
  - 作者: zding
  - 対応環境: ブラウザー、中国語 UI。ログインや支払いなしで起動を確認。
  - GPT-6 Astra: GPT-6 Astra の利用と担当範囲は作者の確認待ちです。
  - プレビュー: ![狂飙赛车 · OVERDRIVE — 実際のゲーム画面](assets/screenshots/overdrive/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### 実験的な作品・マルチプレイ

新しい仕組み、オンライン対戦、協力プレイなどの体験。

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden.hp20230404.chatgpt.site)** — インタラクティブなパーティクルアートのサンドボックス。48,000 個の光の点を花、重力の輪、銀河へと変化させ、造形を揺らし、その瞬間をポスターとして書き出せます。
  - 作者: [jackroc](https://github.com/jackroc)
  - 対応環境: WebGL 対応のモダンブラウザー。作品名からオンラインで体験できます。無料で、ログインや API キーは不要です。単一 HTML 版はオフラインでも動作します。任意の環境音には Web Audio が必要です。
  - GPT-6 Astra: [制作記録とモデルの担当範囲](works/orbital-garden/README.md#模型与创作记录) — 作者は構想、コード、文章に GPT-6 Astra ultra を使用し、共同レビューを行っています。One Shot テストではありません。
  - 開発資料: [ソースコードと実行手順](works/orbital-garden/README.md) · [単一 HTML ファイル](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · 使用技術: 素の WebGL, Web Audio, Canvas 2D.
  - プレビュー: ![Orbital Garden のミントグリーンの粒子の花。形状、生命力、時間速度の操作とポスター出力機能を表示しています。](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — 卓上玩具を 4 つの 3D ゲームに。ペンギンの足元の氷を崩し、ウサギを仕掛けの先へ進め、宇宙飛行士を台に置いてバランスを保ち、車を動かして駐車場から脱出させます。
  - 作者: [asmoyou](https://github.com/asmoyou)
  - 対応環境: パソコン、タブレット、スマートフォンのブラウザーに対応。無料でログイン不要です。コンピューターの対戦相手を含む 2～4 席で同じ画面を使って交代で遊べるほか、1 人用パズルもあります。オンライン対戦には非対応。デモは独立に確認できていません。
  - GPT-6 Astra: [作者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — 作者によると、玩具の説明と機能の要件を渡し、GPT-6 Astra がゲームの実装からテストまで自律的に行いました。
  - 開発資料: [ソースコードと実行手順](https://github.com/asmoyou/toy2game) · [非商用ライセンス](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — ソースコードを公開。非商用利用は無料で、商用利用には作者の事前の書面による許可が必要です。 使用技術: TypeScript, React, Vite, Three.js.
  - プレビュー: ![Toy2Game の 4 つの実際の 3D ゲーム画面。ペンギンの氷崩し、ウサギの仕掛け、宇宙飛行士のバランス、駐車場脱出。asmoyou 提供。](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

## 各作品に記載する情報

分かりやすい紹介には、どんなゲームか、どこで遊べるか、なぜ掲載するのかが簡潔に書かれています。

| 項目 | 記載内容 |
| --- | --- |
| ゲームと作者 | 作品名と、元の作者またはチームへのリンク |
| 面白さのポイント | 中心となる遊びの仕組みを一文で説明。抽象的な宣伝文句は避けてください |
| 体験方法 | 遊べる URL、または実行手順付きの公開ソースコードリポジトリ |
| 実機スクリーンショット | 実際のゲーム画面を少なくとも 1 枚。誰でもアクセスできる画像 URL を添えてください |
| 対応環境と条件 | ブラウザー / デスクトップ / モバイル。有料、ログイン、特殊なハードウェアなどの要件を明記してください |
| Astra の担当範囲 | GPT-6 Astra が担当した作業を説明する、作者の声明、開発日誌、公開記録 |
| 開発資料 | ソースコード、使用技術、制作過程など、公開できる資料 |

モデルの利用状況は作者が公開した説明に基づいて記録します。根拠のない主張を確認済みの事実として掲載することはありません。遊べるプロトタイプも歓迎し、ソースコードの公開は必須ではありません。

## 一覧の管理に参加する

[Issue でゲームを投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)するか、Pull Request を作成してください。記載形式は[貢献ガイド](CONTRIBUTING.md)を参照してください。

デモのリンク切れ、作者表記の誤り、利用条件の変更などは、[問題報告](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml)からお知らせください。

## ライセンス

このリポジトリ独自の紹介文とビジュアル素材は、[CC0 1.0](LICENSE) によりパブリックドメインに提供されます。リンク先のゲーム、コード、画像、商標など第三者のコンテンツには、それぞれのライセンスと権利が引き続き適用されます。一覧への掲載によって利用許諾が変わることはありません。
