import * as R from 'ramda';

const precision = 100;
const getRandomPrice = () => Math.floor(Math.random() * (9 * precision) + precision) / (precision);

export const getPhotos = async (setData) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  );
  const data = await res.json();

  R.compose(setData, R.map((item) => R.assoc('price', getRandomPrice(), item)
  ))(data);
};

export const updateFavorite = (id, value) =>
  R.map(R.when(R.propEq('id', id), R.assoc('isFavorite', value)));

export const getClass = (index) =>
  index % 4 === 0 ? 'big' : index % 2 === 0 ? 'wide' : 'normal';

export const formatNumber = (num) => num.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const getTotal = R.compose(formatNumber, R.sum, R.pluck('price'));