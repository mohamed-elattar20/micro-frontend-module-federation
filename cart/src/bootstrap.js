import faker from "faker";
const mount = (el) => {
  let cartProducts = "";

  for (let i = 0; i < 3; i++) {
    cartProducts += `
  <div class="product-item">
    <h2>${faker.commerce.productName()}</h2>
    <p>Price: $${faker.commerce.price()}</p>
  </div>`;
  }

  el.innerHTML = cartProducts;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
