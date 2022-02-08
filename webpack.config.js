const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    entry: {
        main: './src/main/video-player.js',
        demo: './src/demo/chromecast-player.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'node_modules/embed-player/src/azure-media-player-2.3.4/**/*'),
                context: path.resolve(__dirname, 'node_modules/embed-player/src')
            },
            // for backward compatibility, copy the .js and .css
            {
                from: path.resolve(__dirname, 'node_modules/embed-player/src/*.js'),
                context: path.resolve(__dirname, 'node_modules/embed-player/src')
            },
            {
                from: path.resolve(__dirname, 'node_modules/embed-player/src/*.css'),
                context: path.resolve(__dirname, 'node_modules/embed-player/src')
            },
            // for backward compatibility, copy azure-media-player-2.3.4/ to azure-media-player/
            {
                from: path.resolve(__dirname, 'node_modules/embed-player/src/azure-media-player-2.3.4/**/*'),
                to: path.resolve(__dirname, 'dist/azure-media-player'),
                context: path.resolve(__dirname, 'node_modules/embed-player/src/azure-media-player-2.3.4/')
            }
            ],
        }),
        new HtmlWebpackPlugin({
            template: 'src/main/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: 'src/demo/index.html',
            chunks: ['demo'],
            filename: 'demo/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
};

module.exports = config;
