const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./public/main.js",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
