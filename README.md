# vue3_monorepo

Vue3 + Vite + pnpm + monorepo

## 包管理

使用 pnpm workspace 管理, 安装包时使用 [`catalog:`](https://pnpm.io/zh/catalogs)

1. 安装顶层包: `pnpm add <package> --save-catalog -w`
2. 安装子包: `pnpm add <package> --save-catalog -w --filter <package>`
3. 升级包: `pnpm update <package> [-r]` --> -r 升级全部子包

## typescript

统一在 `packages/config/tsconfig/` 中配置, 其他子包通过 `extends` 继承

## Formatter

- 格式器使用 [`oxfmt`](https://oxc.rs/docs/guide/usage/formatter.html), vscode 需要安装对应插件 `Oxc`
- 统一在根目录中配置 `.oxfmt.json`, 全局唯一
- 使用 `.vscode/settings.json` 的配置来规范编辑器的行为
  - 配置默认格式化器为 `oxc.oxc-vscode`
- 升级:
  - 升级根目录上的 `oxfmt` 的包
  - 其他需要修改的配置, 直接更改对应的配置文件即可

## Linter

- 检查器使用 [`oxlint`](https://oxc.rs/docs/guide/usage/linter.html), vscode 需要安装对应插件 `Oxc`
- 统一在根目录中配置 `.oxlint.json`, 全局唯一
- 升级:
  - 升级根目录上的 `oxlint` 的包
  - 其他需要修改的配置, 直接更改对应的配置文件即可

## 浏览器兼容性

- `vite` 只支持语法转译, 不包含 `polyfill`
- 需要 `polyfill` 的话
  - 使用[在线自动生成](https://cdnjs.cloudflare.com/polyfill/)
  - 使用 `@vitejs/plugin-legacy` 注入需要的 `polyfill`, 但是底层还是使用 `babel`. 而 `vite` 底层使用 `OXC` 的转换器, 说不定未来会内置支持
