import React from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase/index.js';

const StyledButton = styled.button``;
const signOut = props => (
  <StyledButton onClick={auth.doSignOut}>Sign Out</StyledButton>
);

export default signOut;
