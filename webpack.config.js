const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'public')

const developmentConfig = () => {
  const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'standard-loader',
          exclude: /node_modules/,
          options: {
          // Emit errors instead of warnings (default = false)
            error: true,
          // enable snazzy output (default = true)
            snazzy: true,
          // other config options to be passed through to standard e.g.
            parser: 'babel-eslint'
          }
        },
        {
          test: /\.jsx?/,
          include: APP_DIR,
          exclude: /node_modules/,
          loader: [
            'react-hot-loader',
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            filename: 'style.css',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: 'inline'
                }
              },
              {
                loader: 'sass-loader'
              }
            ],
            allChunks: true
          })
        },
        // Imagenes
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        },
        // Font Definitions
        { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
        { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
        { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
        { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
      ]
    },
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
      new CleanWebpackPlugin('public'),
      new HtmlWebpackPlugin({
        title: 'Practica React Webpack',
        filename: './index.html',
        inject: true | 'head' | 'body',
        showErrors: true,
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true,
          removeScriptTypeAttributes: true
        }
      }),
      new ExtractTextPlugin('style.css'),
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
      new FaviconsWebpackPlugin({logo: './favicon.png', inject: true})
    ]
  }
  return Object.assign(
    {},
    config
  )
}

module.exports = (env) => {
  return developmentConfig()
}
