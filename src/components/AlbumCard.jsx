import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { artistId, artistName, collectionId, collectionName,
      collectionPrice, albumImage, releaseDate, trackCount } = this.props;
    return (
      <div>
        <p>{artistId}</p>
        <p>{artistName}</p>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          <p>{collectionId}</p>
        </Link>
        <p>{collectionName}</p>
        <p>{collectionPrice}</p>
        <img src={ albumImage } alt={ artistId } />
        <p>{releaseDate}</p>
        <p>{trackCount}</p>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionPrice: PropTypes.number.isRequired,
  albumImage: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trackCount: PropTypes.number.isRequired,
};

export default AlbumCard;
