const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(path.join(__dirname, 'js', 'main.js')),
	output: {
		path: path.resolve(path.join(__dirname, 'public')),
		filename: 'main.js'
	},
	devtool: "source-map",
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			compress: {
				drop_debugger: false
			}
		})
	],
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
