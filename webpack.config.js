const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {

    rules: [

      {

        test: /\.s[ac]ss$/i,

        use: ['style-loader', 'css-loader', 'sass-loader'],

      },

    ],

  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
};