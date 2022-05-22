import type { NextPage } from 'next';

const FAQ: NextPage = () => {
  return <>FAQ</>;
};

export default FAQ;

FAQ.getInitialProps = () => {
  return {
    title: 'FAQ',
  };
};
