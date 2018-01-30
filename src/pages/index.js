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
            Galaxy convenes sustainability-minded  people from all backgrounds. 
            Together, we integrate knowledge from different fields; make 
            sustainabiliity science and practice more inclusive; and connect 
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
        <StreamTitle>Charrettes: Codesigned Solutions</StreamTitle>
        <p>
          Leverage your experience for problem solving; connect with experts and talents 
          from a range of fields and places to forge solutions for contentious issues in 
          a given context, evaluate performance of previous charrette solutions, and 
          implement collaborative (re)design. Professional accreditations will be offered 
          during the process.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Sunrise />
        </StreamIcon>
        <StreamTitle>Studios: Case Creation</StreamTitle>
        <p>
          Built to encourage participation, our modules are built to delight and engage users. 
          Boost your science communication skills, create public outreach materials, build your 
          teaching portfolio and training materials for university or organizational use, 
          at a hands-on Galaxy Studio. You’ll leave with multimedia-rich modules to improve, 
          evaluate, and scale sustainability practices.
        </p>
      </Stream>

      <Stream>
        <StreamIcon>
          <Tree />
        </StreamIcon>
        <StreamTitle>Hackathought: Adaptive Development</StreamTitle>
        <p>
          Practice problem-driven, user-oriented, and design-focused software development at 
          the Galaxy Hackathon. We bring together digitally-minded sustainability innovators
          seeking to build closer connections with the community and scale the impact of 
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
            <h2>Case Premières</h2>
            <p>
              Presented in concert with <a href="www.cinetopiafestival.org/">Cinetopia</a>, 
              Galaxy brings you our first annual <a href="www.teachmsc.org/">MSC/Michigan Sustainability Case</a>
              “Premieres”. Premieres introduce each year’s selection of citizen cases, providing deeper dives into 
              issues shaping our lives and our planet. These combine a “gold carpet” 
              event that brings together case production teams of experts, designers, leaders from government, industry, 
              NGOs, Tribal Administrations, prominent spokespeople or advocates. As a public launch of the cases that 
              have been used, assessed, and improved as “betas” in our classrooms, each case will be “screened” and 
              discussed in terms of the conflicts, competing viewpoints, and constructive solutions, fostering both local 
              engagement and global connections with others who are remaking their day-to-day world for a more sustainable future.           
            </p>
          </PremierInfo>
        </Premier>

        <Premier>
          <PremierIcon thin>
            <Trophy />
          </PremierIcon>
          <PremierInfo>
            <h2>Pitch “The case for…” making your case</h2>
            <p>
              Throughout the <a href="https://www.michigan.org/event/mayor-s-green-fair">Ann Arbor Mayor's Green Fair</a>, 
              case studies from Michigan Sustainability Cases will feature the city's sustainability practiceson our
              <a href="https://www.learngala.com">interactive learning platform, Gala</a>. The event showcases efforts from 
              local and state NGOs, agencies, and businesses, providing opportunities for residents to learn about 
              sustainability practices pertaining to their daily life, including energy, forestry, natural area preservation, 
              waste treatment, and water. 
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
              Our Galaxy is not infinite; it ends with a bang. As the <a href="https://www.a2sf.org/">Ann Arbor Summer Festival</a>
              picks up steam just below us under the trees, we will let some off with drinks and dinner on the roof of the gorgeously
              resftored art deco Rackham Auditorium. Overlooking (and eventually spilling into) the live music, dancing and outdoor 
              games of A2SF, we will present juried awards for the “best case scenarios” from our year of modules in use, weighing face 
              to face testimonials, evidence of influence on policy and practice, and usage information from our platform. Peer review 
              has never been so pleasurable; professional advancement has rarely made you feel so alive. 
            </p>
          </PremierInfo>
        </Premier>
      </PremierInnerSection>
    </PremierSection>

    {/* ---~~~===~~~--- */}

    <AudienceSection>
      <h2>Join us!</h2>
      <p>Together at Galaxy, we...</p>
      <AudienceColumns>
        <AudienceColumn>
          <h3>Generate...</h3>
          <p>
            <strong>Curriculum modules</strong> for use in a variety of settings to promote sustainability. 
          </p>
          <p>
            <strong>Collective suggestions</strong> for better policy.
          </p>
          <p>
            <strong>Creative solutions</strong> for maximizing stakeholder engagement across cultures, scales, and backgrounds.
          </p>
        </AudienceColumn>
        <AudienceColumn>
          <h3>Form a constellation that...</h3>
          <p>
            <strong>Integrates new knowledge</strong> from different fields for sustainability problem-solving.
          </p>
          <p>
            <strong>science communication & media production</strong> skills.
          </p>
          <p>
            <strong>Increases impact</strong> of sustainability research.
          </p>
          <p>
            <strong>Incorporates science</strong>, community practice, and sustainability principles.
          </p>
        </AudienceColumn>
      </AudienceColumns>
    </AudienceSection>
  </main>
)

export default HomePage
