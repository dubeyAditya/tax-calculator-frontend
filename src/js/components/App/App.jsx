import React, { useState, useEffect } from 'react';
import { AppWrapper } from './App.styles';
import Signup from '../Signup';
import Login from '../Login';
import TaxCaclulator from '../TaxCaclulator';
import { Header, Main } from '../../atoms';
import authService from '../../services/auth.service';
import api from '../../api';
import AppContext from '../../context/app.context';

export const App = () => {
  const [isAuthenticated, enableAuth] = useState(true);

  const [error, setError] = useState({ isError: false, message: '' });

  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    api.get('taxCalculator/access').then(() => enableAuth(true), () => enableAuth(false));
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
      .then(() => {
        setError({ isError: false, message: '' });
        setLogin(true);
      })
      .catch(({ message }) => setError({ isError: true, message }));
  };

  return (
    <AppWrapper dir="column">
      <Header>
        <div> Income Tax Calculator </div>
      </Header>
      <AppContext.Provider value={{
        isLogin,
        setLogin,
      }}
      >
        <Main>
          {
            // eslint-disable-next-line no-nested-ternary
            isAuthenticated
              ? <TaxCaclulator />
              : isLogin
                ? <Login onFormSubmit={authenticateUser} error={error} />
                : <Signup onSubmit={registerUser} error={error} />
          }
        </Main>
      </AppContext.Provider>

    </AppWrapper>
  );
};
