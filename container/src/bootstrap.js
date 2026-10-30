// "products" in this import refers to the "products" remote in webpack.config.js: "products@http://localhost:8081/remoteEntry.js".
import "products/ProductsIndex";
// "cart" in this import refers to the "cart" remote in webpack.config.js: "cart@http://localhost:8082/remoteEntry.js".
import "cart/CartIndex";

console.log("Container");
