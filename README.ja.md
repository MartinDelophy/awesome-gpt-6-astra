<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 86](https://img.shields.io/badge/Cases-86-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**GPT-6 Astra で作られた、遊んでみたくなるゲームを集めています。**

楽しいアイデア、実際に体験できる作品、そして次の作り手のヒントになる開発の記録。

[English](README.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[ゲームを投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [貢献する](CONTRIBUTING.md)

</div>

このページは [英語版 README](README.md) の翻訳です。最新の変更は原文で確認できます。翻訳の修正も歓迎します。

## はじめに

現在、**86件のゲームとインタラクティブ作品**を掲載しています。三国志の領土戦略、木製の組木パズルとスライドパズル、柔らかい果物の合成、プロシージャルな都市建設 2048、ワンボタン飛行、魔法の絨毯での戦闘、全5ステージの弾幕シューティング、島の電力網を使うタワーディフェンス、荒野でのサバイバル、水中での魚捕り、寿司店経営と島での農作業、海湾サーキットのカートレース、ペリカンとの海岸サイクリング、卓上玩具の 3D ゲーム化、3D の室内装飾、そして Orbital Garden。作品名をクリックすると、ブラウザーで直接遊べます。

一覧更新日：**2026-09-12**。モデルの利用情報は作者または投稿者の説明に基づき、未確認の内容は各項目に明記しています。この日付は一覧の更新日であり、全作品を再度プレイテストした日ではありません。

- **遊びたい方：** 下のジャンルから気になる作品を探してください。
- **ゲームを作った方：** [作品を投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)し、ブラウザーで直接遊べる URL、実際のゲーム画面のスクリーンショット、GPT-6 Astra の使い方の説明を添えてください。
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

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — 3Dスタジアムでバルセロナ対レアル・マドリードの11人制サッカーをプレイ。パス、シュート、選手切り替えを操作。
  - 作者: [Mindblown / @mind](https://mindblown.ai/@mind)
  - プラットフォーム: デスクトップブラウザー。キーボードとマウス、ログイン不要。
  - GPT-6 Astra: [検証記録](assets/screenshots/stadium-elite/SOURCE.md) — 提供されたMindblownの投稿はThree.jsとGPT-6 Astraを使用したと記載。
  - プレビュー: ![Stadium Elite — El Clásico: 3Dスタジアムでバルセロナ対レアル・マドリードの11人制サッカーをプレイ。パス、シュート、選手切り替えを操作。](assets/screenshots/stadium-elite/gameplay.png)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 魔法の絨毯で球形の世界を飛び、リングをくぐり、魔法を放って敵やボスと戦います。
  - 作者: [threapchills](https://github.com/threapchills)
  - 対応環境: マウスとキーボードを使うデスクトップブラウザー。WebGL 2 が必要です。
  - GPT-6 Astra: 作者は[リポジトリの About 欄](https://github.com/threapchills/MagicCarpetWizard)で、GPT-6 Astra を使って制作したと説明しています。
  - 開発資料: [ソースコードと実行手順](https://github.com/threapchills/MagicCarpetWizard) · 使用技術: Three.js, Vite.
  - プレビュー: ![Magic Carpet Wizard の開始画面。絨毯の乗り手、街、光る飛行リングが見えます。](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — 三機の戦闘機で五つの区域と多段階のボスに挑む、自動射撃の弾幕ゲーム。
  - 作者: [jackroc](https://github.com/jackroc)
  - GPT-6 Astra: [README](works/thunderfall/README.md#创作与许可) — 作者によると GPT-6 Astra ultra で制作し、複数回改善しています。
  - [README](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · JavaScript, Canvas 2D, Web Audio.
  - プレビュー: ![THUNDERFALL — 実際のゲーム画面](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — 6 つの戦区で 3D 戦車を操り、敵の波状攻撃から信標を守ります。レンガの壁を破壊し、ダッシュと電磁パルスを使えます。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 対応環境: WebGL 2 対応ブラウザー、中国語 UI。操作説明にはキーボード・マウスとタッチ操作を記載。ログインや支払いなしで戦闘開始を確認。
  - GPT-6 Astra: GPT-6 Astra の利用と担当範囲は作者の確認待ちです。
  - プレビュー: ![IRON BASTION / 钢铁防线 — 実際のゲーム画面](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — 開発中の棒人間格闘ゲーム。パンチ、キック、アッパー、手裏剣、パリィを備え、ボット練習とオンライン・友達モードの入口があります。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - 対応環境: デスクトップブラウザー、キーボード操作。ボット練習はログイン不要。オンライン対戦とコントローラーは未検証。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — 作者は GPT-6 Astra で制作した多人対戦格闘ゲームと明記し、開発中と説明しています。
  - プレビュー: ![Stick Fighter — 実際のゲーム画面](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — ゴッホ風の町で戦う一人称ペイントシューティング。6人の画家と専用武器で20点先取を競います。
  - 作者: [Peter Gostev](https://x.com/petergostev)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/gogh-strike/SOURCE.md).
  - プレビュー: ![Gogh Strike · Paint Clash — 実際のゲーム画面](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — 4方向カメラ、レーダー、双砲、慣性飛行を備えた小惑星シューティングのコックピット。
  - 作者: [Eyes Wide Open](https://x.com/DantesClown)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - プレビュー: ![ASTEROIDS · Deepfield — 実際のゲーム画面](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — 雨の貨物港に潜入する戦術FPS。精細な銃と戦闘HUDで9人の敵に挑みます。
  - 作者: [hiraeth](https://x.com/WoahWurdz)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/blackwater/SOURCE.md).
  - 開発資料: [GitHub](https://github.com/Hiraeth010/blackwater)
  - プレビュー: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — 4人の英雄と各6つのスキルで戦う幻想的な決闘場。AI戦とオンラインルームを備えます。
  - 作者: [JUMPERZ](https://x.com/jumperz)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/cinderfall/SOURCE.md).
  - プレビュー: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — ラグドールのダンサーの手足を対応する目標へドラッグし、得点を稼いで制限時間つきのブレイキンのラウンドを延長します。
  - 作者: [Satrio](https://x.com/satrio_d)
  - プラットフォーム: デスクトップブラウザー、マウス操作。ログインなしで時間制限つきラウンドの開始を確認しました。
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — 作者は、Astra が既存のブレイクダンスゲームとその見せ方を改善したと説明しています。 [検証メモ](assets/screenshots/breakdance/SOURCE.md).
  - プレビュー: ![制限時間つきのダンス場で足の目標を狙うラグドールダンサー。](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — 第二次世界大戦を題材にしたブラウザー FPS。兵士やゾンビの外見、武器装備、ボット練習、ロビーの選択肢があります。
  - 作者: [Rishi](https://x.com/0xRishi)
  - プラットフォーム: デスクトップブラウザー、キーボードとマウス。ログインなしでボット練習を開始済み。マルチプレイとコントローラーは未検証です。
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi は Astra、Three.js、Meshy、ElevenLabs で制作したと説明しています。現行サイトには Vesper のクレジットもあり、帰属については検証メモを参照してください。 [検証メモ](assets/screenshots/astral-war/SOURCE.md).
  - プレビュー: ![武器と戦闘操作が見える Astral War の実行中の戦闘画面。](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — 3 段階の高さから飛び込み、宙返りやひねりを決め、浮かぶリングを狙って入水の得点を伸ばします。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - プラットフォーム: ブラウザー。単体ゲームはログインやダウンロードなしで起動します。2026-09-09 の確認で飛び込みを開始済み。キーボードと説明に記載されたタッチ操作に対応。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — 作者は Astra Pro と Three.js を使い、1 回のプロンプトで制作したと報告しています。 [検証メモ](assets/screenshots/flop-club/SOURCE.md).
  - 開発資料: [プロジェクト紹介](https://bubucn.com/zh/ai-model-evals/flop-club)
  - プレビュー: ![目標リングの上にある高い台の選手と入水操作。](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — 周回ごとに加速するネオンのワイヤーフレームコースを飛行し、ブーストやフェーズ移動のタイミングを合わせて生き延びます。
  - 作者: [Thomas Ricouard](https://x.com/Dimillian)
  - プラットフォーム: デスクトップブラウザー。ログインなしで得点つき飛行を開始済み。WASD で飛行、Space でブースト、Shift でフェーズ移動。
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — 作者はネオン／シンセウェーブのビジュアル方針とコンセプトアートから、Astra がゲームと音楽を作ったと説明しています。 [検証メモ](assets/screenshots/vector-dive/SOURCE.md).
  - プレビュー: ![Vector Dive のネオンコース、プレイヤー機体、ゲーム HUD。](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — 3 種の武器、屋根上のルート、ダッシュ、グラップルを使い、押し寄せる暴れウサギから海辺の町を守ります。
  - 作者: [OpenDesign](https://x.com/OpenDesignHQ)
  - プラットフォーム: デスクトップブラウザー、キーボードとマウス。ログインやダウンロードは不要です。
  - GPT-6 Astra: [作者の説明](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign は 2 モデルの比較で、この Three.js ゲームを GPT-6 Astra による作品と明記しています。 [検証メモ](assets/screenshots/harbor-skirmish/SOURCE.md).
  - プレビュー: ![Seabreeze の一人称ライフル視点。迫るウサギ、ウェーブ数、武器操作も表示。](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — Underground Boxing](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — 地下の 3D リングで時間制限つきの 3 ラウンドを戦い、パンチ、防御、回避とスタミナを管理します。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - プラットフォーム: デスクトップブラウザー。WASD で移動、J/K でパンチ、L で防御、Space で回避。ログインやダウンロードは不要です。
  - GPT-6 Astra: [作者の説明](https://x.com/sonic0828/status/2097601232877781344) — 作者の作品紹介スレッドはミニゲーム生成に GPT-6 Astra を使ったと記載し、ボクシングの返信でこの版を公開しています。 [検証メモ](assets/screenshots/underground-boxing/SOURCE.md).
  - 開発資料: [作者の公開リンク](https://x.com/sonic0828/status/2097601584410796401)
  - プレビュー: ![照明のある地下リングで打ち合う 2 人のボクサー。ラウンド時間、体力、スタミナを表示。](assets/screenshots/underground-boxing/gameplay.jpg)

- **[Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — 夕暮れの通りで上段・下段パンチを繰り出し、反撃を防ぎ、落ちる植木鉢を避けながら相手をマンホールへ追い込みます。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - プラットフォーム: デスクトップブラウザー。A/D で移動、J/K でパンチ、U/I で防御、Space で回避。ログイン不要。
  - GPT-6 Astra: [作者の説明](https://x.com/sonic0828/status/2097601232877781344) — 作者の GPT-6 Astra 作品紹介には、この路上格闘ゲームへのリンクを含む個別の公開返信があります。 [検証メモ](assets/screenshots/urban-champion-3d/SOURCE.md).
  - 開発資料: [作者の公開リンク](https://x.com/sonic0828/status/2097601861658587376)
  - プレビュー: ![Sunset Mart 前で戦う青と赤の選手、ラウンド時間とスタミナゲージ。](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[Zero District — Shells 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — 自動射撃、移動による回避、経験値回収、選べる強化を使い、3 分間の市街戦を生き延びます。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - プラットフォーム: ブラウザー。WASD またはドラッグで移動し、自動で照準を合わせます。ログインやダウンロード不要。
  - GPT-6 Astra: [作者の説明](https://x.com/sonic0828/status/2097601232877781344) — 作者はコレクション告知で GPT-6 Astra を明記し、個別の返信でこの 3D サバイバル版を紹介しています。 [検証メモ](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - 開発資料: [作者の公開リンク](https://x.com/sonic0828/status/2097602391122264310)
  - プレビュー: ![街路で周囲の敵へ自動射撃する生存者。撃破数 14、残り 166 秒。](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — ASCII 文字で描かれた一人称アリーナで、疾走、ジャンプ、スライディングを使い、コンピューターウイルスの敵の波を迎え撃ちます。
  - 作者: [Acker Code](https://x.com/acker_code)
  - プラットフォーム: デスクトップブラウザー、キーボードとマウス。ログイン不要。アリーナをクリックしてマウスを捕捉し、Esc で解除します。
  - GPT-6 Astra: [作者の説明](https://x.com/acker_code/status/2097542957070975286) — 作者はこの ASCII アートのシューティングを Codex と GPT-6 Astra で制作したと明記しています。 [検証メモ](assets/screenshots/ascii-district/SOURCE.md).
  - プレビュー: ![ウイルスが迫る ASCII の中庭。射撃後のライフル HUD は残弾 29。](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — ドラゴンボート上で踊るカピバラのバランスを取り、波に合わせて傾け、40 秒以内に 6 つの動きを成功させます。
  - 作者: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - プラットフォーム: デスクトップブラウザー。無料、ログイン不要。Play をクリック。アカウント機能は任意です。
  - GPT-6 Astra: [作者の掲載ページ](https://www.aigameshare.com/games/aura-farming-game) — 作者は GPT-6 Astra と Codex に加え、Blender、Three.js、ImageGen、WebAudio をクレジットしています。 [検証メモ](assets/screenshots/aura-farming/SOURCE.md).
  - プレビュー: ![ボートで踊るカピバラ、傾きと踏ん張りの操作、6 つの動きの課題 HUD。](assets/screenshots/aura-farming/gameplay.jpg)

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

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — 3D の木工作業台で 6 部品がかみ合う組木パズルを分解し、2 種類の華容道スライドパズルを解きます。ヒントと移動の取り消しに対応しています。
  - 作者: [MartinDelophy](https://github.com/MartinDelophy) （プロジェクトの発案者・投稿者）。
  - 対応環境: WebGL 2 対応のモダンブラウザー。中国語の画面で、マウス・キーボード・タッチ操作に対応。無料でログインや API キーは不要です。進行状況は現在のブラウザーに保存されます。
  - モデルの担当範囲: [制作記録](works/sunjing-puzzles/CREATION.md) — Codex でゲーム設計、手続き型の 3D グラフィックス、ルール、ソルバー、テストを繰り返し開発。GPT-6 Astra の具体的な利用は作者の確認待ちです（草稿としての投稿）。
  - 開発資料: [ソースコードと実行手順](works/sunjing-puzzles/README.md) · [要件の記録](works/sunjing-puzzles/PROMPTS.md) · 使用技術: React, Vinext/Vite, Three.js.
  - プレビュー: ![Sunjing の 6 部品の木製パズル。緑の 3D 作業台に、部品番号と引き抜き操作を表示しています。](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — 4×4 の街区で遊ぶ 2048 パズル。同じ建物を合成して都市ごとに 11 段階の建築を発展させ、伝統家屋から特徴的なスカイラインへ。12 都市を収録し、視点は 45° ずつ回転できます。
  - 作者: [Derek Wang](https://github.com/derek-wangpch)
  - プラットフォーム: WebGL 対応のデスクトップ・モバイルブラウザー。英語、簡体字・繁体字中国語。無料でログインや API キー不要。都市ごとの進行状況を現在のブラウザーに保存し、iOS ホーム画面にも追加できます。
  - GPT-6 Astra: [制作記録](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — 作者は 132 棟すべてのプロシージャルジオメトリを GPT-6 Astra で生成したと説明しています。参照資料に基づく多方向の調査、シルエットを重視したボリューム作成、画像による検証を重ねたもので、1 回のプロンプトのテストではありません。
  - 開発資料: [ソースとセットアップ](https://github.com/derek-wangpch/OpenCityMaker) · [検証メモ](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · 技術：React、TypeScript、Vite、Three.js。132 の建物モデルはすべて独自のプロシージャルジオメトリです。
  - プレビュー: ![香港の CityMaker 盤面。4×4 のローポリ 3D 建物、得点、都市選択と回転操作。](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — パチンコを引いて小さな Bonkers を木の支柱へ飛ばし、構造物を崩して目標を倒します。
  - 作者: [edmund5](https://x.com/edmund5)
  - プラットフォーム: ブラウザー。ドラッグで狙い、放して発射。ログインせずにプレイでき、Google ログインは任意です。
  - GPT-6 Astra: [作者の説明](https://x.com/edmund5/status/2097603093819261002) — 作者はゲームに GPT-6 Astra と Three.js、背景音楽に Suno を使用したと記載しています。 [検証メモ](assets/screenshots/bonkshot/SOURCE.md).
  - プレビュー: ![Grasslands の最初のパズルで発射した後。崩れかけの木塔、残り目標 1、2,200 点。](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — 閉ざされた温室を探索し、銅の水道管を修理し、植物や反射光を配置して最後の種を救い出します。
  - 作者: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - プラットフォーム: ブラウザー。Play、続いて Begin をクリック。無料、ログイン不要。操作表示は英語と中国語。
  - GPT-6 Astra: [作者の掲載ページ](https://www.aigameshare.com/games/greenhouse-escape-room) — 作者は開発ツールとして GPT-6 Astra、Codex、ImageGen、WebAudio を挙げています。 [検証メモ](assets/screenshots/greenhouse-escape-room/SOURCE.md).
  - プレビュー: ![温室脱出ゲームの Waterworks 室。9 マスの配管装置、タイマー、所持品。](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

<a id="strategy-simulation"></a>

### 戦略・シミュレーション

タワーディフェンス、戦略カードゲーム、経営、建築、シミュレーションのサンドボックス。

- **[Tidehook](https://tidehook-mallow.vercel.app/)** — 小さなタグボート Mallow で 3 つの沿岸航海へ。重さによって加速や旋回が変わる漂流物を曳航して港のクレーンへ届け、最後に灯台のレンズを回収します。
  - 作者: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - プラットフォーム: デスクトップ・ノート PC のブラウザー、英語 UI。無料で、ログインやインストールは不要です。キーボードまたは水面クリックで操船し、進行状況は現在のブラウザーに保存されます。スマートフォン実機でのプレイは未確認です。
  - GPT-6 Astra: [作者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74) — 作者は Codex の GPT-6 Astra で Canvas ゲーム、曳航の物理挙動、クレーンへの引き渡し、UI、天候、音声を繰り返し開発・改善し、自ら設計方針とプレイテストを担当しました。画像素材は別途画像生成で制作され、音楽と効果音は Web Audio による合成です。
  - 開発資料: [itch.io](https://mafuta.itch.io/tidehook) · [ゲームプレイ動画](https://youtu.be/wlEh8gnDOnU) · 素の JavaScript、Canvas 2D、Vite、Web Audio。ソースリポジトリは非公開です。 [検証とスクリーンショットの出典（英語）](assets/screenshots/tidehook/SOURCE.md)
  - プレビュー: ![作者提供の 2026-09-11 リリース版の画像：The Old Sound の島々の間で重い漂流物を曳航する Mallow。港までの距離とミニマップも表示。](assets/screenshots/tidehook/gameplay.png)

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — 3つの家に家具を配置し、素材や照明を調整して一人称で歩ける3Dインテリア制作。ローカル保存とGLB読み込みに対応。
  - 作者: [Ryan-fm](https://github.com/Ryan-fm)
  - 対応環境: WebGL対応のデスクトップブラウザー。中国語・英語UI。無料、ログイン不要。Quest実機は未検証。
  - Codex: [GitHub](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Codexによる反復開発を記録。GPT-6 Astraという正確なモデル名は作者の確認待ちです。
  - 開発資料: [GitHub](https://github.com/Ryan-fm/Dwellcraft)
  - プレビュー: ![Dwellcraft](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — ミニチュアの駒が並ぶ回転可能な3D盤でコンピューターとチェス。棋譜と取り消し機能付き。
  - 作者: [에코_eco](https://x.com/echo3042)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - プレビュー: ![Little Kingdom Chess / 작은 왕국 체스 — 実際のゲーム画面](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — 廃材から動力のない車を組み立て、重力で坂を下るゲーム。一人称の工房から始まります。
  - 作者: [TheLabGuy](https://x.com/hermesailab)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/junk-run/SOURCE.md).
  - プレビュー: ![JUNK RUN — 実際のゲーム画面](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — コンピューターと対戦する六角形の戦略ボードゲーム。正体を隠したエージェントを配置し、ブラフと包囲で連鎖的な捕獲を狙います。
  - 作者: [Nate Lorenzen](https://x.com/NateLorenzen)
  - 対応環境: ブラウザー、英語 UI。ログインや支払いなしで最初の手とコンピューターの応答を確認。
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — 作者は、自作ゲームの設計を Astra が一度でプレイ可能なデモにしたと述べています。開発過程を独立に監査したものではありません。
  - プレビュー: ![Spy or Lie — 実際のゲーム画面](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — 魏・蜀・呉を選び、15 都市をめぐるターン制の領土争いに挑みます。金と兵糧を管理し、それぞれに AI 生成の肖像を持つ総勢 108 名の武将を指揮して、AI 勢力と天下統一を争います。
  - 作者: [MartinDelophy](https://github.com/MartinDelophy) （プロジェクトの発案者・投稿者）。
  - 対応環境: モダンブラウザー。中国語の画面で、マウス・タッチ操作に対応。無料でログインや API キーは不要です。ローカルのセーブデータをインポート・エクスポートできます。
  - GPT-6 Astra: [制作記録](works/three-kingdoms/CREATION.md) — 作者が利用を確認。Codex での反復的な共同作業により、ルール、画面、AI、バランス調整、テストを開発しました。地形と武将の肖像は画像生成ツールで制作しています。
  - 開発資料: [ソースコードと実行手順](works/three-kingdoms/README.md) · [要件の記録](works/three-kingdoms/PROMPTS.md) · 使用技術: React, TypeScript, Vinext/Vite.
  - プレビュー: ![水墨画風の都市マップ、資源の操作パネル、武将の肖像を表示した Three Kingdoms のゲーム画面。](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — 小さな島で電力網をつなぎ、砲塔を建設・強化します。限られた電力を配分し、10 波の敵と最後のボスから灯台を守りましょう。
  - 作者: [stackloomdev](https://github.com/stackloomdev)
  - 対応環境: モダンなデスクトップ・モバイルブラウザー。中国語と英語に対応。無料で、ログインや API キーは不要です。任意のサウンド機能には Web Audio が必要です。
  - GPT-6 Astra: [作者の開発記録とモデルの担当範囲](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — ゲーム設計、コード、手続き型のグラフィックス、テストに使用し、複数回の改善を重ねています。One Shot テストではありません。
  - 開発資料: [ソースコードと実行手順](https://github.com/stackloomdev/last-beacon) · [要件と改善の記録](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 使用技術: JavaScript, Canvas 2D, Web Audio.
  - プレビュー: ![Last Beacon の英語画面。電力網につながった砲塔、迫撃砲、冷気の塔が、海岸沿いの道から来る敵から島を守っています。](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — 地下コロニーのサバイバルシミュレーション。三人の住民に採掘と建設を指示し、酸素・食料・電力を管理します。
  - 作者: dudu
  - 対応環境: Canvas 対応ブラウザー、中国語 UI、マウスとキーボード。ログインや支払いなしで起動を確認。
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — 投稿者によると GPT-6 Astra で全工程を開発。独立した検証は行っていません。
  - プレビュー: ![缺氧 · 小小星球 — 実際のゲーム画面](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — 攻防計算、限られた資源、三色の鍵を使って進む、十五階のピクセル高塔アドベンチャー。
  - 作者: yw
  - 対応環境: ブラウザー、中国語 UI。ログインや支払いなしで起動を確認。
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — 投稿者は GPT-6 Astra 利用欄に開発プロンプトを掲載。具体的なモデルの担当範囲は独立に検証していません。
  - プレビュー: ![魔塔 · 永夜之阶 — 実際のゲーム画面](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — Don't Starve の再現作品として投稿された、ブラウザー向けのサバイバル・戦略ゲームです。投稿画像には森の探索、資源の収集、所持品と、体力・空腹・正気度の表示が見られます。
  - 作者: dudu
  - 対応環境: ブラウザー。投稿画像では中国語の画面とキーボード操作を確認できます。料金やログインの要否は記載されていません。デモは独立に確認できていません。
  - GPT-6 Astra: [投稿者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — 投稿者によると、開発全体を GPT-6 Astra が担当しました。
  - 開発資料: 公開ソースコードや別途の開発記録は提供されていません。
  - プレビュー: ![Issue #26 に添付された永恒荒野の画面。森の焚き火のそばに立つキャラクターと、所持品、生存状態、ミニマップを表示しています。](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — Dave the Diver をブラウザーで再現した作品。水中での銛を使った魚捕り、寿司店の経営、島での農作業を組み合わせています。
  - 作者: dudu
  - 対応環境: ブラウザー。中国語の画面で、マウスとキーボードに対応。ログインや支払いなしでアクセスし、潜水を開始できることを確認しました。
  - GPT-6 Astra: [投稿者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — 投稿者によると、開発全体を GPT-6 Astra が担当しました。
  - 開発資料: 公開ソースコードや別途の開発記録は提供されていません。
  - プレビュー: ![Dave the Diver 再現作品のプレイ画面。魚群の中のダイバーと、酸素、深度、収穫した魚の所持欄を表示しています。](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — 仲間を採用し、カードで模倣企業やバグ、クラウド料金に挑む起業テーマのローグライク。
  - 作者: [Peter Yang](https://x.com/petergyang)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/no-moat/SOURCE.md).
  - プレビュー: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — 道を敷き、労働者を育て、生産網を作る、精細な3D中世村落の建設ゲーム。
  - 作者: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/the-free-game/SOURCE.md).
  - 開発資料: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - プレビュー: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — 資金と GPU を集め、データセンターと軍隊を築き、ライバル AI 研究所より先に ASI を目指すか、本部を破壊します。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - プラットフォーム: デスクトップブラウザー。無料の風刺リアルタイム戦略ゲーム。ログインなしで対コンピューター戦の開始と資源収集を確認済み。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — 作者は Age of Empires に着想を得たこのゲームを Astra で 2 日間かけて開発したと説明しています。 [検証メモ](assets/screenshots/agi-of-empires/SOURCE.md).
  - プレビュー: ![AGI of Empires の戦場、資源カウンター、本部。](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — 道路網や変則的なグラフ盤で囲碁をプレイ。1 台で交代するローカル対局や、友人との対局の選択肢があります。
  - 作者: [Boris Power](https://x.com/BorisMPower)
  - プラットフォーム: ブラウザー。ログインなしでローカル盤面を開くことを確認済み。オンラインの友人対局は未検証。
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — 作者は任意のグラフ上で遊ぶマルチプレイ囲碁を、Astra への 1 回のプロンプトで制作したと説明しています。 [検証メモ](assets/screenshots/atlas-go/SOURCE.md).
  - プレビュー: ![Atlas Go のハニカム型グラフ盤に置かれた黒石と白石。](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — 原材料を集め、機械へ電力を供給し、ベルトコンベヤーをつないで空き地を稼働する工場へ育てます。
  - 作者: [Dan](https://x.com/aidaniil)
  - プラットフォーム: デスクトップブラウザー。ゲスト用チュートリアルはログイン不要ですが、進行状況の保存にはログインが必要です。マルチプレイは独立検証していません。
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — 作者は兄弟で Astra、Blender MCP、Cloudflare Durable Objects を使って制作し、Satisfactory と Besiege に着想を得たと説明しています。 [検証メモ](assets/screenshots/ironwood/SOURCE.md).
  - プレビュー: ![Ironwood の機械、コンベヤー、資源管理チュートリアル。](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — 基地建設、拠点占領、陸空部隊の指揮を楽しむシングルプレイヤーRTS。
  - 作者: [Mustafa Akın](https://x.com/mustafaakin)
  - プラットフォーム: デスクトップブラウザー。キーボードとマウス、ログイン不要。
  - GPT-6 Astra: [検証記録](assets/screenshots/dust-front/SOURCE.md) — 提供されたMustafa Akınの投稿ではChatGPT AstraとBlender MCPを使い、素材生成を含め約40回のプロンプトで制作したと説明。
  - プレビュー: ![DUST FRONT: 基地建設、拠点占領、陸空部隊の指揮を楽しむシングルプレイヤーRTS。](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — 現代戦を題材にしたリアルタイムストラテジー。基地を建設し、資源地帯を争い、戦車・歩兵・航空機・ドローンを指揮して AI 軍と戦います。スパイと情報システムも活用できます。
  - 作者: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - 対応環境: デスクトップブラウザー、中国語 UI、マウスとキーボード。ログイン・支払い・インストールなしでシングルプレイ対戦の開始を確認しました。
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — 作者はリンク先の投稿で、この RTS の制作に「GPT Astra」を使用したと述べています。具体的なモデルのバージョンと詳しい開発手順は示されていません。
  - 参考資料: [投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [検証記録（英語）](assets/screenshots/frontline-command/SOURCE.md)
  - プレビュー: ![Frontline Command の対戦画面。基地、選択中の戦車3両、発電所の配置操作。v0.8、2026-09-09 撮影。](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — 3D コインプッシャーで狙いを定め、特殊コインとレリックを組み合わせ、限られた投入回数で得点目標を達成し 6 ラウンドを攻略します。
  - 作者: [nilni / @nil](https://www.aigameshare.com/profile/nil)
  - プラットフォーム: ブラウザー。Play をクリック。無料、ログイン不要。アカウントでの保存は任意です。
  - GPT-6 Astra: [作者の掲載ページ](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — 作者は GPT-6 Astra、GPT-5.6 Sol、Codex を併記しており、それぞれの担当範囲は説明していません。 [検証メモ](assets/screenshots/mintfall/SOURCE.md).
  - プレビュー: ![Mintfall の第 1 ラウンドの 3D コイントレイ。33 点、投入 44 回、特殊コイン操作。](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — 幌馬車の一行を西へ導き、食料を配分し、修理や狩りを管理しながらオレゴン街道で選択を重ねます。
  - 作者: [Biswas](https://x.com/bis_waz)
  - プラットフォーム: デスクトップブラウザー。用意された架空の一行で開始でき、ログインやインストールは不要です。
  - GPT-6 Astra: [X](https://x.com/bis_waz/status/2098023593468907747) — Biswas は GPT-6 Astra で The Oregon Trail の現代的な 3D 版を制作したと述べ、ゲームを公開しています。 [検証メモ](assets/screenshots/westward/SOURCE.md).
  - プレビュー: ![カンザス川へ向かう牛と幌馬車。移動 25 マイル、物資管理パネル。](assets/screenshots/westward/gameplay.jpg)

<a id="rpg-adventures"></a>

### RPG・アドベンチャー

ロールプレイング、探索、物語を楽しむ冒険、インタラクティブなストーリー。

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — ボクセル風アクションRPG。Spark BoltとSunburstでHollowbornと戦い、瞬間移動で危険を避け、太陽の門を目覚めさせる。
  - 作者: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - 対応環境: デスクトップブラウザー。キーボードとマウス、ログイン不要。
  - GPT-6 Astra: 本作での利用は未確認。提供された作者の返信は掲載を許可していますが、モデルや役割は明記していません。 [検証記録](assets/screenshots/the-sunshard/SOURCE.md).
  - プレビュー: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — 共有世界でスキル、採集、戦闘を楽しむレトロな多人数冒険。ゲストでも参加できます。
  - 作者: [Rohan Varma](https://x.com/TheRohanVarma)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/lumbridge/SOURCE.md).
  - プレビュー: ![Lumbridge / Elderwood Realms — 実際のゲーム画面](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — 全4章・13の謎を備えた、神秘的な雰囲気のポイント＆クリック型アドベンチャー。「現在」と「残響」の手がかりを照合し、証拠を集め、00:17で時が止まった観測所の謎を解き明かす。
  - 作者: [stackloomdev](https://github.com/stackloomdev)
  - プラットフォーム: PC・モバイルのブラウザー。中国語・英語に対応。オンラインで無料プレイ可能。ログイン、インストール、APIキーは不要。WebGL演出は任意で、非対応時は元のイラストを表示。
  - GPT-6 Astra: [開発記録](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Codexで反復的に共同開発し、物語、謎解き、二言語の文章、コード、プログラム生成の3D演出、テストに使用。
  - 開発資料: [ソースと起動手順](https://github.com/stackloomdev/silent-meridian) · [アートの制作記録](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · 使用技術: JavaScript, WebGL, Web Audio.
  - プレビュー: ![Silent Meridianのプレイ画面。真鍮の3D装置、手がかりのマーカー、現在と残響の切り替え、調査手帳が見える観測所。](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — 戦士・魔法使い・道士の3職、装備、ダンジョン、自動戦闘を備えた伝奇風アクションRPG。
  - 作者: [知识猫AI实验室](https://x.com/GeekCatX)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/mir176/SOURCE.md).
  - プレビュー: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Zorkの非公式3D版。一人称の探索に謎解き、戦闘、冒険日誌を組み合わせています。
  - 作者: [Ethan Mollick](https://x.com/emollick)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/zork/SOURCE.md).
  - プレビュー: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — 非公式のブラウザー再制作版で Springfield を徒歩や車で探索。ミッション、交通、警察の追跡があります。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - プラットフォーム: デスクトップブラウザー。大量の初期リソース読込後、ログインなしで最初のミッションを開始できました。全キャンペーンの完走は未検証。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — 作者は GPT-6 Astra で Web 向けに再構築したと説明し、リポジトリは読込に関する Claude の補助も記載しています。原作の素材には元の権利が適用されます。 [検証メモ](assets/screenshots/hit-and-run-web/SOURCE.md).
  - 開発資料: [ソースとセットアップ](https://github.com/Vheissu/hit-and-run-web)
  - プレビュー: ![Springfield の Homer。最初のミッション目標とミニマップを表示。](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — 陽光が差す 2.5D の谷を歩き、道をたどって 3 通の風の手紙を集める穏やかな探索アドベンチャー。
  - 作者: [Tushar](https://x.com/TusharXo)
  - プラットフォーム: ブラウザー、Crayon 上で公開。公開ページと埋め込みプレイヤーを確認済み。
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar は Astra による道と素材の生成を説明し、続報で Astra、Three.js、Crayon を使ったプレイ可能版の公開を告知しています。 [検証メモ](assets/screenshots/crayon-adventure/SOURCE.md).
  - 開発資料: [作者の公開告知](https://x.com/TusharXo/status/2096741535891251261)
  - プレビュー: ![花咲く谷を探索するキャラクターと風の手紙の目標。](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — ポイント＆クリックの殺人ミステリーで Blackthorn Manor を調べ、場面を観察して手がかりを追い、犯人を突き止めます。
  - 作者: [Christos Antonopoulos](https://x.com/Christos_antono)
  - プラットフォーム: ブラウザー。ログインなしで操作可能な屋敷の入口を開けました。その後に生成される場面は十分に検証していません。
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — 作者はこの生成型の探偵ゲームに GPT Astra と H3 Max の両方を使用したと記載しています。 [検証メモ](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - プレビュー: ![クリックできる扉のある屋敷の入口と、捜査開始の文章。](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — 浮遊島を探索し、集落の間をジャンプや滑空で渡り、住民の依頼をこなします。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - プラットフォーム: デスクトップブラウザー、キーボードとマウス。クエスト版のページと操作説明を確認済み。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — 作者は Edge City の場所に着想を得た NPC とクエストのある 3D ゲームを Astra が作ったと説明しています。 [検証メモ](assets/screenshots/skyward-gathering/SOURCE.md).
  - プレビュー: ![Skyward の浮遊島の全景と探索・日誌の操作。](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Anna の音楽魔法と Leo の超能力を切り替え、メロディーの花を目覚めさせて Wonder Garden を探索します。
  - 作者: [Dharma Utomo](https://x.com/dharmautomo)
  - プラットフォーム: ブラウザー。ログインなしで最初のクエストを開始済み。WASD で移動、Space でジャンプ、E で能力、Tab で主人公交代。
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — 作者は GPT-6 Astra が 3D アドベンチャー制作を助けたと述べ、子どもたちが試遊する動画も公開しています。 [検証メモ](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - プレビュー: ![Anna と Leo の 3D アドベンチャー世界とクエスト画面。](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — Rainmist Haven を探索し、剣の連撃、属性スキル、回避移動を使ってダンジョンへ向かいます。
  - 作者: [UModeler X PicoBerry](https://x.com/UModeler)
  - プラットフォーム: デスクトップブラウザー、キーボードとマウス。ログイン不要。最初の 3D 素材の読込完了を待ってください。
  - GPT-6 Astra: [作者の説明](https://x.com/UModeler/status/2097792348407099553) — 作者は PicoBerry が素材を生成し、GPT-6 Astra がそれらを使う Three.js のアクション RPG を構築したと説明しています。 [検証メモ](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - 開発資料: [作者の公開リンク](https://x.com/UModeler/status/2097792351129178451)
  - プレビュー: ![Rainmist Haven の噴水と露店の近くで回避する Deller。体力、マナ、スキル操作。](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — 仲間を雇い、100 階のダンジョンへ降り、剣や火球、仲間の役割を組み合わせます。死亡すると復活できない冒険です。
  - 作者: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - プラットフォーム: Wavedash のデスクトップブラウザーゲーム。基本プレイはログイン不要。アカウントは任意で、キャラクターの早期解放には有料の選択肢があります。
  - GPT-6 Astra: [作者の説明](https://x.com/tonysurix/status/2097873333551616355) — 作者はこのパーティー型ダンジョン探索ゲームを GPT-6 Astra で制作したと明言しています。 [検証メモ](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - プレビュー: ![最初の階で火球を放つ主人公と雇った騎士。パーティーの体力とミニマップ。](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — 難破後の島を一人称で探索し、手がかりを調べ、環境を使うパズルを解きながら灯台を目指します。
  - 作者: [Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - プラットフォーム: デスクトップブラウザー。島の読込を待ち、Begin expedition を選択。無料、アカウントやインストール不要。
  - GPT-6 Astra: [作者の開発日誌](https://smallweblab.com/posts/sunlandia/) — 作者は GPT-5.6 Sol で始め、Fable の助けを受け、GPT-6 Astra でゲームを完成させました。 [検証メモ](assets/screenshots/sunlandia/SOURCE.md).
  - プレビュー: ![Sunlandia の一人称の海岸。難破船、壊れた桟橋、助けを探す目標。](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — 水に満ちたカタツムリの殻で微小生物を育て、栄養を集め、探索しながら新しい体の部位を発達させます。
  - 作者: [Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - プラットフォーム: ブラウザー。無料ベータ、ログイン不要。中国語を含む 5 言語の UI。
  - GPT-6 Astra: [作者のスレッド](https://x.com/Preda2005/status/2097954217180921928) — Marcio は生物進化の構想を GPT-6 Astra に伝え、公開中のベータまで開発したと説明しています。 [検証メモ](assets/screenshots/nacar/SOURCE.md).
  - プレビュー: ![色とりどりの栄養に囲まれた細胞。バイオマス、進化、所持品、探索済み水域の表示。](assets/screenshots/nacar/gameplay.jpg)

<a id="platformers-racing"></a>

### プラットフォーム・レース

パルクール、足場を渡るアクション、レースなど、移動とルート選びが中心のゲーム。

- **[Barrelbound: The Lost Cargo](https://barrelbound.vercel.app/)** — Rocco または Pip を選び、3 つのジャングルステージで二段ジャンプ、樽投げ、トロッコを使って失われた荷物を回収し、最後のボスに挑みます。
  - 作者: [Emile du Toit / Mafuta Games](https://mafuta.itch.io/)
  - プラットフォーム: デスクトップ・ノート PC のブラウザー、英語 UI。無料で、ログインやインストールは不要です。キーボード操作に対応し、コントローラー対応は作者の説明に基づきます。
  - GPT-6 Astra: [作者の説明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73) — 作者は Codex の GPT-6 Astra を実装、ゲームの仕組み、反復改善、テストに使用し、自ら設計方針とプレイテストを担当しました。画像素材は別途画像生成で制作され、音楽と効果音は Web Audio による合成です。
  - 開発資料: [itch.io](https://mafuta.itch.io/barrelbound) · [ゲームプレイ動画](https://youtu.be/X87UqF_n3ro) · Phaser 3、Vite、Web Audio。ソースリポジトリは非公開です。 [検証とスクリーンショットの出典（英語）](assets/screenshots/barrelbound/SOURCE.md)
  - プレビュー: ![作者提供の 2026 年 9 月リリース版の画像：Jungle Dock Dash の木製足場にいる Rocco、樽、バナナの道筋。](assets/screenshots/barrelbound/gameplay.jpg)

- **[STORM RACE](https://storm-race.vercel.app/)** — 部品を分解表示できるガレージ、ブースト、晴天・雨・嵐の路面を備えたミニ四駆レース。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/storm-race/SOURCE.md).
  - プレビュー: ![STORM RACE — 実際のゲーム画面](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — 二段ジャンプとダッシュで3つの月夜のステージを進み、コインと星のかけらを集めるオオカミの冒険。
  - 作者: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/fang-starlight-run/SOURCE.md).
  - プレビュー: ![FANG STARLIGHT RUN — 実際のゲーム画面](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — エチオピア風の高地を三輪バジャージで走り、5台のAI車やタイムと競います。
  - 作者: [Guzo Technologies](https://x.com/guzotech)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - プレビュー: ![Blue Bajaj Rally — 実際のゲーム画面](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — 海湾サーキットを 3 周するカートレース。6 種類のカートから選び、コーナーでミニターボをためて立ち上がりで加速し、個人順位や 4 対 4 のチーム得点を競います。
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

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — 左右移動だけで3Dの縦穴を降下。移動・崩壊・位相変化する足場を渡り、レーザーやノコギリを避け、クリスタルと生存用チップを集めます。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 対応環境: デスクトップブラウザー、中国語UI、A/Dまたは左右矢印キー。ログイン・支払いなしで開始できることを確認。モバイルは未検証。
  - Codex: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — 共有記録はGPT-6 Proと表記され、ゲーム生成と反復修正を記録しています。GPT-6 Astraとは明記されていません。
  - 開発資料: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - プレビュー: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — ドリフト、ニトロ、アイテムで3周を競走。現行タイトルは疾风赛道で、2〜4人のオンラインモードも用意。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 対応環境: ブラウザー、無料、ログイン不要。作者によるとVPN／プロキシが必要な場合があります。ソロ開始を確認、マルチプレイは未検証。
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — 作者の説明： 初版はQwen3.8 Max、第2版はAstraで全面再構築。
  - プレビュー: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — 南国のカートコースをドリフトし、アイテムを使い、7 人のライバルと 3 周のレースを競います。
  - 作者: [Pietro Schirano](https://x.com/skirano)
  - プラットフォーム: ブラウザー。ログインなしで 3 周のレースを開始済み。キーボードで運転・ドリフト・アイテム操作、画面上のタッチボタンもあります。
  - GPT-6 Astra: [モデル利用の根拠](https://openai.com/index/gpt-6-astra/) — OpenAI の Astra 発表ページはこのカートゲームにリンクし、Pietro Schirano を作者として紹介しています。発見元の X 投稿は作者本人ではなくコミュニティによる共有です。 [検証メモ](assets/screenshots/tidal-rush/SOURCE.md).
  - 開発資料: [X での紹介](https://x.com/alexgetmancom/status/2095598460921614825)
  - プレビュー: ![Tidal Rush の南国カートコース、順位とドリフト操作。](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — ゴシックなピクセルアートのステージでジャンプし、敵を斬る、踏む、攻撃を召喚するといった操作で進む短い横スクロール冒険です。
  - 作者: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - プラットフォーム: ブラウザー、日本語 UI。キーボード操作と作者が説明するスマートフォン対応。公開ステージは 1 つです。
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — 作者は Astra で約 25 分開発し、歩行アニメーションを 1 回修正したと報告しています。音楽は別途 Suno のクレジットです。 [検証メモ](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - プレビュー: ![赤い月のゴシック街路で戦う LUNA。体力と召喚ゲージ。](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — 宇宙飛行士の自転車で惑星のリングを走り、星屑を集め、相手のスリップストリームとブーストを使って Orbital Cup を競います。
  - 作者: [Crayon](https://x.com/usecrayon)
  - プラットフォーム: Crayon 上のブラウザーゲーム。キーボードと説明に記載されたタッチ操作。公開ページにはレース、タイムトライアル、無限散策モードがあります。
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon は宇宙自転車ゲームに GPT-6 Astra、Crayon Pro、Three.js を使用したと記載しています。 [検証メモ](assets/screenshots/crayon-space-bike/SOURCE.md).
  - プレビュー: ![惑星のリングを走る宇宙飛行士たち。周回、順位、星屑の表示。](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — 4 つのジャングルステージを走り、跳び、つるに揺られ、宝を集めてワニを避けながらタイムを縮めます。
  - 作者: [Ben Nash](https://x.com/bennash)
  - プラットフォーム: ブラウザー、キーボードと画面上の移動操作。最初のステージと操作説明をログインなしで読込済み。
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — 作者は GPT-6 Astra で作った、Pitfall に着想を得た 4 ステージのゲームと明記しています。 [検証メモ](assets/screenshots/one-more-vine/SOURCE.md).
  - プレビュー: ![つる、宝、穴、ワニがあるジャングルのプラットフォームステージ。](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — 『忍者龍剣伝』のリュウ・ハヤブサと『バトルシティー』の戦車で、マリオの地下ステージ 1-2 に挑戦。リュウは横スクロールでジャンプ・壁登り・戦闘、戦車は見下ろし型の戦闘を行い、忍者から戦車へのリレーで姫を救うこともできます。
  - 作者: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - 対応環境: デスクトップブラウザー、中国語 UI、キーボード推奨。無料でログインやインストールは不要です。
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — 作者によると、GPT-6 Astra でゲームコードと操作を繰り返し開発・デバッグし、自身で遊び方の方針とフィードバックを提供しました。単一プロンプトによる生成ではありません。
  - 開発資料: [作品紹介](https://aha-xiaoq.github.io/games/mario-mix-2/) · [動画](https://www.bilibili.com/video/BV1erYt69EFP/) · [検証と画像の出典（英語）](assets/screenshots/mario-mix-2/SOURCE.md)
  - 素材について: 非公式ファンゲームです。既存のキャラクター・画像・音楽の権利は各権利者に帰属します。素材のクレジットは元のゲームページを参照してください。
  - プレビュー: ![Mario Mix II — 作者提供の動画サムネイル。実際のプレイ画面の撮影ではありません。](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - スクリーンショット: ![Mario Mix II の戦車がステージ 1-2 の入口で発砲する画面。バージョン 1.0、2026-09-09 撮影。](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — Bengaluru の交通を縫って走り、路面の穴や配達バイクを避け、ブーストや横振りで進路を切り開きます。
  - 作者: [Ravi Theja](https://x.com/ravithejads)
  - プラットフォーム: デスクトップブラウザー。キーボード操作、自動アクセルは任意。ログイン不要。
  - GPT-6 Astra: [作者の説明](https://x.com/ravithejads/status/2097181044625887392) — 作者は Bengaluru の道路レースゲームを GPT-6 Astra で制作したと説明しています。 [検証メモ](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - プレビュー: ![Bengaluru の交通の中の青いプレイヤー車。順位、速度、時計、操作ヒント。](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS — Alpine Downhill](https://iamsonic.net/2026/mini-games/skicross.html)** — 3 人のスキーヤーと山を滑り降り、ゲートと障害物を越え、雪崩に追いつかれないように走ります。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - プラットフォーム: デスクトップブラウザー。A/D で操舵、Space でジャンプ、Shift でブースト。ログインやダウンロード不要。
  - GPT-6 Astra: [作者の説明](https://x.com/sonic0828/status/2097601232877781344) — 作者はミニゲーム集を GPT-6 Astra によるものと説明し、個別の返信でこのスキーゲームを公開しています。 [検証メモ](assets/screenshots/skicross/SOURCE.md).
  - 開発資料: [作者の公開リンク](https://x.com/sonic0828/status/2097601732297814300)
  - プレビュー: ![雪のコースを進む 4 人のスキーヤー。ゲートボーナス、順位、速度、雪崩までの距離。](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — 苔むした壁を登り、ハエを捕まえてグリップを回復し、雨に流される前に避難用の穴へ隠れます。
  - 作者: [Luiz Piccini](https://piccini.app/)
  - プラットフォーム: ブラウザー。無料、ログイン不要。WASD または画面上のジョイスティック。
  - GPT-6 Astra: [作者の Game Bench](https://game-bench.piccini.app/) — Game Bench は公開作品を GPT-6 Astra canary、high、2026-09-05 と表示し、共通のゲーム制作課題から作られたものとしています。 [検証メモ](assets/screenshots/itsy-bitsy-spider/SOURCE.md).
  - プレビュー: ![苔むしたレンガ壁の高さ 2 メートルにいるクモ。グリップ、ハエ、避難穴、ジョイスティック。](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — インドの街の交通をバイクで駆け抜け、バスやオートリキシャを避けながらキック、パンチ、ブーストを使います。
  - 作者: [Kishore](https://x.com/GetKishore)
  - プラットフォーム: デスクトップブラウザー。無料、アカウント不要。初走行前に生成されたライダー名を承認または編集します。
  - GPT-6 Astra: [作者の開発スレッド](https://x.com/GetKishore/status/2097906401159102811) — Kishore は Astra 製の 3D ゲームを、街路の資料と交通・衝突・ライダー同士の戦闘の反復テストで改善した過程を説明しています。 [検証メモ](assets/screenshots/desi-mayhem/SOURCE.md).
  - プレビュー: ![Chennai のバイクレース。ライダー、交通、ミニマップ、順位、レース時計。](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — 銀河の海を乗り物で進み、光るゲートをたどって、2 周のレースか無限の漂流を選びます。
  - 作者: [Aniket J](https://x.com/aniketjart)
  - プラットフォーム: ブラウザー。3D 素材の読込後に Ride the current を選択。無料、ログイン不要。
  - GPT-6 Astra: [X](https://x.com/aniketjart/status/2098207146647433534) — Aniket は GPT-6 Astra、Blender MCP、Crayon をクレジットし、今後もゲームプレイを改善する予定の実験と説明しています。 [検証メモ](assets/screenshots/cosmic-tides/SOURCE.md).
  - プレビュー: ![銀河の海の光るゲートへ向かう Cosmic Tides のレース。周回と速度の表示。](assets/screenshots/cosmic-tides/gameplay.jpg)

<a id="experimental-multiplayer"></a>

### 実験的な作品・マルチプレイ

新しい仕組み、オンライン対戦、協力プレイなどの体験。

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — 山岳ラリー、スノーボード、反重力レースなど6作品を収めたブラウザーアーケード。コレクションとして1件に集計。
  - 作者: [Antonio Leiva](https://x.com/antonioleivag)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/astra-arcade/SOURCE.md).
  - プレビュー: ![ASTRA Arcade — 実際のゲーム画面](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — ソニックのキャラクターで庭を探索しチャオと触れ合う、非公式の多人数チャオガーデン作品。
  - 作者: [Hank](https://x.com/h4nkdog)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/chao-party/SOURCE.md).
  - プレビュー: ![Chao Party — 実際のゲーム画面](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — インタラクティブなパーティクルアートのサンドボックス。48,000 個の光の点を花、重力の輪、銀河へと変化させ、造形を揺らし、その瞬間をポスターとして書き出せます。
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

- **[Jelly Baby](https://jelly.scottsun.io/)** — 日差しの入る木の机でゼリーを跳ねさせ、伸ばし、ブランコやトランポリンで遊ぶ物理サンドボックス。
  - 作者: [Scott](https://x.com/scottstts)
  - 対応環境: デスクトップブラウザー。ログイン・支払いなしで起動を確認。モバイルは未検証。
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — 作者は本作の開発に Astra を使用したと述べています。 [検証記録（英語）](assets/screenshots/jelly-baby/SOURCE.md).
  - 開発資料: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - プレビュー: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — 跳ね返る砲弾と強化アイテムで虹色コアを守る戦車アリーナ。ソロ、ローカル協力、オンライン対戦を用意。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 対応環境: ブラウザー、無料、ログイン不要。作者によるとVPN／プロキシが必要な場合があります。ソロ開始を確認、マルチプレイは未検証。
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — 作者の説明： 初版はGPT-6 Astra Pro、以後の改善はCodexのGPT-6 Astra。
  - プレビュー: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — 凧を彩り、糸の張りを調整しながら街の屋根上を飛ばします。自由飛行と、時間制限つきで空の光を集める課題があります。
  - 作者: [Tushar / @TusharXo](https://x.com/TusharXo)
  - プラットフォーム: ブラウザー。キャラクターを選び、屋上に入って Fly を選択。無料、ログイン不要。
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2098156783181467801) — Tushar は Three.js の凧ゲームに GPT-6 Astra と Crayon を使ったと明記し、画像には Images 2.5 を挙げています。 [検証メモ](assets/screenshots/above-the-rooftops/SOURCE.md).
  - プレビュー: ![街の上の凧揚げ課題。高度、糸の張り、空の光の進捗、操舵表示。](assets/screenshots/above-the-rooftops/gameplay.jpg)

## 各作品に記載する情報

分かりやすい紹介には、どんなゲームか、どこで遊べるか、なぜ掲載するのかが簡潔に書かれています。

| 項目 | 記載内容 |
| --- | --- |
| ゲームと作者 | 作品名と、元の作者またはチームへのリンク |
| 面白さのポイント | 中心となる遊びの仕組みを一文で説明。抽象的な宣伝文句は避けてください |
| 体験方法 | ダウンロード、インストール、ローカル環境の準備、ログインなしでブラウザーから遊べる URL |
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
