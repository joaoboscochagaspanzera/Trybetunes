import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';

// Começando projeto

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>TrybeTunes</p>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Login />
            ) }
          />
          <Route
            exact
            path="/search"
            render={ () => (
              <Search />
            ) }
          />
          <Route
            exact
            path="/album/:id"
            render={ () => (
              <Album />
            ) }
          />
          <Route
            exact
            path="/favorites"
            render={ () => (
              <Favorites />
            ) }
          />
          <Route
            exact
            path="/profile"
            render={ () => (
              <Profile />
            ) }
          />
          <Route
            exact
            path="/profile/edit"
            render={ () => (
              <ProfileEdit />
            ) }
          />
          <Route
            exact
            path="*"
            render={ () => (
              <NotFound />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
