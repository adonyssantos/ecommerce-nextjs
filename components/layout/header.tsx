import LinkUI from '../link/link';

const Header = () => {
  return (
    <header>
      <h1>ECommerce Next.js</h1>
      <nav>
        <ul>
          <li>
            <LinkUI href="/">Home</LinkUI>
          </li>
          <li>
            <LinkUI href="/about">About</LinkUI>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
