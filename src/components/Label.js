import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Label({text, name, children}) {
  return <StyledLabel htmlFor={name}>{text || children}</StyledLabel>;
}

Label.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const StyledLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 6px;
`;
