import { useContext } from 'react';
import { PhotoContext } from '../contexts/PhotoContext';
import { getClass } from '../utils';
import Photo from '../components/Photo';

const PhotoGrid = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <main className='photos'>
      { photos.map((photo, i) => (
        <Photo key={ photo.id } img={ photo } className={ getClass(i) } />
      )) }
    </main>
  );
};

export default PhotoGrid;
