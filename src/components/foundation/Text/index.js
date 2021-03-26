/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import typographyVariants from '../../../theme/typographyVariants';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';

const mapa = {};
//
// Carregar todos os estilos de forma auomática
//
Object.entries(typographyVariants).forEach(([key, value]) => {
  mapa[key] = css`
        font-size: ${value.fontSize};
        font-weight: ${value.fontWeight};
        line-height: ${value.lineHeight};
    `;
});

export const TextStyleVariants = mapa;

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}    
`;

export default function Text({
  tag, variant, children, href, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};
