const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports ={

    entry : {
        app: './src/index.js',
        print: './src/print.js',
    },

    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    },

    devtool:'inline-source-map',

    devServer :{
        contentBase : './dist',
    },

    plugins:[
        new HtmlWebpackPlugin({
            title : 'output managment',
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets : false,
        }),
    ],

    resolve :{
        alias:{
            Components : path.resolve(__dirname,'public/components')
        },
    },

    module:{
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(png|jpg|svg|gif)$/,
                use:[
                    'file-loader'
                ],
            },
            {
                test : /\.(woff|woff2|eot|ttf|otf)$/,
                use :[
                    'file-loader'
                ],
            },
        ],
    },
};