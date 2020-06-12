const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const basePath = path.resolve(__dirname, 'src');

// Load environment variables
const result = require('dotenv').config({
  path: `.env.${process.env.APP_ENV}`,
});
if (result.error) {
  throw result.error;
}

module.exports = {
  entry: {
    // Chunk shared
    shared: path.resolve(basePath, 'assets/scripts/index.ts'),
    // Chunk(s) belonging to each page
    doughnut: path.resolve(basePath, 'doughnut/index.ts'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '~': basePath,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
    }),
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
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
