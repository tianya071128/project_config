module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  // 使用 eslint-plugin-vue 中 essential 配置 and eslint 默认 recommended 配置
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    // 解析器选项 - 这是自定义选项，最终会传递给 vue-eslint-parser 解析器使用
    parser: 'babel-eslint',
  },
  rules: {},
};
