const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

providePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jquery: "jquery",
  "window.jQuery": "jquery",
  jQuery: "jquery"
});

module.exports = {
  devServer: {
    contentBase: "dist"
  },
  entry: {
    "index": path.resolve(__dirname, "src/index.js"),
    "vendor": ['babel-es6-polyfill', 'react', 'jquery', 'bootstrap']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: ["url-loader"]
      },]
  },
  plugins: [htmlPlugin, providePlugin]
};
