import React from 'react';
import PropTypes from 'prop-types';
import { TaxDetailsWrapper } from './TaxDetails.styles';
import { Empty } from '../../atoms';

const TaxDetails = ({ history }) => (
  <TaxDetailsWrapper dir="column">
    { history.length ? '' : <Empty />}
  </TaxDetailsWrapper>
);

TaxDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.array,
};

TaxDetails.defaultProps = {
  history: [],
};

export default TaxDetails;
