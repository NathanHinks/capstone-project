import { useContext } from 'react';
import PropTypes from 'prop-types'
import { AppContext } from '../../Context';

const HeartIcon = ({img, isHovered}) => {
  const { addToCart } = useContext(AppContext);
  
  const handleClick = () => {
    addToCart(img);
  };
  
  return (
    isHovered && (
      <i className='ri-add-circle-line cart-icon' onClick={handleClick}/>
    )
  )
};

HeartIcon.propTypes = {
  img: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired
}

export default HeartIcon;
