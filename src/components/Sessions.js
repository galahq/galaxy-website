/**
 * @flow
 */

import styled from 'styled-components'

export const Title = styled.h1`
  font-style: italic;
`

export const Kicker = styled.span`
  color: #b7dbfc;
  display: block;
  font-family: tenso;
  font-size: 1.1rem;
  font-style: normal;
  margin-bottom: 8px;
`

export const Image = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Row = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto auto;

  ${Image} {
    height: auto;
    max-width: 200px;
  }

  @media (max-width: 843px) {
    grid-gap: 0;
    grid-template-columns: auto;

    ${Image} {
      grid-row: 1 / span 1;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }
  }
`
