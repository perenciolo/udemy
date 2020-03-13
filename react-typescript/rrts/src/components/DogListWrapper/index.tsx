import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { CircularProgress } from '@material-ui/core';

import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';

import DogList from '../DogList';

interface DogListSchema {
  message: {
    [key: string]: string[];
  };
  status: string;
}

export default function DogListWrapper() {
  const [loading, setLoading] = useState(false);
  const [breeds, setBreeds] = useState<string[]>([]);

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

  useEffect(() => {
    fetchDogs<DogListSchema>(`${API_URI}/breeds/list/all`);
  }, [fetchDogs]);

  return <>{loading ? <CircularProgress /> : <DogList list={breeds} />}</>;
}
