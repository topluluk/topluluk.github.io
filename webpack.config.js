var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: "./main.js",
        vendors: ["angular", "jquery", "bootstrap"]
    },
    output: {
        path: "assets",
        publicPath: "/assets/",
        filename: "bundle.js?[hash]"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.s[ca]ss(\?.*$|$)/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
            },
            {
                test: /\.jsx?/,
                loader: "babel", exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less!"
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".json", ".coffee"],
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: "vendors.js",
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("bundle.css")
    ]
};

