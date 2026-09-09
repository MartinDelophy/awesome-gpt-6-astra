# 参与贡献 · Contributing

欢迎提交自己的游戏，也欢迎推荐你发现的好作品。中文或英文都可以；不需要先把另一种语言翻译完。

You can submit your own game or recommend someone else's. Chinese and English submissions are both welcome; a translation is not required to get started.

## 什么样的作品适合收录 · What belongs here

- 游戏名称链接须直接打开可玩的在线游戏，无需下载、安装、本地搭建或强制登录；可玩的原型也可以。源码和开发记录可作为补充资料。 / The title must link directly to a playable browser game without downloads, installation, local setup or mandatory sign-in. Playable prototypes count; source code and devlogs are optional supporting resources.
- 作者公开说明使用了 GPT-6 Astra，并能描述它在项目中的作用。 / A public creator statement identifies GPT-6 Astra and describes its role in the project.
- 说明具体的玩法亮点，注明作者与访问条件。 / Explain the gameplay appeal, credit the creator, and disclose access requirements.

不要求纯 AI 制作，不要求开源，也不按“用了多少 AI”排名。只有网盘下载、安装包、源码仓库、概念图或宣传视频，以及当前无法进入游戏的项目，暂不收录。

Games do not need to be entirely AI-made or open source. We do not rank them by how much AI they used. Cloud-drive downloads, installers, source-only repositories, concept art and promotional videos do not qualify as game entry points. Games that cannot currently be entered are not ready for this list.

## 如何提交 · How to submit

最简单的方式是填写[游戏提交表单](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)。喜欢直接编辑的话，请发起 Pull Request：

The easiest path is the [game submission form](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml). If you prefer editing directly, open a pull request:

1. 放到最贴近核心玩法的分类，每个游戏只收录一次。 / Pick the best-fitting genre; list each game once.
2. 用下面的格式写一条简短推荐，并删除该分类的空状态文字。 / Add a short entry using the format below and remove that category's empty-state text.
3. 尽量同步默认英文版 [README.md](README.md) 和中文版 [README.zh-CN.md](README.zh-CN.md)，并更新开头的游戏数量；也欢迎同步其他译文。暂时只能提供一种语言也没关系。 / Update the default English [README.md](README.md), Chinese [README.zh-CN.md](README.zh-CN.md), and introductory game counts when possible. Updates to other translations are welcome; one language is fine for an initial submission.
4. 新增游戏须提供至少一张实机截图，在 README 条目中添加预览图片，并在 PR 描述中展示。截图格式见下文。 / New games require at least one gameplay screenshot, embedded in the README entry and displayed in the PR description. See the requirements below.
5. 打开游戏名称链接并开始游戏，确认无需下载、安装、本地搭建或登录；同时检查原作者署名与模型使用说明。 / Open the title link and start the game without downloading, installing, setting up locally or signing in; also check creator credit and the model-use description.

## 条目示例 · Entry examples

中文 README（[README.zh-CN.md](README.zh-CN.md)）：

```markdown
- **[游戏名称 / Game title](在线游戏 URL)** — 一句话说明核心玩法。
  - 作者：[作者名称](作者 URL)
  - 平台：浏览器；免费，无需登录。
  - GPT-6 Astra：[作者说明或开发记录](记录 URL) — 简述模型参与的工作。
  - 开发资料：[源码](源码 URL) · 技术：技术栈。
  - 预览：![游戏运行画面，简述可见的玩法](assets/screenshots/game-slug/gameplay.png)
```

Default English README ([README.md](README.md)):

```markdown
- **[Game title](Direct browser game URL)** — One sentence about the core mechanic.
  - Creator: [Creator name](Creator URL)
  - Platform: Browser; free, no login.
  - GPT-6 Astra: [Creator statement or devlog](Record URL) — Briefly describe the model's role.
  - Resources: [Source](Source URL) · Built with: Technology.
  - Preview: ![Game in action, describing the visible mechanic](assets/screenshots/game-slug/gameplay.png)
```

以上是格式示意。请替换所有占位内容，并把示例截图路径换成实际文件或公开图片 URL；两个 README 可以复用同一张图片。没有源码时删除源码链接，访问条件按作品实际情况填写。

These are templates. Replace all placeholders, including the screenshot path, with actual files or public image URLs. Both READMEs can reuse the same image. Omit the source link when unavailable and state the actual access requirements.

## 实机截图要求 · Gameplay screenshots

新增游戏的 PR 和 Issue 均须提供至少一张截图。已有条目可以逐步补齐；文字修正、链接维护和规范更新不要求新增游戏截图，在 PR 对应位置注明「不适用 / N/A」即可。

New-game PRs and issues require at least one screenshot. Existing entries can gain screenshots over time. Text corrections, link maintenance, and contribution-policy updates can mark the gameplay screenshot section as N/A.

- **内容：** 截取当前可运行版本，清楚展示核心玩法与游戏界面；可以裁剪、缩放和压缩，保持画面内容真实、文字可读。 / **Content:** Capture the current playable version and show its core gameplay and interface. Cropping, resizing, and compression are fine; keep the content accurate and text readable.
- **格式：** 使用 PNG、JPEG 或 WebP，单张小于 4 MB，建议压缩到 1 MB 左右。横屏建议宽度至少 1280 px；竖屏游戏保留原始比例。 / **Format:** Use PNG, JPEG, or WebP, under 4 MB per image, preferably around 1 MB. A width of at least 1280 px is recommended for landscape games; keep portrait games in their native aspect ratio.
- **保存：** 可随 PR 放入 `assets/screenshots/<game-slug>/gameplay.png`，或使用稳定、免登录的 HTTPS 原图链接。提交他人的作品时注明截图来源并尊重原作者的素材许可。 / **Storage:** Commit the image under `assets/screenshots/<game-slug>/gameplay.png`, or use a stable, publicly accessible HTTPS image URL. When recommending someone else's work, credit the screenshot source and respect the creator's asset license.
- **展示：** 在作品的缩进元信息中使用上面的 `预览：![说明](图片地址)` 或 `Preview: ![description](image-url)` 格式，首张图片作为官网封面。仅在 PR 描述中上传图片，官网不会自动读取；请把实际图片地址同步到 README 条目。 / **Display:** Use the indented `Preview: ![description](image-url)` format shown above. The first image becomes the gallery cover. Images attached only to the PR description are not read by the gallery; also add the image URL to the README entry.
- **核对：** 确认 README 中图片能显示，公开图片链接无需登录即可打开；PR 描述中再次展示该图，并注明拍摄版本或日期。Issue 可直接拖拽图片到截图输入框。 / **Check:** Confirm the image renders in the README and its public URL works without login. Show it again in the PR description with its capture version or date. For issues, drag the image into the screenshot field.

## 维护与修正 · Maintenance

发现失效链接或信息错误，请填写[问题反馈](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml)，也可以直接提交修正。请优先使用作者维护的入口，避免未经授权的镜像。

Use the [report form](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml) for broken links or incorrect details, or submit a fix directly. Prefer creator-maintained links over unauthorized mirrors.

提交原创清单文字或仓库素材，表示你同意将这部分贡献按 [CC0 1.0](LICENSE) 提供。请自己撰写简介，不要复制他人的长篇介绍。被推荐的游戏及第三方内容继续适用它们自己的许可。

By contributing original list text or repository artwork, you agree to dedicate that contribution under [CC0 1.0](LICENSE). Write your own descriptions instead of copying long passages. Listed games and third-party materials keep their own licenses.
