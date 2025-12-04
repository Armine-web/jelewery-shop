import { Drawer } from 'antd';
import type { ShoppingCartDrawerProps } from './types';

const ShoppingCartDrawer = ({ open, onClose }: ShoppingCartDrawerProps) => {
  return (
    <Drawer title="Your Cart" placement="right" onClose={onClose} open={open} width={380}>
      <p>Product 1</p>
      <p>Product 2</p>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
