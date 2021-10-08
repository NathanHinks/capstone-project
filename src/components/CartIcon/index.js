import * as R from 'ramda';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = (props) => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const isInCart = (id) => R.any(R.propEq('id', id))(cartItems);

  const handleClick = () => {
    R.compose(R.ifElse(R.compose(isInCart, R.prop('id')), removeFromCart, addToCart), R.prop('img'))(props);
  };

  return (
    R.cond([
      [R.compose(isInCart, R.path(['img', 'id'])), R.always(<i className='ri-shopping-cart-fill cart-icon' onClick={ handleClick } />)],
      [R.propEq('isHovered', true), R.always(<i className='ri-shopping-cart-line cart-icon' onClick={ handleClick } />)],
      [R.T, R.always(null)],
    ])(props)
  );
};

CartIcon.propTypes = {
  img: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired
};

export default CartIcon;
