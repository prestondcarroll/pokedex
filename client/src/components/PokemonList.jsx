/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable padded-blocks */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon.jsx';

const axios = require('axios').default;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40,
  },
};

const PokemonList = (props) => {

  const i = 1;

  if (props.pokemon.length === 0) {
    return (
      <div>
        <h2>No pokemon found</h2>
      </div>
    );
  }

  return (
    <div>
      <div style={styles.container}>
        <Pokemon />
        {props.pokemon.map((element) => (
          <Pokemon
            pokemon={element}
            handleAddToTeam={props.handleAddToTeam}
          />
        ))}
      </div>

    </div>
  );
};

export default PokemonList;
