import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './styles.module.css'; 
import type { ShoppingCartIconProps } from './types'; 


const ShoppingCart = ({ count, onClick }: ShoppingCartIconProps) => {
  return (
    <Badge
      count={count}
      overflowCount={99}
      className={styles.cartBadge} 
      color='#631c1a'
    >
      <ShoppingCartOutlined
        className={styles.cartIcon} 
        onClick={onClick} 
      />
    </Badge>
  );
};

export default ShoppingCart;
