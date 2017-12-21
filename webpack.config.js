const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  entry: {
    filename: './source/app2.js',
  },
  output: {
    filename: './public/build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
          comments: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
  ],
};

module.exports = config;
