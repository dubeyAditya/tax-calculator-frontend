import styled, { css } from 'styled-components';

const bordetBottom = css`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;


export const ButtonWrapper = styled.button`
   background-color: ${(props) => (props.color === 'primary' ? '#1C55A9' : '#339C44')};
   color: white;
   padding: 1rem;
   outline:none;
   width: ${(prop) => (prop.size === 'large' ? '100%' : 'inherit')};
   font-size: 1rem;
   border: ${(props) => (props.color === 'success' ? '1px solid #339C44' : 'none')} ;
   ${(props) => (props.border ? bordetBottom : '')};
   cursor:pointer;
`;
