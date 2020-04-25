import styled, { css } from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(prop) => (prop.align ? prop.align : 'normal')};
  justify-content: ${(prop) => (prop.justify ? prop.justify : 'normal')};
  flex-direction: ${(prop) => (prop.dir ? prop.dir : 'row')};
`;

export const FormItemWrapper = styled.div`
    margin-bottom: 2rem;
    & :nth-child(2) {
      margin-top: 0.25rem;
    }
`;

export const FormWrapper = styled(FlexWrapper)`
   padding: 2rem;
   background: #ffff; 
`;

export const FormTitle = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 0.25rem;
`;

export const FormLabel = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    color: #4a4a4a;
`;

export const FormInfoText = styled(FormLabel)`
  line-height: 1.5;
`;

export const LinkWrapper = styled.span`
   color: #005ea1;
   font-size: 16px;
   font-weight: 500;
   cursor: pointer;
`;

export const card = css`
border-radius: 6px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding-top: 1rem;
  width: 30rem;  
`;

export const ErrorWrapper = styled.div`
 
 margin-bottom: 1rem;

 & div {
   margin-bottom: 0.25rem;
 }

 & :first-child {
  font-size: 0.625rem;
  color: #B0001F
 }
  
 & :last-child {
  height: 0.625rem;
  background: #B0001F;
 }

`;
