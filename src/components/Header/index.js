/**
 * @providesModule Header
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../Button'
import PoissonDiscDistribution from './PoissonDiscDistribution'

const Header = () => (
  <Container>
    <MaxWidthContainer>
      <Link to="/">
        <Logo src={require('../../assets/galaxy-v.svg')} />
      </Link>
      <Subtitle>Ann Arbor, MI</Subtitle>
      <Subtitle>June 7–9</Subtitle>
    </MaxWidthContainer>
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
  margin-bottom: 2rem;

  @media (max-width: 820px) {
    padding: 5rem 0 4rem;
  }
`

const MaxWidthContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 960px;

  & > * {
    z-index: 1;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

const Logo = styled.img`
  margin: 0;
  height: 130px;
  width: 200px;

  @media (max-width: 820px) {
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

  @media (min-width: 820px) {
    margin: 0 5em;
    &:first-of-type {
      order: -1;
    }
  }
`

const OpticallyCenteredButton = Button.withComponent('a').extend`
  margin-top: 22px;
  z-index: 1;

  @media (min-width: 820px) {
    margin-left: 27px
`
