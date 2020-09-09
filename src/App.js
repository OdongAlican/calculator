import React from 'react';
import Display from './components/Display'
import ButtonPanel from './components/ButtonPanel'

function App() {
  return (
    <div className="App">
      <Display result = "result"/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
