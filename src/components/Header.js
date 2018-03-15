import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LogIn, LogOut, List, FilePlus, Home } from "react-feather";
import WidthWrapper from "./WidthWrapper";

//actions
import { signOutUser } from "../actions";

// components
import NavItems from "./NavItems";

const HeaderContainer = styled.header`
  position: relative;
  min-height: 5vh;
  vertical-align: middle;
  padding: 1rem;
  box-sizing: border-box;
  color: white;
  /* //background-color: ${props => props.theme.primary}; */
  border-top: 0.5rem solid ${props => props.theme.colors.black};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
  display: inline-block;

  a {
    color: ${props => props.theme.colors.lightBlue};
  }
`;

const HomeLink = styled(Link) `
  color: ${props => props.theme.colors.lightBlue};
  margin-right: 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

function Header({ user, handleSignOut }) {

  return (
    <HeaderContainer>
      <WidthWrapper>
        <FlexWrapper className="el-flex">
          <HeaderLeftWrapper>
            <HomeLink to="/"><Home /></HomeLink>
            <Title>
              <Link to="/">Prayerify</Link>
            </Title>
          </HeaderLeftWrapper>
          <NavItems user={user} handleSignOut={handleSignOut} />

        </FlexWrapper>
      </WidthWrapper>
    </HeaderContainer>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  handleSignOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => ({
  handleSignOut(event) {
    dispatch(signOutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
