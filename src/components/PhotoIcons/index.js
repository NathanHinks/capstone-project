import PropTypes from 'prop-types';
import HeartIcon from '../HeartIcon';

const PhotoIcons = ({ img, isHovered }) => {

  return (
    <div>
      <HeartIcon img={img} isHovered={isHovered} />
      <i className='ri-add-circle-line cart-icon' />
    </div>
  );
};

PhotoIcons.propTypes = {
  img: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired,
}

export default PhotoIcons;
