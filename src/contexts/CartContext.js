import * as R from 'ramda';
import React, { useState } from 'react';

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (img) => R.compose(setCartItems, R.append(img))(cartItems);
  const removeFromCart = ({ id }) => R.compose(setCartItems, R.reject(R.propEq('id', id)))(cartItems);
  const cartIsEmpty = R.isEmpty(cartItems);

  return (
    <CartContext.Provider value={ { cartItems, addToCart, removeFromCart, cartIsEmpty } }>
      { children }
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
