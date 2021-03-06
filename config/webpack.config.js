const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var loaders = require('./webpack.loaders');

const PORT = process.env.PORT || "8999";

loaders.push({
    test: /\.scss$/,
    loader: ['style-loader', 'css-loader', 'sass-loader']
});

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        // 自动扩展文件后缀，require时可以不写后缀
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: loaders
    },
    devtool: '#source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        noInfo: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/vendor.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
            chunks: ['app']
        })
    ]
}