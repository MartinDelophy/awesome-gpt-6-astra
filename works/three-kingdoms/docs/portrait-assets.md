# 百将风云 · 头像资产

本版包含108位武将，魏、蜀、吴各36位，每人对应独立头像格。图集由内置 ImageGen 工具生成，未使用《三国志11》的原版人物素材。

## 图集

- 魏：[wei-v2.jpg](../public/portraits/wei-v2.jpg)
- 蜀：[shu-v2.jpg](../public/portraits/shu-v2.jpg)
- 吴：[wu-v2.jpg](../public/portraits/wu-v2.jpg)

每张图集1254×1254，共6列6行。蜀国图集行高略有差异，`game/Portrait.tsx`按实际行边界定位，避免头像跨行。网页通过背景定位显示头像；原图未做内容重绘。

## 完整生成提示词

采用内置 ImageGen，共3次生成，各阵营1次，没有使用外部 API 或 CLI 生图。

- [魏国完整提示词](portrait-prompts/wei-prompt.txt)
- [蜀国完整提示词](portrait-prompts/shu-prompt.txt)
- [吴国完整提示词](portrait-prompts/wu-prompt.txt)

总体方向：原创中国三国人物胸像，写实油画与水墨融合，深色背景，汉代风格甲胄和衣冠，统一侧光，不含文字、边框或商标。每组提示词指定36名角色的逐行顺序。
