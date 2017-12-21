/**
 * Webpack solve error with uglifyjs pluging.
 * Install: `$npm i -D uglifyjs-webpack-plugin`
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: { warnings: false },
        output: { comments: false },
        sourceMap: true,
      },
    }),
  ],
};

module.exports = config;
