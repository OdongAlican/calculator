import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div>
      <div className="button-sections">
        <Button buttonName="AC" color="btn-style" />
        <Button buttonName="+/-" color="btn-style" />
        <Button buttonName="%" color="btn-style" />
        <Button buttonName="÷" color="btn-style" />
      </div>
      <div className="button-sections">
        <Button buttonName="7" color="btn-style" />
        <Button buttonName="8" color="btn-style" />
        <Button buttonName="9" color="btn-style" />
        <Button buttonName="X" color="btn-style" />
      </div>
      <div className="button-sections">
        <Button buttonName="4" color="btn-style" />
        <Button buttonName="5" color="btn-style" />
        <Button buttonName="6" color="btn-style" />
        <Button buttonName="-" color="btn-style" />
      </div>
      <div className="button-sections">
        <Button buttonName="1" color="btn-style" />
        <Button buttonName="2" color="btn-style" />
        <Button buttonName="3" color="btn-style" />
        <Button buttonName="+" color="btn-style" />
      </div>
      <div className="button-sections">
        <Button buttonName="0" color="btn-style" wide />
        <Button buttonName="." color="btn-style" />
        <Button buttonName="=" color="btn-style" />
      </div>
    </div>
  );
}

export default ButtonPanel;
