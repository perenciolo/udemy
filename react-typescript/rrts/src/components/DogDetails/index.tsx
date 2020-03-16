import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: 250
  }
});

interface IDogDetailsProps {
  name: string;
  img: string;
  scold?: number;
  onBark: () => void;
  onScold: () => void;
}

export default function DogDetails({
  name,
  img,
  onBark,
  onScold,
  scold
}: IDogDetailsProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
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
          onClick={onScold}
          size="small"
          color="primary"
          className="scolding-counter--add"
        >
          Scold the dog
        </Button>
      </CardActions>
    </Card>
  );
}
