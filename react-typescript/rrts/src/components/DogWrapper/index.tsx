import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';

import DogList from '../DogList';
import DogDetails from '../DogDetails';

interface DogListSchema {
  message: {
    [key: string]: string[];
  };
  status: string;
}

export default function DogWrapper() {
  const [loading, setLoading] = useState(false);
  const [breeds, setBreeds] = useState<string[]>([]);

  function handleBark(): void {
    alert('Woof! Woof!');
  }

  async function fetching<T extends DogListSchema>(
    apiUrl: string
  ): Promise<boolean> {
    setLoading(true);

    try {
      const response: T = await fetchData<T>(apiUrl);

      if (!response || !Object.keys(response).includes('message')) {
        throw new Error();
      }

      const breedKeys = Object.keys(response.message);
      const breedNames = _.map(breedKeys, _.capitalize);

      setLoading(false);
      setBreeds((oldState: string[]) => [...oldState, ...breedNames]);

      return Promise.resolve(true);
    } catch (error) {
      setLoading(false);
      console.log(error);

      return Promise.reject(false);
    }
  }

  const fetchDogs = useCallback(fetching, []);

  function handleGetImage(src: string) {
    console.log(src);
  }

  useEffect(() => {
    fetchDogs<DogListSchema>(`${API_URI}/breeds/list/all`);
  }, [fetchDogs]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm>
          <h2>Dog List</h2>
          {loading ? (
            <CircularProgress />
          ) : (
            <DogList
              list={breeds}
              handler={(dog: string) => console.log(dog)}
              onGetImg={handleGetImage}
            />
          )}
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
    </>
  );
}
