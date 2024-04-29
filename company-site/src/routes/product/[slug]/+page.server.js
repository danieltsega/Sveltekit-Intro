import { products } from "../data.js";

export function load({ params }) {
  const product = products.find((product) => product.slug === params.slug);

  return {
    product,
  };
}
