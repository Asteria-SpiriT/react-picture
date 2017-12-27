module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets:  ['env', 'react']
                }
            }
        ]
    },
    {
        test: /\.css$/,
        exclude: ['node_modules'],
        loaders: ['style-loader', 'css-loader?importLoaders=1']
    }
]