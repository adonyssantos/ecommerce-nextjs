import LinkUI from '../link/link';
import styles from '@/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <LinkUI className={styles.link} href="/">
          Home
        </LinkUI>
        <LinkUI className={styles.link} href="/store">
          Store
        </LinkUI>
        <LinkUI className={styles.link} href="/faq">
          FAQ
        </LinkUI>
      </nav>
      <nav>
        <a href="#">Cart (0)</a>
      </nav>
    </header>
  );
};

export default Header;
