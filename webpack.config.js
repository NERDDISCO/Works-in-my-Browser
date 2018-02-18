const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const ROOT = __dirname
const DOCS = path.resolve(ROOT, 'docs')

module.exports = {
  entry: {
    'bundle': './src/index.js'
  },
  output: {
    path: DOCS,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  devServer: {
    contentBase: DOCS,
    compress: false,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Works in my Browser',
      filename: 'index.html',
      template: 'src/index.html',
      alwaysWriteToDisk: true,
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        quoteCharacter: "\"",
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        sortAttributes: true,
        useShortDoctype: true

      }
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: DOCS
    })
  ]
}
