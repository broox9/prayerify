import React from "react";
// import {inject} from 'mobx-react';
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WidthWrapper from "../components/WidthWrapper";

const UserContainer = styled.section`padding: 1rem;`;

const List = styled.ul`
  margin: 0;
  padding-bottom: 1rem;
`;

const Item = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.dividerColor};

  &:last-child {
    border: none;
  }
`;

const mapStateToProps = state => ({ prayers: state.prayers.list });

export default connect(mapStateToProps)(User);

function User({ prayers }) {
  return (
    <UserContainer>
      <WidthWrapper>
        <PrayerList prayers={prayers} />
      </WidthWrapper>
    </UserContainer>
  );
}

function PrayerItem(props) {
  return (
    <Item>
      <Link to={`prayer/details/${props.fbId}`}>{props.title}</Link>
    </Item>
  );
}

function PrayerList({ prayers }) {
  return (
    <List>
      {prayers.map((prayer, index) => {
        return <PrayerItem key={prayer.fbId || index} {...prayer} />;
      })}
    </List>
  );
}
