import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    products += `
  <div class="product-item">
    <h2>${faker.commerce.productName()}</h2>
    <p>Price: $${faker.commerce.price()}</p>
  </div>`;
  }

  el.innerHTML = products;
};

// for development and isolation, we want to immediately mount the app if we are in development mode and running in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };
