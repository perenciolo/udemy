import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';

import AlertBtn from './components/AlertBtn';
import CreateBeerForm from './components/shared/Forms/non-formik/CreateBeerForm';
import DogWrapper from './components/DogWrapper';
import CreateBeerFormik from './components/shared/Forms/CreateBeerFormik';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <DogWrapper />
        <hr />
        <h2>With Formik CURRENT SHARED</h2>
        <CreateBeerFormik />
        <hr />
        <h2>Default Form</h2>
        <CreateBeerForm />
        <AlertBtn btnTxt="Alert Me" alertTxt="Hello World" />
      </Container>
    </>
  );
}

export default App;
