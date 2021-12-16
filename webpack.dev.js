// const webpack = require("webpack");
const common = require("./webpack.common");
const path = require("path");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
});
