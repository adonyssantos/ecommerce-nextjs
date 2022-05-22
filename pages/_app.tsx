import '@/styles/globals.css';
import { Layout } from '@/components';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={pageProps.title}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
