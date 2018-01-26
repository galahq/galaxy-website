/**
 * @providesModule HomePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../components/shared/Button'
import Tagline, {
  TaglineSection,
  TaglineInnerSection,
  TaglineContainer,
  CallToAction
} from '../components/Tagline'
import Stream, {
  StreamTitle,
  StreamSection,
  StreamIcon
} from '../components/Stream'

const Sunrise: any = require('../assets/sunrise.svg')
const Windmill: any = require('../assets/windmill.svg')
const Tree: any = require('../assets/tree.svg')

const HomePage = () => (
  <main>
    <TaglineSection>
      <TaglineInnerSection>
        <TaglineContainer>
          <Tagline>A sustainability learning exchange</Tagline>
          <p>
            Organized around real-world case studies, Galaxy invites
            practitioners, community members, international experts, artists,
            teachers, and students to work collaboratively on solutions for
            sustainability challenges and communication innovations to connect
            research, teaching, and practice.
          </p>
        </TaglineContainer>

        <CallToAction>
          <p>
            <strong>Join</strong> the <strong>conversation</strong>
          </p>
          <p>
            <strong>Expand</strong> the <strong>collaboration</strong>
          </p>
          <p>
            <strong>Enjoy</strong> the <strong>celebration</strong>
          </p>
          <Button>Register</Button>
        </CallToAction>
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <Stream>
        <StreamIcon>
          <Sunrise />
        </StreamIcon>
        <StreamTitle>Case Co-creation Studios</StreamTitle>
        <p>
          Learn how to blah blah in these hands-on multimedia practica. You’ll
          leave with a teaching module designed perfectly for your needs.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Windmill />
        </StreamIcon>
        <StreamTitle>Social Design and Policy Charettes</StreamTitle>
        <p>
          Work through a problem and catch up with the latest science. It’ll be
          the most fun you’ve ever had getting your ASDF certification.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Tree />
        </StreamIcon>
        <StreamTitle>Digital Innovation Hackathon</StreamTitle>
        <p>
          Team up with new friends and hurry to design, implement, and test an
          exciting idea to improve sustainability teaching.
        </p>
      </Stream>
    </StreamSection>
  </main>
)

export default HomePage
