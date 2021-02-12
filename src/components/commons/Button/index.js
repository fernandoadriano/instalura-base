import styled, { css } from 'styled-components';


const ButtonDefault = css`
    color: white;
    background-color: #D7385E;
`;

const ButtonGhost = css`
    color: #FB7B6B;
    background: transparent;
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${(props) => {
        return props.ghost ? ButtonGhost : ButtonDefault;
    }}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

