const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const basePath = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    // Chunk shared
    shared: path.resolve(basePath, 'assets/scripts/index.js'),
    // Chunks belonging to each page
    doughnut: path.resolve(basePath, 'doughnut/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(basePath, 'index.html'),
      chunks: ['shared'],
      filename: 'index.html',
      base: '/',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(basePath, 'doughnut/index.html'),
      chunks: ['shared', 'doughnut'],
      filename: 'doughnut/index.html',
      base: '/',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(basePath, 'static/favicon.ico'),
          to: 'favicon.ico',
        },
        {
          from: path.resolve(basePath, 'static/images'),
          to: 'images',
        },
      ],
    }),
  ],
};
