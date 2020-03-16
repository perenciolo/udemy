import React, { Fragment, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

import DogAvatar from '../DogAvatar';

interface DogListProps {
  list: string[];
  handler: (dog: string) => void;
  onGetImg: (uri: string) => void;
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

const DogList: React.FC<DogListProps> = ({ list, handler, onGetImg }) => {
  const classes = useStyles();
  const [active, setActive] = useState<{
    active: boolean;
    target: null | number;
  }>({
    active: false,
    target: null
  });

  function handleClick(dog: string, index: number) {
    handler(dog);
    setActive({
      active: true,
      target: index
    });
  }

  function renderList(items: string[]) {
    return items.map((item: string, index: number) => (
      <Fragment key={String(index)}>
        <ListItem
          alignItems="center"
          className={
            active.active && active.target === index ? classes.activeClass : ''
          }
          button
          onClick={handleClick.bind(null, item, index)}
        >
          <DogAvatar breedName={item} onGetImg={onGetImg} />
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
