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
        "./CartIndex": "./src/bootstrap.js",
      },
      shared: ["faker"],
      // singleton: true, // ensures that only a single version of the shared module is loaded across all federated modules even if multiple libs versions are used. as it prevents conflicts and ensures consistent behavior across the application. unlike the `shared` option, which allows multiple versions of a module to be loaded, the `singleton` option enforces a single instance of the module, which can help avoid issues related to state management and side effects. However, it may also lead to version conflicts if different modules require different versions of the same library. Therefore, it's important to carefully consider the implications of using `singleton` in a federated module setup.
      // shared: {
      //   faker: {
      //     singleton: true,
      //   },
      // },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
