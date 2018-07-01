import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../../../constants/routes.js';

const signUpLink = props => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default signUpLink;
