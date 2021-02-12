import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonDefault = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`) };
`;

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${({theme}) => theme.borderRadius};
    transition: ${({theme}) => theme.transition};
    ${(props) => {
        return props.ghost ? ButtonGhost : ButtonDefault;
    }}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

