import { useContext } from 'react';
import PropTypes from 'prop-types'
import { AppContext } from '../../Context';

const CartItem = ({item}) => {
  const {  removeFromCart } = useContext(AppContext);
  
  const handleClick = () => removeFromCart(item)
  
  return (
      <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={handleClick}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CartItem;
