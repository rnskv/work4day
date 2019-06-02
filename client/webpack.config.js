const path = require("path");
const reshadow = require("reshadow");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};