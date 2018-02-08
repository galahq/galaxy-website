/**
 * @providesModule StudioPage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamOverview from '../components/streams/Overview'
import StreamPeople from '../components/streams/People'
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

    <StreamPeople
      people={[
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`,
          photoUrl: 'http://msc-gala.imgix.net/1PkpCkuj4y7M6CCk3EUD8fgs',
          links: [
            {
              text: 'Google',
              url: 'https://www.google.com/search?q=Ed+Waisanen'
            },
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/edward-waisanen-92087712'
            }
          ]
        },
        {
          name: 'Ed Heinemeier Waisanen',
          title: 'Media Coordinator',
          description: `This Ed is just as cool as the other Ed but way more
                        obviously Scandinavian.`
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`
        }
      ]}
    />

  </main>
)

export default StudioPage
