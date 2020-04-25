import styled from 'styled-components';

export const ButtonWrapper = styled.button`
   background-color: ${(props) => (props.color === 'primary' ? '#1C55A9' : '#339C44')};
   color: white;
   padding: 1rem;
   outline:none;
   width: ${(prop) => (prop.size === 'large' ? '100%' : 'inherit')};
   font-size: 1rem;
   border: 1px solid antiquewhite;
   cursor:pointer;
`;
