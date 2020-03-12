import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';

import AlertBtn from './components/AlertBtn';
import DogDetails from './components/DogDetails';
import CreateBeerForm from './components/CreateBeerForm';
import CreateBeerFormikForm from './components/CreateBeerFormikForm';
import DogListWrapper from './components/DogListWrapper';

function App() {
  function handleBark() {
    alert('Woof! Woof!');
  }
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <h2>Dog List</h2>
        <DogListWrapper />
        <h2>With Formik</h2>
        <CreateBeerFormikForm />
        <hr />
        <h2>Default Form</h2>
        <CreateBeerForm />
        <hr />
        <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
        <hr />
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
