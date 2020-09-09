import React from 'react';

function Display(props){
    return (
        <div>
            <p>Result {props.result}</p>
        </div>
    )
}

Display.defaultProps = {
    result: 0,
  }

export default Display