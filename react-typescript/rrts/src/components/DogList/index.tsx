import React, { Fragment, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Typography } from '@material-ui/core';
import { useStore } from 'effector-react';

import DogAvatar from '../DogAvatar';
import { DogInfo } from '../DogWrapper';
import { selectActiveDog } from '../../store/ActiveDog';
import { Filter } from '../../store/Filter';

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

const DogList: React.FC = () => {
  const classes = useStyles();
  const [active, setActive] = useState('');
  const dogList = useStore(Filter);

  function handleClick(dog: DogInfo) {
    selectActiveDog(dog);
    setActive(dog.name);
  }

  function renderList(breeds: DogInfo[]) {
    if (!breeds || !breeds.length) {
      return <div>No dogs found for this filter</div>;
    }
    return breeds.map((dog: DogInfo, index: number) => (
      <Fragment key={String(index)}>
        <ListItem
          alignItems="center"
          className={
            active === dog.name || (active === '' && index === 0)
              ? classes.activeClass
              : ''
          }
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

  return <List className="dog-list">{renderList(dogList)}</List>;
};

export default DogList;
