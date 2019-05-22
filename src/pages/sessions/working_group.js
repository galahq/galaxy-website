/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Kicker, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/working_group/cover.png')
const sheilaImage = require('../../assets/working_group/sheila.png')
const claireImage = require('../../assets/working_group/claire.png')
const johnImage = require('../../assets/working_group/john.png')
const lingImage = require('../../assets/working_group/ling.png')
const davidImage = require('../../assets/working_group/david.png')
const mariaImage = require('../../assets/working_group/maria.png')

export default function WorkingGroupPage () {
  return (
    <main>
      <TitleSection>
        <RunningTextContainer>
          <Title>
            <Kicker>Civic–Campus Working Group</Kicker>
            Linking Classrooms with Professionals &amp; Researchers
          </Title>

          <Row>
            <p>
              After lunch, we’ll convene an interactive roundtable allowing on
              University of Michigan and other campus partners to
              collaboratively benchmark their innovations in experiential
              learning &amp; community partnerships for sustainability
              education. Open to all interested stakeholders and focused on
              discussion &amp; problem solving.
            </p>
            <Image src={coverImage} />
          </Row>

          <em>Preliminary program details listed below.</em>
        </RunningTextContainer>
      </TitleSection>

      <RunningTextContainer>
        <h2>Featuring</h2>

        <h3>
          Sheila Schueller, UM School for Environment &amp; Sustainability
        </h3>
        <Row>
          <p>
            Dr. Schueller teaches Ecology &amp; Field Biology courses and has
            worked as an adaptive management consultant for conservation
            organizations across the country. She seeks to integrate student
            field activities with the real-world data needs of local natural
            resource planners and managers. She has also served as Assistant
            Director of the Ecosystem Management Initiative.
          </p>
          <Image src={sheilaImage} />
        </Row>

        <h3>
          Claire Dancz, Clemson University Civil Engineering &amp; Science
          Education
        </h3>
        <Row>
          <p>
            Dr. Dancz’s expertise lies in developing active,
            experiential-learning activities on UN Sustainable Development
            Goals. As a Kolbe™ Certified Consultant, she specializes in
            assessment of student-learning outcomes to empower individuals with
            diverse problem-solving instincts to improve productivity,
            communication, leadership, and impact.
          </p>
          <Image src={claireImage} />
        </Row>

        <h3>John Knox, Wake Forest University School of Law</h3>
        <Row>
          <p>
            John Knox is an internationally recognized expert on human rights
            law and international environmental law. From 2012 to 2015, he
            served as the first United Nations Independent Expert, and from 2015
            to 2018, as its first Special Rapporteur, on the issue of human
            rights obligations relating to the enjoyment of a safe, clean,
            healthy and sustainable environment.
          </p>
          <Image src={johnImage} />
        </Row>

        <h3>
          Ling Mu, Tsinghua University School of Public Policy &amp; Management
        </h3>
        <Row>
          <p>
            Ling is an Assistant Professor at the School of Public Policy at
            Tsinghua University in Beijing, China and Director of the China Case
            Center for Public Policy &amp; Management. She is currently using
            cases in training and continuing education for civic leaders. Her
            research focuses on public budgeting.
          </p>
          <Image src={lingImage} />
        </Row>

        <h3>
          David Krueger, Baldwin Wallace University Sustainability Clinic™️
        </h3>
        <Row>
          <p>
            As the Charles E. Spahr Chair in Managerial and Corporate Ethics,
            Dr. Krueger directs the Institute for Sustainable Business
            Practices, co-directs BW’s new sustainability major, and leads the
            BW’s Sustainability Clinic™️.  Prior to Dr. Krueger’s work at BW, he
            was executive director of the Center for Ethics and Corporate Policy
            in Chicago.
          </p>
          <Image src={davidImage} />
        </Row>

        <h3>
          Maria Carmen Lemos, UM School for Environment &amp; Sustainability
        </h3>
        <Row>
          <p>
            Dr. Lemos is Associate Dean for Research at the University of
            Michigan School for Environment &amp; Sustainability. Her broad
            research interests are related to the human dimensions of global
            change and social studies of science. She also co-directs the Great
            Lakes Integrated Sciences and Assessments Program (GLISA).
          </p>
          <Image src={mariaImage} />
        </Row>
      </RunningTextContainer>

      <MinimalTextContainer>
        <h2>In collaboration with:</h2>

        <ul>
          <li>
            <a href="http://ceder.soe.umich.edu/">
              Center for Education Design, Evaluation, and Research (CEDER)
            </a>
          </li>

          <li>
            <a href="https://taubmancollege.umich.edu/research/engaging-community-through-classroom-mecc">
              Michigan Engaging Community through the Classroom
            </a>
          </li>

          <li>
            <a href="https://www.law.umich.edu/clinical/environmental/Pages/default.aspx">
              Environmental Law &amp; Sustainability Clinic
            </a>
          </li>

          <li>
            <a href="https://ginsberg.umich.edu/">
              The Edward Ginsberg Center for Community Service &amp; Learning
            </a>
          </li>

          <li>
            <a href="https://www.si.umich.edu/programs/professional-and-community-engagement/citizen-interaction-design">
              Citizen Interaction Design at the School of Information
            </a>
          </li>

          <li>
            <a href="https://www.urbanlab.umich.edu/">
              Michigan Urban Collaboratory
            </a>
          </li>

          <li>
            <a href="https://wmeac.org/">
              West Michigan Environmental Action Council (WMEAC)
            </a>
          </li>

          <li>
            <a href="https://www.michiganseagrant.org/great-lakes-education-program/">
              NOAA Sea Grant Great Lakes Education Program (GLEP)
            </a>
          </li>
        </ul>
      </MinimalTextContainer>
    </main>
  )
}

const MinimalTextContainer = styled(RunningTextContainer)`
  color: #cfe5f9;
`
