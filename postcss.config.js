'use strict'

module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-smart-import'),
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      }
    ]
  }
}
