/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList.jsx';
import Pokemon from './Pokemon.jsx';
import SearchPokemon from './SearchPokemon.jsx';
import TeamPreview from './TeamPreview.jsx';

const axios = require('axios').default;

const styles = {
  center: {
    textAlign: 'center',
  },
};

let firstPokemon = [];

const App = () => {
  const [activePokemon, setActivePokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState({});
  const [teamMembers, setTeamMembers] = useState([{ id: 373, name: 'temp' }, { id: 6, name:'temp' }]);

  const handleSearch = (query) => {
    const id = pokemonList[query];
    if (id !== undefined) {
      axios.get(`/pokemon/${id}`)
        .then((results) => {
          setActivePokemon([results.data]);
        });
    } else if (query === '') {
      setActivePokemon(firstPokemon);
    } else {
      setActivePokemon([]);
    }
  };

  const handleAddToTeam = (name) => {
    let newTeam = [...teamMembers];
    let id = pokemonList[name];
    newTeam.push({ id, name});
    setTeamMembers(newTeam);
  };

  useEffect(() => {
    axios.get('/pokemonNums/')
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get('/initial')
      .then((response) => {
        firstPokemon = response.data;
        setActivePokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div style={styles.center}>
        <h1>Pokedex</h1>
      </div>
      <SearchPokemon setPokemon={setActivePokemon} handleSearch={handleSearch} />
      <TeamPreview teamMembers={teamMembers} />
      <PokemonList pokemon={activePokemon} handleAddToTeam={handleAddToTeam} />
    </div>
  );
};

export default App;
