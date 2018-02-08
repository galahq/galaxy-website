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
import CallToActionButton from '../components/CallToActionButton'

const StudiosIcon: any = require('../assets/studios.svg')
const CharrettesIcon: any = require('../assets/charrettes.svg')
const DesignSprintIcon: any = require('../assets/design-sprint.svg')
const Moon: any = require('../assets/moon.svg')
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
            Galaxy convenes sustainability-minded people from all backgrounds.
            Together, we integrate knowledge from different fields; make
            sustainability science and practice more inclusive; and connect
            research, teaching, and practice for visible impact in communities.
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
          <CallToActionButton />
        </CallToAction>
      </TaglineInnerSection>
    </TaglineSection>

    {/* ---~~~===~~~--- */}

    <StreamSection>
      <Stream>
        <StreamIcon animation="coalesce">
          <CharrettesIcon />
        </StreamIcon>
        <StreamTitle>
          Policy in Practice<br />Charrettes
        </StreamTitle>
        <p>
          Connect with experts from a range of fields and places to forge
          solutions for contentious issues in a given context and implement
          collaborative (re)design. Professional accreditation may be available.
        </p>
        <p>
          <Link to="charette">Learn more ›</Link>
        </p>
      </Stream>

      <Stream>
        <StreamIcon animation="transit">
          <StudiosIcon />
        </StreamIcon>
        <StreamTitle>
          Case Creation<br />Studios
        </StreamTitle>
        <p>
          Arrive with an idea, leave with a powerful tool for science
          communication, outreach and active learning. Join a community of case
          and media producers for intensive hands-on design, exchange, and
          production sessions.
        </p>
        <p>
          <Link to="studio">Learn more ›</Link>
        </p>
      </Stream>

      <Stream>
        <StreamIcon animation="irradiate">
          <DesignSprintIcon />
        </StreamIcon>
        <StreamTitle>
          Inclusive<br />Design Sprint
        </StreamTitle>
        <p>
          Practice problem-driven, user-oriented, and design-focused software
          development. We’re bringing together innovators to build connections
          and scale the impact of sustainability education.
        </p>
        <p>
          <Link to="sprint">Learn more ›</Link>
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
              Presented in concert with{' '}
              <a href="https://www.a2gov.org/departments/systems-planning/planning-areas/climate-sustainability/Pages/GreenFair2009.aspx">
                Ann Arbor Mayor’s Green Fair
              </a>{' '}
              and <a href="http://www.cinetopiafestival.org/">Cinetopia</a>,{' '}
              <NoHyphens>Galaxy</NoHyphens> brings you our first annual{' '}
              <a href="http://www.teachmsc.org/">
                Michigan Sustainability Case
              </a>{' '}
              Premieres. We’ll introduce this year’s selection of citizen cases:
              deep dives into issues shaping our lives and our planet. A “gold
              carpet” event, leaders from government, industry, NGOs, Tribal
              Administrations, and advocacy will join case producers for a
              public launch of successful cases. Each case will be screened and
              discussed, fostering local engagement and global connections for a
              more sustainable future.
            </p>
          </PremierInfo>
        </Premier>

        {/* <Premier>
          <PremierIcon thin>
            <Trophy />
          </PremierIcon>
          <PremierInfo>
            <h2>Pitch “The Case for…”</h2>
            <p>
              Throughout the{' '}
              <a href="https://www.michigan.org/event/mayor-s-green-fair">
                Ann Arbor Mayor’s Green Fair
              </a>, case studies from Michigan Sustainability Cases will feature
              the city’s sustainability practices on our{' '}
              <a href="https://www.learngala.com">
                interactive learning platform, Gala
              </a>. The event showcases efforts from local and state NGOs,
              agencies, and businesses, providing opportunities for residents to
              learn about sustainability practices pertaining to their daily
              life, including energy, forestry, natural area preservation, waste
              treatment, and water.
            </p>
          </PremierInfo>
        </Premier>
 */}
        <Premier>
          <PremierIcon thin>
            <Trophy />
          </PremierIcon>
          <PremierInfo>
            <h2>Awards Ceremony &&nbsp;Gala</h2>
            <p>
              Galaxy culminates with with drinks and dinner on the roof of the
              gorgeously restored art deco Rackham Auditorium. Overlooking—and
              eventually spilling into—the live music, dancing and outdoor games
              of the{' '}
              <a href="https://www.a2sf.org/">Ann Arbor Summer Festival</a>, we
              will present juried awards for the best from our year of modules
              in use. Winners will be selected based on measured performance for
              users, impact on policy and practice, and creativity of immersion,
              simulation or visualization features.
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
    </AudienceSection>
  </main>
)

export default HomePage

const NoHyphens = styled.span`
  white-space: nowrap;
  hyphens: none;
`
