/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember.jsx';

const styles = {
  container: {
    width: 900,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'blue',

    right: 0,
    left: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
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
    <div key={props.teamMembers} style={styles.container}>
      {props.teamMembers.map((pokemon) => (
        <div style={styles.item}>
          <TeamMember pokemon={pokemon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamPreview;
