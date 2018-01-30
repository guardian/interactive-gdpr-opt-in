const path = require('path');

module.exports = {
  entry: path.resolve(path.join(__dirname, 'js', 'main.js')),
  output: {
    path: path.resolve(path.join(__dirname, 'public')),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
