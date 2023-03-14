import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

const MAXNAMELENGTH = 3;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInserted: '',
      isLogged: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  saveName = async () => {
    const { history } = this.props;
    const { nameInserted } = this.state;
    this.setState({
      isLogged: true,
    });
    await createUser({ name: nameInserted });
    this.setState({
      isLogged: false,
    });
    history.push('/search');
  };

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { nameInserted, isLogged } = this.state;
    const submitButton = nameInserted.length < MAXNAMELENGTH;
    return (
      <div data-testid="page-login">
        { isLogged ? <Loading /> : <p />}
        <label>
          Insira seu nome:
          <input
            data-testid="login-name-input"
            type="text"
            name="nameInserted"
            value={ nameInserted }
            onChange={ this.onInputChange }
          />
          <button
            data-testid="login-submit-button"
            disabled={ submitButton }
            onClick={ this.saveName }
          >
            Entrar
          </button>
        </label>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
