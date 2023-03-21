import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { song } = this.props;
    const { trackName } = song;
    return (
      <div>
        <h5>{trackName}</h5>
        <audio data-testid="audio-component" controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
