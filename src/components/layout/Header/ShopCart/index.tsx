import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import type { ShopCartIconProps } from './types';

const ShoppCart = ({ count, onClick }: ShopCartIconProps) => {
  return (
    <Badge count={count} overflowCount={99} className={styles.cartBadge} color="#850710">
      <ShoppingCartOutlined className={styles.cartIcon} onClick={onClick} />
    </Badge>
  );
};

export default ShoppCart;
