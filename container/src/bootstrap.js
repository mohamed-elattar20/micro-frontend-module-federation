// "products" in this import refers to the "products" remote in webpack.config.js: "products@http://localhost:8081/remoteEntry.js".
import { mount as productsMount } from "products/ProductsIndex";
// "cart" in this import refers to the "cart" remote in webpack.config.js: "cart@http://localhost:8082/remoteEntry.js".
import { mount as cartMount } from "cart/CartIndex";

console.log("Container");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
