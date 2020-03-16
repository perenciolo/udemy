import React from 'react';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

interface DogAvatarProps {
  breedName: string;
  dogImg: string;
}

const DogAvatar: React.FC<DogAvatarProps> = ({ breedName, dogImg }) => {
  return (
    <ListItemAvatar>
      <Avatar alt={breedName} src={dogImg} />
    </ListItemAvatar>
  );
};

export default DogAvatar;
