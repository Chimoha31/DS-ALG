const fetch = require("node-fetch");

// Fetch with Promises
fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Fetch pokemon with async / await 
const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchPokemon(2);
