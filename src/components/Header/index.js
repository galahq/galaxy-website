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
        logistics: 'Location',
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
    {full && (
      <OpticallyCenteredCallToActionButton
        text="Register"
        href="https://www.eventbrite.com/e/galaxy-2019-a-sustainability-learning-exchange-tickets-57524141255"
        target="_blank"
        rel="noopener noreferrer"
      />
    )}
    {full && (
      <HeaderLink
        href="https://teachmsc.submittable.com/submit/135656/abstract-submission-for-galaxy-2019"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit an Abstract
      </HeaderLink>
    )}
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
          padding: 5rem 0 3rem;

          @media (max-width: 843px) {
            padding: 4rem 0 3rem;
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
  primary: true,
})`
  margin-top: 22px;
  z-index: 1;

  @media (min-width: 843px) {
    margin-left: 4px;
  }
`

const HeaderLink = styled.a`
  font-weight: 500;
  margin-top: 1em;
  color: #cbbdf2;
  font-size: 1.1em;
  z-index: 1;
  margin-left: 0.08em;
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
