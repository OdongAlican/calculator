import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div>
      <div className="button-sections">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div className="button-sections">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="X" />
      </div>
      <div className="button-sections">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </div>
      <div className="button-sections">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </div>
      <div className="button-sections">
        <Button buttonName="0" className="zero-btn"/>
        <Button buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
