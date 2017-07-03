import React from 'react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import { auth } from './util/firebase';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './globalStyles';
import history from './util/history';

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import NewPrayer from './pages/NewPrayer';
import User from './pages/User';

//components
import Header from './components/Header';

const NavItems = styled.nav`
  background-color: #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  box-sizing: border-box;

  a {
    display: block;
    text-decoration: none;
  }
`

@inject('appStore') @observer
export default class App extends React.Component {
  constructor({appStore}) {
    super();
    auth.onAuthStateChanged((user) => {
      appStore.setUser(user);
    })
  }
  render() {
    const { appStore } = this.props;
    const UserPage = (<User user={appStore.user} />);
    const { user } = appStore;

    return (
      <Router history={history} >
        <div id="content">
          <Header user={appStore.user} />
          <NavItems>
            <Link to="/">Home</Link>
            {user ? null : <Link to="/login">Login</Link> }
            <Link to="/user">User</Link>
            <Link to="/user/new">New</Link>
          </NavItems>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact={true} path="/user" user={user} component={User} />
            <PrivateRoute path="/user/new" user={user} component={NewPrayer} />
          </Switch>
          
          <DevTools />
        </div>
      </Router>
    );
  }
}