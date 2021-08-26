/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

const TeamMember = (props) => {
  const [visibility, setVisiblity] = useState('hidden');

  const styles = {
    center: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    box: {
      position: 'relative',
      backgroundColor: 'white',
    },
    icon: {
      visibility: `${visibility}`,
      color: 'white',
      padding: '10px',
      width: '-20px',
      height: '20px',
      position: 'absolute',
      right: '-10px',
      top: '-10px',
    },
  };

  const handleHover = (event) => {
    setVisiblity('visible');
  };

  const handleLeave = (event) => {
    setVisiblity('hidden');
  };

  const handleRemovePokemon = (event) => {
    console.log('pokemon removed');
    props.handleRemovePokemon(props.pokemon.id);
  }

  return (
    <div style={styles.box} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`} />
      <p style={styles.center}>{props.pokemon.name}</p>
      <div style={styles.icon} onClick={handleRemovePokemon}>
        <img width="30px" height="30px" src="https://i.imgur.com/ZvrXaSd.png" alt="" />
      </div>
    </div>
  );
};

export default TeamMember;
