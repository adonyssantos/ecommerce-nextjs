import { LayoutProps } from './layout-props';
import Head from 'next/head';
import Header from './header';
import styles from '@/styles/layout.module.css';

function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>ECommerce {title && `| ${title}`}</title>
        <meta name="description" content="A simple store with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default Layout;
