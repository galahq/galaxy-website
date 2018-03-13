/**
 * @providesModule Navigation
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'
import BaseLink from 'gatsby-link'

import MaxWidthContainer from './MaxWidthContainer'

type Props = {
  active: string,
  className?: string,
  label?: string,
  links: { [string]: string },
}

const Navigation = ({ active, className, label, links }: Props) => (
  <List className={className}>
    <MaxWidth>
      {Object.keys(links).map(path => (
        <Link active={active === path} to={`/${path}`}>
          {links[path]}
        </Link>
      ))}
    </MaxWidth>
  </List>
)

export default Navigation

const List = styled.nav`
  background-color: #1d3f5e;
`

const MaxWidth = styled(MaxWidthContainer)`
  padding-bottom: 0;
`

const Link = styled(BaseLink)`
  display: inline-block;
  padding: 0.9rem 1rem;

  text-decoration: none;

  ${p =>
    p.active &&
    css`
      background-color: #35536f;
    `};
`
