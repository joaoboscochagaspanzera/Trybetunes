import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      isLoading: false,
    };

    this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    this.setState({
      isLoading: true,
    });
    const data = await getUser();
    this.setState({
      name: data.name,
      isLoading: false,
    });
  };

  render() {
    const { name, isLoading } = this.state;
    return (
      <div data-testid="header-component">
        { isLoading ? <Loading /> : <p data-testid="header-user-name">{ name }</p>}
        <Link data-testid="link-to-search" to="/search">
          <button>Ir pro search</button>
        </Link>
        <Link data-testid="link-to-favorites" to="/favorites">
          <button>Ir pro favoritos</button>
        </Link>
        <Link data-testid="link-to-profile" to="/profile">
          <button>Ir pro perfil</button>
        </Link>
      </div>
    );
  }
}

export default Header;
