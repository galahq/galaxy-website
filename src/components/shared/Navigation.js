/**
 * @providesModule Navigation
 * @flow
 */

import * as React from 'react'
import styled, { css } from 'styled-components'
import BaseLink from 'gatsby-link'

import MaxWidthContainer from './MaxWidthContainer'
import Button from './Button'

type Props = {
  active: string,
  className?: string,
  label?: string,
  links: { [string]: string },
}

const Navigation = ({ active, className, label, links }: Props) => {
  const Links = Object.keys(links).map(path => (
    <Link key={path} active={active === path} to={`/${path}`}>
      {links[path]}
    </Link>
  ))
  return (
    <List className={className}>
      <HorizontalList>{Links}</HorizontalList>
      <Hamburger>{Links}</Hamburger>
    </List>
  )
}

export default Navigation

class Hamburger extends React.Component<
  { children: React.Node },
  { open: boolean }
> {
  state = { open: false }

  componentDidMount () {
    document.addEventListener('gatsby:route-update', this.handleClose)
  }

  componentWillUnmount () {
    document.removeEventListener('gatsby:route-update', this.handleClose)
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <HamburgerMenuContainer>
        <MenuButton onClick={this.handleOpen}>Menu</MenuButton>
        {this.state.open && (
          <OverlayMenu>
            <MenuButton onClick={this.handleClose}>Close</MenuButton>
            {this.props.children}
          </OverlayMenu>
        )}
      </HamburgerMenuContainer>
    )
  }
}

const List = styled.nav``

const HorizontalList = styled(MaxWidthContainer)`
  padding-bottom: 0;
  @media (max-width: 843px) {
    display: none;
  }
`

const Link = styled(BaseLink)`
  display: inline-block;
  padding: 0.9rem 1rem;

  text-decoration: none;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${p =>
    p.active &&
    css`
      background-color: #35536f;
    `};
`

const HamburgerMenuContainer = styled.div`
  @media (min-width: 843px) {
    display: none;
  }
`

const MenuButton = styled(Button)`
  margin: 0.5em;
`

const OverlayMenu = styled.div`
  align-items: flex-start;
  background-color: #1d3f5e;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: 4rem 1rem;
  position: fixed;
  top: 0;
  transform: translateZ(1px);
  width: 100vw;

  @supports (-webkit-backdrop-filter: blur(20px)) {
    background-color: #1d3f5e99;
    -webkit-backdrop-filter: blur(20px);
  }

  & ${Link} {
    padding-left: 0 !important;
  }

  & ${MenuButton} {
    position: absolute;
    right: 0;
    top: 0;
  }
`
