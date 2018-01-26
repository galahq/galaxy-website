/**
 * @providesModule HomePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../components/Button'
import Tagline, { CallToAction } from '../components/Tagline'

const HomePage = () => (
  <main>
    <Tagline.Section>
      <Tagline.InnerSection>
        <Tagline.Container>
          <Tagline>A sustainability learning exchange</Tagline>
          <p>
            Organized around real-world case studies, Galaxy invites
            practitioners, community members, international experts, artists,
            teachers, and students to work collaboratively on solutions for
            sustainability challenges and communication innovations to connect
            research, teaching, and practice.
          </p>
        </Tagline.Container>
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
      </Tagline.InnerSection>
    </Tagline.Section>
  </main>
)

export default HomePage
