import React from 'react';
import Fortunes from './components/fortunes';
import './styles.css';

function App(){
  return(
    <div className='App'>
      <h1>Your Fortune:</h1>
      <Fortunes />
    </div>
  );
}

export default App;
