var path = require('path');

module.exports = {
   entry: './adnami/run.js',
   output: {
      filename: 'bundler.js',
      path: path.resolve('/tmp/')
   }
};

