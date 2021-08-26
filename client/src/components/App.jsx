/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './PokemonList.jsx';
import SearchPokemon from './SearchPokemon.jsx';
import TeamPreview from './TeamPreview.jsx';
import Sidebar from './Sidebar.jsx';
import Weakness from './Weakness.jsx';
import types from './helper/types.js';

const axios = require('axios').default;

const styles = {
  center: {
    textAlign: 'center',
    margin: 30,
  },
  split: {
    position: 'absolute',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 5000,
  },
  parent: {
    fontFamily: 'Roboto',
  },
};

const styles2 = {
  sidebar: {
    position: 'fixed',
  },
  content: {
    marginLeft: '100px',
    width: 'auto',
    position: 'relative',
    overflow: 'auto',
    zIndex: 1,
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

  const handleAddToTeam = (name, pokeTypes) => {
    if (teamMembers.length === 6) {
      alert('Already 6 team members');
    } else {
      const newTeam = [...teamMembers];
      const id = pokemonList[name];
      const resists = getTypeResists(pokeTypes);
      newTeam.push({ id, name: capitalize(name), resists });
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

  useEffect(() => {
    if (teamMembers[0] !== undefined) {
      updateTypeChart(teamMembers);
    }
  }, [teamMembers]);

  const capitalize = (string) => {
    if (typeof string === 'string') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return '';
  };

  const arrOfObj = ['Move', 'Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Weak', 'Resis'];
  // const testRow = ['Type', 0, 0, 0, 0, 0, 0, 0, 0];
  const typesArr = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

  const updateTypeChart = (newTeam) => {
    for (let i = 0; i < 6; i++) {
      if (newTeam[i] !== undefined) {
        arrOfObj[i + 1] = newTeam[i].name;
      } else {
        arrOfObj[i + 1] = '-';
      }
    }

    for (let i = 0; i < typesArr.length; i++) {
      let weak = 0;
      let resist = 0;
      arrOfObj.push(capitalize(typesArr[i]));
      for (let j = 0; j < 6; j++) {
        if (newTeam[j] !== undefined) {
          if (newTeam[j].resists[typesArr[i]] === 1) {
            arrOfObj.push('-');
          } else {
            if (newTeam[j].resists[typesArr[i]] < 1) {
              resist++;
            } else if (newTeam[j].resists[typesArr[i]] > 1) {
              weak++;
            }
            arrOfObj.push(newTeam[j].resists[typesArr[i]]);
          }
        } else {
          arrOfObj.push('-');
        }
      }

      weak === 0 ? arrOfObj.push('-') : arrOfObj.push(weak);
      resist === 0 ? arrOfObj.push('-') : arrOfObj.push(resist);
    }
  };

  const combineTypes = (type1, type2) => {
    const newObj = {};
    Object.keys(type1).forEach((type) => {
      newObj[type] = type1[type] * type2[type];
    });
    return newObj;
  };

  const getTypeResists = (pokeType) => {
    let resists = types[pokeType[0]];
    if (pokeType[1] !== '') {
      resists = combineTypes(types[pokeType[0]], types[pokeType[1]]);
    }
    return resists;
  };

  return (
    <div style={styles.parent}>
      <Router>
        <div style={styles2.sidebar}>
          <Sidebar />
        </div>
        <div style={styles2.content} className="content">

          <Switch>
            <Route exact path="/">
              <div style={styles.center}>
                <img src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" /> <br></br>
                <img width='60' height='60' src="https://yt3.ggpht.com/ytc/AAUvwnhN8gx40brxAD1igUT6osZYDY0clhmGze4oQIpn=s900-c-k-c0x00ffffff-no-rj"/>
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
    </div>
  );
};

export default App;
