import styled, { css } from 'styled-components';

export const selected = css`
  border-radius: 4px;
  background-color: #ffff;
  color: #4a4a4a;
`;

export const unselected = css`
  background-color: #f5f5f5;
  color: #7d7d7d;
`;

export const Tab = styled.div`
   ${(props) => (props.selected ? selected : unselected)};
   text-align: center;
   cursor: pointer;
   padding: 1rem;
`;

export const TabListWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width:100%;
`;
