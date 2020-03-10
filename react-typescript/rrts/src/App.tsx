import React from 'react';
import './App.css';

import AlertBtn from './components/AlertBtn';
import DogDetails from './components/DogDetails';
import CreateBeerForm from './CreateBeerForm';

function App() {
  function handleBark() {
    alert('Woof! Woof!');
  }
  return (
    <div className="container">
      <div className="row">
        <CreateBeerForm />
      </div>
      <div className="row">
        <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
      </div>
      <div className="row">
        <DogDetails
          name="Linus"
          img="https://placeimg.com/300/300/animals"
          onBark={handleBark}
        />
      </div>
    </div>
  );
}

export default App;
