const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    home: "./src/home.js",
    destination: "./src/destination.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "destination.html",
      template: "./src/destination.html",
      chunks: ["destination"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    watchFiles: ["src/**/*", "dist/**/*"],
    historyApiFallback: true,
  },
};
