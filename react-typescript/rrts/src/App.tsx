import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';

import AlertBtn from './components/AlertBtn';
import CreateBeerForm from './components/CreateBeerForm';
import CreateBeerFormikForm from './components/CreateBeerFormikForm';
import DogWrapper from './components/DogWrapper';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <DogWrapper />
        <hr />
        <h2>With Formik</h2>
        <CreateBeerFormikForm />
        <hr />
        <h2>Default Form</h2>
        <CreateBeerForm />
        <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
      </Container>
    </>
  );
}

export default App;
