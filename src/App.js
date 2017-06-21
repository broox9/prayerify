import React from 'react';
import DevTools from 'mobx-react-devtools';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './globalStyles';

//pages
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';

//components
import Header from './components/Header';

export default function App({appStore}) {
  return (
    <Router>
      <div id="content">
        <Header />
        <nav>
          {appStore.msg}
          <br />
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/account">Account</Link>
        </nav>
        <DevTools />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
      </div>
    </Router>
  );
}