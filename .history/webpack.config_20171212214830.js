const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = env => {
  return {
    entry: './aniston/macro.js',
    output: {
      filename: 'bundle.js',
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
          from: 'aniston/macro.js',
        },
      ]),
    ],
  }
};

module.exports = config;
