import styled from 'styled-components';
import { FlexWrapper } from '../../styles';
import { Button } from '../../atoms';

export const AppWrapper = styled(FlexWrapper)`
   min-height: 98vh;
   background: whitesmoke;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const LogoutBtn = styled(Button)`
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #4a4a4a;
  padding: 0.5rem;
`;
