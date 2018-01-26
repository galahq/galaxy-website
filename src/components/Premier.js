/**
 * @providesModule Premier
 * @flow
 */

import styled, { css } from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const Premier = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &:nth-child(2n) {
    justify-content: flex-end;
  }
`
export default Premier

export const PremierSection = styled.section`
  padding: 1rem 0;
  background-color: #f9a825;
  color: #02294b;
`

export const PremierInnerSection = MaxWidthContainer.extend`
  padding-bottom: 0;
`

export const PremierIcon = styled.figure`
  margin: 0 0 0 2rem;

  @media (max-width: 430px) {
    margin: 0 -2rem 0 1rem;
  }

  & > svg {
    width: 120px;
    height: 120px;
    opacity: 0.85;

    @media (max-width: 430px) {
      width: 70px;
      height: 70px;
    }

    & path,
    & polygon,
    & polyline {
      stroke: #1d0561;
      stroke-width: 0.5px;

      @media (max-width: 430px) {
        stroke-width: 0.75px;
      }
    }
  }


  ${p =>
    p.thin &&
    css`
      margin: 0 -1rem 0 3rem;

      @media (max-width: 430px) {
        margin: 0 -2.5rem 0 1rem;
      }
    `}

  ${
    ''
    /* prettier-ignore */
  }${Premier}:nth-child(2n) & {
    margin: 0 2rem 0 0;
    order: 2;

    @media (max-width: 430px) {
      margin: 0 1rem 0 -1rem;
    }


    ${p =>
      p.thin &&
      css`
        margin: 0 3rem 0 -1rem;

        @media (max-width: 430px) {
          margin: 0 1rem 0 -2.5rem;
        }
      `}
  }

`

export const PremierInfo = styled.div`
  margin-left: 4rem;
  max-width: 600px;

  & h2 {
    margin-top: 0rem;

    font-style: italic;
  }

  ${
    ''
    /* prettier-ignore */
  }${Premier}:nth-child(2n) & {
    margin-left: 0;
    margin-right: 4rem;

    text-align: right;
  }
`
