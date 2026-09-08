# 创作记录 / Creation record

- **作品 / Work:** 三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes, v0.2.0.
- **创作者 / Creator:** [MartinDelophy](https://github.com/MartinDelophy), project initiator and submitter.
- **公开试玩 / Demo:** https://sanguo-jiangshan.vercel.app
- **日期 / Date:** 2026-09-08.

## 作者确认 / Creator statement

提交时，创作者被询问是否确认本游戏在 GPT-6 Astra 模型下完成，并明确回答：**「确认，使用 GPT-6 Astra」**。本文件按创作者授权的仓库提交要求记录该声明；模型归因依据作者确认，不是独立的模型性能认证。

When preparing this submission, the creator was asked to confirm whether the game was developed using GPT-6 Astra and answered: **“Confirmed, GPT-6 Astra was used.”** This public record documents that confirmation for the creator-authorized submission. Attribution is creator-reported, not an independent model certification.

## 分工 / Contributions

| 参与方 / Contributor | 具体工作 / Role |
| --- | --- |
| MartinDelophy | 提出三国策略网页游戏目标，要求更多武将、至少 100 人、生成头像、调整数值，并选择 Vercel 与本仓库发布。 / Defined the game, requested more officers, at least 100 characters, generated portraits and balance changes, and selected Vercel and this repository for publication. |
| GPT-6 Astra in Codex | 通过多次迭代完成玩法设计、React/TypeScript 界面、地图与 108 武将数据、经济与战斗规则、AI、存档迁移、回归测试、部署配置和文档。 / Iteratively developed gameplay, the React/TypeScript interface, map and 108-officer data, economy and combat rules, AI, save migration, regression tests, deployment configuration and documentation. |
| Image-generation tool | 根据提示词生成水墨地形和魏、蜀、吴各 36 格头像图集。 / Generated the terrain illustration and three 36-cell portrait atlases from written prompts. |
| Auxiliary Codex agents and local tools | 分担规则建议、头像生成与有限的平衡模拟；主代理整合实现并验证。 / Assisted with rules advice, portrait generation and bounded balance simulations; the primary agent integrated and checked the implementation. |

头像和地形由单独的图像生成工具制作，不能把这些位图直接归为 GPT-6 Astra 自身的图像输出。素材在游戏中通过 CSS 图集定位显示，保留 [完整头像提示词](docs/portrait-assets.md)。

The bitmap artwork came from a separate image-generation tool; it is not presented as direct image output from GPT-6 Astra. The UI uses CSS atlas positioning, and the [full portrait prompts](docs/portrait-assets.md) are included.

## 迭代与验证 / Iteration and validation

初版网页在用户要求下扩展为 108 位武将、每人独立头像；随后调整三方开局资源和道路结构、统兵上限、智略收益、征兵士气、武将休整与 AI 情报公平。最终版本部署到 Vercel。

The initial browser game was expanded to 108 officers with individual portraits, then revised for symmetric starting resources and roads, troop limits, intelligence benefits, recruitment morale, officer recovery and fair AI information. The final version was deployed to Vercel.

This is an **iterative collaborative project**, not a one-shot result or a benchmark. The submission includes [the original user requests](PROMPTS.md), [validation notes](VALIDATION.md), and [bounded simulation results with limitations](docs/balance-v2.md). Finite simulations do not establish equal human-player win rates or guarantee a fixed campaign length.
