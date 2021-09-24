import HeartIcon from '../HeartIcon';

const PhotoIcons = ({ img, isHovered }) => {

  return (
    <div>
      <HeartIcon img={img} isHovered={isHovered} />
      <i className='ri-add-circle-line cart-icon' />
    </div>
  );
};

export default PhotoIcons;
