import type { Product } from '../../../types/product';

export const getAllCategories = (products: Product[]) => {
  const allCategory: Record<string, string> = {};

  products.forEach(product => {
    if (!allCategory[product.category]) {
      allCategory[product.category] = product.image;
    }
  });
  
  return Object.entries(allCategory).map(([slug, image]) => ({ slug, image }));
};
