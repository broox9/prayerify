import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  @media (max-width: 414px) {
    padding: 0.25rem 0.5rem;
  }
`;

export default function WidthWrapper(props) {
  return (
    <StyledWrapper className="container">
      {props.children}
    </StyledWrapper>
  )
}
