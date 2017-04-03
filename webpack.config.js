var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var APP_DIR = path.resolve(__dirname, 'src')
var BUILD_DIR = path.resolve(__dirname, 'public')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          filename: 'public/style.css',
          use: ['css-loader', 'sass-loader'],
          allChunks: true
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css')
  ]
}
module.exports = config
