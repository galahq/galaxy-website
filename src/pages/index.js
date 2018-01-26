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
import Premier, {
  PremierSection,
  PremierInnerSection,
  PremierIcon,
  PremierInfo
} from '../components/Premier'
import {
  AudienceSection,
  AudienceColumns,
  AudienceColumn
} from '../components/Audience'

const Sunrise: any = require('../assets/sunrise.svg')
const Windmill: any = require('../assets/windmill.svg')
const Tree: any = require('../assets/tree.svg')
const Gemstone: any = require('../assets/gemstone.svg')
const Trophy: any = require('../assets/Trophy.svg')

const HomePage = () => (
  <main>
    <TaglineSection>
      <TaglineInnerSection>
        <TaglineContainer>
          <Tagline>A sustainability learning exchange</Tagline>
          <p>
            Organized around{' '}
            <a href="https://www.learngala.com/">real-world case studies</a>,
            Galaxy convenes professionals, community members, international
            educators, artists, experts, activists, and students. Together, we
            transform learning and connect research, teaching, and practice.
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
          <Windmill />
        </StreamIcon>
        <StreamTitle>Codesign & Policy Charettes</StreamTitle>
        <p>
          Work through a problem and catch up with the latest science. It’ll be
          the most fun you’ve ever had getting your ASDF certification.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Sunrise />
        </StreamIcon>
        <StreamTitle>
          Case Creation<br />Studios
        </StreamTitle>
        <p>
          Learn how to blah blah in these hands-on multimedia practica. You’ll
          leave with a teaching module designed perfectly for your needs.
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

    {/* ---~~~===~~~--- */}

    <PremierSection>
      <PremierInnerSection>
        <Premier>
          <PremierIcon>
            <Gemstone />
          </PremierIcon>
          <PremierInfo>
            <h2>Case Premieres</h2>
            <p>
              Our first annual Michigan Sustainability Case “Premieres” will
              feature scientists, CEOs, activists, and artists coming together
              in celebration of blah blah what even is this? This is presented
              in concert with <a href="www.cinetopiafestival.org/">Cinetopia</a>.
            </p>
          </PremierInfo>
        </Premier>

        <Premier>
          <PremierIcon thin>
            <Trophy />
          </PremierIcon>
          <PremierInfo>
            <h2>Awards Ceremony &&nbsp;Gala</h2>
            <p>
              Following the screenings and discussions you are invited to join
              us for a meal and celebration, overlooking and spilling into the{' '}
              <a href="https://www.a2sf.org/">Ann Arbor Summer Festival</a>.
            </p>
          </PremierInfo>
        </Premier>
      </PremierInnerSection>
    </PremierSection>

    <Footer>
      <Button big>Register</Button>
    </Footer>
    {/* ---~~~===~~~--- */}

    <AudienceSection>
      <h2>You’re Invited!</h2>
      <p>Galaxy is perfect for you if you are...</p>
      <AudienceColumns>
        <AudienceColumn>
          <p>
            A <strong>community member</strong> looking to make an impact.
            {/* and are searching for expertise and talents to help them. */}
          </p>
          <p>
            A practitioner committed to <strong>cultivating talent</strong> by
            impacting the curriculum.
          </p>
          <p>
            An early career professional looking to build your{' '}
            <strong>teaching portfolio</strong>.
          </p>
          <p>
            A practitioner interested in{' '}
            <strong>public education and outreach</strong>.
          </p>
        </AudienceColumn>
        <AudienceColumn>
          <p>
            A students interested in{' '}
            <strong>learning from professionals</strong> in your chosen field.
          </p>
          <p>
            A grad student looking to build{' '}
            <strong>science communication & media production</strong> skills.
          </p>
          <p>
            A professor who wants to <strong>improve your teaching</strong>.
            {/* and build closer connections with the community. */}
          </p>
          <p>
            Interested in <strong>meeting practitioners and faculty</strong>{' '}
            from different fields.
          </p>
        </AudienceColumn>
      </AudienceColumns>
    </AudienceSection>
  </main>
)

export default HomePage

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2em 0 4em;
`
