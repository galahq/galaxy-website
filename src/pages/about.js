/**
 * @providesModule About
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
  PaddedRunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import { ExternalLink } from '../components/shared/Link'
import { CenteredCallToActionButton } from '../components/CallToActionButton'
import BaseCard from '../components/shared/Card'

const AboutPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>About Us</h1>
      </RunningTextContainer>
    </TitleSection>

    <PaddedRunningTextContainer>
      <Grid>
        <Card>
          <h2>Michigan Sustainability Cases</h2>
          <p>
            <KeySentence>
              <ExternalLink href="http://www.teachmsc.org">
                Michigan Sustainability Cases
              </ExternalLink>{' '}
              (MSC) began with the mandate to create a new kind of teaching
              case, co-designed for contributing solutions to real-world
              Sustainability challenges.
            </KeySentence>
          </p>
          <p>
            Cases are widely used in law, medicine, policy, business, and other
            professional education settings, most often sold to instructors and
            students as PDF files to download and discuss. We wanted something
            different for sustainability: our cases would be open access to allow
            anyone to contribute, use, and discuss stories about real-world
            problems. As we piloted case co-creation with teams of professors,
            practitioners, and students, in locations ranging from Ann Arbor to
            Accra, Baltimore to Beijing, and Kathmandu to Kalamazoo, we realized
            these cases could be used <i>across</i> communities and organizations
            where lifelong learners confront sustainability challenges.
          </p>
          <p>
            But we also recognized that we could not innovate alone. To further
            our sustainability efforts, we needed reach across our campus and
            the world. And we needed a tool to help us foster generous
            collaborations. Enter Gala.
          </p>
        </Card>

        <Card>
          <h2>Gala</h2>
          <p>
            <KeySentence>
              Our open access platform{' '}
              <ExternalLink href="https://www.learngala.com">Gala</ExternalLink>{' '}
              hosts sustainability cases created by the MSC team, our partner
              institutions, and our user community on UM campus and beyond.
            </KeySentence>
          </p>
          <p>
            The platform offers tools to support media-rich content modules for
            immersive learning. Pre- and post- tests and user behavior statistics
            enable data-driven improvements for inclusive teaching. Public and
            private discussion boards embedded in each case allow for exchange of
            teaching insights, user commentary, and case updates. These tools
            enable creative case deployment and implementation to suit different
            learning styles and teaching needs, resulting in a delightful user
            experience for case creators, learners, and instructors.
          </p>
          <p>
            We are constantly innovating with Gala to facilitate a wider network
            of learners and problem solvers. Combining media skills, new modes
            of data analysis, and emerging experiential learning techniques, we
            foster local engagement and global connections for a more
            sustainable future.
          </p>
        </Card>

        <Card>
          <h2>Galaxy</h2>
          <p>
            Galaxy, our annual public event, will convene campus, civic,
            community, and corporate learners to hone skills that cut across
            learning design, tech innovation, and social change in the context
            of environmental sustainability.
          </p>
        </Card>
      </Grid>
    </PaddedRunningTextContainer>
  </main>
)

export default AboutPage

const KeySentence = styled.em`
  font-family: freight-text-pro;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.3;
`

const Card = BaseCard.extend`
  padding: 2em;
  margin-left: -2em;
  margin-right: -2em;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
`
