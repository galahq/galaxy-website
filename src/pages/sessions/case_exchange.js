/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/case_exchange/cover.png')
const perrinImage = require('../../assets/case_exchange/perrin.png')
const nancyImage = require('../../assets/case_exchange/nancy.png')
const markImage = require('../../assets/case_exchange/mark.png')
const zhaoxueImage = require('../../assets/case_exchange/zhaoxue.png')

export default function MasterClassPage () {
  return (
    <main>
      <TitleSection>
        <RunningTextContainer>
          <Title>Case Exchange</Title>

          <Row>
            <p>
              Join our growing sustainability case community! Featuring short
              presentation and activities, the case exchange is a space to share
              promising practices in learning, teaching, and communicating with
              case studies; to present work in progress; and to explore
              opportunities to unite teaching, research, and practice.
            </p>
            <Image src={coverImage} />
          </Row>

          <em>Preliminary program details listed below.</em>
        </RunningTextContainer>
      </TitleSection>

      <RunningTextContainer>
        <h2>Featuring</h2>

        <h3>Perrin Selcer, UM History</h3>
        <Row>
          <p>
            Dr. Selcer works &amp; teaches at the intersections of environmental
            history, history of science, and international relations, utilizing
            case-based learning extensively in his courses. His first major
            research project culminated in{' '}
            <a href="https://cup.columbia.edu/book/the-postwar-origins-of-the-global-environment/9780231166485">
              The Postwar Origins of the Global Environment: How the United
              Nations Built Spaceship Earth
            </a>{' '}
            (Columbia University Press, 2018), exploring science as both the
            cause of and the solution to world crisis.
          </p>
          <Image src={perrinImage} />
        </Row>

        <h3>Nancy Love, UM Civil &amp; Environmental Engineering</h3>
        <Row>
          <p>
            Nancy Love, UM Civil &amp; Environmental Engineering Dr. Love works
            at the interface of water, infrastructure, and both public and
            environmental health in domestic and global settings. In
            collaboration with students &amp; practitioners, she is currently
            authoring two Michigan Sustainability Cases,{' '}
            <em>
              Fecal sludge: What is the best fecal waste management system for
              Addis Ababa?
            </em>{' '}
            and{' '}
            <em>
              Urine diversion: Will university communities embrace urine
              diversion and reuse as fertilizer?
            </em>
          </p>
          <Image src={nancyImage} />
        </Row>

        <h3>Mark Lindquist, UM Landscape Architecture</h3>
        <Row>
          <p>
            Dr. Lindquist’s focuses on the design and evaluation of
            high-performance landscapes with an emphasis on multifunctional
            green infrastructure in urban areas. He is pioneering virtual
            reality approaches and 3D modeling of neighborhoods in his courses
            related to the greening of Detroit for the planning of environments
            that perform ecologically, socially, and culturally.
          </p>
          <Image src={markImage} />
        </Row>

        <h3>Zhaoxue Tian, Tsinghua University School of Environment</h3>
        <Row>
          <p>
            Dr. Tian is a postdoc in Beijing, China currently writing a Michigan
            Sustainability Case on the effects of tourism on panda habitat in
            the Qinling Mountains. Her research analyzes the concentration of
            heavy metals in atmosphere, soil, bamboo, and fecal samples in order
            to assess ecological risk in the habitat and health risks to giant
            pandas.
          </p>
          <Image src={zhaoxueImage} />
        </Row>
      </RunningTextContainer>
    </main>
  )
}
