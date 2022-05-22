import type { NextPage } from 'next';

const Store: NextPage = () => {
  return <>Store page</>;
};

export default Store;

Store.getInitialProps = () => {
  return {
    title: 'Store',
  };
};
