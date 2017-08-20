import React from 'react';
import DevTools from 'mobx-react-devtools';
import styled, {ThemeProvider} from 'styled-components';
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
import baseTheme from './globalStyles'
import history from './util/history';

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import NewPrayer from './pages/NewPrayer';
import PrayerDetails from './pages/PrayerDetails';
import User from './pages/User';

//components
import Header from './components/Header';
import NavItems from './components/NavItems';

const StyledApp = styled.div`
  background-color: ${props => props.theme.bgColor || '#fff' };
  height: 100%;
  width: 100%:
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
        <ThemeProvider theme={baseTheme}>
          <StyledApp id="content">
            <Header user={user} />
            <NavItems user={user} />

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact={true} path="/user" user={user} component={User} />
              <PrivateRoute path="/prayer/new" user={user} component={NewPrayer} />
              <PrivateRoute path="/prayer/details/:fbId" user={user} component={PrayerDetails} />
            </Switch>

            {/* <DevTools /> */}
          </StyledApp>
        </ThemeProvider>
      </Router>
    );
  }
}
