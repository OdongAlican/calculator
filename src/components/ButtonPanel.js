import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div>
      <div className="button-sections">
        <Button buttonName="AC" className="btn-style" />
        <Button buttonName="+/-" className="btn-style"/>
        <Button buttonName="%" className="btn-style"/>
        <Button buttonName="÷" className="btn-style"/>
      </div>
      <div className="button-sections">
        <Button buttonName="7" className="btn-style"/>
        <Button buttonName="8" className="btn-style"/>
        <Button buttonName="9" className="btn-style"/>
        <Button buttonName="X" className="btn-style"/>
      </div>
      <div className="button-sections">
        <Button buttonName="4" className="btn-style"/>
        <Button buttonName="5" className="btn-style"/>
        <Button buttonName="6" className="btn-style"/>
        <Button buttonName="-" className="btn-style"/>
      </div>
      <div className="button-sections">
        <Button buttonName="1" className="btn-style"/>
        <Button buttonName="2" className="btn-style"/>
        <Button buttonName="3" className="btn-style"/>
        <Button buttonName="+" className="btn-style"/>
      </div>
      <div className="button-sections">
        <Button buttonName="0" className="zero-btn" />
        <Button buttonName="." className="btn-style"/>
        <Button buttonName="=" className="btn-style"/>
      </div>
    </div>
  );
}

export default ButtonPanel;
