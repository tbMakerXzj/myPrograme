const { merge } = require('webpack-merge')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const globAll = require('glob-all')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const baseConfig = require('./webpack.common.js')
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({ // 复制静态资源
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist'),
                    filter: source => {
                        return !source.includes('index.html')
                    }
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]·[contenthash:8].css'
        }),
        // 清除没用的css
        new PurgeCSSPlugin({
            paths: globAll.sync([
                `${path.join(__dirname, '../src')}/**/*.tsx`,
                path.join(__dirname, '../public/index.html')
            ])
        }),
        new CompressionPlugin({
            test: /.(js|css)$/, // 只生成css,js压缩文件
            filename: '[path][base].gz', // 文件命名
            algorithm: 'gzip', // 压缩格式,默认是gzip
            threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
            minRatio: 0.8 // 压缩率,默认值是 0.8
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // 压缩css
            new TerserPlugin({ // 压缩js
                parallel: true, // 并行
                // extractComments: false, // 删除注释
                terserOptions: {
                    compress: {
                        // drop_console: true, // 删除日志
                        pure_funcs: ["console.log"] // 删除日志
                    }
                }
            }),
        ],
        // 代码分割
        splitChunks: {
            cacheGroups: {
                vendors: { // 提取node_modules代码
                    test: /node_modules/, // 只匹配node_modules里面的模块
                    name: 'vendors', // 提取文件命名为vendors,js后缀和chunkhash会自动加
                    minChunks: 1, // 只要使用一次就提取出来
                    chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                    priority: 1, // 提取优先级为1
                },
                commons: { // 提取页面公共代码
                    name: 'commons', // 提取文件命名为commons
                    minChunks: 2, // 只要使用两次就提取出来
                    chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                }
            }
        }
    }
})