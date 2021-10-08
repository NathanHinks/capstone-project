import { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { CartContext } from '../../contexts/CartContext';
import useOrder from "../../hooks/useOrder";

const OrderButton = () => {
  const { clearCart } = useContext(CartContext);
  const { isOrdering, placeOrder } = useOrder(clearCart);

  return (
    <div className="order-button">
      <button onClick={ placeOrder } disabled={ isOrdering }>
        { isOrdering ? <BeatLoader size={ 10 } /> : "Place Order" }
      </button>
    </div>
  );
};

export default OrderButton;;