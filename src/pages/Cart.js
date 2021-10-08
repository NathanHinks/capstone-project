import { useContext } from 'react';
import { AppContext } from '../Context';

  const Cart = () => {
  const { photos } = useContext(AppContext);
  return (
    <main>
      <p>Cart Here</p>
    </main>
  );
};

export default Cart;
