// import { parseRequestUrl } from "../utils.js";
// import { getProduct } from "../api";
const ProductPage = {
  // render: async () => {
  //   const request = parseRequestUrl();
  //   const product = await getProduct(request.id);
  //   return `<h1>${product.name}</h1>`;
  // },
  render: () => `<div>ProductPage</div>`,

  // render: async () => {
  //   const response = await fetch("http://localhost:3000/api/products", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (!response || !response.ok) {
  //     return `<div>Error</div>`;
  //   }
  //   const [products] = await response.json();
  //   console.log(products);
  //   return products.id;
  // },
};

export default ProductPage;
