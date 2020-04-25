/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  LinkWrapper,
  FormInfoText,
  FormLabel, FormTitle, FormWrapper,
  FormItemWrapper,
  ErrorWrapper,
} from '../../styles';
import { LoginWrapper } from './Login.styles';
import { Button, Input } from '../../atoms';

const Login = ({ onFormSubmit }) => {
  const [user, setUser] = useState({ username: '', password: '' });

  const [error, setError] = useState(false);

  const { username, password } = user;

  const handleFormSubmit = (e) => {
    setError(false);
    e.preventDefault();
    onFormSubmit(user);
  };

  return (
    <LoginWrapper dir="column">
      <form onSubmit={handleFormSubmit}>

        <FormWrapper dir="column">
          <FormItemWrapper dir="column">
            <FormTitle>
              Login
            </FormTitle>
            <FormInfoText>
              To access the income tax calculator, you need to login. Don’t have an account yet,
              <LinkWrapper>
                Create Account
              </LinkWrapper>
            </FormInfoText>
          </FormItemWrapper>

          {error
            && (
              <ErrorWrapper>
                <div> Please enter username and password </div>
                <div />
              </ErrorWrapper>
            )}
          <FormItemWrapper>
            <FormLabel>
              Username
            </FormLabel>
            <Input
              value={username}
              onChange={(e) => setUser({ password, username: e.target.value })}
              size="large"
              required
              type="text"
              onInvalid={() => setError(true)}
            />
          </FormItemWrapper>

          <FormItemWrapper>
            <FormLabel>
              Password
            </FormLabel>
            <Input
              value={password}
              onChange={(e) => setUser({ username, password: e.target.value })}
              size="large"
              required
              type="password"
              onInvalid={() => setError(true)}
            />
          </FormItemWrapper>
        </FormWrapper>
        <Button type="submit" size="large" color="success">
          Login
        </Button>
      </form>
    </LoginWrapper>
  );
};

Login.propTypes = {
  onFormSubmit: PropTypes.func,
};

Login.defaultProps = {
  onFormSubmit: () => { },
};

export default Login;
