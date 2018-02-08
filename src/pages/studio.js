/**
 * @providesModule StudioPage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamNavigation from '../components/streams/Navigation'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const StudioPage = () => (
  <main>
    <StreamNavigation active="studio" />

    <MaxWidthContainer />
  </main>
)

export default StudioPage
