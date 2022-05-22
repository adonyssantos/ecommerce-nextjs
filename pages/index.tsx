import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <>Home page</>;
};

export default Home;

Home.getInitialProps = () => {
  return {
    title: 'Home',
  };
};
