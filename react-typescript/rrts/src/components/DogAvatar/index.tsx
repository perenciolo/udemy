import React, { useCallback, useEffect, useState } from 'react';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { fetchData } from '../../utils/Fetch';
import { API_URI } from '../../utils/Constants';

interface DogAvatarProps {
  breedName: string;
}

const DogAvatar: React.FC<DogAvatarProps> = ({ breedName }) => {
  const [dogImg, setDogImg] = useState('');

  const fetchDogImg = useCallback(async (breedName: string): Promise<void> => {
    const response: { [key: string]: string } = await fetchData(
      `${API_URI}/breed/${breedName.toLowerCase()}/images/random`
    );

    if (response.message) {
      setDogImg(response.message);
      return;
    }

    setDogImg('/static/images/avatar/1.jpg');
  }, []);

  useEffect(() => {
    fetchDogImg(breedName);
  }, [breedName, fetchDogImg]);

  return (
    <ListItemAvatar>
      <Avatar alt={breedName} src={dogImg} />
    </ListItemAvatar>
  );
};

export default DogAvatar;
