// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getId } from '@/utilities';
import { Products } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const products: Products = [
  {
    id: getId(),
    name: 'Bitcoin Hoodie',
    description: 'Minimalist bitcoin hoodie',
    price: 65.0,
    image: '/images/products/bitcoin-hoodie.jpg',
  },
  {
    id: getId(),
    name: 'Physical Bitcoin',
    description: 'A physical coin of bitcoin',
    price: 29.99,
    image: '/images/products/bitcoin-physical.jpg',
  },
  {
    id: getId(),
    name: 'Bitcoin T-Shirt',
    description: 'A t-shirt of bitcoin',
    price: 19.99,
    image: '/images/products/bitcoin-tshirt.jpg',
  },
  {
    id: getId(),
    name: 'Bitcoin socks',
    description: 'A pair of socks of bitcoin',
    price: 9.99,
    image: '/images/products/bitcoin-socks.jpg',
  },
  {
    id: getId(),
    name: 'The Bitcoin Bottle',
    description: 'A bottle of bitcoin',
    price: 19.99,
    image: '/images/products/bitcoin-bottle.jpg',
  },
  {
    id: getId(),
    name: 'Bitcoin Wallet',
    description: 'A wallet of bitcoin',
    price: 29.99,
    image: '/images/products/bitcoin-wallet.jpg',
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Products>
): void {
  res.status(200).json(products);
}
