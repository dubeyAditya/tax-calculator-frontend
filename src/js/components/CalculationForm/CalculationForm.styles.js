import styled from 'styled-components';
import { FlexWrapper } from '../../styles';
import { Button } from '../../atoms';

export const Tax = styled.div`
  font-family: Inter;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const TaxWrapper = styled(FlexWrapper)`
   background-color: #2b2b2b;
   height: 4rem;
   color: #ffffff;
   padding: 1rem;
   border-bottom-right-radius: 6px;
   border-bottom-left-radius: 6px;  
`;

export const ResetBtn = styled(Button)`
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #4a4a4a;
  padding: 0.5rem;
  border-color: #ffffff;
`;
