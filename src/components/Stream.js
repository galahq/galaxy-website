/**
 * @providesModule Stream
 * @flow
 */

import * as React from 'react'
import styled, { css } from 'styled-components'

import MaxWidthContainer from './shared/MaxWidthContainer'

export const StreamSection = styled.div`
  background: #1d3f5e;
`
export const StreamInnerSection = MaxWidthContainer.withComponent('section')
  .extend`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 1rem;
 

  @media (max-width: 843px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Stream = styled.div`
  flex: 1;
  padding: 0 0.75em;
  max-width: 500px;

  &:first-child {
    padding-left: 0;
    padding-top: 0;
  }

  &:last-child {
    padding-right: 0;
    padding-bottom: 0;
  }

  @media (max-width: 843px) {
    padding: 0.75em 0;
  }

  & > p {
    padding-bottom: 1rem;
  }
`

export const StreamTitle = styled.h2`
  text-align: center;
  margin-top: 1.5rem;
`
export const StreamImg = styled.img`
  max-width: 12rem;

  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
