/**
 * @providesModule HomePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Tagline, {
  TaglineSection,
  TaglineInnerSection,
  CallToAction,
} from '../components/Tagline'
import {
  Stream,
  StreamSection,
  StreamInnerSection,
  StreamTitle,
  StreamImg,
} from '../components/Stream'
import {
  PremierSection,
  PremierInnerSection,
  Premier,
  PremierInfo,
  PremierImg,
} from '../components/Premier'
import {
  ClassSection,
  ClassInnerSection,
  ClassInfoSection,
  ClassThemesSection,
  ClassInfo,
  ClassVid,
  ClassVidBox,
  ClassTheme,
  ClassThemeImage,
} from '../components/masterclass'
import { ExternalLink } from '../components/shared/Link'

import {
  AudienceSection,
  AudienceColumns,
  AudienceColumn,
} from '../components/Audience'
import { CenteredCallToActionButton } from '../components/CallToActionButton'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const ClassVideo: any = require('../assets/galaxy2.mp4')
const InclusiveImg: any = require('../assets/inclusive.png')
const ToolsImg: any = require('../assets/tools.png')
const ActiveImg: any = require('../assets/active.png')
const AwardeesImg: any = require('../assets/awardees.png')
const ScreeningImg: any = require('../assets/Screening.png')
const ClassVidThumb: any = require('../assets/classvidthumb.png')
const Theme1: any = require('../assets/sarah.png')
const Theme2: any = require('../assets/missy.png')
const Theme3: any = require('../assets/sheila.png')
const Theme4: any = require('../assets/ling.png')

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
          scientists. The gathering is ideal for constructive exchange,
          collaboration, and networking across sectors and individuals that are
          typically separate. It is a space to share best practices in
          communication, learning, and teaching; to present sustainability work
          in progress; and to explore opportunities to unite teaching, research,
          and practice.
        </p>
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <StreamInnerSection>
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
          <ClassInfo>
            <h2>Master Classes</h2>
            <p>
              Master classes convene participants around a theme or concept with
              a critical role in advancing sustainability to share best
              practices, network, and collaborate. Sessions are led by
              sustainability teachers, researchers, and professionals who are
              often case authors. They are complemented by presentations from
              Galaxy participants and conclude with group discussion and/or
              problem solving.
            </p>
          </ClassInfo>
          <ClassVidBox>
            <ClassVid src={ClassVideo} controls poster={ClassVidThumb} />
          </ClassVidBox>
        </ClassInfoSection>
        {/* <ClassThemesSection>
          <ClassTheme>
            <ClassThemeImage src={Theme1} />
            <h3>
              Cross-sector collaboration for intervention in complex urban
              systems
            </h3>
            <p>
              {' '}
              with{' '}
              <ExternalLink href="https://www.fs.fed.us/research/people/profile.php?alias=shines">
                Sarah Hines
              </ExternalLink>
            </p>
            <p />
          </ClassTheme>
          <ClassTheme>
            <ClassThemeImage src={Theme2} />
            <h3>Building networks to scale climate adaptation strategies</h3>
            <p>
              with{' '}
              <ExternalLink href="https://www.linkedin.com/in/melissa-stults-959a348">
                {' '}
                Melissa 'Missy' Stults
              </ExternalLink>
            </p>
          </ClassTheme>
          <ClassTheme>
            <ClassThemeImage src={Theme3} />
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
          <ClassTheme>
            <ClassThemeImage src={Theme4} />
            <h3>
              Creating international communities of practice for better
              environmental management
            </h3>
            <p>with Mu Ling</p>
          </ClassTheme>
        </ClassThemesSection> */}
      </ClassInnerSection>
    </ClassSection>

    {/* ---~~~===~~~--- */}

    <PremierSection>
      <PremierInnerSection>
        <Premier>
          {/* <PremierIcon thin>
            <Moon />
          </PremierIcon> */}
          <PremierImg src={ScreeningImg} />
          <PremierInfo>
            <h2>
              <Link to="/premiere">Film Screening</Link>
            </h2>
            <p>
              Presented in concert with{' '}
              <ExternalLink href="http://www.teachmsc.org">
                Michigan Sustainability Cases
              </ExternalLink>
              , the{' '}
              <ExternalLink href="https://www.a2gov.org/departments/systems-planning/planning-areas/climate-sustainability/Pages/GreenFair.aspx">
                Ann Arbor Mayor’s Green Fair
              </ExternalLink>{' '}
              and the{' '}
              <ExternalLink href="http://www.michtheater.org/about">
                Michigan Theater Foundation
              </ExternalLink>
              , Galaxy brings you a screening of a documentary film on a
              critical sustainability issue, followed by a panel discussion with
              filmakers, experts, and community members.
            </p>
          </PremierInfo>
        </Premier>

        <Premier>
          <PremierInfo>
            <h2>Gala Case Awards Ceremony</h2>
            <p>
              Our annual case awards ceremony recognizes exemplary
              sustainability case studies, published over the past year on the
              Gala platform, that stand out for their contribution to the areas
              of Inclusion, Innovation, and Impact.
            </p>
          </PremierInfo>
          <PremierImg src={AwardeesImg} />
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
