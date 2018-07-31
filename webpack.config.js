const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: "./dist/"
    },
    entry: ['babel-polyfill','./src/js/app.js'],
    output: {
       path: path.join(__dirname, '/dist'),
       filename: 'build.js'
    },
    optimization: {
		//  don't minimize our code
		minimize: true
    },
    devtool: '#eval-source-map',
    // devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}