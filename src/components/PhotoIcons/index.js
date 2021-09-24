import PropTypes from 'prop-types';
import HeartIcon from '../HeartIcon';
import CartIcon from '../CartIcon';

const PhotoIcons = ({ img, isHovered }) => {

  return (
    <div>
      <HeartIcon img={img} isHovered={isHovered} />
      <CartIcon img={img} isHovered={isHovered} />
    </div>
  );
};

PhotoIcons.propTypes = {
  img: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired,
}

export default PhotoIcons;
