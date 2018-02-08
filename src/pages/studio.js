/**
 * @providesModule StudioPage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamOverview from '../components/streams/Overview'
import StreamNavigation from '../components/streams/Navigation'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const StudiosIcon: any = require('../assets/studios.svg')

const StudioPage = () => (
  <main>
    <StreamNavigation active="studio" />
    <StreamOverview
      title="Case Design Studios"
      tagline="Do a cool thing with people"
      pitch="People interested in learning about how to produce a case study,
      or produce one better, will come with a case subject and materials attend
      a series of hands-on sessions, and leave with a draft of a case, and
      visualize its presentation on Gala."
      icon={<StudiosIcon />}
    />

    <MaxWidthContainer />
  </main>
)

export default StudioPage
