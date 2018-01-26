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
  </main>
)

export default HomePage

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2em 0 4em;
`
