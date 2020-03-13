import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';

import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';

import DogList from '../DogList';

interface DogListSchema {
  [key: string]: {
    [key: string]: string[];
  };
}

export default function DogListWrapper() {
  const [breeds, setBreeds] = useState<string[]>([]);

  const fetchDogs = useCallback((fetchedData: { [key: string]: string[] }) => {
    const breedKeys = Object.keys(fetchedData);
    const breedNames = _.map(breedKeys, _.capitalize);
    setBreeds((oldState: string[]) => [...oldState, ...breedNames]);
  }, []);

  useEffect(() => {
    fetchData<DogListSchema>(`${API_URI}/breeds/list/all`).then(res => {
      if (Boolean(res.message)) {
        fetchDogs(res.message);
      }
    });
  }, [fetchDogs]);

  return <DogList list={breeds} />;
}
