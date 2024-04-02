const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
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
}