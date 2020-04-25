import React, { useState } from 'react';
import { AppWrapper } from './App.styles';
// import Signup from '../Signup';
import Login from '../Login';
import TaxCaclulator from '../TaxCaclulator';
import { Header, Main } from '../../atoms';
import authService from '../../../services/auth.service';

export const App = () => {
  const [isAuthenticated, enableAuth] = useState(false);

  const authenticateUser = (user) => {
    authService
      .authenticate(user)
      .then(() => enableAuth(true),
        (err) => console.error(err));
  };

  const registerUser = (user) => {
    authService
      .register(user)
      .then((data) => console.log(data),
        (err) => console.error(err));
  };

  return (
    <AppWrapper dir="column">
      <Header>
        <div> Income Tax Calculator </div>
      </Header>
      <Main>
        {!isAuthenticated
          ? <Login onFormSubmit={authenticateUser} />
          : <TaxCaclulator />}
      </Main>
    </AppWrapper>
  );
};
