<div align="center">

![Awesome GPT-6 Astra](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 31](https://img.shields.io/badge/Cases-31-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**GPT-6 Astra で作られた、遊んでみたくなるゲームを集めています。**

楽しいアイデア、実際に体験できる作品、そして次の作り手のヒントになる開発の記録。

[English](README.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[ゲームを投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [貢献する](CONTRIBUTING.md)

</div>

このページは [英語版 README](README.md) の翻訳です。最新の変更は原文で確認できます。翻訳の修正も歓迎します。

## はじめに

現在、**ブラウザーゲーム 30 作品と、インタラクティブなパーティクルアートのサンドボックス 1 作品**を掲載しています。三国志の領土戦略、木製の組木パズルとスライドパズル、柔らかい果物の合成、ワンボタン飛行、魔法の絨毯での戦闘、島の電力網を使うタワーディフェンス、荒野でのサバイバル、水中での魚捕り、寿司店経営と島での農作業、海湾サーキットのカートレース、ペリカンとの海岸サイクリング、卓上玩具の 3D ゲーム化、そして Orbital Garden。作品名をクリックすると、デモまたは実行手順付きのソースコードが開きます。

一覧更新日：**2026-09-09**。モデルの利用情報は作者または投稿者の説明に基づき、未確認の内容は各項目に明記しています。この日付は一覧の更新日であり、全作品を再度プレイテストした日ではありません。

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

<a id="strategy-simulation"></a>

### 戦略・シミュレーション

タワーディフェンス、戦略カードゲーム、経営、建築、シミュレーションのサンドボックス。

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

<a id="rpg-adventures"></a>

### RPG・アドベンチャー

ロールプレイング、探索、物語を楽しむ冒険、インタラクティブなストーリー。

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

<a id="platformers-racing"></a>

### プラットフォーム・レース

パルクール、足場を渡るアクション、レースなど、移動とルート選びが中心のゲーム。

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
