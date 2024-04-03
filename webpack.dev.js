const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[ext]",
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", // Step 3 : Injects styles into dom
                    "css-loader",    // Step 2: Turns css into commonjs
                    'sass-loader'  // Step 1: Turns sass to css
                ],
            }
        ]
    }
})