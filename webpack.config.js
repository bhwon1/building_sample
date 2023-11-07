const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm start 기본 세팅

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'public', 'guide.html')
    })
  ],
  devServer: {
    static: path.join(__dirname, 'src'), // static 으로 설정해야함.
    port: 8080,
  },
}