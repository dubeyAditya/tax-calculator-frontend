import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper } from './Main.styles';

const Main = (props) => {
  const { children } = props;
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

Main.propTypes = {
  children: PropTypes.element,
};

Main.defaultProps = {
  children: null,
};

export default Main;
