require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.base')

module.exports = (env) => {
  return merge(common(), {
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
