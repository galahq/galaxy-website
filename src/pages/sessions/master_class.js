/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Kicker, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/master_class/cover.png')
const sarahImage = require('../../assets/master_class/sarah.png')
const shaunImage = require('../../assets/master_class/shaun.png')
const jeffImage = require('../../assets/master_class/jeff.png')
const steveImage = require('../../assets/master_class/steve.png')

export default function MasterClassPage() {
  return (
    <main>
      <TitleSection>
        <RunningTextContainer>
          <Title>
            <Kicker>Master Class</Kicker>
            Cross-Sector Collaboration for Intervention in Complex Urban Systems
          </Title>

          <Row>
            <p>
              The team behind the case{' '}
              <a href="https://www.learngala.com/cases/urbanwood">
                Rebuilding Communities through an Urban Wood and Land
                Restoration Economy
              </a>{' '}
              will present their experience designing &amp; implementing a
              system that employs formerly incarcerated citizens to deconstruct
              blighted homes and supply this urban wood as lumber for the
              high-end furniture market. This Master Classes will teach
              participants to map sustainability systems and identify
              intervention and leverage points.
            </p>
            <Image src={coverImage} />
          </Row>

          <em>Preliminary program details listed below.</em>
        </RunningTextContainer>
      </TitleSection>

      <RunningTextContainer>
        <h2>Featuring</h2>

        <h3>Sarah Hines, US Forest Service</h3>
        <Row>
          <p>
            Sarah has spent her career in the Forest Service linking scientists
            and scientific information with communities and decision makers at
            local and regional scales to inform stewardship of everything from
            our National Forests to the local parks and forests in our
            communities. She has worked for the Research &amp; Development
            branch of the Forest Service in Philadelphia, Colorado, and
            Baltimore. She received a A.B. in biological anthropology from
            Harvard, and M.S. and M.B.A. degrees from the University of
            Michigan.
          </p>
          <Image src={sarahImage} />
        </Row>

        <h3>Shaun Preston, City of Baltimore</h3>
        <Row>
          <p>
            As the Camp Small Yardmaster for the Forestry Division, Shaun
            manages the wood sorting facility and its urban wood utilization
            program. He enjoys teaching folks about wood utilization, helping
            them achieve their creative goals, and he loves seeing when a
            special old tree is memorialized through repurposing its wood. When
            he’s not hustling logs you can find Shaun with his family, going on
            hikes, working in the garden, fishing for trout, building things,
            making art, playing music, and sometimes watching tv on the couch.
          </p>
          <Image src={shaunImage} />
        </Row>

        <h3>Jeff Carroll, Humanim</h3>
        <Row>
          <p>
            As a Vice President at Humanim, a workforce development nonprofit
            serving Maryland for nearly 50 years, Jeff oversees Details
            Deconstruction and its sister enterprise Brick and Board. He has
            worked with the Humanim team and its many partners (Baltimore City
            Housing, Maryland Housing, the U.S. Forest Service, and several
            for-profit partners) to grow these enterprises from start-up to a
            collective $4,000,000 operation employing 185 people from
            Baltimore’s toughest neighborhoods since inception. Jeff lives in
            Baltimore with his wife Heather, holds an MBA from Johns Hopkins
            Carey Business School and is a Legacy LEED AP.
          </p>
          <Image src={jeffImage} />
        </Row>

        <h3>Steve Freeman, Room &amp; Board</h3>
        <Row>
          <p>
            As Vendor Resource Manager at Room & Board Steve has contributed to
            the environmentally-focused philosophies and practices of the
            company and its Vendor Partners over his 39-year career with the
            furniture retailer. A lifelong Minnesotan, he is inspired by
            wilderness canoeing in the Boundary Waters Canoe Area Wilderness
            (BWCAW) of Northern Minnesota as well as the far more remote
            wilderness areas of northern Canada. Steve and his wife Betsy split
            time between a home situated on 5 acres of woodland outside of
            Minneapolis and a small cottage in Ely, Minnesota right next to the
            BWCAW.
          </p>
          <Image src={steveImage} />
        </Row>
      </RunningTextContainer>
    </main>
  )
}
