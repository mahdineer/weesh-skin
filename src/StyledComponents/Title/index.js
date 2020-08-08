import styled, { css } from 'styled-components'
import C from 'Root/constants'

export default styled.span`
    color: ${({ color, theme }) => theme.colors[color || 'foreground']};
    ${({ padding }) =>
        padding &&
        css`
            padding: ${padding};
        `};
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin};
        `};
    ${({ fontSize }) =>
        fontSize &&
        css`
            font-size: ${fontSize};
        `};
    ${({ fontWeight }) =>
        fontWeight &&
        css`
            font-weight: ${fontWeight};
        `};
    ${({ textTransform }) =>
        textTransform &&
        css`
            text-transform: ${textTransform};
        `};
`