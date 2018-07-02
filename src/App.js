import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { firebase } from './firebase/index.js';

import * as routes from './constants/routes.js';

import Navigation from './components/Navigation/Navigation.js';

import Landing from './components/Landing/Landing.js';
import SignUp from './components/SignUp/SignUp.js';
import SignIn from './components/SignIn/SignIn.js';
import PasswordForget from './components/PasswordForget/PasswordForget.js';
import Home from './components/Home/Home.js';
import Account from './components/Account/Account.js';

injectGlobal`
body{
margin:0;
padding: 0;
}
`;

class App extends Component {
  state = {
    authUser: null
  };
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation authUser={this.state.authUser} />
          <Route exact path={routes.LANDING} component={Landing} />
          <Route exact path={routes.SIGN_UP} component={SignUp} />
          <Route exact path={routes.SIGN_IN} component={SignIn} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForget}
          />
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.ACCOUNT} component={Account} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
