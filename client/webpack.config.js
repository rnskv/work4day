const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index_bundle.js',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['reshadow/webpack/loader', 'babel-loader'],
      },
    ],
  },
  plugins: [
    new PrettierPlugin(),
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, '/src/index.html'),
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
      ]
    },
    port: 9000,
  },
};
