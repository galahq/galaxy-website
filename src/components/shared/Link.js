/**
 * @providesModule Links
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from './Button'

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``

export const ExternalButton = Button.withComponent('a').extend.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``

export const LinkWithArrow = styled(Link)`
  position: relative;

  &::after {
    content: ' ›';
    position: absolute;
    right: -0.75em;
  }
`

export const ExternalLinkWithArrow = ExternalLink.extend`
  position: relative;

  &::after {
    content: ' ›';
    position: absolute;
    right: -0.75em;
  }
`
