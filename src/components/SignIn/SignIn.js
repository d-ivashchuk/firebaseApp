import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.js';
import SignUpLink from '../SignUp/SignUpForm/SignUpLink/SignUpLink.js';

const signIn = ({ history }) => (
  <React.Fragment>
    <SignInForm history={history} />
    <SignUpLink />
  </React.Fragment>
);

export default withRouter(signIn);
