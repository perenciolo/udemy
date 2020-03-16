import React, { useCallback, useEffect, useState } from 'react';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';
import { CircularProgress } from '@material-ui/core';

interface DogAvatarProps {
  breedName: string;
  onGetImg: (uri: string) => void;
}

const DogAvatar: React.FC<DogAvatarProps> = ({ breedName, onGetImg }) => {
  const [loading, setLoading] = useState(false);
  const [dogImg, setDogImg] = useState('');

  const fetchDogImg = useCallback(
    async (breedName: string): Promise<void> => {
      setLoading(true);

      try {
        const response = await fetchData<{ [key: string]: string }>(
          `${API_URI}/breed/${breedName.toLowerCase()}/images/random`
        );

        if (!response || !Object.keys(response).includes('message')) {
          throw new Error();
        }

        setDogImg(response.message);
        onGetImg(response.message);
        setLoading(false);
      } catch (error) {
        setDogImg('/static/images/avatar/1.jpg');
        onGetImg('/static/images/avatar/1.jpg');
        console.log(error);
        setLoading(false);
      }
    },
    [onGetImg]
  );

  useEffect(() => {
    fetchDogImg(breedName);
  }, [breedName, fetchDogImg]);

  return (
    <ListItemAvatar>
      {loading ? <CircularProgress /> : <Avatar alt={breedName} src={dogImg} />}
    </ListItemAvatar>
  );
};

export default DogAvatar;
