import React from 'react';
import PropTypes from 'prop-types';
import { EmptyWrapper } from './Empty.styles';

const Empty = (props) => (
  <EmptyWrapper> No Records </EmptyWrapper>
);

Empty.propTypes = {
  // bla: PropTypes.string,
};

Empty.defaultProps = {
  // bla: 'test',
};

export default Empty;
