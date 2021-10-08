import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleClick = () => removeFromCart(item);

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={ handleClick }></i>
      <img src={ item.url } width="130px" />
      <p>${ item.price }</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
