const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** 基础路径 * */
const basePath = path.join(__dirname, '../../')

/** 源码路径 * */
const srcPath = path.join(basePath, 'src') // 源码目录,该目录根路径下至少需要包含 index.html 与 index.js 两个文件

/** 页面生成配置 * */
const indexHtml = new HtmlWebpackPlugin({
  title: 'NOT ONLY ONE',
  description: '',
  filename: 'index.html',
  template: path.join(srcPath, 'index.html'),
  inject: true,
  hash: false
})

module.exports = {
  entry: {
    index: [path.join(srcPath, 'index.js')]
  },
  output: {
    path: path.join(basePath, '../dist'),
    filename: '[name]-[chunkhash].js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: [srcPath]
    }]
  },
  plugins: [
    indexHtml
  ]
}
