/**
 * @providesModule CharrettePage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamNavigation from '../components/streams/Navigation'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const CharrettePage = () => (
  <main>
    <StreamNavigation active="charrette" />

    <MaxWidthContainer />
  </main>
)

export default CharrettePage
