import { LinkProps } from './link-props';
import Link from 'next/link';

const LinkUI = ({ href, children, className }: LinkProps) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default LinkUI;
