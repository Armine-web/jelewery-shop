import { useTranslation } from 'react-i18next';
import { Card } from 'antd';
import type { ProductCardProps } from './types';
import BaseButton from '../../BaseButton/index';
import BaseCard from '../BaseCard/index';
import styles from './styles.module.css';
import { getProductMaterialsAndStones, getProductText } from '../../../../i18n/utils/product';

const { Meta } = Card;

const ProductCard = ({
  product,
  width = 300,
  height = 400,
  onClickProduct,
  onClickBook,
}: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <BaseCard
      width={width}
      height={height}
      image={{ src: product.image, alt: t(`products.${product.nameKey}.name`) }}
      onImageClick={onClickProduct}
    >
      <div className={styles.topRow}>
        <Meta title={getProductText(product.nameKey, 'name')} />
        <div className={styles.price}>
          {product.price} {product.currency}
        </div>
      </div>
      <Meta description={getProductMaterialsAndStones(product.nameKey)} />
      <BaseButton type="link" label={t('productCard.book')} onClick={onClickBook} />
    </BaseCard>
  );
};

export default ProductCard;
