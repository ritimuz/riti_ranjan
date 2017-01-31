var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/rxjs'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'rxjs.bundle.js'
  },
  module: {
    loaders: [{
      exclude: '/node_module',
      include: path.resolve(__dirname, 'src'),
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
