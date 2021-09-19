import { useContext } from 'react';
import { AppContext } from '../../Context';

const PhotoIcons = ({ id, isFavorite }) => {
  const { updateIsFavorite } = useContext(AppContext);

  const handleClick = () => {
    updateIsFavorite(id, !isFavorite);
  };
  
  return (
    <div>
      <i className='ri-heart-line favorite-icon' onClick={handleClick} />
      <i className='ri-add-circle-line cart-icon' />
    </div>
  );
};

export default PhotoIcons;
