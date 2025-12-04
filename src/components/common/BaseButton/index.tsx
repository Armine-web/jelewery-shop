import { Button } from 'antd';
import type { BaseButtonProps } from './types';
import styles from './styles.module.css';

const BaseButton = ({ className, label, onClick, children, ...rest }: BaseButtonProps) => {
  return (
    <Button
      className={`${styles.baseButton} ${className ?? ''}`}
      type="link"
      onClick={onClick}
      {...rest}
    >
      {children ?? label}
    </Button>
  );
};
export default BaseButton;
