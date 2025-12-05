import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ProductCardProps } from './types';
import { Card } from 'antd';
import BaseButton from '../../common/BaseButton';
import styles from './styles.module.css';

const { Meta } = Card;

const ProductCard = ({ product, className, cardStyles }: ProductCardProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToProduct = useCallback(() => {
    navigate(`/product/${product.id}`);
  }, [navigate, product.id]);

  const goToBooking = useCallback(() => {
    navigate(`/booking`);
  }, [navigate]);

  return (
    <Card
      className={`${styles.card} ${className || ''}`}
      style={{ width: cardStyles?.width || '310px' }}
      cover={
        <div
          className={styles.imgWrapper}
          onClick={goToProduct}
          style={{ height: cardStyles?.height || '400px' }}
        >
          <img className={styles.image} draggable={false} alt={product.name} src={product.image} />
        </div>
      }
    >
      <div onClick={goToProduct} className={styles.content}>
        <Meta className={styles.meta} title={t('productCard.name', { value: product.name })} />
        <div className={styles.price}>{t('productCard.price', { value: product.price })}</div>
      </div>
      <Meta
        className={styles.meta}
        description={t('productCard.description', { value: product.description })}
      />
      <BaseButton type="link" label={t('productCard.book')} onClick={goToBooking} />
    </Card>
  );
};

export default ProductCard;
