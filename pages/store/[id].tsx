import { Product } from '@/components';
import type { GetStaticPaths, NextPage } from 'next';
import { getPathsFromId } from '@/utilities/get-paths';
import { getProductById } from '../../services/products.service';

const ProductPage: NextPage = ({ product }: any) => {
  return <Product product={product} showAs="Page" />;
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = () => {
  return getPathsFromId()
    .then((paths) => {
      return {
        paths,
        fallback: false,
      };
    })
    .catch((error) => {
      return {
        paths: [],
        fallback: true,
        error,
      };
    });
};

export const getStaticProps = ({ params }: any) => {
  return getProductById(params.id).then((product) => {
    return {
      props: {
        product,
      },
    };
  });
};
