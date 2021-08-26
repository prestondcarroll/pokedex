/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '5.5rem 5.5rem 5.5rem 5.5rem 5.5rem 5.5rem 5.5rem 5.5rem 5.5rem',
    // gridGap: '1rem',
    gridAutoFlow: 'row',
    background: '#3a5285',
    borderRadius: 20,
    borderStyle: 'outset',
    padding: 30,
  },
  parent : {
    display: 'flex',
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',

    // background: 'white',
    // borderRadius: 5,
    // // boxShadow: '5px 5px 5px black',
    // borderStyle: 'outset',

    right: 0,
    left: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
};

let test = true;
let tracker = 0;

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => {
    tracker++;
    if (tracker === 10) {
      test = !test;
      tracker = 1;
    }

    return (
      <div>
        {test
          ? <div style={{ backgroundColor: '#e7eeff' }}> {obj} </div>
          : <div style={{ backgroundColor: '#d6e2ff' }}> {obj} </div>}
      </div>
    );
  });

  return (
    <div style={styles.parent}>
      <div style={styles.container}>
        {cells}
      </div>
    </div>
  );
}

// body {
//   margin: 40px;
// }

// .box {
//   background-color: lightgrey;
//   color: #fff;
//   border-radius: 5px;
//   padding: 20px;
//   font-size: 150%;
// }

// .wrapper {
//   width: 600px;
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: repeat(5, 100px);
//   grid-template-rows: repeat(5, 100px);
//   grid-auto-flow: column;
// }
