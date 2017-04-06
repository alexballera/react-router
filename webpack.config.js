'use strict'
require('webpack')

function buildConfig (env) {
  return require('./webpack.config.' + env + '.js')(env)
}

module.exports = buildConfig
