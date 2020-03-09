import React from 'react';
import './App.css';

import AlertBtn from './components/AlertBtn';
import DogDetails from './components/DogDetails';

function App() {
  function handleBark() {
    alert('Woof! Woof!');
  }
  return (
    <div className="App">
      <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
      <DogDetails
        name="Linus"
        img="https://placeimg.com/300/300/animals"
        onBark={handleBark}
      />
    </div>
  );
}

export default App;
