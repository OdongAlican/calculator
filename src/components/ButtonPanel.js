import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <div>
      <div className="button-sections">
        <Button buttonName="AC" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="+/-" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="%" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="÷" color="btn-style" handleClick={clickHandler} />
      </div>
      <div className="button-sections">
        <Button buttonName="7" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="8" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="9" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="x" color="btn-style" handleClick={clickHandler} />
      </div>
      <div className="button-sections">
        <Button buttonName="4" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="5" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="6" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="-" color="btn-style" handleClick={clickHandler} />
      </div>
      <div className="button-sections">
        <Button buttonName="1" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="2" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="3" color="btn-style" handleClick={clickHandler} />
        <Button buttonName="+" color="btn-style" handleClick={clickHandler} />
      </div>
      <div className="button-sections">
        <Button buttonName="0" color="btn-style" wide handleClick={clickHandler} />
        <Button buttonName="." color="btn-style" handleClick={clickHandler} />
        <Button buttonName="=" color="btn-style" handleClick={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
