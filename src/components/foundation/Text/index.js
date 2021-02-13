import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { typographyVariants } from '../../../theme/typographyVariants';

const mapa = {};
//
// Carregar todos os estilos de forma auomática
//
Object.entries(typographyVariants).map(([key, value]) => {
    mapa[key] = css`
        font-size: ${value.fontSize };
        font-weight: ${value.fontWeight };
        line-height: ${value.lineHeight };
    `
})

export const TextStyleVariantMap = mapa;

// return css`
//     font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize };
//     font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight };
//     line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight };
// `;


const TextBase = styled.span`
    ${({ variant }) => TextStyleVariantMap[variant] };
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