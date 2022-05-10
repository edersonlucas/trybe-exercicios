import React from 'react';
import Pokemon from './Pokemon'
import data from './data'


class Pokedex extends React.Component {
  render() {
    return (
      <div className="containerPokedex">
        <h1>Pokédex</h1>
        <div className="pokedex">
          {data.map((pokemon) => <Pokemon key={pokemon.name} infos={pokemon} />)}
        </div>
      </div>
    );
  }
}

export default Pokedex;