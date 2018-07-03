import React from 'react';
import withAuthorization from '../../containers/withAuthorization/withAuthorization.js';

const home = props => (
  <React.Fragment>
    <h1>Home Page</h1>
    <p>This page is accessible by signed in users</p>
  </React.Fragment>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(home);
