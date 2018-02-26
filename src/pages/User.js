import React from "react";
// import {inject} from 'mobx-react';
import { connect } from "react-redux";
import styled from "styled-components";
import { Card } from 'pcln-design-system';
import { Link } from "react-router-dom";
import WidthWrapper from "../components/WidthWrapper";

const UserContainer = styled.section`
  padding: 1rem;
  padding-top: 0;
`;

const List = styled.ul`
  margin: 0;
  padding-bottom: 1rem;
`;

const Item = styled.li`
  padding: 0;
  cursor: pointer;
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
      <Card p={16} mb="4px" borderRadius="4px" boxShadowSize="sm">
        <Link to={`prayer/details/${props.fbId}`}>{props.title}</Link>
      </Card>
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
