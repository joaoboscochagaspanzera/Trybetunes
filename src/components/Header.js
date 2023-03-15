import React from 'react';
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
      </div>
    );
  }
}

export default Header;
