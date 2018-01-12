import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  padding: 0;
  margin: 0;
`;
export default props => (
  <section className={props.className}>
    <StyledTitle>Prayerify</StyledTitle>
  </section>
);
