import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display:flex;
    background-color: #1C55A9;
    color: #f2f2f2;
    padding: 1rem;
    justify-content: space-between;
    align-items:center;
    font-size:1.5rem;

    @media (min-width: 600px) { 
       
        & {
            justify-content: start;
        }

        & :nth-child(2){
            margin-left:1rem;
        }
}
`;
