# 需求与提示词 / Requests and prompts

以下按顺序记录创作者的实际需求，保留中文原文，并附英文释义。它们是多次迭代的输入，不是一次性生成的完整提示词。

The following are the creator's actual requests in order, with English translations. These guided several iterations; they are not a single generation prompt.

1. **初始目标 / Initial goal**

   > 帮我在桌面做一款三国志11的游戏看看，最好可以在网页上跑的那种

   “Make me a Romance of the Three Kingdoms XI-style game, ideally one that runs in a browser.”

2. **网页与扩充 / Browser delivery and expansion**

   > 不用桌面，网页可以打开就好，部署到netlify,不过武将得多一些

   “No desktop version is needed; a webpage is enough. Deploy it to Netlify, and include more officers.”

3. **头像、人数与数值 / Portraits, roster and balance**

   > 再生成一些武将的头像吧，我觉得这种也很有必要，还有武将太少了，至少得100个，还有数值得平衡一下

   “Generate more officer portraits; they are necessary. There are too few officers—include at least 100—and balance the numbers.”

4. **最终托管平台 / Final hosting platform**

   > 这个处理好之后部署到vercel吧

   “Deploy it to Vercel once this is finished.”

5. **本仓库提交 / Collection submission**

   > 完美，遵循仓库规范提交到 https://github.com/MartinDelophy/awesome-gpt-6-astra，注意多语言

   “Submit it to this repository following its rules, and pay attention to multilingual support.” The collection entries are translated into all 12 existing README languages; the game UI remains Simplified Chinese.

## 实现选择 / Implementation choices

The implementation is an original simplified Three Kingdoms strategy prototype, using custom rules and generated artwork. It does not package or reproduce the commercial game's original assets or code. The delivered scenario has 15 cities, three playable factions and 108 officers; it gathers characters from different periods rather than reproducing a historical roster for one year.

## 图像提示词 / Image prompts

The current portrait release uses one 6 × 6 sheet per faction:

- [Wei / 魏: complete prompt](docs/portrait-prompts/wei-prompt.txt)
- [Shu / 蜀: complete prompt](docs/portrait-prompts/shu-prompt.txt)
- [Wu / 吴: complete prompt](docs/portrait-prompts/wu-prompt.txt)

The terrain is a generated ink-and-paint landscape used beneath the interactive city and road layer. Its original full generation prompt is not included in this record. The three linked portrait prompts are the retained complete prompts for the current atlases.
