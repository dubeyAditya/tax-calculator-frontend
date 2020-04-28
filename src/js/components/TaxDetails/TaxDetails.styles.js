import styled, { css } from 'styled-components';
import { FlexWrapper } from '../../styles';
import { Tax, TaxWrapper } from '../CalculationForm/CalculationForm.styles';

export const TaxDetailsWrapper = styled(FlexWrapper)`
    padding: 1rem;
`;

export const TaxHistoryItem = styled.div`
    margin-bottom: 0.5rem;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem; 
  font-family: Inter;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Gridheader = styled.div`
  ${grid};
  font-size: 12px;
  line-height: 1.33;
  color: #7d7d7d;
`;

export const Gridbody = styled.div`
  ${grid};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #4a4a4a;
`;

export const TaxLabel = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
`;

export const IncomeDetailsGrid = styled.div`
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 1rem;
`;

export const CaclculatedTax = styled(TaxWrapper)`
   height: auto;
`;

export const SavedTaxAmount = styled(Tax)`
  font-size: 14px;
`;

export const SavedTaxDate = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: right;
  color: #929292;
`;
