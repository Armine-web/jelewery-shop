import { Card } from 'antd';
import type { BaseCardProps } from './types';
import styles from './styles.module.css';

const BaseCard = ({
  image,
  imageNode,
  width = 310,
  height = 310,
  onImageClick,
  imageClassName,
  className,
  children,
}: BaseCardProps) => (
  <Card
    className={`${styles.card} ${className ?? ''}`}
    style={{ width }}
    cover={
      <div className={styles.imgWrapper} onClick={onImageClick} style={{ height }}>
        {imageNode ?? (
          <img
            className={`${styles.image} ${imageClassName ?? ''}`}
            draggable={false}
            alt={image?.alt ?? 'card image'}
            src={image?.src}
          />
        )}
      </div>
    }
  >
    {children}
  </Card>
);

export default BaseCard;
