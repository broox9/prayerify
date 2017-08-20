import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {observer} from 'mobx-react';
import WidthWrapper from './WidthWrapper';


const NavSection = styled.nav`
  background-color: ${props => props.theme.lightPrimary};

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
  }

  a {
    display: block;
    text-decoration: none;
    margin: 0 1rem;

    &:hover, &:active {
      color:${props => props.theme.accent};
    }
  }
`
@observer
export default class NavItems extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <NavSection>
        <WidthWrapper>
          <Link to="/">Home</Link>
          {user ? null : <Link to="/login">Login</Link> }
          {user ? <Link to="/user">User</Link> : null}
          {user ? <Link to="/prayer/new">New</Link> : null}
        </WidthWrapper>
      </NavSection>
    )
  }
}
