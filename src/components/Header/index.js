/**
 * @providesModule Header
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

import Navigation from '../shared/Navigation'
import CallToActionButton from '../CallToActionButton'
import MaxWidthContainer from '../shared/MaxWidthContainer'
import { LabelForScreenReaders } from '../shared/A11y'
import PoissonDiscDistribution from './PoissonDiscDistribution'

const BaseVerticalLogo: any = require('../../assets/galaxy-2019-logo-v.svg')
const BaseHorizontalLogo: any = require('../../assets/galaxy-2019-logo-h.svg')

type Props = { full: boolean }
const Header = ({ full }: Props) => (
  <Container full={full}>
    <MainNavigation
      links={{
        '': 'Home',
        about: 'About',
        schedule: 'Schedule',
        logistics: 'Location'
      }}
    />
    {full ? (
      <InnerContainer>
        <ShadowLink to="/">
          <VerticalLogo />
          <LabelForScreenReaders>Galaxy 2019</LabelForScreenReaders>
        </ShadowLink>
        <Subtitle>Ann Arbor, MI</Subtitle>
        <Subtitle>June 20 & 21</Subtitle>
      </InnerContainer>
    ) : (
      <InnerContainer>
        <Link to="/">
          <HorizontalLogo />
        </Link>
      </InnerContainer>
    )}
    {full && <OpticallyCenteredCallToActionButton text="Join Mailing List" href="http://eepurl.com/di7gKv"/>}

    <PoissonDiscDistribution key={full ? 'true' : 'false'} />
  </Container>
)

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #02284b;

  ${p =>
    p.full
      ? css`
          padding: 7rem 0 5rem;

          @media (max-width: 843px) {
            padding: 6rem 0 4rem;
          }
        `
      : css`
          padding: 1em;
        `};
`

const InnerContainer = MaxWidthContainer.extend`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  width: 100%;

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

const VerticalLogo = styled(BaseVerticalLogo)`
  margin: 0;
  height: 130px;
  width: 200px;

  @media (max-width: 843px) {
    margin-left: 14px;
  }
`

const HorizontalLogo = styled(BaseHorizontalLogo)`
  height: 52px;
  left: 0px;
  position: absolute;
  top: -11px;
  width: 180px;
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

const OpticallyCenteredCallToActionButton = styled(CallToActionButton).attrs({
  big: true,
  primary: true
})`
  margin-top: 22px;
  z-index: 1;

  @media (min-width: 843px) {
    margin-left: 4px;
  }
`

const SmallText = styled.p`
  margin-top: 12px;
  margin-bottom: -12px;
  opacity: 0.8;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.1;

  @media (min-width: 843px) {
    margin-left: 27px;
  }
`

const MainNavigation = styled(Navigation)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  background-color: transparent;
  text-align: right;
  font-weight: 500;
`
