/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
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
import AppContext from '../../context/app.context';

const Login = ({ onFormSubmit, error }) => {
  const [user, setUser] = useState({ username: '', password: '' });

  const [hasError, setError] = useState(false);

  const { username, password } = user;

  const { setLogin } = useContext(AppContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(false);
    onFormSubmit(user);
  };

  useEffect(() => {
    if (error.isError) setError(true);
  }, [error]);

  return (
    <LoginWrapper dir="column">
      <form onSubmit={handleFormSubmit}>
        <FormWrapper dir="column">
          <FormItemWrapper dir="column">
            <FormTitle>
              Login
            </FormTitle>
            <FormInfoText>
              {'To access the income tax calculator, you need to login. Don’t have an account yet, '}
              <LinkWrapper onClick={() => setLogin(false)}>
                Create Account
              </LinkWrapper>
            </FormInfoText>
          </FormItemWrapper>
          {hasError
            && (
              <ErrorWrapper>
                <div data-testid="error">
                  {' '}
                  {error.message || 'Please enter username and password'}
                  {' '}
                </div>
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
        <Button data-testid="login" border type="submit" size="large" color="success">
          Login
        </Button>
      </form>
    </LoginWrapper>
  );
};

Login.propTypes = {
  onFormSubmit: PropTypes.func,
  error: PropTypes.instanceOf(Object),
};

Login.defaultProps = {
  onFormSubmit: () => { },
  error: { isError: false, message: '' },
};

export default Login;
