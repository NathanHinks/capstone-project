export const getClass = (index) =>
  index % 5 === 0 ? 'big' : index % 6 === 0 ? 'wide' : 'normal';
