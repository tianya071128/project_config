const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV); // 是否为生产环境
const IS_TEST = !!process.env.VUE_APP_IS_TEST; // 是否为测试环境
const vConsolePlugin = require('vconsole-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  lintOnSave: 'warning', // 将 lint 错误输出为编译警告, 不会使得编译失败
  productionSourceMap: IS_TEST, // 生产环境的 source map -- 只在测试环境下使用，用于测试环境排除问题
  css: {
    loaderOptions: {
      // 给 sass-loader 传递参数
      sass: {
        // 为每一个 Sass 文件(包括单文件组件)注入一个全局 Sass 文件 -- 这个文件中应该只包含变量、Mixins、函数
        additionalData: `@import "~@/assets/scss/variables.scss";`,
      },
    },
  },
  configureWebpack: (config) => {
    const plugins = [];

    // 线上环境下去除 console.log 信息
    if (IS_PROD && !IS_TEST) {
      plugins.push(
        new TerserPlugin({
          // 传递给 Terser 压缩器的参数 -- https://github.com/terser/terser
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            // 压缩选项
            compress: {
              // 删除 console.* 函数的调用。
              drop_console: true,
              // 删除 debugger 语句
              drop_debugger: true,
              pure_funcs: ['console.log'], // 移除 console
            },
          },
        })
      );
    }

    // 测试环境
    if (IS_TEST) {
      plugins.push(
        new vConsolePlugin({
          enable: true, // 只在测试环境下才需要模拟控制台
        })
      );
    }

    config.plugins = [...config.plugins, ...plugins];
  },
};
