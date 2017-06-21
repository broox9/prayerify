import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  min-height: 5vh;
  vertical-align: middle;
  padding: 1rem;
  box-sizing: border-box;
  background-color: papayawhip;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: palevioletred;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Title>App Here</Title>
    </HeaderContainer>
  )
}