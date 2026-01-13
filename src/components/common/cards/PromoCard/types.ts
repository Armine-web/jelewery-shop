import type { ReactNode } from 'react';

export type PromoCardProps = {
  image: {
    src: string;
    alt?: string;
  };
  title: ReactNode;
  subtitle?: ReactNode;
  hoverEffect?: boolean;
  onClick?: () => void;
  className?: string;
  imgClassName?: string;
  width?: string | number;
  height?: string | number;
};
