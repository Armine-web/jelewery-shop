import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import type { BookingCartIconProps } from './types';
import { CART_OVERFLOW_COUNT, CART_ICON_STYLE, CART_BADGE_STYLE } from './const';

export const BookingCart = ({ count, onClick }: BookingCartIconProps) => {
  return (
    <Badge 
      count={count} 
      overflowCount={CART_OVERFLOW_COUNT}
      style={CART_BADGE_STYLE}
    >
      <ShoppingOutlined 
        style={CART_ICON_STYLE}
        onClick={onClick} 
      />
    </Badge>
  );
};

export default BookingCart;
