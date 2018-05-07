const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: "./src/"
    },
    entry: './src/app.js',
    output: {
       path: path.join(__dirname, '/dist'),
       filename: 'build.js'
    },
    optimization: {
		//  don't minimize our code
		minimize: false
    },
    devtool: '#eval-source-map',
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
            template: './src/index.html'
        })
    ]
}