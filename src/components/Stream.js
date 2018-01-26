/**
 * @providesModule Stream
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import MaxWidthContainer from './shared/MaxWidthContainer'

const Stream = styled.div`
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
`

export default Stream

export const StreamSection = MaxWidthContainer.withComponent('section').extend`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 843px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StreamTitle = styled.h2`
  text-align: center;
  margin-top: 1.5rem;
`

export const StreamIcon = styled.figure`
  text-align: center;
  margin: 0;

  & > svg {
    width: 80px;
    height: 80px;
    opacity: 0.85;

    & path {
      stroke: white;
      stroke-width: 0.65px;
    }
  }
`
