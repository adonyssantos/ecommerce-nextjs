import type { NextPage } from 'next';
import type { GetStaticProps } from 'next/types';
import { getProducts } from '@/services';
import { Products, Product } from '@/types';
import Image from 'next/image';

interface StoreProps {
  products?: Products;
}

const Store: NextPage = ({ products }: StoreProps) => {
  return (
    <>
      {products && (
        <ul>
          {products.map((product: Product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>
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
