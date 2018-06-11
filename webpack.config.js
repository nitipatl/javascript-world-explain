const path = require('path');

module.exports = {
  entry: './node.index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};