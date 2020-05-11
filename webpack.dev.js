const path = require('path');
const webpack = require('webpack');
const exec = require('child_process').exec;
module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, './'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};