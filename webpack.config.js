const merge = require('webpack-merge')

const common = require('./webpack/webpack.common')

module.exports = function () {
  const TARGET = process.env.npm_lifecycle_event
  let config = {}

  switch (TARGET) {
    case 'build':
      config = merge(common, require('./webpack/webpack.production'))
      break
    case 'start':
      config = merge(common, require('./webpack/webpack.development'))
      break
  }

  return config
}
