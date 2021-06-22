
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.ts', //入口文件
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'), //制定文件输出路径
        filename: 'bundel.js', //打包后的文件名
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}

