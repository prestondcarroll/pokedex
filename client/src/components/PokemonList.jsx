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
    // justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  }
};

const PokemonList = () => {

  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }

  return (
    <div>
      <div style={styles.container}>
        <Pokemon />
        {arr.map(() => (<Pokemon />))}
      </div>


    </div>
  );
};

export default PokemonList;
