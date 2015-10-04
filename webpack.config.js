var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./main.js",
        vendors: ["angular", "jquery", "bootstrap"]
    },
    output: {
        path: "assets",
        publicPath: "assets",
        filename: "bundle.js?[hash]"
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.(scss|sass)$/,                loader: "style!css!autoprefixer!sass!" },
            { test: /\.jsx?/,                        loader: "babel", exclude: /(node_modules|bower_components)/ },
            { test: /\.less$/,                       loader: "style!css!autoprefixer!less!" },
            { test: /\.(woff|woff2)?$/,              loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
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
        })
    ]
};

