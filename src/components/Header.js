import React from 'react';
import styled from 'styled-components';
import {inject} from 'mobx-react';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.header`
  min-height: 5vh;
  vertical-align: middle;
  padding: 1rem;
  box-sizing: border-box;
  background-color: papayawhip;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: palevioletred;
`

@inject('appStore')
export default class Header extends React.Component {
  render() {
    const { user, appStore } = this.props
    const loginLogout = user ? (<a onClick={appStore.signOut}>Logout</a>)
      : <Link to="/login">Login</Link>
    return (
      <HeaderContainer>
        <Title>App Here</Title>
        {loginLogout}
      </HeaderContainer>
    )
  }
}