/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList.jsx';
import SearchPokemon from './SearchPokemon.jsx';
import TeamPreview from './TeamPreview.jsx';
import Sidebar from './Sidebar.jsx';
import Weakness from './Weakness.jsx';

const axios = require('axios').default;

const styles = {
  center: {
    textAlign: 'center',
  },
  split: {
    position: 'absolute',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 5000,
  },
};

const styles2 = {
  sidebar: {
    position: 'fixed',
    height: '400px',
  },
  content: {
    marginLeft: '100px',
    width: 'auto',
    position: 'relative',
    overflow: 'auto',
    zIndex: 1,
  },
  info: {
    width: '1440px',
    height: '300px',
    position: 'relative',
    background: '#f55',
  },
};

let firstPokemon = [];

const capitalize = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
};

const App = () => {
  const [activePokemon, setActivePokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState({});
  const [teamMembers, setTeamMembers] = useState([]);

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
    if (teamMembers.length === 6) {
      alert('Already 6 team members');
    } else {
      const newTeam = [...teamMembers];
      const id = pokemonList[name];
      newTeam.push({ id, name: capitalize(name) });
      setTeamMembers(newTeam);
    }
  };

  const handleRemovePokemon = (id) => {
    const newTeam = [...teamMembers];
    newTeam.forEach((pokemon, index) => {
      if (pokemon.id === id) {
        newTeam.pop(index);
      }
    });
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

  const arrOfObj = ['Move', 'Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Total Weak', 'Total Resis'];
  const testRow = ['Type', 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < testRow.length; j++) {
      arrOfObj.push(testRow[j]);
    }
  }

  return (
    <Router>
      <div style={styles2.sidebar}>
        <Sidebar />
      </div>
      <div style={styles2.content} className="content">

        <Switch>
          <Route exact path="/">
            <div style={styles.center}>
              <h1>Pokedex</h1>
            </div>
            <SearchPokemon setPokemon={setActivePokemon} handleSearch={handleSearch} />
            <TeamPreview teamMembers={teamMembers} handleRemovePokemon={handleRemovePokemon} />
            <PokemonList pokemon={activePokemon} handleAddToTeam={handleAddToTeam} />
          </Route>
          <Route exact path="/weakness">
            <div className="weakness">
              <Weakness arrOfObj={arrOfObj} />
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
