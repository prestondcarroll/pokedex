import React, { useState, useEffect } from 'react';


const styles = {
  center: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
const TeamMember = (props) => {
  const test = 1;


  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`} />
      <p style={styles.center}>{props.pokemon.name}</p>
    </div>
  );
};

export default TeamMember;
