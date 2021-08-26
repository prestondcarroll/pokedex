/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember.jsx';

const styles = {
  container: {
    width: 900,
    height: 190,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: 5,
    // boxShadow: '5px 5px 5px black',
    borderStyle: 'outset',

    right: 0,
    left: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 40,
    // justifyContent: 'space-between',
  },
  item: {
    margin: '20px',

  },
};

const TeamPreview = (props) => {
  const test = 1;
  // const [teamMembers, setTeamMembers] = useState([]);

  // useEffect(() => {
  //   setTeamMembers(props.teamMembers);
  // }, [props.teamMembers]);

  return (
    <div style={styles.parent}>
      <h1> My Team</h1>
    <div key={props.teamMembers} style={styles.container}>
      {props.teamMembers.map((pokemon) => (
        <div style={styles.item}>
          <TeamMember pokemon={pokemon} handleRemovePokemon={props.handleRemovePokemon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamPreview;
