/**
 * @providesModule MaxWidthContainer
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const MaxWidthContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding-top: 0;
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;
  padding-bottom: 1.45rem;

  @supports (padding: max(0px)) {
    padding-left: max(1.0875rem, env(safe-area-inset-left));
    padding-right: max(1.0875rem, env(safe-area-inset-right));
  }
`

export default MaxWidthContainer
