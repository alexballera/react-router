const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack-base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  return merge(base(), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new CleanWebpackPlugin('public'),
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
      new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
      new webpack.optimize.AggressiveMergingPlugin(),
      new FaviconsWebpackPlugin({logo: './favicon.png', inject: true}),
      new ImageminWebpackPlugin({
        test: 'images/**',
        optipng: {
          optimizationLevel: 9
        },
        pngquant: {
          quality: '95-100'
        },
        jpegtran: {
          progressive: false
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false
        },
        sourceMap: true,
        extractComments: true
      }),
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
      new HtmlWebpackPlugin({
        title: 'Practica React Webpack',
        filename: './index.html',
        inject: true | 'head' | 'body',
        template: './src/index.ejs',
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true,
          removeScriptTypeAttributes: true
        }
      }),
      new CopyWebpackPlugin([
        {from: 'src/sendMail.php'}
      ])
    ]
  })
}
