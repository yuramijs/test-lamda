var path = require('path');

module.exports = {
   entry: './adnami/run.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve('/tmp/')
   }
};

