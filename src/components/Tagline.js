/**
 * @providesModule Tagline
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import MaxWidthContainer from './MaxWidthContainer'

const Tagline = styled.h1`
  font-size: 3rem;
  font-style: italic;
  font-weight: 400;
  line-height: 0.95;
  margin-top: 2.2rem;
  margin-bottom: 1.5rem;
  max-width: 450px;

  @media (max-width: 430px) {
    font-size: 2.5rem;
  }
`

Tagline.Section = styled.section`
  background-color: #1d3f5e;
  padding-bottom: 0.25rem;
`

Tagline.InnerSection = MaxWidthContainer.extend`
  display: flex;
  flex-flow: row wrap;
`

Tagline.Container = styled.div`
  flex-grow: 1;
  flex-basis: 500px;
  margin-right: 1.5rem;
`

export default Tagline

export const CallToAction = styled.div`
  flex: 1;
  min-width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;

  @media (min-width: 843px) {
    padding: 1.5rem 0 0;
  }

  & p {
    font-style: italic;
    text-align: center;

    & strong {
      margin: 0 3px;

      font-style: normal;
      font-size: 1.3rem;
      font-weight: 500;
      vertical-align: -1px;
    }
  }

  & ${Button} {
    margin-top: 0.75rem;
  }
`
