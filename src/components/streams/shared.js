/**
 * @flow
 */

import styled from 'styled-components'

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
