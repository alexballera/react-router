const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'public')

module.exports = () => {
  return {
    entry: APP_DIR + '/index.jsx',

    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
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
            error: true,
            snazzy: true,
            parser: 'babel-eslint'
          }
        },

        // Javascript
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

        // Estilos
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

        // Fonts
        { test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name]/[name].[ext]'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin('public'),
      new HtmlWebpackPlugin({
        title: 'Practica React Webpack',
        filename: './index.html',
        template: './src/index.ejs',
        inject: true | 'head' | 'body',
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true,
          removeScriptTypeAttributes: true
        }
      }),
      new ExtractTextPlugin('style.css'),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
