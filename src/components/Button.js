import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, className}) {
  if(buttonName === '0'){
    return (
      <div className = "btn-style-new" >
        <button type="button" className = { className } >{buttonName}</button>
      </div>
    );
  }else{
    return (
      <div className = "btn-division" >
        <button type="button" className = { className } >{buttonName}</button>
      </div>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
