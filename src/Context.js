import React, { useEffect, useState } from 'react';
import { getPhotos } from './utils';

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  return (
    photos && (
      <AppContext.Provider value={{ photos }}>{children}</AppContext.Provider>
    )
  );
};

export { AppContext, AppContextProvider };
