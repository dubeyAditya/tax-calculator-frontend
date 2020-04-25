import styled from 'styled-components';

export const InputWrapper = styled.input`
  padding: 5px 0 5px 0;
  width: -webkit-fill-available;
  width: -moz-available;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom-color: ${(props) => (props.error ? '#B0001F' : '#f1f1f1')};
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  &:focus{
    border-bottom: 1px solid;
    border-color: #f1f1f1 #f1f1f1  #1C55A9 #f1f1f1;
    outline: none;  
  }
`;
