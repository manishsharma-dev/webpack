const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
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
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            }
        ]
    }
}