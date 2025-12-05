import { Drawer } from 'antd';
import type { ShopCartDrawerProps } from './types';

const ShopCartDrawer = ({ open, onClose }: ShopCartDrawerProps) => {
  return (
    <Drawer title="Your Cart" placement="right" onClose={onClose} open={open} size={380}>
      <p>Product 1</p>
      <p>Product 2</p>
    </Drawer>
  );
};

export default ShopCartDrawer;
