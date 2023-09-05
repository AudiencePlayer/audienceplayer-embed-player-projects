const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    entry: './src/video-player.js',
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
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'node_modules/audienceplayer-embed-player/dist/video.js'),
                context: path.resolve(__dirname, 'node_modules/audienceplayer-embed-player/dist')
            },
            {
                from: path.resolve(__dirname, 'node_modules/audienceplayer-embed-player/dist/style.css'),
                context: path.resolve(__dirname, 'node_modules/audienceplayer-embed-player/dist')
            },
            ],
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['main']
        }),
        new CleanWebpackPlugin(),
    ]
};

module.exports = config;
