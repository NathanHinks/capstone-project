import * as R from 'ramda';

const activeStyles = {
  cursor: 'pointer',
  outline: 'none',
  pointerEvents: 'none',
};

export const cartActiveStyles = R.mergeRight(activeStyles, { opacity: '.5' });
export const homeActiveStyles = R.mergeRight(activeStyles, {
  textDecoration: 'underline',
});
