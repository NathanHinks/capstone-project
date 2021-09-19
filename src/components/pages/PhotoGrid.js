import { useContext } from 'react';
import { AppContext } from '../../Context';
import { getClass } from '../../utils';
import Photo from '../Photo';

const PhotoGrid = () => {
  const { photos } = useContext(AppContext);

  return (
    <main className='photos'>
      {photos.map((photo, i) => (
        <Photo key={photo.id} img={photo} className={getClass(i)} />
      ))}
    </main>
  );
};

export default PhotoGrid;
