import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './components/Overlay';

function App() { 
  
  return( <div className="app">gg</div>,
  ReactDOM.createPortal(
    <Overlay />, 
    document.querySelector('#overlay'))  
  )  
}


export default App;
