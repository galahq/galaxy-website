/**
 * @providesModule Footer
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import MaxWidthContainer from '../shared/MaxWidthContainer'

const Stars: any = require('../../assets/footer-stars.svg')
const GalaLogo: any = require('../../assets/gala-logo.svg')
const BlockM: any = require('../../assets/block-m.svg')

const Footer = () => (
  <footer>
    <LightContainer>
      <InnerContainer>
        <Stars />
        <Info>
          <span>Ann Arbor, MI</span>
          <span>June 7–9, 2018</span>
        </Info>
        <Button big>Register</Button>
      </InnerContainer>
    </LightContainer>
    <DarkContainer>
      <a href="https://www.learngala.com">
        <GalaLogo />
      </a>
      <a href="https://www.umich.edu">
        <BlockM />
      </a>
    </DarkContainer>
  </footer>
)

export default Footer

const LightContainer = styled.div`
  background-color: #1d3f5e;
  display: flex;
  justify-content: center;
  padding: 2em 0;
`

const DarkContainer = LightContainer.extend`
  background-color: #02284b;

  padding: 6em 0;

  & > a {
    margin: 0 4em;

    & svg {
      width: 100px;
      height: 50px;
    }
  }
`

const InnerContainer = MaxWidthContainer.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Info = styled.p`
  margin-top: 2em;
  margin-bottom: 2em;

  & > span {
    display: block;
  }
`
