import React from 'react';
import styled from 'styled-components';
import SignUp from '../SignUp/SignUp.js';

const StyledLanding = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const landing = props => {
  return (
    <React.Fragment>
      <StyledLanding>
        <SignUp />
      </StyledLanding>
    </React.Fragment>
  );
};

export default landing;
