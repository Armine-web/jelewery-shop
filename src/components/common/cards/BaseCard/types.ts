import type { ReactNode } from 'react';

export type BaseCardProps = {
  image?: {
    src: string;
    alt?: string;
  };
  imageNode?: ReactNode;
  onImageClick?: () => void;
  width?: string | number;
  height?: string | number;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
};
