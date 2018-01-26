/**
 * @providesModule Header
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import PoissonDiscDistribution from './PoissonDiscDistribution'

const Header = () => (
  <Container>
    <MaxWidthContainer>
      <LogoLink to="/">
        <img src={require('../../assets/galaxy-v.svg')} />
      </LogoLink>
      <Subtitle>Ann Arbor, MI</Subtitle>
      <Subtitle>June 7–9</Subtitle>
    </MaxWidthContainer>
  </Container>
)

export default Header

const Container = styled.div`
  position: relative;
  background-color: #02284b;
  padding: 6rem 0;
  margin-bottom: 2rem;
`

const MaxWidthContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;

  & > * {
    z-index: 1;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    flex-basis: 100%;
  }

  & img {
    margin: 0;
    height: 130px;
    width: 200px;

    @media (max-width: 820px) {
      margin-left: 12px;
    }
  }
`

const Subtitle = styled.p`
  margin: 0 2em;

  color: white;
  font-family: tenso;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (min-width: 820px) {
    margin: 0 5em;
    &:first-of-type {
      order: -1;
    }
  }
`
