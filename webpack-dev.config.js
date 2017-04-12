require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack-base.config')

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
    }
  })
}
