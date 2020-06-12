const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: buildPath,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
});
