/**
 * @providesModule CharrettePage
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

const CharrettesIcon: any = require('../assets/charrettes.svg')

const CharrettePage = () => (
  <main>
    <StreamNavigation active="charrette" />

    <StreamOverview
      title="Policy in Practice Charrette"
      tagline="Simulate with a case. Stimulate understanding."
      pitch="Gain conflict resolution and decision-making skills, and
      contribute to the solution of a contentious issue."
      icon={<CharrettesIcon />}
    />

    <MaxWidthContainer>
      <RunningTextContainer>
        The Policy in Practice Charrette prepares you to lead and form
        collaborative networks to solve challenging contemporary problems.
        Participate in a live policy simulation of the unfolding dioxane water
        crisis in Ann Arbor while learning how to navigate the policy making
        process, forming alliances between stakeholder groups, incorporating and
        communicating complex science and uncertainty, explore the role
        technologies can play in providing information and visualizing
        solutions, then developing organizing frames to push your policy agenda
        forward.
      </RunningTextContainer>

      <StreamLogistics>
        <div>
          <h3>Bring</h3>
          <p>Bring your creativity.</p>
        </div>
        <div>
          <h3>Exchange</h3>
          <p>
            Exchange with a community of educators, practitioners, and
            communicators to learn from one another about different sector
            approaches to problem-solving.
          </p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>
            Experience one method for engaging broader audiences with the cases
            you designed in the Case Studio.
          </p>
        </div>
      </StreamLogistics>

      <RunningTextContainer>
        <h3>Build Skills</h3>
        <ul>
          <li> Stakeholder Analysis and Negotiation</li>
          <li>Incorporate knowledge and uncertainty in the policy process</li>
          <li>Conduct Cost Benefit Analyses</li>
          <li>Frame and Communicate </li>
          <li>
            Gain specialized knowledge for health, sustainability, and planning
            practitioners
          </li>
          <li>Engage audiences with your own case </li>
        </ul>
        The Charrette is essentially problem-solving sessions that gathers
        practitioners in policy, advocacy, and the private sector who are
        looking to stay on top of latest relevant science and researchers
        looking to connect with practitioners and the public for collaborative
        problem-solving. The Charrettes will be facilitated by different working
        groups using cases for a problem-solving, solution-design process.
      </RunningTextContainer>
    </MaxWidthContainer>

    <StreamPeople
      people={[
        {
          name: 'Matt Naud',
          title: 'Something',
          description: <span>Matt is Matt. What else can I say?</span>,
        },
      ]}
    />
  </main>
)

export default CharrettePage
