import { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import { getTotal } from '../utils';
import OrderButton from '../components/OrderButton';

const Cart = () => {
  const { cartItems, cartIsEmpty } = useContext(CartContext);
  const total = getTotal(cartItems);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      { cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />) }
      <p className="total-cost">Total: { total }</p>
      { cartIsEmpty || <OrderButton /> }
    </main>
  );
};

export default Cart;
