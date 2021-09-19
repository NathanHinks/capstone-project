export const getPhotos = async (setData) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  );
  const data = await res.json();

  setData(data);
};

export const getClass = (index) =>
  index % 5 === 0 ? 'big' : index % 6 === 0 ? 'wide' : 'normal';
