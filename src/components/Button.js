import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide }) {
  if (wide) {
    return (
      <div className="btn-style-new">
        <button type="button" className={color}>{buttonName}</button>
      </div>
    );
  }
  return (
    <div className="btn-division">
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
