
var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./main.js",
        vendors: ["./vendors.js"]
    },
    output: {
        path: "assets",
        publicPath: "assets",
        filename: "bundle.js?[hash]"
    },
    //devtool: "source-map",
    module: {
        loaders: [
            { test: /\.less$/,                       loader: "style!css!less!" },
            { test: /bootstrap\/dist\/js\//,         loader: "imports?jQuery=jquery" },
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
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'imports']
            },
            compress: {
                warnings: false
            }
        })
    ],
    externals: {
        jQuery: true,
        angular: true
    }
};