import React from 'react';


    // import { toggleCartHidden } from '../../redux/cart/cart.actions';
    // import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({total}) => (
  <div className='cart-icon' >
  <ShoppingIcon className='shopping-icon' />
  <span className='item-count'>{total}</span>
</div>

 
);



export default CartIcon;