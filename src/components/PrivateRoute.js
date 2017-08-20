import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivatRoute(props) {
  const { path, exact = false, component: Component, user, ...otherProps } = props;

  return <Route exact path={path} render={(scopeProps) => {
    return user ?
      <Component user={user} routeProps={scopeProps} /> 
        : <Redirect to={{pathname: '/login', state: {from: scopeProps.location}}} />;
    }} />
}
