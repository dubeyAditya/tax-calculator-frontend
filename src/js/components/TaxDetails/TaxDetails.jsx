import React from 'react';
import PropTypes from 'prop-types';
import { TaxDetailsWrapper } from './TaxDetails.styles';
import { Empty } from '../../atoms';

const TaxDetails = (props) => (
  <TaxDetailsWrapper dir="column">
    <Empty />
  </TaxDetailsWrapper>
);

TaxDetails.propTypes = {
  // bla: PropTypes.string,
};

TaxDetails.defaultProps = {
  // bla: 'test',
};

export default TaxDetails;
