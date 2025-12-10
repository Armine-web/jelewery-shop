import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/index';
import { fetchProducts } from '../../store/slices/productsSlice';
import ProductCard from '../../components/product/ProductCard';
import BannerSlider from '../../components/common/BannerSlider';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <BannerSlider />
      <div className="container">
        {loading && <div>Loading...</div>}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
