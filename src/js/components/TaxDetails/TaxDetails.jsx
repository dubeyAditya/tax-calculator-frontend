import React from 'react';
import PropTypes from 'prop-types';
import { TaxDetailsWrapper } from './TaxDetails.styles';
import { Empty } from '../../atoms';

const TaxDetails = ({ records }) => (
  <TaxDetailsWrapper dir="column">
    { records.length ? '' : <Empty />}
  </TaxDetailsWrapper>
);

TaxDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  records: PropTypes.array,
};

TaxDetails.defaultProps = {
  records: [],
};

export default TaxDetails;
