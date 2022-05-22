import type { NextPage } from 'next';

const About: NextPage = () => {
  return <>About</>;
};

export default About;

About.getInitialProps = () => {
  return {
    title: 'About',
  };
};
