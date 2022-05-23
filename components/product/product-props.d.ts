import { Product } from '@/types';

export interface ProductProps {
  product: Product;
  showAs?: 'Page' | 'ListItem';
}
