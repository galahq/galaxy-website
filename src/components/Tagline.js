/**
 * @providesModule Tagline
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'

import Button from './shared/Button'
import MaxWidthContainer from './shared/MaxWidthContainer'
import TitleSection from './shared/TitleSection'

const Tagline = styled.h1`
  font-family: freight-display-pro;
  font-size: 3rem;
  font-style: italic;
  font-weight: 400;
  line-height: 0.95;
  margin-top: 2.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 430px) {
    font-size: 2.5rem;
  }

  ${p =>
    p.small &&
    css`
      font-size: 2.5rem;
    `};
`

export default Tagline

export const TaglineSection = TitleSection.extend`
  padding-bottom: 0.25rem;
`

export const TaglineInnerSection = MaxWidthContainer.extend`
  display: flex;
  flex-flow: row wrap;
  max-width: 45em;
`

export const TaglineContainer = styled.div`
  flex-grow: 1;
  flex-basis: 450px;
  margin-left: auto;
  margin-right: auto;

  & p {
    max-width: 42em;
  }
`

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

    &:last-of-type {
      margin-bottom: 1.25rem;
    }
  }
`
