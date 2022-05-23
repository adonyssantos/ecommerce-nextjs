import { Products, Product } from '@/types';

export const getProducts = async () => {
  const url = 'http://localhost:3000';
  const response = await fetch(`${url}/api/products`);
  const products: Products = await response.json();

  return Promise.resolve(products);
};

export const getLatestProducts = async () => {
  const products = await getProducts();
  const latestProducts: Products = products.slice(0, 4);

  return Promise.resolve(latestProducts);
};

export const getProductById = async (id: Product['id']) => {
  const products = await getProducts();
  const product: Product | undefined = products.find(
    (product) => product.id === id
  );

  return Promise.resolve(product);
};
