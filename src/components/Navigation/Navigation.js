import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes.js';

const Navigation = styled.ul`
  display: flex;
  position: sticky;
  top: 0px;
  background-color: #10aded;
  margin: 0 0 10px 0;
  height: 3em;
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
const navigation = props => (
  <Navigation>
    <li>
      <NavLink to={routes.SIGN_IN}>Sign in</NavLink>
    </li>
    <li>
      <NavLink to={routes.LANDING} exact>
        Landing
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={routes.ACCOUNT}>Account</NavLink>
    </li>
  </Navigation>
);

export default navigation;
