const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // The keys (`products`, `cart`) are local aliases used by this app when importing remote modules. where ??
        // In each value, the name before `@` is the remote container name configured by that remote;
        // the URL is the location of its `remoteEntry.js`.
        products:
          /*products here refers to the "products" remote name prop in webpack.config.js*/ "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
