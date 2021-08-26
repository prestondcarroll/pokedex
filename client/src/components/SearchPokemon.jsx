import React, { useState } from 'react';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
);
const styles = {
  container: {
    width: 350,
    height: 55,
    display: 'flex',
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',

    background: 'white',
    borderRadius: 5,
    borderStyle: 'outset',

    right: 0,
    left: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
};

const SearchPokemon = (props) => {
  const classes = useStyles();

  const[query, setQuery] = useState('');
  const onChange = event => {
    setQuery(event.target.value);
  };
  const onClick = (event) => {
    props.handleSearch(query);
  }

  return (
    <div style={styles.container}>
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search ' }}
        value={query}
        onChange={onChange}
      />
    </div>
      <Button variant="contained" onClick={onClick}>Submit</Button>
    </div>
  );
};

export default SearchPokemon;
