/**
 * @providesModule Premier
 * @flow
 */

import styled, { css } from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

export const PremierSection = styled.section`
  padding: 1rem 0;
  background-color: #f9a825;
  color: #02294b;
`

export const PremierInnerSection = MaxWidthContainer.extend`
  padding-bottom: 0;
  @media (max-width: 843px) {
    max-width: 45em;
  }
`

export const Premier = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 431px) {
    flex-direction: row;

    &:nth-child(2n) {
      justify-content: flex-end;
      flex-direction: row-reverse;
    }
  }
`

export const PremierImg = styled.img`
  display: block;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  width: 180px;
  height: 152px;

  @media (max-width: 430px) {
    width: 80%;
    height: auto;
    align-self: center;
  }
`

export const PremierInfo = styled.div`
  @media (min-width: 431px) {
    margin-left: 2.5rem;

    ${
      ''
      /* prettier-ignore */
    }${Premier}:nth-child(2n) & {
      margin-left: 0;
      margin-right: 2.5rem;
      text-align: right;
    }

    & h2 {
      margin-top: 0rem;
      font-style: italic;
    }
  }
`
