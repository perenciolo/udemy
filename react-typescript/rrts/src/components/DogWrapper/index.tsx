import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';

import DogList from '../DogList';
import DogDetails from '../DogDetails';
import DogFilter from '../DogFilter';

interface DogListSchema {
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
  const [loading, setLoading] = useState(false);
  const [dogsData, setDogsData] = useState<DogInfo[]>([]);
  const [filteredDogsData, setFilteredDogsData] = useState<DogInfo[]>([]);
  const [activeDog, setActiveDog] = useState<DogInfo>({
    name: 'Linus',
    uri: 'https://placeimg.com/640/480/animals'
  });

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
      const breedImgs = breedKeys.map(
        async (breedName: string) => await fetchDogImg(breedName)
      );
      const resolvedBreedImgs = await Promise.all(breedImgs);
      const breedNames = _.map(breedKeys, _.capitalize);

      const buildDogsData: DogInfo[] = breedNames.map(
        (dogName: string, index: number) => ({
          name: dogName,
          uri: resolvedBreedImgs[index],
          scold: 0
        })
      );

      setDogsData(buildDogsData);
      setFilteredDogsData(buildDogsData);
      setActiveDog(buildDogsData[0]);
      setLoading(false);
      return Promise.resolve(true);
    } catch (error) {
      setLoading(false);
      console.log(error);

      return Promise.reject(false);
    }
  }

  const fetchDogImg = useCallback(async (breedName: string): Promise<
    string
  > => {
    try {
      const response = await fetchData<{ [key: string]: string }>(
        `${API_URI}/breed/${breedName.toLowerCase()}/images/random`
      );

      if (!response || !Object.keys(response).includes('message')) {
        throw new Error();
      }

      return Promise.resolve(response.message);
    } catch (error) {
      console.log(error);

      return Promise.reject(error);
    }
  }, []);

  const fetchDogs = useCallback(fetching, []);

  useEffect(() => {
    fetchDogs<DogListSchema>(`${API_URI}/breeds/list/all`);
  }, [fetchDogs]);

  function handleBark(): void {
    alert('Woof! Woof!');
  }

  function handleScold() {
    const currentScolding = activeDog['scold'] ? activeDog['scold'] + 1 : 1;
    const currentDog = { ...activeDog, scold: currentScolding };
    setActiveDog(currentDog);

    // Change scolding on dogsData array.
    const newDogsData = filteredDogsData.map((dog: DogInfo) => {
      if (dog.name === activeDog.name) {
        return {
          name: dog.name,
          uri: dog.uri,
          scold: currentScolding
        };
      }
      return dog;
    });
    setFilteredDogsData(newDogsData);
  }

  function handleClick(dog: DogInfo) {
    setActiveDog((oldState: DogInfo) => ({
      ...oldState,
      ...dog
    }));
  }

  function handleFiltering(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (value === 'all') {
      setFilteredDogsData(dogsData);
    } else {
      setFilteredDogsData(
        dogsData.filter(dogs => dogs.name.toLowerCase().startsWith(value))
      );
    }
  }

  return (
    <>
      {loading ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm>
            <h2>Dog List</h2>
            <DogList list={filteredDogsData} handler={handleClick} />
          </Grid>
          <Grid item xs={12} sm>
            <h2>Dog Details</h2>
            <DogDetails
              name={activeDog.name}
              img={activeDog.uri}
              scold={activeDog.scold}
              onBark={handleBark}
              onScold={handleScold}
            />
            <Grid item xs={12}>
              <DogFilter handleChange={handleFiltering} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
