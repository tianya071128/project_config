# vue3_monorepo

Vue3 + Vite + pnpm + monorepo

## 包管理

使用 pnpm workspace 管理, 安装包时使用 [`catalog:`](https://pnpm.io/zh/catalogs)

1. 安装顶层包: `pnpm add <package> --save-catalog -w`
2. 安装子包: `pnpm add <package> --save-catalog -w --filter <package>`

## typescript

统一在 `packages/config/tsconfig/` 中配置, 其他子包通过 `extends` 继承
