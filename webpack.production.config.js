var path=require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "app", "main.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].[hash].js"
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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

    plugins: [
        new webpack.BannerPlugin("Copyright By TWL Matthew."),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"app","index.tmpl.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new CleanWebpackPlugin(["public"])
    ]

};