import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import WidthWrapper from '../components/WidthWrapper';

const UserContainer = styled.section`
  padding: 1rem;
`;

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

@inject('appStore')
export default class User extends React.Component {
  constructor(props) {
    super();

    this.state = {
      prayers: props.appStore.getPrayers()
    };
  }
  render() {
    const prayers = [];

    for (let prayer in this.state.prayers) {
      prayers.push({
        fbId: prayer,
        ...this.state.prayers[prayer]
      });
    }

    return (
      <UserContainer>
        <WidthWrapper>
          <h2>Prayers</h2>
          <PrayerList prayers={prayers} />
        </WidthWrapper>
      </UserContainer>
    )
  }
}

function PrayerItem(props) {
  return <Item><Link to={`prayer/details/${props.fbId}`}>{props.title}</Link></Item>
}

function PrayerList({prayers}) {
  return (
    <List>
      {
        prayers.map((prayer, index) => {
          return (<PrayerItem key={index} {...prayer} />)
        })
      }
    </List>
  )
}
