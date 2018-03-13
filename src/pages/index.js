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
import {
  AudienceSection,
  AudienceColumns,
  AudienceColumn,
} from '../components/Audience'
import CallToActionButton from '../components/CallToActionButton'
import PriceTable from '../components/PriceTable'

const StudiosIcon: any = require('../assets/studios.svg')
const CharrettesIcon: any = require('../assets/charrettes.svg')
const DesignSprintIcon: any = require('../assets/design-sprint.svg')
const Moon: any = require('../assets/moon.svg')
const Trophy: any = require('../assets/Trophy.svg')

const HomePage = () => (
  <main>
    <TaglineSection>
      <TaglineInnerSection>
        <Tagline>A sustainability learning exchange</Tagline>
        <p>
          Organized around{' '}
          <a href="https://www.learngala.com/">real-world case studies</a>,
          Galaxy will convene environmentally-minded people from all
          backgrounds. Together, we will integrate sustainability science and
          knowledge from different fields, make sustainability solutions and
          decision-making more inclusive, and connect research, teaching, and
          practice for visible impact in communities.
        </p>

        <h2>Got a case? Make it shine at Galaxy 2018!</h2>
        <p>
          The driving force of Galaxy is an intensive hands-on Case Innovation
          Studio over three days. Improve your research and teaching cases with
          innovative tools for learning design, communicating complexity,
          visualizing data, and enhancing public engagement.
        </p>
        <p>
          You will can also engage in dialogue with software developers about
          tech features that can add depth to or extend the reach of your case.
          Social events each evening that will expand your knowledge and spark
          meaningful relationships with your new connections.
        </p>

        <CenteredCallToActionButton />
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <Stream>
        <Link to="charrette">
          <StreamIcon animation="coalesce">
            <CharrettesIcon />
          </StreamIcon>
        </Link>
        <StreamTitle>
          Illuminate<br />the Issue
        </StreamTitle>
        <p>
          Acquire powerful tools to deepen understanding, reveal nuance,
          illustrate relevance, and promote substantive exchange on specific
          environmental issues.
        </p>
      </Stream>

      <Stream>
        <Link to="studio">
          <StreamIcon animation="transit">
            <StudiosIcon />
          </StreamIcon>
        </Link>
        <StreamTitle>
          Expand<br />the Toolbox
        </StreamTitle>
        <p>
          Discover the full functionality of the open access{' '}
          <a href="https://www.learngala.com/">Gala</a> platform for smarter
          content delivery, built-in analytics, and learning progression design.
        </p>
      </Stream>

      <Stream>
        <Link to="sprint">
          <StreamIcon animation="irradiate">
            <DesignSprintIcon />
          </StreamIcon>
        </Link>
        <StreamTitle>
          Amplify<br />the Impact
        </StreamTitle>
        <p>
          Engage with stakeholder networks, advance policy agendas, and
          communicate complex science to diverse audiences.
        </p>
      </Stream>
    </StreamSection>

    {/* ---~~~===~~~--- */}

    <PremierSection>
      <PremierInnerSection>
        <Premier>
          <PremierIcon thin>
            <Moon />
          </PremierIcon>
          <PremierInfo>
            <h2>Case Premieres</h2>
            <p>
              Presented in concert with
              <a href="https://www.a2gov.org/departments/systems-planning/planning-areas/climate-sustainability/Pages/GreenFair2009.aspx">
                Michigan Sustainability Cases
              </a>
              , the{' '}
              <a href="https://www.a2gov.org/departments/systems-planning/planning-areas/climate-sustainability/Pages/GreenFair2009.aspx">
                Ann Arbor Mayor’s Green Fair
              </a>{' '}
              and{' '}
              <a href="http://www.michtheater.org/membership-support/">
                The Michigan Theater Foundation
              </a>{' '}
              (with their festival{' '}
              <a href="http://www.cinetopiafestival.org/">Cinetopia</a>), Galaxy
              brings you our first annual Gold Carpet Case Premieres for a pilot
              program in Citizen Sustainability Certification.
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
              <a href="https://www.a2sf.org/">Ann Arbor Summer Festival</a>, we
              will present “best-of” awards for case modules currently in use on
              our platform.
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
            <strong>Curriculum modules</strong> for use across cultures, sectors
            and scales to promote sustainability.
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

const NoHyphens = styled.span`
  white-space: nowrap;
  hyphens: none;
`

const CenteredCallToActionButton = styled(CallToActionButton)`
  margin: 3rem auto 1.5rem;
`
