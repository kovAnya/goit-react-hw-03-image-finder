import * as SC from './Button.styles';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <SC.Button type="button" onClick={onClick}>
      Load more
    </SC.Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
