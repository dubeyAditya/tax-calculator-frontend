import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = (props) => {
  const { children } = props;
  return (
    <div className="ButtonWrapper">
      <ButtonWrapper {...props}>{children}</ButtonWrapper>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.elementType,
  border: PropTypes.bool,
};

Button.defaultProps = {
  size: 'normal',
  color: 'primary',
  children: null,
  border: false,
};

export default Button;
