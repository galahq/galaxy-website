/**
 * @flow
 */

import styled from 'styled-components'
import BaseTitleSection from '../shared/TitleSection'

export const TitleSection = BaseTitleSection.extend`
  margin-bottom: 3em;
  position: relative;
`

export const SmallTitle = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-family: tenso;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.3px;
`

export const StreamLogistics = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  li {
    margin: 0;
  }
`

export const Quotation = styled.blockquote`
  font-family: freight-text-pro;
  font-size: 140%;
  font-style: italic;
  line-height: 1.3;
  margin: 2em 1em;
  position: relative;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`

export const Callout = styled.aside`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  font-size: 90%;
  line-height: 1.4;
  margin: 2em 0;
  padding: 0.75em 1em;

  h2 {
    font-family: tenso;
    font-size: 120%;
    margin: 0.2em 0 0.5em;
  }
`
