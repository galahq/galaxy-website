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
import Stream, {
  StreamTitle,
  StreamSection,
  StreamIcon,
} from '../components/Stream'
import Premier, {
  PremierSection,
  PremierInnerSection,
  PremierIcon,
  PremierInfo,
} from '../components/Premier'
import { ExternalLink } from '../components/shared/Link'
import {
  AudienceSection,
  AudienceColumns,
  AudienceColumn,
} from '../components/Audience'
import { CenteredCallToActionButton } from '../components/CallToActionButton'
import PriceTable from '../components/PriceTable'
import MaxWidthContainer from '../components/shared/MaxWidthContainer'

const StudiosIcon: any = require('../assets/studios.svg')
const CharrettesIcon: any = require('../assets/charrettes.svg')
const DesignSprintIcon: any = require('../assets/design-sprint.svg')
const Moon: any = require('../assets/moon.svg')
const Trophy: any = require('../assets/trophy.svg')

const HomePage = () => (
  <main>
    <TaglineSection>
      <TaglineInnerSection>
        <Tagline>A sustainability learning exchange</Tagline>
        <p>
          Organized around{' '}
          <ExternalLink href="https://www.learngala.com/">
            real-world case studies
          </ExternalLink>, Galaxy will convene environmentally-minded people
          from all backgrounds. Together, we will integrate sustainability
          science and knowledge from different fields, make sustainability
          solutions and decision-making more inclusive, and connect research,
          teaching, and practice for visible impact in communities.
        </p>

        <h2>
          <Kicker>Got a case?</Kicker>
          Make it shine at Galaxy 2018!
        </h2>
        <p>
          The driving force of Galaxy is an intensive, three-day, hands-on Case
          Innovation Studio. Improve your existing case studies with innovative
          tools for learning design, media curation and production, and
          communicating complexity.
        </p>
        <p>
          You will also engage in dialogue with software developers about tech
          features that can extend the reach of your case or add depth. Social
          events each evening will expand your networks and spark meaningful
          relationships.
        </p>

        <CenteredCallToActionButton />
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <Stream>
        <StreamIcon animation="coalesce">
          <CharrettesIcon />
        </StreamIcon>
        <StreamTitle>Illuminate the Issue</StreamTitle>
        <p>
          Acquire powerful tools to deepen understanding, reveal nuance,
          illustrate relevance, and promote substantive exchange on specific
          issues.
        </p>
      </Stream>

      <Stream>
        <StreamIcon animation="transit">
          <StudiosIcon />
        </StreamIcon>
        <StreamTitle>Expand the Toolbox</StreamTitle>
        <p>
          Discover the full functionality of the open access{' '}
          <ExternalLink href="https://www.learngala.com/">
            Gala platform
          </ExternalLink>{' '}
          for collaborative learning, integrated multimedia, and outcome
          assessment.
        </p>
      </Stream>

      <Stream>
        <StreamIcon animation="irradiate">
          <DesignSprintIcon />
        </StreamIcon>
        <StreamTitle>Amplify the Impact</StreamTitle>
        <p>
          Engage with stakeholder networks, advance policy agendas, build
          learning communities, and communicate complex science to diverse
          audiences.
        </p>
      </Stream>
    </StreamSection>

    <MaxWidthContainer style={{ display: 'flex' }}>
      <CenteredCallToActionButton text="Learn More" to="/studio" />
    </MaxWidthContainer>

    {/* ---~~~===~~~--- */}

    <PremierSection>
      <PremierInnerSection>
        <Premier>
          <PremierIcon thin>
            <Moon />
          </PremierIcon>
          <PremierInfo>
            <h2>
              <Link to="/premiere">Case Premiere</Link>
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
              </ExternalLink>{' '}
              (with their festival{' '}
              <ExternalLink href="http://www.cinetopiafestival.org/">
                Cinetopia
              </ExternalLink>), Galaxy brings you our first annual Gold Carpet
              Case Premieres for a pilot program in Citizen Sustainability
              Certification.
            </p>
          </PremierInfo>
        </Premier>

        <Premier>
          <PremierIcon thin>
            <Trophy />
          </PremierIcon>
          <PremierInfo>
            <h2>The Gala Awards Ceremony & Dinner</h2>
            <p>
              Galaxy culminates with dinner and drinks on the roof of the
              gorgeously restored art deco Rackham Auditorium. Overlooking the
              live music, dancing and outdoor games of the{' '}
              <ExternalLink href="https://www.a2sf.org/">
                Ann Arbor Summer Festival
              </ExternalLink>, we will present “best-of” awards for innovative
              cases currently in use on our platform.
            </p>
          </PremierInfo>
        </Premier>
      </PremierInnerSection>
    </PremierSection>

    {/* ---~~~===~~~--- */}

    <AudienceSection>
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
      <PriceTable />
    </AudienceSection>
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
