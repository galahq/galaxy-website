/**
 * @providesModule masterclass
 * @flow
 */

import styled from 'styled-components'
import Link from 'gatsby-link'

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
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const ClassTheme = styled(Link)`
  background-color: #4e6d8a;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.19), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
  display: grid;
  font-size: 0.9rem;
  grid-gap: 32px;
  grid-template-columns: auto auto min-content;
  margin-bottom: 1rem;
  padding: 32px;
  text-decoration: none;

  @media (max-width: 843px) {
    grid-template-columns: auto min-content;
    grid-template-areas: "image arrow" "text arrow";
    padding: 16px;
  }

  &::after {
    align-self: center;
    color: #a8cdef;
    content: '›';
    font-size: 40px;

    @media (max-width: 843px) {
      grid-area: arrow;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 0;
    font-style: normal;
    text-align left;
    line-height: 1.2;
  }

  img {
    align-self: center;
    height: 180px;
    margin-bottom: 0;
    width: auto;
  }
`
export const ClassImage = ``
export const ClassThemeImage = styled.img`
  width: 100%;
  margin-bottom: 0;
`
