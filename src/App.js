import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
// import { observable } from "mobx";
// import { inject, observer } from "mobx-react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import theme from "./globalStyles";
import history from "./services/history";

//actions
import { checkForAuth } from "./actions";

//pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewPrayer from "./pages/NewPrayer";
import PrayerDetails from "./pages/PrayerDetails";
import User from "./pages/User";
import FourOhFour from "./pages/FourOhFour";
import Splash from "./pages/Splash";

//components
import Header from "./components/Header";

const StyledApp = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  height: 100%;
  width: 100%:
`;

const StyledSplash = styled(Splash) `
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.blue};
  z-index: 2;
  transition: left 350ms ease-in;

  &.hidden {
    left: -100%;
    overflow: hidden;
  }
`;

export default class App extends React.Component {
  // class level property
  static PropTypes = { store: PropTypes.object.isRequired };

  // "class" property (but instance level)
  state = { user: null, hasAuthBeenChecked: false };

  componentDidMount() {
    const { store } = this.props;

    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.setState(state.auth);
    });

    store.dispatch(checkForAuth());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    const { user, hasAuthBeenChecked } = this.state;

    return (
      <BrowserRouter history={history}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <StyledApp id="content">
              <StyledSplash className={hasAuthBeenChecked ? "hidden" : null} />
              <Header />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute
                  exact={true}
                  path="/user"
                  user={user}
                  component={User}
                />
                <PrivateRoute
                  exact={true}
                  path="/prayer/new"
                  user={user}
                  component={NewPrayer}
                />
                <PrivateRoute
                  path="/prayer/details/:fbId"
                  user={user}
                  component={PrayerDetails}
                />
                <Route component={Splash} />
              </Switch>
            </StyledApp>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  }
}
