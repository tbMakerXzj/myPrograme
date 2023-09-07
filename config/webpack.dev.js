const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8080,
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true,
    historyApiFallback: true, // 解决history路由404问题
    open: true,
    static: {
      directory: path.join(__dirname, '../public') //托管静态资源public文件夹
    }
  }
});
