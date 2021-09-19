import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import { getPhotos, updateFavorite } from './utils';

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  const updateIsFavorite = (id, value) =>
    R.compose(setPhotos, updateFavorite(id, value))(photos);

  return (
    photos && (
      <AppContext.Provider value={{ photos, updateIsFavorite }}>
        {children}
      </AppContext.Provider>
    )
  );
};

export { AppContext, AppContextProvider };
