import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  border-radius: 0px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 0.25rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

export default Input;
