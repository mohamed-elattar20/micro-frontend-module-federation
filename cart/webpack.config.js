const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart", // this refers to the name of the remote container, which is used in the `remotes` configuration of the container app's webpack.config.js
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index.js",
      },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
