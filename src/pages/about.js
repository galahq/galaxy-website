/**
 * @providesModule About
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import ExternalLink from '../components/shared/ExternalLink'

const AboutPage = () => (
  <main>
    <TitleSection>
      <MaxWidthContainer>
        <RunningTextContainer>
          <h1>About Us</h1>
        </RunningTextContainer>
      </MaxWidthContainer>
    </TitleSection>

    <MaxWidthContainer>
      <RunningTextContainer>
        <h2>Michigan Sustainability Cases</h2>
        <p>
          <KeySentence>
            <ExternalLink href="http://www.teachmsc.org">
              Michigan Sustainability Cases
            </ExternalLink>{' '}
            began with a mandate to create a new kind of teaching case,
            co-designed for contributing solutions to real-world problems.
          </KeySentence>
        </p>
        <p>
          In 2017 the University of Michigan launched its new School for
          Environment and Sustainability, which houses our initiative to create
          an uncommon education for the common man—and woman—about
          sustainability. Cases widely used in Law, Medicine, Policy, Business,
          and other professional education settings are sold to instructors and
          students as PDF files to download and discuss. We wanted to innovate:
          ours would be open access, and they would empower teams of professors,
          practitioners, and students to tell the story of a real-world problem
          and a challenging decision. As we piloted case co-creation in
          locations ranging from Ann Arbor to Accra (from Baltimore to Beijing;
          from Kathmandu to Kalamazoo) we realized they can be used in
          communities or organizations where lifelong learners confront
          sustainability challenges. Our process is iterative. It incorporates
          research and assessment, supports scientific publication but also
          broad implementation, while honing practical problem-solving skills
          for creators and learners alike. These lessons feature in our case
          creation studios, where we offer collaborative learning. For we
          quickly realized we could not innovate alone. To scale sustainability
          we needed reach across our campus and world. We needed software to
          foster generous collaborations, and make them shine.
        </p>

        <h2>Gala</h2>
        <p>
          <KeySentence>
            <ExternalLink href="https://www.learngala.com">Gala</ExternalLink>,
            our open-access platform hosts not only our MSCs, but also branded
            cases from our partners, and shared cases from our wider user
            community.
          </KeySentence>
        </p>
        <p>
          The platform offers a wide range tools, such as built-in analytics,
          in-line discussion forums, CaseLog, an open access exchange of
          teaching insights to allow effective learning interactions and
          teaching improvements. Gala supports media-rich learning materials,
          multi-modal experiential learning, and inline community discussions.
          We are constantly innovating with Gala to facilitate a wider network
          of learners and problem-solvers on the UM campus and beyond. Combining
          media skills, new modes of data analysis, and emerging experiential
          learning techniques, we foster local engagement and global connections
          for a more sustainable future. Specifically, our Inclusive Design
          Sprint helps define what apps or tools can extend our learning beyond
          classrooms, or across boundaries of K-12, vocational, and university
          level curricula.
        </p>

        <h2>Galaxy</h2>
        <p>
          <KeySentence>
            Galaxy, our annual event, convenes campus, civic, community and
            corporate learners to hone skills that cut across these sectors:
            learning design, tech innovation, and social change process in
            environmental context.
          </KeySentence>
        </p>
        <p>
          We launch classroom-tested cases for public use through our Charettes,
          which start with The Michigan Theatre “Case Premiere,” which convenes
          artists, activists, scientists, officials and more to open up our
          collaborations to public engagement.The Premiere also brings a new
          stream of environmental content to the annual{' '}
          <ExternalLink href="http://www.cinetopiafestival.org">
            Cinetopia Film Festival
          </ExternalLink>. Our Premiere will pour out onto iconic Liberty Street
          in Ann Arbor, closed off that evening for the annual Ann Arbor{' '}
          <ExternalLink href="https://www.michigan.org/event/mayor-s-green-fair">
            Mayor’s Green Fair
          </ExternalLink>, which we are enriching through our partnerships and
          across U.S. networks like the Urban Sustainability Directors Network
          and U.S. Forest Service Urban Forest Labs. Our Awards Ceremony & Gala
          celebrates case winners in three categories: strongest technical
          innovation, inclusivity of non traditional learners, and impact on the
          problems framed in the cases. Winning cases can be recognized across
          all our sites, from the Mountains of Central China to the coasts of
          West Africa or right here at home. The{' '}
          <ExternalLink href="http://a2sf.org">
            Ann Arbor Summer Festival
          </ExternalLink>{' '}
          (currently developing a case to improve zero waste event practices)
          partners with us so that our Gala, and Galaxy itself, can culminate in
          a summer evening celebration.
        </p>
      </RunningTextContainer>
    </MaxWidthContainer>
  </main>
)

export default AboutPage

const KeySentence = styled.em`
  font-family: freight-text-pro;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.3;
`
