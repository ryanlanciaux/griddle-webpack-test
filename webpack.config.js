var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './scripts/testComponent.jsx',
  output: {
      filename: './build/main.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "react": __dirname + '/node_modules/react',
      "react/addons": __dirname + '/node_modules/react/addons'
    }
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel?{"plugins":["babel-plugin-object-assign"]}'], exclude: /node_modules/ }
    ]
  }
};
