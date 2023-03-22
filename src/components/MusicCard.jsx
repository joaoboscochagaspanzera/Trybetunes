import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isFavorite: props.alreadyFavorite || false,
    };
  }

  handleChangeFavorite = ({ target }) => {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  };

  handleClickAddFavorite = async (music) => {
    this.setState({
      isLoading: true,
    });
    await addSong(music);
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { song, alreadyFavorite } = this.props;
    const { trackName, trackId } = song;
    const { isLoading, isFavorite } = this.state;
    return (
      <div>
        <h5>{trackName}</h5>
        <audio data-testid="audio-component" controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <label data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          {
            isLoading ? <Loading />
              : (
                <input
                  type="checkbox"
                  name="isFavorite"
                  checked={ alreadyFavorite || isFavorite }
                  onChange={ this.handleChangeFavorite }
                  onClick={ () => this.handleClickAddFavorite(song) }
                />
              )
          }
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  alreadyFavorite: PropTypes.bool.isRequired,
};

export default MusicCard;
