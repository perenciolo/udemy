import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';

import AlertBtn from './components/AlertBtn';
import DogDetails from './components/DogDetails';
import CreateBeerForm from './CreateBeerForm';

function App() {
  function handleBark() {
    alert('Woof! Woof!');
  }
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <CreateBeerForm />
        <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
        <DogDetails
          name="Linus"
          img="https://placeimg.com/300/300/animals"
          onBark={handleBark}
        />
      </Container>
    </>
  );
}

export default App;
