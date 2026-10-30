import faker from "faker";

let products = "";

for (let i = 0; i < 10; i++) {
  products += `
  <div class="product-item">
    <h2>${faker.commerce.productName()}</h2>
    <p>Price: $${faker.commerce.price()}</p>
  </div>`;
}

document.querySelector("#fake-products").innerHTML = products;
