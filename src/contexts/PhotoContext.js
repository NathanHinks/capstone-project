import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import { getPhotos, updateFavorite } from '../utils';

const PhotoContext = React.createContext();

const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  const updateIsFavorite = (id, value) =>
    R.compose(setPhotos, updateFavorite(id, value))(photos);

  return (
    photos && (
      <PhotoContext.Provider value={ { photos, updateIsFavorite } }>
        { children }
      </PhotoContext.Provider>
    )
  );
};

export { PhotoContext, PhotoContextProvider };
