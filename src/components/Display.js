import React from 'react';
import PropTypes from 'prop-types'

function Display(props){
    return (
        <div>
            <p>{props.result}</p>
        </div>
    )
}

Display.defaultProps = {
    result: 0,
  }

Display.prototype = {
    result: PropTypes.string.isRequired
}

export default Display