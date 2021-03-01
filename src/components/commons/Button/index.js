/* eslint-disable import/no-extraneous-dependencies */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    
    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariants.smallestException}
        `,
    md: css`
            padding: 12px 43px;
            ${TextStyleVariants.paragraph1}
        `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('marginTop')}
    ${propToStyle('display')}

    &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export { Button as default };
