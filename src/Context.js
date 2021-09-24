import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import { getPhotos, updateFavorite } from './utils';

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  const updateIsFavorite = (id, value) =>
    R.compose(setPhotos, updateFavorite(id, value))(photos);
  
  const addToCart = (img) => R.compose(setCartItems, R.append(img))(cartItems)
  const removeFromCart = ({id}) => R.compose(setCartItems, R.reject(R.propEq('id', id)))(cartItems)

  return (
    photos && (
      <AppContext.Provider value={{ photos, updateIsFavorite, cartItems, addToCart, removeFromCart }}>
        {children}
      </AppContext.Provider>
    )
  );
};

export { AppContext, AppContextProvider };
