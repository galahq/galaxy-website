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
const susanImage = require('../../assets/working_group/susan.png')
const belindaImage = require('../../assets/working_group/belinda.png')
const mariaImage = require('../../assets/working_group/maria.png')
const emmanuelImage = require('../../assets/film_screening/emmanuel.png')
const irinaImage = require('../../assets/film_screening/irina.png')

export default function WorkingGroupPage() {
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
              After lunch, we’ll convene an interactive roundtable allowing
              University of Michigan and other campus partners to focus on
              “Different modes for linking students with sustainability practice
              – How do we meet both learning goals and practitioner needs?”
              We’ll discuss issues of best practice in the spectrum of
              engagement, including ongoing classroom collaborations through
              cases, client-based capstone masters projects, and formalized
              clinics offering student-led services. Open to all interested
              stakeholders and focused on discussion &amp; problem solving.
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
            experiential-learning activities for sustainable engineering,
            including NAE Grand Challenges for Engineering and UN Sustainable
            Development Goals. She emphasizes the roles of teamwork and
            leadership to creatively illustrate the connections between
            sustainable engineering and other disciplines, including emergency
            management.
          </p>
          <Image src={claireImage} />
        </Row>
        <h3>
          Susan McKenzie Reeves, Clemson University Watt Family Innovation
          Center
        </h3>
        <Row>
          <p>
            Susan is the Academic Director of Clemson’s Emergency Management
            Operation Center. Her vision and leadership has been responsible for
            the development of Clemson’s first center to bring together
            emergency management practitioners and academics to collaborate on
            real-world challenges across the region.
          </p>
          <Image src={susanImage} />
        </Row>
        <h3>Belinda Bardwell, West Michigan Environmental Action Council</h3>
        <Row>
          <p>
            Belinda Bardwell is a commissioner for the Grand Rapids Community
            Relations Commission, as well as a board member for the West
            Michigan Environmental Action Council. She has served as project
            coordinator and spokesperson for the "Gi-gikinomaage-min (We are all
            teachers): Defend Our History, Unlock Your Spirit" initiative since
            its launch in 2014. She is also a member of the Gi-gikinomaage-min
            Advisory Council, serving as the project's lead oral historian, and
            a proud citizen of the Little Traverse Bay Bands of Odawa Indians.
            She recently traveled to Montreal with WMEAC leadership and Rebecca
            Hardin (Michigan Sustainability Cases' Director), as a
            representative to the North American Dialogue on Biocultural
            Diversity.
          </p>
          <Image src={belindaImage} />
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
        <h3>Emmanuel Jal, Musician &amp; Ambassador</h3>
        <Row>
          <p>
            From his start as a child soldier in the war-torn region of Southern
            Sudan, Emmanuel has emerged a successful and acclaimed
            recording artist and peace ambassador. He has released five award
            nominated studio albums and works alongside Amnesty International as
            a spokesperson.
          </p>
          <Image src={emmanuelImage} />
        </Row>

        <h3>Irina Prentice, Encounter Edu</h3>
        <Row>
          <p>
            Irina is the Communications &amp; Partnerships Director at Encounter
            Edu. She brings 17 years of experience working with the UN and as a
            journalist covering conflicts, humanitarian crises and current
            events in the Middle East, USA and Europe.
          </p>
          <Image src={irinaImage} />
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
