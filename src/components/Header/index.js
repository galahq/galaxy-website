/**
 * @providesModule Header
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../Button'
import MaxWidthContainer from '../MaxWidthContainer'
import PoissonDiscDistribution from './PoissonDiscDistribution'

const GalaxyLogo: any = require('../../assets/galaxy-v.svg')

const Header = () => (
  <Container>
    <InnerContainer>
      <ShadowLink to="/">
        <Logo />
      </ShadowLink>
      <Subtitle>Ann Arbor, MI</Subtitle>
      <Subtitle>June 7–9</Subtitle>
    </InnerContainer>
    <OpticallyCenteredButton big primary href="https://google.com">
      Register
    </OpticallyCenteredButton>
    <PoissonDiscDistribution />
  </Container>
)

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #02284b;
  padding: 6rem 0 5rem;

  @media (max-width: 843px) {
    padding: 5rem 0 4rem;
  }
`

const InnerContainer = MaxWidthContainer.extend`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & > * {
    z-index: 1;
  }

  @media (max-width: 843px) {
    flex-direction: column;
  }
`

const ShadowLink = styled(Link)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 75px;
    width: 50px;
    box-shadow: 0px 10px 100px 100px #001e38d6;
    z-index: -1;
  }
`

const Logo = styled(GalaxyLogo)`
  margin: 0;
  height: 130px;
  width: 200px;

  @media (max-width: 843px) {
    margin-left: 14px;
  }
`

const Subtitle = styled.p`
  margin: 0 2em;

  color: white;
  font-family: tenso;
  font-size: 110%;
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (min-width: 843px) {
    margin: 0 5em;
    &:first-of-type {
      order: -1;
    }
  }
`

const OpticallyCenteredButton = Button.withComponent('a').extend`
  margin-top: 22px;
  z-index: 1;

  @media (min-width: 843px) {
    margin-left: 27px
`
