/**
 * @providesModule HomePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Tagline, {
  TaglineSection,
  TaglineInnerSection
} from '../components/Tagline'
import {
  Stream,
  StreamSection,
  StreamInnerSection,
  StreamTitle,
  StreamImg
} from '../components/Stream'
import {
  PremierSection,
  PremierInnerSection,
  Premier,
  PremierInfo,
  PremierImg
} from '../components/Premier'
import {
  ClassSection,
  ClassInnerSection,
  ClassInfoSection,
  ClassThemesSection,
  ClassImage,
  ClassInfo,
  ClassVid,
  ClassVidBox,
  ClassTheme
} from '../components/masterclass'
import { ExternalLink } from '../components/shared/Link'
import { CenteredCallToActionButton } from '../components/CallToActionButton'
import {
  AudienceSection,
  AudienceColumns,
  AudienceColumn
} from '../components/Audience'

const ClassVideo: any = require('../assets/galaxy2.mp4')
const InclusiveImg: any = require('../assets/inclusive.png')
const ToolsImg: any = require('../assets/tools.png')
const ActiveImg: any = require('../assets/active.png')
const AwardeesImg: any = require('../assets/awardees.png')
const ScreeningImg: any = require('../assets/screening.png')
const ClassVidThumb: any = require('../assets/classvidthumb.png')

const HomePage = () => (
  <main>
    <TaglineSection>
      <TaglineInnerSection>
        <Tagline>A sustainability learning exchange</Tagline>
        <p>
          Organized around{' '}
          <ExternalLink href="https://www.learngala.com/">
            real-world case studies
          </ExternalLink>, Galaxy is a lively interactive convergence of
          professionals, educators, innovators, concerned citizens, and
          scientists. The gathering is ideal for collaboration, and networking
          across sectors and individuals that are typically separate.
        </p>
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <StreamInnerSection>
        <Stream>
          {/* <StreamIcon animation="transit">
          <StudiosIcon />
        </StreamIcon> */}

          <StreamImg src={InclusiveImg} />
          <StreamTitle>Inclusive Community</StreamTitle>
          <p>
            Galaxy draws environmentally-minded people from all backgrounds. By
            building sessions around living issues, we create spaces for people
            with unique perspectives to connect.
          </p>
        </Stream>
        <Stream>
          <StreamImg src={ActiveImg} />
          <StreamTitle>Active Exchange</StreamTitle>
          <p>
            Our format involves dynamic peer learning. Our sessions are not
            organized as panels; we move around and find ways around common
            obstacles in our work for sustainable systems.
          </p>
        </Stream>
        <Stream>
          {/* <StreamIcon animation="irradiate">
          <DesignSprintIcon />
        </StreamIcon> */}
          <StreamImg src={ToolsImg} />
          <StreamTitle>Powerful Tools</StreamTitle>
          <p>
            Discover the full functionality of the open access{' '}
            <ExternalLink href="https://www.learngala.com/">
              Gala platform
            </ExternalLink>{' '}
            for collaborative learning. Practice techniques for nimble
            multimedia production and exchange with participants.
          </p>
        </Stream>
      </StreamInnerSection>
    </StreamSection>

    <ClassSection>
      <ClassInnerSection>
        <ClassInfoSection>
          <h2>Sessions</h2>
        </ClassInfoSection>
        <ClassThemesSection>
          <ClassTheme>
            <h3>
              Master Class: Cross-sector collaboration for intervention in
              complex urban systems
            </h3>
            <p>
              Master Classes are an opportunity for engaged learning informed by
              teachers, researchers, and professionals, working in a promising
              area of interest.
            </p>
            <p>
              with{' '}
              <ExternalLink href="https://www.fs.fed.us/research/people/profile.php?alias=shines">
                Sarah Hines
              </ExternalLink>
            </p>
          </ClassTheme>
          <ClassTheme>
            <h3>Case Exchange</h3>
            <p>
              Join our growing sustainability case community! Featuring short
              presentations and activities, the case exchange is a space to
              share promising practices in learning, teaching, and communicating
              with case studies; to present work in progress; and to explore
              opportunities to unite teaching, research, and practice.
            </p>
            <p>
              <ExternalLink href="https://teachmsc.submittable.com/submit/135656/abstract-submission-for-galaxy-2019">
                Submit an abstract
              </ExternalLink>
            </p>
          </ClassTheme>
          <ClassTheme>
            <h3>
              Working Group: Linking classrooms with professionals and
              researchers for landscape management
            </h3>
            <p>
              Working sessions convene participants around current challenges in
              advancing sustainability education to share best practices,
              network, and collaborate. The session is open to all interested
              stakeholders and focuses on group discussion and emphasize problem
              solving.
            </p>
            <p>
              with{' '}
              <ExternalLink href="https://seas.umich.edu/research/faculty/sheila_schueller">
                Sheila Schueller
              </ExternalLink>
            </p>
          </ClassTheme>
        </ClassThemesSection>
        {/* <ClassThemesSection>
          <ClassTheme>
            <h3>
              Cross-sector collaboration for intervention in complex urban
              systems
            </h3>
            <p>
              {' '}
              with{' '}
              <ExternalLink href="https://www.fs.fed.us/research/people/profile.php?alias=shines">
                Sarah Hines */}
        {/* <ExternalLink href="https://www.linkedin.com/in/melissa-stults-959a348">
                  {' '}
                  Melissa 'Missy' Stults
                </ExternalLink> */}
        {/* </ExternalLink>
            </p>
            <p />
          </ClassTheme>

          <ClassTheme>
            <h3>
              Linking classrooms with professionals and researchers for
              landscape management
            </h3>
            <p>
              with{' '}
              <ExternalLink href="https://seas.umich.edu/research/faculty/sheila_schueller">
                Sheila Schueller
              </ExternalLink>
            </p>
          </ClassTheme>
        </ClassThemesSection> */}
      </ClassInnerSection>
    </ClassSection>

    {/* ---~~~===~~~--- */}

    <PremierSection>
      <PremierInnerSection>
        <Premier>
          <PremierImg src={ScreeningImg} />
          <PremierInfo>
            <h2>Film Screening: The Last Animals</h2>
            <p>
              Presented in concert with{' '}
              <ExternalLink href="http://www.teachmsc.org">
                Michigan Sustainability Cases{' '}
              </ExternalLink>
              and the{' '}
              <ExternalLink href="http://www.michtheater.org/about">
                Michigan Theater Foundation
              </ExternalLink>
              . At this year's film screening, Galaxy brings you Kate Brooks'
              film, The Last Animals, which explores "the conservationists,
              scientists and activists battling poachers and criminal networks
              to protect elephants and rhinos." The screening will be followed
              by a panel discussion with researchers, conservationists, and
              community members.
            </p>
          </PremierInfo>
        </Premier>

        <Premier>
          <PremierImg src={AwardeesImg} />
          <PremierInfo>
            <h2>Gala Case Awards Ceremony</h2>
            <p>
              Our annual case awards ceremony recognizes exemplary
              sustainability case studies, published over the past year on the
              Gala platform, that stand out for their contribution to the areas
              of Inclusion, Innovation, and Impact.
            </p>
          </PremierInfo>
        </Premier>
      </PremierInnerSection>
    </PremierSection>

    {/* ---~~~===~~~--- */}

    {/* <AudienceSection>
      <h2>Join us!</h2>
      <AudienceColumns>
        <AudienceColumn>
          <h3>Generate…</h3>
          <p>
            <strong>Curriculum modules</strong> for use across cultures,
            sectors, and scales to promote sustainability.
          </p>
          <p>
            <strong>Collective recommendations</strong> for better policy and
            implementation.
          </p>
          <p>
            <strong>Creative solutions</strong> that turn stakeholders into
            makers and collaborators.
          </p>
        </AudienceColumn>
        <AudienceColumn>
          <h3>Form a constellation that…</h3>
          <p>
            <strong>Integrates new knowledge</strong> from different fields for
            sustainability problem-solving.
          </p>
          <p>
            <strong>Increases impact</strong> of sustainability research and
            teaching.
          </p>
          <p>
            <strong>Incorporates science</strong>, community practice, and
            sustainability principles.
          </p>
        </AudienceColumn>
      </AudienceColumns>
    </AudienceSection> */}
  </main>
)

export default HomePage

const Kicker = styled.span`
  display: block;
  font-style: italic;
`

const NoHyphens = styled.span`
  white-space: nowrap;
  hyphens: none;
`
