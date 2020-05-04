import React from 'react';
import { render } from '@testing-library/react';
import AppContext from '../context/app.context';

const contextValue = {
  isLogin: Boolean,
  setLogin: jest.fn,
};

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <AppContext.Provider value={contextValue}>
    {children}
  </AppContext.Provider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });


export * from '@testing-library/react';


export { customRender as render };
