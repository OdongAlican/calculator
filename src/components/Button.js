import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <div className="btn-division">
      <button type="button"className="btn-style" >{buttonName}</button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
