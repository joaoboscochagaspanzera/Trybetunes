import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      collectionName: '',
      musics: [],
      favoriteMusics: [],
    };
  }

  componentDidMount() {
    this.searchMusics();
    this.getSavedFavoriteSongs();
  }

  getSavedFavoriteSongs = async () => {
    const response = await getFavoriteSongs();
    this.setState({
      favoriteMusics: response,
    });
  };

  searchMusics = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await getMusics(id);
    this.setState({
      artistName: response[0].artistName,
      collectionName: response[0].collectionName,
      musics: response,
    });
  };

  render() {
    const { artistName, collectionName, musics, favoriteMusics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h1 data-testid="artist-name">{artistName}</h1>
        <h2 data-testid="album-name">{collectionName}</h2>
        {
          musics.filter((_music, index) => index !== 0)
            .map((music) => (<MusicCard
              key={ music.trackId }
              song={ music }
              alreadyFavorite={ favoriteMusics
                .some((favoriteMusic) => favoriteMusic.trackId === music.trackId) }
            />))
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
