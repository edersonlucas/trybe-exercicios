import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { infos } = this.props;
    const { name, type, averageWeight, image, moreInfo } = infos;
    const altImage = `pic of ${name}`
    return (
      <a href={moreInfo} target="_blank" className='containerPokemon' rel="noreferrer">
        <div className='infosPokemon'>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={altImage}/>
      </a>
    );
  }
}


Pokemon.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    moreInfo: PropTypes.string,
  })
}

export default Pokemon;