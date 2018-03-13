/**
 * @providesModule SprintPage
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
import { ExternalLink } from '../components/shared/Link'

const SprintIcon: any = require('../assets/design-sprint.svg')

const SprintPage = () => (
  <main>
    <StreamNavigation active="sprint" />

    <StreamOverview
      title="Inclusive Design Sprint"
      tagline="Design some stuff and learn to do it well"
      pitch="Participate as a software developer, a user experience and user
      interface designer, or as a user, leave with a prototype of a better
      web/mobile app for sustainability teaching and learning."
      icon={<SprintIcon />}
    />

    <MaxWidthContainer>
      <RunningTextContainer>
        <p>
          The Sprint will ask budding and experienced developers, data
          scientists, and user interface (UI) and user experience (UX) designers
          to interact with scholars and students in the rapid prototyping of new
          forms of teaching and learning and adaptations or innovations in
          content delivery and data collection. The Sprint is for students and
          professionals, ranging from data scientists, user interface and
          experience designers, developers, to data scientists. The process will
          be for rapid prototyping of new forms to teaching and learning for
          innovations in content delivery and data collection in the
          sustainability field. We hope to engage tech-savvy educators in the
          co-design process and carry forward innovative ideas.
        </p>
      </RunningTextContainer>

      <StreamLogistics>
        <div>
          <h3>Bring</h3>
          <p>
            Bring your skills and intention to make the world a better place.
          </p>
        </div>
        <div>
          <h3>Collaborate</h3>
          <p>Collaborate with people who have a different set of skills.</p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>
            Experience an intensive version of the{' '}
            <ExternalLink href="http://www.gv.com/sprint/">
              Google Ventures Design Sprint.
            </ExternalLink>
          </p>
        </div>
        <div>
          <h3>Develop</h3>
          <p>Develop a prototype for scaling sustainability impact.</p>
        </div>
      </StreamLogistics>

      <RunningTextContainer>
        <h3>Sprint Phases</h3>
        <ul>
          <li>Problem mapping and exploration</li>
          <li>Solutions co-design</li>
          <li>
            Decide on one solution to move forward
            <ul>
              <li>Sketching the interface</li>
              <li>Analysis based on audience, cost and benefit</li>
            </ul>
          </li>
          <li>Prototyping the design</li>
          <li>Testing the design</li>
        </ul>
      </RunningTextContainer>
    </MaxWidthContainer>
  </main>
)

export default SprintPage
