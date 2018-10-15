const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.hbs')
    })
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      minSize: 1000
    },
    runtimeChunk: 'single'
  }
}
