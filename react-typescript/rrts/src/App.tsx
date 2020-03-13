import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm>
            <h2>Dog List</h2>
            <DogListWrapper />
          </Grid>
          <Grid item xs={12} sm>
            <h2>Dog Details</h2>
            <DogDetails
              name="Linus"
              img="https://placeimg.com/300/300/animals"
              onBark={handleBark}
            />
          </Grid>
        </Grid>
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
