const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: {
    index: { import: './src/js/index.js', dependOn: 'shared' },
    home: { import: './src/js/pages/Home.js', dependOn: 'shared' },
    Signup: { import: './src/js/pages/Signup.js', dependOn: 'shared' },
    Viewer: { import: './src/js/pages/Viewer.js', dependOn: 'shared' },
    shared: ['./src/scss/style.scss', 'lodash'],
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', { loader: 'css-loader', options: { url: false } }, 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 3% in KR'],
                },
                debug: true,
              },
            ],
          ],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /\.(png|jpe?g|webp|svg)$/,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/static' }],
    }),
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
};
