var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    entry: './compile.js',
  },
  output: {
    filename: 'bundler.js',
    path: path.resolve('/tmp/')
  },
  resolve: {
    modules: ['node_modules', 'modules']
  },
  resolveLoader: {
    alias: {
      'css-js-rules-loader': path.join(__dirname, 'modules/css-js-rules-loader'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['css-js-rules-loader'],
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        context: 'src/publishers',
        from: '*/index.html',
      },
    ]),
  ],
};

module.exports = config;
