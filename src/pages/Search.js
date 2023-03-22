import React from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const MINARTISTNAME = 2;
const SPACE = ' ';

class search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      lastArtist: '',
      isLoading: false,
      isRequested: false,
      albums: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  searchArtist = async () => {
    const { artistName } = this.state;
    this.setState({
      isLoading: true,
    });
    const data = await searchAlbumsAPI(artistName);
    this.setState({
      isLoading: false,
      isRequested: true,
      lastArtist: artistName,
      artistName: '',
      albums: data,
    });
  };

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { artistName, isLoading, isRequested, lastArtist, albums } = this.state;
    const searchButton = artistName.length < MINARTISTNAME;
    const isAlbum = albums.length > 0;
    return (
      <div data-testid="page-search">
        <Header />
        {
          isLoading ? <Loading />
            : (
              <>
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
                  onClick={ this.searchArtist }
                >
                  Pesquisar
                </button>
              </>
            )
        }
        {
          isRequested
            ? (
              <p>
                Resultado de álbuns de:
                { SPACE }
                { lastArtist }
              </p>
            )
            : <p />
        }
        {albums.map((album) => (
          <AlbumCard
            key={ album.artistId }
            artistId={ album.artistId }
            artistName={ album.artistName }
            collectionId={ album.collectionId }
            collectionName={ album.collectionName }
            collectionPrice={ album.collectionPrice }
            albumImage={ album.artworkUrl100 }
            releaseDate={ album.releaseDate }
            trackCount={ album.trackCount }
          />
        ))}
        {
          isAlbum
            ? (
              <AlbumCard
                key={ albums.artistId }
                artistName={ albums.artistName }
              />
            )
            : <p>Nenhum álbum foi encontrado</p>
        }
      </div>
    );
  }
}

export default search;
