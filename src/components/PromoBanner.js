/**
 * @providesModule PromoBanner
 * @flow
 */

import styled, { css } from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

export const PromoBannerSection = styled.section`
  padding: 1rem 0;
  background-color: #f9a825;
  color: #02294b;
`

export const PromoBannerInnerSection = MaxWidthContainer.extend`
  padding-bottom: 0;
  @media (max-width: 843px) {
    max-width: 45em;
  }
`

export const PromoBannerContent = styled.div`
  margin-top: 2rem;

  @media (min-width: 431px) {
    flex-direction: row;

    ${'' /* &:nth-child(2n) {
      justify-content: flex-end;
      flex-direction: row-reverse;
    } */}
  }
`

export const PromoVidContainer = styled.div`
  float: right;
  margin-left: 2.5rem;
  @media (max-width: 600px) {
    margin: 0;
    align-self: center;
    width: 100%;
  }
`

export const PromoBannerImg = styled.img`
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
