import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';

import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

import DogList from '../DogList';
import DogDetails from '../DogDetails';
import DogFilter from '../DogFilter';
import { getDogs } from '../../store/Dogs';
import { IsLoading } from '../../store/IsLoading';

export interface DogListSchema {
  message: {
    [key: string]: string[];
  };
  status: string;
}

export interface DogInfo {
  name: string;
  uri: string;
  scold?: number;
}

export default function DogWrapper() {
  const [loading, setLoading] = useState(true);

  const nowLoading = useStore(IsLoading);

  useEffect(() => {
    getDogs({});
  }, []);

  useEffect(() => {
    setLoading(nowLoading);
  }, [nowLoading]);

  function handleBark(): void {
    alert('Woof! Woof!');
  }

  return (
    <>
      {loading ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3} className="dogs-wrapper">
          <Grid item xs={12} sm>
            <h2>Dog List</h2>
            <DogList />
          </Grid>
          <Grid item xs={12} sm>
            <h2>Dog Details</h2>
            <DogDetails onBark={handleBark} />
            <Grid item xs={12}>
              <DogFilter />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
