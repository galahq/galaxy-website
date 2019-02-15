/**
 * @providesModule Footer
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import CallToActionButton from '../CallToActionButton'
import MaxWidthContainer from '../shared/MaxWidthContainer'

const Stars: any = require('../../assets/footer-stars.svg')
const GalaLogo: any = require('../../assets/gala-logo.svg')
const BlockM: any = require('../../assets/block-m.svg')
const SesyncLogo: any = require('../../assets/sesync-logo.png')
const IsbLogo: any = require('../../assets/isb-logo.png')

const Footer = () => (
  <footer>
    <LightContainer>
      <InnerContainer>
        <Stars />
        <Info>
          <span>Ann Arbor, MI</span>
          <span>June 20 & 21, 2019</span>
        </Info>
        <CallToActionButton big text="Join Mailing List" href="http://eepurl.com/di7gKv"/>
        <a href="mailto:galaxy-info@umich.edu">
          Email galaxy-info@umich.edu for questions.
        </a>
        <a href="http://eepurl.com/di7gKv">
          Join our mailing list for updates.
        </a>
      </InnerContainer>
    </LightContainer>
    <DarkContainer>
      <Grid>
        <a href="https://www.learngala.com">
          <GalaLogo />
        </a>
        <a href="https://www.umich.edu">
          <BlockM />
        </a>
        <a href="http://www.isb.edu">
          <img src={IsbLogo} />
        </a>
        <a href="https://www.sesync.org">
          <img src={SesyncLogo} />
        </a>
      </Grid>
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

const DarkContainer = styled.div`
  background-color: #02284b;
  padding: 6em 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-gap: 40px;
  margin: 0 auto;
  width: min-content;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 120px);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0;
    }
  }
}
`

const InnerContainer = MaxWidthContainer.extend`
  display: flex;
  flex-direction: column;
  align-items: center;

  a[href^='mailto'] {
    margin-top: 1em;
    display: inline-block;
  }
`

const Info = styled.p`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;

  & > span {
    display: block;
  }
`
