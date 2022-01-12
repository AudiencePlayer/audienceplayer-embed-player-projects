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
                context: "node_modules/embed-player/src"
            }],
            // for backward compatibility, copy the .js and .css
            patterns: [{
                from: path.resolve(__dirname, 'node_modules/embed-player/src/*.js'),
                context: "node_modules/embed-player/src"
            }],
            patterns: [{
                from: path.resolve(__dirname, 'node_modules/embed-player/src/*.css'),
                context: "node_modules/embed-player/src"
            }],
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
