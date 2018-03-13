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
              (MSC) began with the ambition to create a new kind of teaching
              case, co-designed for contributing solutions to real-world
              challenges.
            </KeySentence>
          </p>
          <p>
            Cases are widely used in Law, Medicine, Policy, Business, and other
            professional education settings, most often sold to instructors and
            students as PDF files to download and discuss. We wanted to
            innovate: ours would be open access, and they would empower teams of
            professors, practitioners, and students to tell the story of a
            real-world problem and a challenging decision. As we piloted case
            co-creation in locations ranging from Ann Arbor to Accra, from
            Baltimore to Beijing, and from Kathmandu to Kalamazoo, we realized
            these cases could be used across communities and organizations where
            lifelong learners confront sustainability challenges.
          </p>
          <p>
            But we also recognized that we could not innovate alone. To scale
            sustainability, we needed reach across our campus and world. And we
            needed a tool to help us foster generous collaborations and make
            them shine. Enter Gala.
          </p>
        </Card>

        <Card>
          <h2>Gala</h2>
          <p>
            <KeySentence>
              Our open-access platform{' '}
              <ExternalLink href="https://www.learngala.com">Gala</ExternalLink>{' '}
              hosts sustainability cases created by the MSC team, our partner
              institutions, and our wider user community.
            </KeySentence>
          </p>
          <p>
            The platform supports media-rich content and offers a wide range of
            tools: built-in analytics (so that understanding of use patterns by
            generation, gender, or other metrics can foster inclusivity),
            in-line discussion forums (a conversation board sits on top of each
            case for nuanced, updated information), Caselog (an open exchange of
            teaching insights to allow creative implementation and effective
            learning interactions), and more.
          </p>
          <p>
            We are constantly innovating with Gala to facilitate a wider network
            of learners and problem-solvers on the U-M campus and beyond.
            Combining media skills, new modes of data analysis, and emerging
            experiential learning techniques, we foster local engagement and
            global connections for a more sustainable future.
          </p>
        </Card>

        <Card>
          <h2>Galaxy</h2>
          <p>
            Galaxy, our first-ever public event, will convene campus, civic,
            community, and corporate learners to hone skills that cut across the
            sectors of learning design, tech innovation, and social change in
            the context of environmental sustainability.
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
