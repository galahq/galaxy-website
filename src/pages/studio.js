/**
 * @providesModule StudioPage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

import StreamOverview from '../components/streams/Overview'
import StreamPeople from '../components/streams/People'
import StreamNavigation from '../components/streams/Navigation'
import { StreamLogistics } from '../components/streams/shared'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'

const StudiosIcon: any = require('../assets/studios.svg')

const StudioPage = () => (
  <main>
    <StreamNavigation active="studio" />

    <StreamOverview
      title="Case Design Studios"
      tagline="Come create with us"
      pitch="Arrive with an idea, leave with powerful tools for science
      communication, outreach and active learning."
      icon={<StudiosIcon />}
    />

    <MaxWidthContainer>
      <RunningTextContainer>
        <p>
          Tackling sustainability means addressing with complex, interconnected,
          and ever-evolving problems. Case studies offer a unique way to engage:
          bringing real world challenges to learners in the classroom and
          beyond.
        </p>
        <p>
          Join our community of case producers, media professionals, and
          educators for a series of intensive hands-on design, exchange, and
          production sessions. Together, we’ll harness the full power of cases
          for education and social engagement.
        </p>
      </RunningTextContainer>

      <StreamLogistics>
        <div>
          <h3>Bring</h3>
          <p>
            Arrive with a well-thought-out case idea that you want to produce or
            an existing case that you want to take to the next level.
          </p>
        </div>
        <div>
          <h3>Develop</h3>
          <p>
            Develop skills to design, create, and make the most of your case.
          </p>
        </div>
        <div>
          <h3>Exchange</h3>
          <p>
            Exchange with a community of educators, practitioners, and
            communicators dedicated to exploring the limits of what cases can
            do.
          </p>
        </div>
      </StreamLogistics>

      <RunningTextContainer>
        <h3>Practical Studio Sessions</h3>
        <ul>
          <li>Case design</li>
          <li>Co-production with practitioners and other non-academics</li>
          <li>Media curation & production for cases</li>
          <li>Using cases effectively in the classroom </li>
          <li>Crafting effective engaged learning exercises</li>
          <li>Adapting research for cases*</li>
          <li>Case production as a teaching tool*</li>
          <li>Assessment*</li>
        </ul>
        <p>
          You will also have a chance to visualize your case on the open-access
          Gala platform, getting hands-on with Gala’s tools for multimedia,
          community engagement, and case deployment.
        </p>
      </RunningTextContainer>
    </MaxWidthContainer>

    <StreamPeople
      people={[
        {
          name: 'Cynthia Wei',
          title: 'Specialty/role in studio',
          description: (
            <span>
              Cynthia is the Associate Director of Education at the National
              Socio-Environmental Synthesis Center (SESYNC).
            </span>
          ),
        },
        {
          name: 'Ed Waisanen',
          title: 'What will he do?',
          description: (
            <span>
              Ed is the Media Director for Michigan Sustainability Cases and the
              resident expert in using the Gala platform to make your cases
              engaging and powerful.
            </span>
          ),
          photoUrl: 'http://msc-gala.imgix.net/1PkpCkuj4y7M6CCk3EUD8fgs',
          links: [
            {
              text: 'Google',
              url: 'https://www.google.com/search?q=Ed+Waisanen',
            },
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/edward-waisanen-92087712',
            },
          ],
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`,
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`,
        },
        {
          name: 'Ed Waisanen',
          title: 'Media Director',
          description: `We call Ed the mad genius because he’s great at what
                        he does and wow is that ever lucky for you because you
                        get to learn from him.`,
        },
      ]}
    />
  </main>
)

export default StudioPage
