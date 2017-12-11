const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports.config = env => {
  console.log('Production: ', env.val)
  return {
    entry: {
      entry: `./src/publishers/${env.val}.dk/macro.js`,
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
  }
};

module.exports = config;
