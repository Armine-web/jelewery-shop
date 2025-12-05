import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/index';
import { fetchProducts } from '../../store/slices/productsSlice';
import ProductCard from '../../components/product/ProductCard';

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
      <>
        {loading && <div>Loading...</div>}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </>
    </div>
  );
};

export default Home;
