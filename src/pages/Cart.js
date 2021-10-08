import { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

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
