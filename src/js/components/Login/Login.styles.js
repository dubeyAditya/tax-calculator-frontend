import styled from 'styled-components';
import { FlexWrapper, card } from '../../styles';


export const LoginWrapper = styled(FlexWrapper)`
  ${card}
  & :first-child {
    flex-grow: 1;
  }
`;
