/**
 * @providesModule masterclass
 * @flow
 */

import styled, { css } from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

export const ClassSection = styled.section``

export const ClassInnerSection = MaxWidthContainer.extend`
  margin-top: 1rem;

  & h2 {
    font-style: italic;
  }

  @media (max-width: 843px) {
    max-width: 45em;
  }

  @media (max-width: 843px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ClassInfoSection = styled.div`
  display: flex;
  @media (max-width: 843px) {
    display: block;
  }
  margin-bottom: 0.5rem;
`

export const ClassInfo = styled.div`
  @media (max-width: 843px) {
    margin-right: inherit;
  }

  & h2 {
    margin-top: 0rem;
    font-style: italic;
  }
`

export const ClassVidBox = styled.div`
  height: 100%;
  width: 100%;
`

export const ClassVid = styled.video`
  display: block;
  max-width: 18rem;
  max-height: 10rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const ClassThemesSection = styled.div`
  max-width: 42em;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const ClassTheme = styled.div`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.19), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: #497196;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding: 0 1.6rem .8rem 1.6rem;
  &:nth-child(2n) {
    background: #657686;
  }
  & h3 {
   font-size: 1.2rem;
    margin-top: 0;
    padding-top: 1rem;
    font-style: normal;
    text-align left; 
    line-height: 1.2;
  
  }
  & p {
    margin-left: .5rem;
    margin-right: .5rem;
  }
  & p:nth-of-type(2) {
    margin-top: .8rem;
    font-size: 0.9rem;
    font-style: italic;
    text-align: right;
  }
`
export const ClassImage = ``
export const ClassThemeImage = styled.img`
  width: 100%;
  margin-bottom: 0;
`
