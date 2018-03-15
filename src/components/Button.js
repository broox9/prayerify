import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return <StyledButton>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.green};
  border: none;
  color: white;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.1rem;

  &:active {
    background-color: pink;
  }
`;
