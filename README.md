# UX 信箱

把 Gmail 中的 UX Bites 邮件整理为自然、易读的中文产品体验案例。

## 内容结构

- `index.html`：静态阅读页
- `styles.css`：响应式视觉样式与本地中文展示字体
- `app.js`：阅读进度、图片放大与内容显现
- `content/index.json`：期刊索引，自动更新时用来判断是否已有新一期
- `content/ux-bites-*.json`：每一期的结构化中文内容
- `assets/ux-bites-*/`：存入仓库的案例图片
- `assets/fonts/`：随站点托管的得意黑字体及 SIL OFL 授权

## 发布

站点为纯静态文件，可直接由 GitHub Pages 从默认分支根目录发布。

## 内容边界

本站只整理邮件收件人原本可见的内容，不绕过 BFM+ 或其他付费限制。内容与案例图片来源于 [Built for Mars](https://builtformars.com/)，版权归原作者及相关权利人所有。
