import React, { useState, useEffect } from 'react';
import { AppWrapper } from './App.styles';
// import Signup from '../Signup';
import Login from '../Login';
import TaxCaclulator from '../TaxCaclulator';
import { Header, Main } from '../../atoms';
import authService from '../../services/auth.service';
import api from '../../api';

export const App = () => {
  const [isAuthenticated, enableAuth] = useState(false);

  const [error, setError] = useState({ isError: false, message: '' });

  useEffect(() => {
    // api.get('').then(() => enableAuth(true), () => enableAuth(false));
  }, []);


  const authenticateUser = (user) => {
    authService
      .authenticate(user)
      .then(() => enableAuth(true))
      .catch(({ message }) => setError({ isError: true, message }));
  };

  const registerUser = (user) => {
    authService
      .register(user)
      .then((data) => console.log(data))
      .catch(({ message }) => setError({ isError: true, message }));
  };

  return (
    <AppWrapper dir="column">
      <Header>
        <div> Income Tax Calculator </div>
      </Header>
      <Main>
        {
          isAuthenticated
            ? <TaxCaclulator />
            : <Login onFormSubmit={authenticateUser} error={error} />
        }
      </Main>
    </AppWrapper>
  );
};
