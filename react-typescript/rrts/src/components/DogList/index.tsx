import React, { Fragment, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Typography } from '@material-ui/core';

import DogAvatar from '../DogAvatar';
import { DogInfo } from '../DogWrapper';

interface DogListProps {
  list: DogInfo[];
  handler: (dog: DogInfo) => void;
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: 250
  },
  activeClass: {
    backgroundColor: 'rgba(33,33,33,0.2)'
  }
});

const DogList: React.FC<DogListProps> = ({ list, handler }) => {
  const classes = useStyles();
  const [active, setActive] = useState<string>(list[0] ? list[0].uri : '');

  function handleClick(dog: DogInfo) {
    handler(dog);
    setActive(dog.uri);
  }

  function renderList(breeds: DogInfo[]) {
    return breeds.map((dog: DogInfo, index: number) => (
      <Fragment key={String(index)}>
        <ListItem
          alignItems="center"
          className={active === dog.uri ? classes.activeClass : ''}
          button
          onClick={handleClick.bind(null, dog)}
        >
          <DogAvatar breedName={dog.name} dogImg={dog.uri} />
          <ListItemText
            primary={
              <Typography>
                <strong>{dog.name}</strong>
              </Typography>
            }
            secondary={<Typography>Number of scolds: {dog.scold}</Typography>}
          />
        </ListItem>
        {index !== breeds.length - 1 && (
          <Divider variant="inset" component="li" />
        )}
      </Fragment>
    ));
  }

  return <List className="dog-list">{renderList(list)}</List>;
};

export default DogList;
