/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
import { Link } from '../Link';

const ButtonDefault = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonWrapper = styled.button`
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

const Button = ({ href, ...props }) => {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
