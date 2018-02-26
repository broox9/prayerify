import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import {observer} from 'mobx-react';
// import WidthWrapper from './WidthWrapper';
import { LogIn, LogOut, List, FilePlus, Home } from "react-feather";


const NavSection = styled.nav`
  &:hover, &:active {
    color:${props => props.theme.colors.lightBlue};
  }
`

const ItemLink = styled(Link) `
  display: inline;
  margin: 0 0.5rem;
  color: ${props => props.theme.colors.lightBlue};
`;

export default class NavItems extends React.Component {
  render() {
    const { user } = this.props;
    const loginLogout = user ? (
      <ItemLink to="/" onClick={this.props.handleSignOut}>
        <LogOut />
      </ItemLink>
    ) : (
        <Link to="/login">
          <LogIn />
        </Link>
      );

    return (
      <NavSection>
        {user ? <ItemLink to="/prayer/new"><FilePlus /></ItemLink> : null}
        {user ? <ItemLink to="/user"><List /></ItemLink> : null}
        {loginLogout}
      </NavSection>
    )
  }
}
