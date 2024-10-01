import React from 'react';
import './App.css';


import Images from './component/Images';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery</h1>
      </header>
      {/* Render the Images component */}
      <Images />
      
    </div>
  );
}

export default App;
