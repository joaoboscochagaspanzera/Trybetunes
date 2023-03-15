import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>dentro da div de login</p>
      </div>
    );
  }
}

export default Album;
