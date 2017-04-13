var path=require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: path.join(__dirname, "app", "main.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "sass-loader?modules"
                })
            },
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules"
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules"
                })
            }
        ]
    },

    resolve:{
     extensions: [".js", ".json",".jsx"]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright By TWL Matthew."),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"app","index.tmpl.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].[hash].css"),
        new OpenBrowserPlugin({url: 'http://localhost:8080/'}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "public"),//本地服务器所加载的页面所在的目录
        inline: true,
        hot:true,
        historyApiFallback: true
    }
};