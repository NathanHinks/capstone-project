import PropTypes from 'prop-types'
import useHover from '../../hooks/useHover';
import PhotoIcons from '../PhotoIcons';

const Photo = ({ className, img }) => {
  const { isHovered, mouseEnter, mouseLeave } = useHover();

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <PhotoIcons img={img} isHovered={isHovered}/>
      <img alt='' src={img.url} className='image-grid' />
    </div>
  );
};

Photo.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}

export default Photo;
