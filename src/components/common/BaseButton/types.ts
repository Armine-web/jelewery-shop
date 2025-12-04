import type { ButtonProps } from 'antd';

export type BaseButtonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
} & ButtonProps;
