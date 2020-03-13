import React, { Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import DogAvatar from '../DogAvatar';

interface DogListProps {
  list: string[];
}

const DogList: React.FC<DogListProps> = ({ list }) => {
  function renderList(items: string[]) {
    return items.map((item, index) => (
      <Fragment key={String(index)}>
        <ListItem alignItems="center">
          <DogAvatar breedName={item} />
          <ListItemText primary={item} />
        </ListItem>
        {index !== items.length - 1 && (
          <Divider variant="inset" component="li" />
        )}
      </Fragment>
    ));
  }

  return <List className="dog-list">{renderList(list)}</List>;
};

export default DogList;