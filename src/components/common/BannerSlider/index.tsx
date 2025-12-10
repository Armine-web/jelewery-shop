import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import type { SlideProps } from './types';
import { bannerImages } from './const';
import BaseButton from '../BaseButton';
import styles from './styles.module.css';

const BannerSlider = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = t('home.bannerSlider', { returnObjects: true }) as SlideProps[];

  return (
    <Carousel>
      {slides.map(slide => (
        <div className={styles.slide} key={slide.id}>
          <div className={styles.slideContent}>
            <img src={bannerImages[slide.image]} alt={slide.title} className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{slide.title}</h1>
              <div className={styles.buttons}>
                <BaseButton
                  label={slide.buttonBook}
                  className={styles.buttonBook}
                  onClick={() => navigate('/booking')}
                />
                <BaseButton
                  label={slide.buttonShop}
                  className={styles.buttonShop}
                  onClick={() => navigate('/catalog')}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerSlider;
