let config = require('./webpack.dev');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

config.mode = 'production';
config.plugins.push(new OptimizeCssAssetsPlugin());

module.exports = config;