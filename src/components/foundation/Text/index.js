import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { typographyVariants } from '../../../theme/typographyVariants';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const mapa = {};
//
// Carregar todos os estilos de forma auomática
//
Object.entries(typographyVariants).map(([key, value]) => {
    mapa[key] = css`
        font-size: ${value.fontSize};
        font-weight: ${value.fontWeight};
        line-height: ${value.lineHeight};
    `
})

export const TextStyleVariants = mapa;

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}    
`;

export default function Text({ tag, variant, children, ...props }) {
    return (
        <TextBase as={tag} variant={variant} {...props}>
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}