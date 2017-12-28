const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var loaders = require('./webpack.loaders');

loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader', 
        use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'
    })
});

module.exports = {
    entry: [
        './src/index.jsx',
        './src/styles/index.scss'
    ],
    output: {
        publicPath: './',
        path: path.join(__dirname, '../dist'),
        filename: '[chunkhash].js'
    },
    resolve: {
        // 自动扩展文件后缀，require时可以不写后缀
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: 'style.[contenthash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ],
    devtool: false
}