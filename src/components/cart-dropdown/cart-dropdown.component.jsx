import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => {
  console.log('CartDropDown render');
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('select cart items');
  return {
    cartItems: selectCartItems(state)
  };
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

export default connect(mapStateToProps)(CartDropDown);
