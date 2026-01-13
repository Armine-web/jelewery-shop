import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/index';
import { fetchProducts } from '../../store/slices/productsSlice';
import FeaturedCategories from './FeaturedCategories/index';
import Bestsellers from './Bestsellers/index';
import HeroBanner from './HeroBanner';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <HeroBanner />
      <div className="container">
        <FeaturedCategories />
        <Bestsellers />
      </div>
    </>
  );
};

export default Home;
