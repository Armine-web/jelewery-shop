import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/index';
import { fetchProducts } from '../../store/slices/productsSlice';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>{t('home.welcome')}</h1>
      {loading && <div>Loading...</div>}
      {products.map(product => (
        <div key={product.id}>
          name: {product.name} price: {product.price}$ category: {product.category}
        </div>
      ))}
    </div>
  );
};

export default Home;
