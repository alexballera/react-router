require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack-base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  return merge(base(), {
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      stats: 'errors-only',
      compress: true,
      inline: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Practica React Webpack',
        filename: './index.html',
        inject: true | 'head' | 'body'
      })
    ]
  })
}
