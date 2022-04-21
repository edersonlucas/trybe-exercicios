const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const tratarRetorno = (error, mensagem) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log(mensagem);
  return mensagem;
}

const filtroBulbasauro = (pokemon) => {
  return pokemon.name === 'Bulbasaur'
}

// getPokemonDetails(filtroBulbasauro, tratarRetorno);

module.exports = {
  getPokemonDetails, tratarRetorno
};