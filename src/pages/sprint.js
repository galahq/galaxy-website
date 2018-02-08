/**
 * @providesModule SprintPage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamNavigation from '../components/streams/Navigation'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const SprintPage = () => (
  <main>
    <StreamNavigation active="sprint" />

    <MaxWidthContainer />
  </main>
)

export default SprintPage
