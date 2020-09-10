import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
      <calculate />
    </div>
  );
}

export default App;
