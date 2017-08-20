import React from 'react';
import styled from 'styled-components';
import {inject} from 'mobx-react';
import {Link} from 'react-router-dom';
import {LogIn, LogOut} from 'react-feather';
import WidthWrapper from './WidthWrapper';

const HeaderContainer = styled.header`
  position: relative;
  min-height: 5vh;
  vertical-align: middle;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary};
  //border-top: 0.5rem solid ${props => props.theme.darkPrimary};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.lightPrimary};
`
const ActionItem = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  height: 100%;
  padding: 0 6px;
  color:${props => props.theme.lightPrimary};
`;

@inject('appStore')
export default class Header extends React.Component {
  render() {
    const { user, appStore } = this.props
    const loginLogout = user ? (<a onClick={appStore.signOut}><LogOut /></a>)
      : <Link to="/login"><LogIn /></Link>
    return (
      <HeaderContainer>
        <WidthWrapper>
          <Title><Link to="/">Prayerify</Link></Title>
          <ActionItem>
            {loginLogout}
          </ActionItem>
        </WidthWrapper>
      </HeaderContainer>
    )
  }
}
