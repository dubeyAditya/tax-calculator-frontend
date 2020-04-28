import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './Header.styles';

const Header = (props) => {
  const { children } = props;
  return (
    <HeaderWrapper>
      {' '}
      {children}
    </HeaderWrapper>
  );
};

Header.propTypes = {
  children: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  children: null,
};

export default Header;
