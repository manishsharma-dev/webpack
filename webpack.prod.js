const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new miniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify : {
                removeAttributeQuotes: true,
                collapseWhitespace : true,
                removeComments : true,
            }
        })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, // Step 3 : Extract css into files
                    "css-loader",    // Step 2: Turns css into commonjs
                    'sass-loader'  // Step 1: Turns sass to css
                ],
            }
        ]
    }
})