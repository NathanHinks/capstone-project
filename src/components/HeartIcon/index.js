import * as R from 'ramda';
import { useContext } from 'react';
import { AppContext } from '../../Context';

const HeartIcon = (props) => {
  const { updateIsFavorite } = useContext(AppContext);
  
  const { id, isFavorite } = props.img
  const handleClick = () => {
    updateIsFavorite(id, !isFavorite);
  };
  
  return (
      R.cond([
        [R.pathEq(['img', 'isFavorite'], true), R.always(<i className='ri-heart-fill favorite-icon' onClick={ handleClick } />)],
        [R.propEq('isHovered', true), R.always(<i className='ri-heart-line favorite-icon' onClick={ handleClick } />)],
        [R.T, R.always(null)],
      ])(props)
  )
};

export default HeartIcon;