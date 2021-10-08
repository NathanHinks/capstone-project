import { useContext } from 'react';
import { AppContext } from '../Context';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      { cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />) }
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
};

export default Cart;
