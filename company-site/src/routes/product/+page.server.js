import { products } from "./data";

export function load() {
  return {
    details: products.map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      description: product.description,
    })),
  };
}
