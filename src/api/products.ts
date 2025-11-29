import type { Product } from '../types/product';
import { mockProducts } from '../moc/mockProducts';

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
