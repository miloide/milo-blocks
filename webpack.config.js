// patch 'fs' to fix EMFILE errors, for example on WSL
var realFs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);

var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = [{
  entry: {
    blockly: './shim/blockly.js'
  },
  output: {
    library: 'MiloBlocks',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}, {
  entry: {
    blockly: './shim/blockly.js'
  },
  output: {
    library: 'Blockly',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist', 'web'),
    filename: '[name].js'
  }
}];
