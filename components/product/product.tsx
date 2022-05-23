import Image from 'next/image';
import React from 'react';
import LinkUI from '../link/link';
import { ProductProps } from './product-props';
import styles from '@/styles/products.module.css';

const Product = ({ product, showAs }: ProductProps) => {
  if (showAs === 'Page') {
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div className={styles.price}>${product.price}</div>
          <div>{product.description}</div>
          <div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  }

  if (showAs == 'ListItem') {
    return (
      <div className="product-list-item">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    );
  }

  return (
    <li className={styles.product}>
      <div>
        <LinkUI href={`/store/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </LinkUI>
      </div>
      <div>
        <h3>
          <LinkUI href={`/store/${product.id}`}>{product.name}</LinkUI>
        </h3>
      </div>
      <div>{product.price}</div>
      <div>
        <button>Add to cart</button>
      </div>
    </li>
  );
};

export default Product;
