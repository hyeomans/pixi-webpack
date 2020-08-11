module.exports = () => ({
  devtool: 'inline-source-map',
  output: {
    filename: 'index.dev.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [],
  devServer: {
    open: true,
  }
})
