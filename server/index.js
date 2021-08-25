const express = require('express');
const bodyParser = require('body-parser');
const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/pokemon/:pokeNum/', (req, res) => {
  let num = req.params.pokeNum;
  P.getPokemonByName(num)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/pokemonNums/', (req, res) => {

  P.resource(`/api/v2/pokemon/?limit=898`)
    .then((data) => {
      // let test = 11;
      let resultObj = {};
      for (let i = 0; i < 898; i++) {
        resultObj[data.results[i].name] = i + 1;
      }
      res.send(resultObj);
    });
});

app.get('/initial', (req, res) => {
  let strArr = [];
  for (let i = 1; i <= 20; i++) {
    strArr.push(`/api/v2/pokemon/${i}`);
  }

  P.resource(strArr)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
