const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.base')

module.exports = (env) => {
  return merge(common(), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false
        },
        sourceMap: true,
        extractComments: true
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          },
          safe: true
        },
        canPrint: false
      }),
      new FaviconsWebpackPlugin({logo: './favicon.png', inject: true})
    ]
  })
}
