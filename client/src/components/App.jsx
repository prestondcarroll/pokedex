import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList.jsx';
import Pokemon from './Pokemon.jsx';
import SearchPokemon from './SearchPokemon.jsx'

const axios = require('axios').default;

const styles = {
  center: {
    textAlign: 'center',
  }
}

const App = () => {
  const i = 0;

  return (
    <div>
      <div style={styles.center}>
        <h1>Pokedex</h1>
      </div>
      <SearchPokemon />
      <PokemonList />
    </div>
  );
};

export default App;
