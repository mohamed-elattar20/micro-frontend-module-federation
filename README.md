# E-commerce Microfrontends

A small e-commerce demo built with Webpack 5 Module Federation. The project is split into a container application and two independently served remotes: products and cart. Both remotes currently render sample product data.

## Project structure

- `container/` - host application; loads the products and cart remotes.
- `products/` - products remote, exposed as `ProductsIndex`.
- `cart/` - cart remote, exposed as `CartIndex`.

## Requirements

- Node.js and npm

## Run locally

Install dependencies in each application, then run each application in a separate terminal:

```bash
cd container
npm ci
npm start
```

```bash
cd products
npm ci
npm start
```

```bash
cd cart
npm ci
npm start
```

The container runs at `http://localhost:8080`, products at `http://localhost:8081`, and cart at `http://localhost:8082`. Keep all three development servers running so the container can load both remotes.
