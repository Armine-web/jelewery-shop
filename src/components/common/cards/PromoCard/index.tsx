import { useState } from 'react';
import type { PromoCardProps } from './types';
import BaseCard from '../BaseCard/index';
import styles from './styles.module.css';

const PromoCard = ({
  image,
  title,
  subtitle,
  hoverEffect = false,
  onClick,
  className,
  imgClassName,
  width = 290,
  height = 365,
}: PromoCardProps) => {
  const [hover, setHover] = useState(false);

  const handleEnter = () => hoverEffect && setHover(true);
  const handleLeave = () => hoverEffect && setHover(false);

  return (
    <BaseCard
      image={image}
      onImageClick={onClick}
      width={width}
      height={height}
      className={`${styles.promoCard} ${className ?? ''}`}
      imageClassName={`${styles.image} ${imgClassName ?? ''} ${hover ? styles.imageHover : ''}`}
    >
      <div
        className={`underlineEffect`}
        onClick={onClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {title}
        {subtitle}
      </div>
    </BaseCard>
  );
};
export default PromoCard;
