const Photo = ({ className, img }) => (
  <div className={`${className} image-container`}>
    <img src={img.url} className='image-grid' />
  </div>
);

export default Photo;
