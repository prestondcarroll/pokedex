/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const types = {
  normal: '#c2c2a1',
  fighting: '#d6b591',
  flying: '#bab0d5',
  poison: '#7c538c',
  ground: '#b1736c',
  rock: '#a6aab6',
  bug: '#c3ce75',
  ghost: '#735797',
  steel: '#ccccde',
  fire: '#f66c6c',
  water: '#609fb5',
  grass: '#48d0b0',
  electric: '#fbd86f',
  psychic: '#9b7fa6',
  ice: '#7fccec',
  dragon: '#f9be00',
  dark: '#333333',
  fairy: '#f469a9',
};

const getType = (pokemon) => {
  const type1 = pokemon.types[0].type.name;
  let type2 = '';
  if (pokemon.types[1] !== undefined) {
    type2 = pokemon.types[1].type.name;
  }

  return [type1, type2];
};

const capitalize = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
};

const Pokemon = (props) => {
  const [typeColor, setTypeColor] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      height: 600,
      width: 600,
      marginTop: 100,
      marginLeft: 'auto',
      marginRight: 'auto',
      background: `${typeColor}`,
      borderRadius: 25,
      borderStyle: 'outset',
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 'large',
    },
    overlay: { zIndex: 1000 },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const useStyles = makeStyles({
    card: {
      height: 250,
      width: 400,
      margin: 40,
      color: 'white',
      backgroundColor: `${typeColor}`,

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
      paddingRight: 120,
      color: 'white',
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      color: 'white',
    },
  });

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    if (props.pokemon !== undefined && props.pokemon.id !== undefined) {
      setData(props.pokemon);
      setType(getType(props.pokemon));
      setTypeColor(types[props.pokemon.types[0].type.name]);
    }
  }, [props.pokemon]);

  const handleAddToTeam = () => {
    props.handleAddToTeam(data.name, type);
  };

  if (data !== '') {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {capitalize(type[0])}
            {type[1] !== '' ? ' / ' + capitalize(type[1]) : ''}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {'#' + data.id}
          </Typography>
          <Typography variant="h5" component="h2">
            {capitalize(data.name)}
          </Typography>
          <CardMedia
            className={classes.media}
            image={
              data.id <= 649
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
            }
            title={`${data.name}`}
          />
        </CardContent>
        <CardActions className={classes.button}>
          <Button size="small" onClick={handleAddToTeam}>Add to team</Button>
          <Button onClick={() => { setModalIsOpen(true); }}> Expand</Button>
        </CardActions>

        <Modal style={customStyles} isOpen={modalIsOpen}>
          <div style={customStyles.center}>
          <h2>{capitalize(data.name)}</h2>
          </div>
          <div style={customStyles.center}>
          <p>
            {capitalize(type[0])}
            {type[1] !== '' ? ' / ' + capitalize(type[1]) : ''}
          </p>
          </div>
          <div style={customStyles.center}>
            <img
              src={
              data.id <= 649
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
            }
            />
          </div>
          <p>
            Height:
            {data.height}
          </p>
          <p>
            Weight:
            {data.weight}
          </p>
          <p>
            Abilities:
            {data.abilities.map((element) => (
              <li>{capitalize(element.ability.name)}</li>
            ))}
          </p>

          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>

      </Card>
    );
  }

  return (<div />);
};

export default Pokemon;
