/**
 * @providesModule masterclass
 * @flow
 */

import styled, { css } from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

export const ClassSection = styled.section``

export const ClassInnerSection = MaxWidthContainer.extend`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 843px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ClassInfoSection = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

export const ClassInfo = styled.div`
  max-width: 500px;

  & h2 {
    margin-top: 0rem;

    font-style: italic;
  }
`

export const ClassVidBox = styled.div`
  padding-top: 3.2rem;
  height: 100%;
  width: 100%;
`

export const ClassVid = styled.video`
  display: block;
  max-width: 20rem;
  max-height: 10rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const ClassThemesSection = styled.div`
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const ClassTheme = styled.div`
  
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.19), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: #497196;

   & h3 {
    font-size: 1rem;
    font-style: normal;
    margin: .7rem 1rem 1rem 1rem;
  ${'' /* :hover {
    background: #1d3f5e;
    border: 0.7px solid;
  } */} 
    line-height: 1.2;!important
  }
  & p {
    font-size: 0.8rem;
    font-style: italic;
    text-align: right;
    margin: 1rem;
  }
`

export const ClassThemeImage = styled.img`
  width: 100%;
  margin-bottom: 0;
`
