# Astra 社区作品集官网

展示 [awesome-gpt-6-astra](https://github.com/MartinDelophy/awesome-gpt-6-astra) 上游目录收录的所有作品，覆盖网站、应用、工具、游戏、交互实验等类型，支持分类、搜索和中英文切换。作品列表直接解析上游 `main` 分支的 README，不依赖当前 fork 手动同步，也没有固定作品数量限制。

## 自动更新

浏览器首次打开时读取 `/api/catalog`，页面可见期间每 5 分钟检查一次；重新聚焦或切回页面时，距离上次尝试超过 1 分钟也会检查。服务端按请求刷新上游，并缓存成功结果 5 分钟；CDN 只使用该缓存剩余的有效时间，避免重复延长缓存。

这是请求驱动的分钟级自动更新，并非即时推送或定时后台抓取。上游新增、修改、移除作品后，后续检查会自动反映到官网，无需编辑网站数据或重新部署；无人访问时不会持续抓取。

上游暂时不可用时，服务端保留最近成功的目录，冷启动可使用 `public/data/catalog-fallback.json` 快照。浏览器也会保存成功获取的目录，并在请求失败时保留内容或读取快照。页面会标记旧数据及上次成功检查时间；完全没有可用数据时展示重试入口。

## 作品预览

`/api/preview?id=...` 根据目录中的作品 ID 自动选择预览，依次尝试：

1. 上游目录中作者提供的图片。
2. 初始作品已验证的本地实拍截图。
3. 演示页面的 Open Graph / Twitter 图片。
4. GitHub 源码仓库的 Open Graph 卡片。
5. 显示作品名称和“暂无预览”占位，保留作品入口。

本地截图仅用于提升已有作品的展示效果，不控制作品收录；新增作品无需人工补图即可出现在目录中。截图为固定拍摄版本，新作者图片优先。成功预览缓存 24 小时，缺失预览缓存 15 分钟后允许重试。实现细节见 [预览说明](server/previews.README.md)。

## 本地开发

在仓库根目录执行：

```sh
cd website
npm install
npm run dev
```

开发服务同时提供页面与 API。验证和构建：

```sh
npm test
npm run build
```

`npm test` 验证目录解析、缓存与故障处理、预览获取；Vercel 静态产物位于 `dist/client`，API 入口位于 `api/`。开发数据来自公开上游，无需 GitHub Token 或截图服务密钥。

## Vercel 部署

使用独立项目，配置如下：

| 设置 | 值 |
| --- | --- |
| 项目 | `astragames` |
| Git 仓库 | `jackroc/awesome-gpt-6-astra` |
| Production Branch | `codex/astra-showcase` |
| Root Directory | `website` |
| Framework Preset | `Vite` |
| Build Command | `npm run build` |
| Output Directory | `dist/client` |
| 官网域名 | `astragames.aigccreative.com` |

`vercel.json` 已声明构建和 Node API 配置。连接 Git 后，生产分支的代码提交触发部署；作品数据更新由运行时 API 完成，不要求触发部署。

`aigccreative.com` 是现有雷达网站的域名，属于原 `aigc-creative` 项目，不应绑定到本官网项目。只在独立官网项目中绑定 `astragames.aigccreative.com`，并使用该项目域名设置页提供的 DNS 值。
