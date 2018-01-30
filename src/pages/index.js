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
        <StreamTitle>Policy in Practice Charrettes</StreamTitle>
        <p>
          Connect with experts from a range of fields and places to forge
          solutions for contentious issues in a given context and implement
          collaborative (re)design. Professional accreditation may be available.
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
          Arrive with an idea, leave with a powerful tool for science
          communication, outreach and active learning. Join a community of case
          and media producers for intensive hands-on design, exchange, and
          production sessions.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Tree />
        </StreamIcon>
        <StreamTitle>
          Inclusive<br />Design Sprint
        </StreamTitle>
        <p>
          Practice problem-driven, user-oriented, and design-focused software
          development. We’re bringing together sustainability innovators to
          build connections with the community and scale the impact of
          sustainability education.
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
              Presented in concert with{' '}
              <a href="https://www.cinetopiafestival.org/">Cinetopia</a>, Galaxy
              brings you our first annual MSC Premieres. We’ll introduce this
              year’s selection of citizen cases: deep dives into issues shaping
              our lives and our planet. A “gold carpet” event, leaders from
              government, industry, NGOs, Tribal Administrations, and advocacy
              will join case producers for a public launch of successful cases.
              Each case will be screened and discussed, fostering local
              engagement and global connections for a more sustainable future.
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
              gorgeously resftored art deco Rackham Auditorium. Overlooking—and
              eventually spilling into—the live music, dancing and outdoor games
              of the{' '}
              <a href="https://www.a2sf.org/">Ann Arbor Summer Festival</a>, we
              will present juried awards for the best of our year of modules in
              use, weighing face to face testimonials, impact on policy and
              practice, and measured performance with students.
            </p>
          </PremierInfo>
        </Premier>
      </PremierInnerSection>
    </PremierSection>

    {/* ---~~~===~~~--- */}

    <AudienceSection>
      <h2>Join us!</h2>
      <p>Together at Galaxy, we can…</p>
      <AudienceColumns>
        <AudienceColumn>
          <h3>generate…</h3>
          <p>
            <strong>Curriculum modules</strong> for use in a variety of settings
            to promote sustainability.
          </p>
          <p>
            <strong>Collective suggestions</strong> for better policy.
          </p>
          <p>
            <strong>Creative solutions</strong> for maximizing stakeholder
            engagement across cultures, scales, and backgrounds.
          </p>
        </AudienceColumn>
        <AudienceColumn>
          <h3>form a constellation that…</h3>
          <p>
            <strong>Integrates new knowledge</strong> from different fields for
            sustainability problem-solving.
          </p>
          <p>
            <strong>Increases impact</strong> of sustainability research.
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
