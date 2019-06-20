/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/case_exchange/cover.png')
const perrinImage = require('../../assets/case_exchange/perrin.png')
const michaelImage = require('../../assets/case_exchange/michael.png')
const markImage = require('../../assets/case_exchange/mark.png')
const xuehuaImage = require('../../assets/case_exchange/xuehua.png')
const karenImage = require('../../assets/case_exchange/karen.png')

export default function MasterClassPage() {
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
            Dr. Selcer works and teaches at the intersections of environmental
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

        <h3>
          Michael W Everett, Department of Community Sustainability, Michigan
          State University
        </h3>
        <Row>
          <p>
            Dr. Everett is a Professor of Practice, Adviser, and Internship
            Coordinator within the Department of Community Sustainability at
            Michigan State University.
          </p>
          <Image src={michaelImage} />
        </Row>
        <h3>Karen Alofs, UM School for Environment &amp; Sustainability</h3>
        <Row>
          <p>
            Assistant Professor Alofs studies how ecological concepts can be
            used to address conservation concerns in freshwater environments.
            Her recent work, as a postdoctoral fellow with the National Science
            Foundation International Research Fellowship Program, focused on the
            impacts of climate-facilitated range expansions on lake fish
            communities. An early adopter of the Gala platform, she has produced
            a suite of teaching cases about the Great Lakes.
          </p>
          <Image src={karenImage} />
        </Row>

        <h3>Mark Lindquist, UM Landscape Architecture</h3>
        <Row>
          <p>
            Dr. Lindquist’s work focuses on the design and evaluation of
            high-performance landscapes with an emphasis on multifunctional
            green infrastructure in urban areas. He is pioneering virtual
            reality approaches and 3D modeling of neighborhoods in his courses
            related to the greening of Detroit for the planning of environments
            that perform ecologically, socially, and culturally.
          </p>
          <Image src={markImage} />
        </Row>

        <h3>Xuehua Liu, Tsinghua University School of Environment</h3>
        <Row>
          <p>
            Dr. Xuehua Liu is an associate professor in the School of
            Environment at Tsinghua University, with expertise in wildlife
            conservation and habitat assessment as well as the application of
            GIS to landscape ecology. She is working with a team at the
            University of Michigan to produce a case about the challenge of
            balancing economic development and the protection of giant panda
            habitat in the Wolong National Nature Reserve in China's Sichuan
            province.
          </p>
          <Image src={xuehuaImage} />
        </Row>
      </RunningTextContainer>
    </main>
  )
}
