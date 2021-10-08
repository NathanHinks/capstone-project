import { useState } from 'react';

const useOrder = (clearCart) => {
  const [isOrdering, setIsOrdering] = useState(false);

  const placeOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      clearCart();
      setIsOrdering(false);
    }, 3000);
  };

  return {
    isOrdering,
    placeOrder
  };
};

export default useOrder;
