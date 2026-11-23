# UX 信箱

把 Gmail 中的 UX Bites 与 Nielsen Norman Group 邮件整理为自然、易读的中文 UX 阅读流。

- UX Bites：真实产品交互案例
- Nielsen Norman Group：可复用的 UX 方法与原则

## 内容结构

- `index.html`：静态阅读页
- `styles.css`：响应式视觉样式与本地中文展示字体
- `app.js`：阅读进度、图片放大与内容显现
- `content/index.json`：两个来源的最新邮件索引，自动更新时用来判断是否出现新内容
- `content/ux-bites-*.json`：UX Bites 每一期的结构化中文内容
- `content/nng-*.json`：Nielsen Norman Group 方法内容
- `assets/favicon.png`：浏览器页签使用的本地 UX 图标
- `assets/ux-bites-*/`：存入仓库的案例图片
- `assets/fonts/`：随站点托管的得意黑字体及 SIL OFL 授权

## 发布

站点为纯静态文件，可直接由 GitHub Pages 从默认分支根目录发布。

### 每周更新的展示约定

以已确认的紧凑版设计和仓库当前模板为准。更新时只替换当周展示内容与资产，保留 `body.compact-edition`、当前 `styles.css` 版本引用和卡片结构，不恢复旧版概览、元信息、分隔线或装饰页尾。

- UX Bites 按「标题、摘要、可点击原图、设计启发、原文」排列；保留案例 ID、原图替代文本和来源链接。缺任一可公开使用的同案例原图时暂缓该期。
- NN/g 保留 `#nng` 锚点，方法卡按「序号、标题、摘要、启发、可展开的原文总结」排列；折叠时保留章节和原文链接在卡片内。
- 无新内容的来源整段不显示。同一周重跑只追加新且未重复的条目，不用往期填充。


## 内容边界

本站只整理邮件收件人原本可见的内容，不绕过 BFM+ 或其他付费限制。内容来源于 UX Bites 与 Nielsen Norman Group；案例图片来源于 [Built for Mars](https://builtformars.com/)。版权归原作者及相关权利人所有。

NN/g 方法条目提供章节化中文摘要与官方原文入口，摘要用于快速理解，不替代原文。
