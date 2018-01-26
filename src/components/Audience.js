/**
 * @providesModule Audience
 * @flow
 */

import styled from 'styled-components'

import MaxWidthContainer from '../components/shared/MaxWidthContainer'

export const AudienceSection = MaxWidthContainer.withComponent('section')
  .extend`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`

export const AudienceColumns = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 2em;
`

export const AudienceColumn = styled.div`
  flex: 1;
  max-width: 300px;
  min-width: 200px;
  text-align: left;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  & > p {
    margin-bottom: 1.5rem;

    & strong {
      color: #cbb8ff;
      letter-spacing: 0.3px;
    }
  }
`
