var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  entry: './src/loading-easy.js',
  output: {
    path: './',
    filename: 'loading-easy.js'
  },
  devServer: {
    inline: true,
    port: 1111
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0"]
        }
      }
    ]
  }
}
