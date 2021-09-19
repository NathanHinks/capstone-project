import useHover from '../../hooks/useHover';

const Photo = ({ className, img }) => {
  const { isHovered, mouseEnter, mouseLeave } = useHover();

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src={img.url} className='image-grid' />
    </div>
  );
};

export default Photo;
