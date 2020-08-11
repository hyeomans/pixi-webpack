const path = require('path')
const webpack = require('webpack')
const { default: merge } = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const modeConfig = env => require(`./webpack/webpack.${env.mode}`)(env)

module.exports = (
  { mode } = { mode: 'development' }
) => {
  return merge({
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      modules: ['node_modules', 'src']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      })
    ]
  },
  modeConfig({ mode })
  )
}