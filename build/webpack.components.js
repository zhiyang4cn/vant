var Components = require('../components.json');
var config = require('./webpack.config.js');

delete config.devtool;

config.entry = Components;

config.output = {
  path: './lib',
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = config;