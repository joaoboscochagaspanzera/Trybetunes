import React from 'react';
import Header from '../components/Header';

const MINARTISTNAME = 2;

class search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { artistName } = this.state;
    const searchButton = artistName.length < MINARTISTNAME;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          data-testid="search-artist-input"
          type="text"
          name="artistName"
          value={ artistName }
          onChange={ this.onInputChange }
        />
        <button
          data-testid="search-artist-button"
          disabled={ searchButton }
          onClick={ this.saveName }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default search;
