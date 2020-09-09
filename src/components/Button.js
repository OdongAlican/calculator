import React from 'react';
import PropTypes from 'prop-types'


function Button(props){
    return (
        <div>
            <button>{props.buttonName}</button>
        </div>
    )
}

Button.prototype = {
    result: PropTypes.string.isRequired
}

export default Button