var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //정규표현식, js파일을 찾는다.
                loader: 'babel-loader', //js파일 찾으면 이 로더 사용
                options: { //babel의 preset지정 등 옵션
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
   }
}