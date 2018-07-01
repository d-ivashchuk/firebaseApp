import React from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase/index.js';
import * as routes from '../../../constants/routes.js';

const StyledForm = styled.form`
  width: 300px;
  margin: auto;
  border-radius: 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const StyledInput = styled.input`
  display: block;
  padding: 20px;
  font-family: 'Roboto';
  -webkit-appearance: none;
  border: 0;
  outline: 0;
`;
const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 20px;
  font-family: 'Roboto';
  -webkit-appearance: none;
  outline: 0;
  border: 0;
  color: white;
  background: #10aded;
  &:hover {
    background: #10ad99;
    cursor: pointer;
  }
`;

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpForm extends React.Component {
  state = {
    ...INITIAL_STATE
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          value={username}
          onChange={event =>
            this.setState(byPropKey('username', event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <StyledInput
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey('passwordOne', event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <StyledInput
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey('passwordTwo', event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign Up
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

export default SignUpForm;
