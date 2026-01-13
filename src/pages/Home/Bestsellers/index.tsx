import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/index';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../../../components/common/cards/ProductCard';
import Carousel from '../../../components/common/Carousel';
import AppTitle from '../../../components/common/AppTitle';

const Bestsellers = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();

  return (
    <section>
      <AppTitle as={'h2'} variant={'sectionTitle'}>
        Bestsellers
      </AppTitle>
      <Carousel>
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              width={330}
              onClickProduct={() => navigate(`/product/${product.id}`)}
              onClickBook={() => navigate(`/booking`)}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default Bestsellers;
