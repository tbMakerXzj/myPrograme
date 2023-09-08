const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isEnvProduction = process.env.NODE_ENV === 'production';
const imageInlineSizeLimit = 8 * 1024;

const aliasPath = require('../tsconfig.json').compilerOptions.paths;
const getStyleLoader = isEnvProduction ? 'style-loader' : 'style-loader';

module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        // chunkFilename: 'chunk/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env',
                                    // {
                                    //     "useBuiltIns": "usage",
                                    //     "corejs": 3,
                                    // }
                                ],
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /\.module\.css$/,
                use: [
                    getStyleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.module\.css$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    getStyleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:8]'
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /\.module\.less$/,
                use: [
                    getStyleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.module\.less$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    getStyleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:8]'
                            }
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss|sass$/,
                use: [
                    getStyleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: imageInlineSizeLimit
                    }
                },
                generator: {
                    filename: 'images/[name]·[contenthash:8][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: imageInlineSizeLimit, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'fonts/[name]·[contenthash:8][ext]', // 文件输出目录和命名
                },
            },
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: imageInlineSizeLimit, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'media/[name]·[contenthash:8][ext]', // 文件输出目录和命名
                },
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // alias: Object.keys(aliasPath).reduce((alias, key) => {
        //     alias[key] = path.resolve(aliasPath[key][0]) + '';
        //     return alias;
        // }, {})
        alias: {
            react: require.resolve('react'),
            '@': path.resolve(__dirname, '../src')
        },
        modules: [path.resolve(__dirname, '../node_modules')]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true
        }),
        new webpack.DefinePlugin({
            "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
        })
    ],
    cache: {
        type: 'filesystem', // 文件缓存
    }
    // devServer: {
    //     static: path.resolve(__dirname, '../dist'),
    //     port: 8080,
    //     open: true,
    //     historyApiFallback: true,
    // },
};
