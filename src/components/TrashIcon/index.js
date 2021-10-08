import useHover from '../../hooks/useHover';
import PropTypes from 'prop-types';

const TrashIcon = ({ handleClick }) => {
  const { isHovered, mouseEnter, mouseLeave } = useHover();

  return (
    <i
      className={ isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line" }
      onClick={ handleClick }
      onMouseEnter={ mouseEnter }
      onMouseLeave={ mouseLeave }>
    </i>
  );
};

TrashIcon.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TrashIcon;
