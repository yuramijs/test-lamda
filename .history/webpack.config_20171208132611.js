var path = require('path');

module.exports = {
   entry: './compile.js',
   output: {
      filename: 'bundler.js',
      path: path.resolve('/tmp/')
   }
};

