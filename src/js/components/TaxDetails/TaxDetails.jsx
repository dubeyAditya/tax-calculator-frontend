import React from 'react';
import PropTypes from 'prop-types';
import {
  TaxLabel,
  TaxDetailsWrapper, TaxHistoryItem,
  CaclculatedTax, IncomeDetailsGrid,
  SavedTaxDate, SavedTaxAmount,
  Gridbody, Gridheader,
} from './TaxDetails.styles';
import { Empty } from '../../atoms';
import { FlexWrapper } from '../../styles';
import { formatToCurrency } from '../../utility';

const TaxDetails = ({ history }) => {
  const renderHeader = () => (
    <Gridheader>
      <div>Year</div>
      <div>Age</div>
      <div>Income</div>
      <div>Investment</div>
    </Gridheader>
  );

  const renderBody = (item) => (
    <Gridbody>
      <div>{item.year}</div>
      <div>{item.age}</div>
      <div>{formatToCurrency(item.yearlySalary)}</div>
      <div>{formatToCurrency(item.taxFreeInvestment)}</div>
    </Gridbody>
  );

  const renderHistoryItem = (item) => (
    <TaxHistoryItem>
      <IncomeDetailsGrid>
        {renderHeader()}
        {renderBody(item)}
      </IncomeDetailsGrid>

      <CaclculatedTax dir="column">
        <TaxLabel> Annual Income Tax </TaxLabel>
        <FlexWrapper justify="space-between">
          <SavedTaxAmount>
            {' '}
            {formatToCurrency(item.result)}
          </SavedTaxAmount>
          <SavedTaxDate>{new Date(item.dateCreated).toLocaleString('en-IN')}</SavedTaxDate>
        </FlexWrapper>
      </CaclculatedTax>
    </TaxHistoryItem>
  );

  return (
    <TaxDetailsWrapper dir="column">
      {history.length
        ? history.map(renderHistoryItem)
        : <Empty />}
    </TaxDetailsWrapper>
  );
};

TaxDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.array,
};

TaxDetails.defaultProps = {
  history: [],
};

export default TaxDetails;
