module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.css$/,
        exclude: ['node_modules'],
        loaders: ['style-loader', 'css-loader?importLoaders=1']
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader"
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?prefix=font/&limit=5000"
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?limit=10000&mimetype=application/octet-stream"
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?limit=10000&mimetype=image/svg+xml"
    },
    {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?limit=10000&mimetype=image/gif"
    },
    {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?limit=10000&mimetype=image/jpg"
    },
    {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader?limit=10000&mimetype=image/png"
    }
]