const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    },
    plugins : [new CleanWebpackPlugin()],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
})