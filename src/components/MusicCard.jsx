import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isChecked: false,
    };
  }

  addFavorite = async () => {
    const { song } = this.props;
    this.setState({
      isLoading: true,
    });
    await addSong(song);
    this.setState({
      isLoading: false,
      isChecked: true,
    });
  };

  render() {
    const { song } = this.props;
    const { trackName, trackId } = song;
    const { isLoading, isChecked } = this.state;
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
                  checked={ isChecked }
                  onChange={ this.addFavorite }
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
};

export default MusicCard;
