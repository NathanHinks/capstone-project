import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../utils';
import TrashIcon from '../TrashIcon';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleClick = () => removeFromCart(item);

  return (
    <div className="cart-item">
      <TrashIcon handleClick={ handleClick } />
      <img src={ item.url } width="130px" />
      <p>{ formatNumber(item.price) }</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
