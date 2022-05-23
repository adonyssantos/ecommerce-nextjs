import { getProducts } from '@/services';

export const getPathsFromId = async () => {
  const products = await getProducts().catch((err) => {
    return Promise.reject(err);
  });

  const ids = products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return Promise.resolve(ids);
};
