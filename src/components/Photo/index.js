import useHover from '../../hooks/useHover';
import PhotoIcons from '../PhotoIcons';

const Photo = ({ className, img }) => {
  const { isHovered, mouseEnter, mouseLeave } = useHover();
  console.log(img, 'img log');
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {isHovered && <PhotoIcons id={img.id} isFavorite={img.isFavorite} />}
      <img alt='' src={img.url} className='image-grid' />
    </div>
  );
};

export default Photo;
