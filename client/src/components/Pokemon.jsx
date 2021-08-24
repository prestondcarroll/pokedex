import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: 40,
  },
  media: {
    height: 100,
    width: '33%',
    marginLeft: '33%',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    display: 'inline-block',
    fontSize: 14,
    paddingRight: 130,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Type
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Number
        </Typography>
        <Typography variant="h5" component="h2">
          Name
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
          title="Paella dish"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Add to team</Button>
      </CardActions>
    </Card>
  );
}
