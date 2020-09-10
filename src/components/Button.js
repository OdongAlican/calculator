import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide }) {
  return (
    <div className={wide ? 'btn-style-new' : 'btn-division'}>
      <button type="button" className={color}>{buttonName}</button>
    </div>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export default Button;
