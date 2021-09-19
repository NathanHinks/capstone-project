import useHover from '../../hooks/useHover';

const Photo = ({ className, img }) => {
  const { isHovered, mouseEnter, mouseLeave } = useHover();

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {isHovered && (
        <>
          <i className='ri-heart-line favorite-icon' />
          <i className='ri-add-circle-line cart-icon' />
        </>
      )}
      <img alt='' src={img.url} className='image-grid' />
    </div>
  );
};

export default Photo;
