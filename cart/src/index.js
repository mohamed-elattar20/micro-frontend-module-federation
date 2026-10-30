import faker from "faker";
let cartProducts = "";

for (let i = 0; i < 3; i++) {
  cartProducts += `
  <div class="product-item">
    <h2>${faker.commerce.productName()}</h2>
    <p>Price: $${faker.commerce.price()}</p>
  </div>`;
}

document.querySelector("#fake-cart").innerHTML = cartProducts;
