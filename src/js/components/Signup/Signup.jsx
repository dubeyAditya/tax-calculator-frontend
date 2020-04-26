import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../atoms';
import { SignupWrapper } from './Signup.styles';
import {
  LinkWrapper,
  FormInfoText,
  FormLabel, FormTitle, FormWrapper,
  FormItemWrapper,
  ErrorWrapper,
} from '../../styles';
import AppContext from '../../context/app.context';

const Signup = (props) => {
  const { onSubmit, error } = props;

  const [hasError, setError] = useState(false);

  const [user, setUser] = useState({ username: '', password: '', retype: '' });

  const { username, password, retype } = user;

  const { setLogin } = useContext(AppContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === retype) {
      setError(false);
      onSubmit(user);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error.isError) setError(true);
  }, [error]);

  return (
    <SignupWrapper dir="column">
      <form onSubmit={handleFormSubmit}>

        <FormWrapper dir="column">
          <FormItemWrapper dir="column">
            <FormTitle>
              Signup
            </FormTitle>
            <FormInfoText>
              You can access the income tax calculator, Once Registered. Have an account?,
              <LinkWrapper onClick={() => setLogin(true)}> Login </LinkWrapper>
            </FormInfoText>
          </FormItemWrapper>

          {hasError
            && (
              <ErrorWrapper>
                <div>
                  {' '}
                  { error.message || 'Missing Input or Password Mismatch' }
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
              onChange={(e) => setUser({ password, retype, username: e.target.value })}
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
              onChange={(e) => setUser({ username, retype, password: e.target.value })}
              size="large"
              required
              type="password"
              onInvalid={() => setError(true)}
            />
          </FormItemWrapper>

          <FormItemWrapper>
            <FormLabel>
              Confirm Password
            </FormLabel>
            <Input
              value={retype}
              onChange={(e) => setUser({ username, password, retype: e.target.value })}
              size="large"
              required
              type="password"
              onInvalid={() => setError(true)}
            />
          </FormItemWrapper>
        </FormWrapper>
        <Button type="submit" size="large" color="success">
          Sign Up
        </Button>
      </form>
    </SignupWrapper>
  );
};

Signup.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.objectOf(),
};

Signup.defaultProps = {
  onSubmit: () => { },
  error: { isError: false, message: '' },
};

export default Signup;
