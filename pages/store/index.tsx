import type { NextPage } from 'next';
import type { GetStaticProps } from 'next/types';
import { getProducts } from '@/services';
import { Products, Product as IProduct } from '@/types';
import { Product } from '@/components';
import stylesItems from '@/styles/products.module.css';

interface StoreProps {
  products?: Products;
}

const Store: NextPage = ({ products }: StoreProps) => {
  return (
    <>
      {products && (
        <ul className={stylesItems.products}>
          {products.map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Store;

export const getStaticProps: GetStaticProps = () => {
  return getProducts().then((res) => {
    return {
      props: {
        title: 'Store',
        products: res,
      },
    };
  });
};
