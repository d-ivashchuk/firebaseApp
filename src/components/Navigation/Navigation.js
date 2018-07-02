import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut/SignOut.js';

import * as routes from '../../constants/routes.js';

const StyledNavi = styled.ul`
  display: flex;
  position: sticky;
  top: 0px;
  background-color: #10aded;
  margin: 0 0 10px 0;
  height: 3em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  > li {
    text-decoration: none;
    list-style: none;
    height: 1.2rem;
    margin-right: 15px;
  }
  > li > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
      color: #333;
    }
    &.active {
      color: #333;
    }
  }
`;
const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <StyledNavi>
    <li>
      <NavLink to={routes.HOME} exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.ACCOUNT} exact>
        Account
      </NavLink>
    </li>
    <li>
      <SignOut />
    </li>
  </StyledNavi>
);

const NavigationNonAuth = () => (
  <StyledNavi>
    <li>
      <NavLink to={routes.LANDING} exact>
        Landing
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.SIGN_IN} exact>
        Sign In
      </NavLink>
    </li>
  </StyledNavi>
);

export default Navigation;
