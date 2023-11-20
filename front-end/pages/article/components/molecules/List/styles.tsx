// Imports
import styled from "styled-components";

// Interface
interface ListTypes {
    numeric?: boolean;
}

// Styled Components
export const ListS = styled.ul<ListTypes>`
   list-style-type: ${props => props.numeric ? 'decimal' : 'disc'};
`

export const ListItems = styled.li`
    color: #1B3764;
    font-family: Inter, sans-serif;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 154.5%; /* 1.83469rem */
    letter-spacing: -0.01188rem;
`

export const TitleS = styled.p`
    color: #1B3764;
    font-family: Cardo;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.625rem */
`

export const Description = styled.p`
    color: #969AA0;
    font-family: Inter, sans-serif;;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 2.01875rem */
    letter-spacing: -0.01188rem;
    width: 81.0625rem;
`