const path = require('path');

const isEnvProduction = process.env.NODE_ENV === "production";
const imageInlineSizeLimit = 8 * 1024;

const aliasPath = require('../tsconfig.json').compilerOptions.paths;

module.exports = {
    entry: {
        app: path.join(__dirname, '../src/index.tsx')
    },
    mode:'development',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'chunk/[name].[chunkhash].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    isEnvProduction ? 'style-loader' : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',

                ]
            },
            {
                test: /\.less$/,
                use: [
                    isEnvProduction ? 'style-loader' : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: false,
                        }
                    }
                ]
            },
            {
                test: /\.scss|sass$/,
                use: [
                    isEnvProduction ? 'style-loader' : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ]

            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: imageInlineSizeLimit,
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: "asset/resource",
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: Object.keys(aliasPath).reduce((alias, key) => {
            alias[key] = path.resolve(aliasPath[key][0]) + '';
            return alias;
        }, {})
    },

    plugins: [],

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
    },
}