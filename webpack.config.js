module.exports = {
    entry: './scripts/testComponent.jsx',
    output: {
        filename: './build/main.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}