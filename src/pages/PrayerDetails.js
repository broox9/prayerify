import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather'

import WidthWrapper from '../components/WidthWrapper'


const mapStateToProps = (state, ownProps) => ({
  prayer: state.prayers.raw[ownProps.routeProps.match.params.fbId]
});

export default connect(mapStateToProps)(PrayerDetails)

function PrayerDetails ({prayer, routeProps}) {
  const {closed, createdDate, description, pinned, title, uid} = prayer;
  return (
    <WidthWrapper>
      <Link to="/user"><ArrowLeft />Back</Link>
      <h3>{title}</h3>
      <p>{description}</p>
      <em>{(new Date(createdDate)).toLocaleString()}</em>
    </WidthWrapper>
  )
}

PrayerDetails.propTypes = {
  prayer: PropTypes.object.isRequired,
  routeProps: PropTypes.object.isRequired
};
