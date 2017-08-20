import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


@inject('appStore')
export default class PrayerDetails extends React.Component {
  render() {
    const {appStore, routeProps:{ match: {params: { fbId }}}} = this.props;
    const {closed, createdDate, description, pinned, title, uid} = appStore.getPrayer(fbId)
    console.log('PRAYER DEETS', closed, createdDate, description, pinned, title, uid)
    return(
      <section>
        <Link to="/user">{'< Back'}</Link>
        <h3>{title}</h3>
        <p>{description}</p>
        <em>{(new Date(createdDate)).toLocaleString()}</em>
      </section>

    )
  }
}
