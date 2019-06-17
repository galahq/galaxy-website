/**
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Kicker, Image, Row } from '../../components/Sessions.js'
import { ExternalLink } from '../../components/shared/Link.js'

const coverImage = require('../../assets/working_group/cover.png')
const sheilaImage = require('../../assets/working_group/sheila.png')
const claireImage = require('../../assets/working_group/claire.png')
const susanImage = require('../../assets/working_group/susan.png')
const belindaImage = require('../../assets/working_group/belinda.png')
const irinaImage = require('../../assets/film_screening/irina.png')
const ellenImage = require('../../assets/working_group/ellen.png')
const chrisImage = require('../../assets/working_group/chris.png')
const clairenImage = require('../../assets/working_group/clairen.png')
const paulfImage = require('../../assets/working_group/paulf.png')
const richardImage = require('../../assets/working_group/richard.png')
const paulsImage = require('../../assets/working_group/pauls.png')
const neerajaImage = require('../../assets/working_group/neeraja.png')
const johnhImage = require('../../assets/working_group/johnh.png')
const nateImage = require('../../assets/working_group/nate.png')
const rebeccaImage = require('../../assets/working_group/rebecca.png')

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
        <h3>Ellen Kuhn, UM Academic Innovation</h3>
        <Row>
          <p>
            At the University of Michigan's Academic Innovation initiative,
            Ellen works collaboratively with individuals and groups around the
            University to build on existing efforts and envision new directions
            for public engagement in the future. Ellen is particularly
            interested in fostering models of engagement that are grounded in
            mutual trust, reciprocity, and empathy.
          </p>
          <Image src={ellenImage} />
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
        <h3>Chris Mueller, UM Ross School of Business </h3>
        <Row>
          <p>
            A lecturer at Um Ross, Chris Mueller coordinates the MAP program at
            the UM Ross School of Business, a capstone experience that fosters
            student engagement with national and international clients (ranging
            from NGOs to technology startups to consumer packaged goods
            suppliers)..
          </p>
          <Image src={chrisImage} />
        </Row>
        <h3>Claire Nuttall, Ross School of Business</h3>
        <Row>
          <p>
            Claire Nuttall is Curricular Support Coordinator for the MAP program
            at the UM Ross School of Business, a capstone experience that
            fosters student engagement with national and international clients
            (ranging from NGOs to technology startups to consumer packaged goods
            suppliers).
          </p>
          <Image src={clairenImage} />
        </Row>
        <h3>Paul Fontaine, UM Urban & Regional Planning Program</h3>
        <Row>
          <p>
            Paul Fontaine is a lecturer in Urban Planning, as well as Program
            Manager of the Michigan Engaging Community through the Classroom
            (MECC) Initiative. His research and professional practice focus is
            civic and professional engagement in the urban revitalization
            process. He is also founding member of Fontaine Urban Design that
            specializes in complex brown field and infill sites requiring public
            and private partnerships.
          </p>
          <Image src={paulfImage} />
        </Row>
        <h3>
          Richard Norton, UM Urban & Regional Planning Program &amp; Program in
          the Environment{' '}
        </h3>
        <Row>
          <p>
            Richard K. Norton is a Professor of Urban and Regional Planning,
            Taubman College of Architecture + Urban Planning. He also holds a
            joint appointment as Professor with the University of Michigan's
            Program in the Environment. Dr. Norton teaches and conducts research
            in the areas of planning law, sustainable development, land use and
            environmental planning, and coastal area management.
          </p>
          <Image src={richardImage} />
        </Row>
        <h3>Paul Seelbach, UM School for Environment &amp; Sustainability</h3>
        <Row>
          <p>
            Professor Seelbach's experiences bridge the academic study of
            aquatic ecosystems to its application across a range of resource
            management agencies. He currently serves the Michigan Department of
            Natural Resources, Office of the Great Lakes, as Senior Fellow and
            has helped with major initiatives regarding watershed assessment and
            management, ecological flows and water allocation policy, water
            resources monitoring, coastal zone management, and revitalization of
            Areas of Concern.
          </p>
          <Image src={paulsImage} />
        </Row>
        <h3>
          Neeraja Aravamudan, Ginsberg Center for Community Service and Learning
        </h3>
        <Row>
          <p>
            Neeraja leads the Ginsberg Center's work with academic partners,
            supporting faculty, academic program staff, and graduate students
            who want to integrate community engagement into their courses,
            research, and programs. She administers the Ginsberg Center's
            Faculty Grants program, serves on the editorial team for the
            Michigan Journal for Community Service Learning, and supervises 15
            doctoral students from across the University. She currently serves
            as a member of the Advisory Board for Michigan Engaging Communities
            through the Classroom (MECC), a DEI facilitator in U of M's
            Facilitator Engagement Program through Organizational Learning, and
            an IDI (Intercultural Development Inventory) Qualified
            Administrator.
          </p>
          <Image src={neerajaImage} />
        </Row>
        <h3>Rebecca Hardin, UM School for Environment &amp; Sustainability</h3>
        <Row>
          <p>
            Dr. Hardin is the Director of the Michigan Sustainability Cases
            initiative. Her current work includes research in educational
            innovation and environmental management, especially forest and water
            management for environmental justice and health in Kenya, Gabon, New
            England, and the upper Midwest.
          </p>
          <Image src={rebeccaImage} />
        </Row>
        <h3>John Hoinville, Alfa Jango</h3>
        <Row>
          <p>
            John is Director of Operations for Alfa Jango, an Ann Arbor software
            company specializing in design and development for startups. He has
            authored educational texts, such as “the Ruby on Rails bible” and
            founded initiativesto make tech skills accessible, affordable and
            adapted the needs of young people and small businesses.
          </p>
          <Image src={johnhImage} />
        </Row>
        <h3>
          Nate Phipps, Center for Educational Design, Evaluation and Research
          (UM School of Education)
        </h3>
        <Row>
          <p>
            Nate is managing director of the Center for Education Design,
            Evaluation, and Research (CEDER) where he manages a wide range of
            professional development activities offered by the School of
            Education faculty across all programs in SOE.
          </p>
          <Image src={nateImage} />
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

        <h3>Irina Prentice, Encounter Edu</h3>
        <Row>
          <p>
            Irina leads communication at{' '}
            <ExternalLink href="https://encounteredu.com/">
              encounteredu.com
            </ExternalLink>
            , an innovative digital media enhancement service for face-to-face
            classrooms that brings to life a teaching-as-research approach even
            for younger and under-resourced learners. She brings 17 years of
            experience working with the UN and as a journalist covering
            conflicts, humanitarian crises and current events in the Middle
            East, USA and Europe.
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
