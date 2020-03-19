import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStore } from 'effector-react';

import { ActiveDog, scoldActiveDog } from '../../store/ActiveDog';
import { changeDog } from '../../store/Dogs';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: 250
  }
});

interface DogDetailsProps {
  onBark: () => void;
}

export default function DogDetails({ onBark }: DogDetailsProps) {
  const classes = useStyles();

  const activeDog = useStore(ActiveDog);
  const { name, uri, scold } = activeDog;

  function handleScold() {
    const scold = activeDog && activeDog.scold ? activeDog.scold + 1 : 1;
    const newDog = { ...activeDog, scold };
    scoldActiveDog(newDog);
    changeDog(newDog);
  }

  return (
    (name && (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={uri} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {Boolean(scold) && (
                <>
                  Dog scolded <span className="scolding-counter">{scold}</span>{' '}
                  times!
                </>
              )}

              {Boolean(!scold) &&
                "Not scolded yet. The dog's behavior is awesome!"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            className="bark-action"
            onClick={onBark}
          >
            Bark!
          </Button>
          <Button
            onClick={handleScold}
            size="small"
            color="primary"
            className="scolding-counter--add"
          >
            Scold the dog
          </Button>
        </CardActions>
      </Card>
    )) || <div></div>
  );
}
