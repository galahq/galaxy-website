/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Kicker, Image, Row } from '../../components/Sessions.js'
import { ExternalLink } from '../../components/shared/Link.js'

const coverImage = require('../../assets/film_screening/cover.png')
const kateImage = require('../../assets/film_screening/kate.png')
const emmanuelImage = require('../../assets/film_screening/emmanuel.png')
const irinaImage = require('../../assets/film_screening/irina.png')
const bilalImage = require('../../assets/film_screening/bilal.png')
const johnImage = require('../../assets/film_screening/john.png')

export default function FilmScreeningPage() {
  return (
    <main>
      <TitleSection>
        <RunningTextContainer>
          <Title>
            <Kicker>Film Screening &amp; Panel Discussion</Kicker>
            The Last Animals
          </Title>

          <Row>
            <p>
              Presented in concert with{' '}
              <a href="https://www.teachmsc.org/">
                Michigan Sustainability Cases
              </a>{' '}
              and the{' '}
              <a href="https://www.michtheater.org/">
                Michigan Theater Foundation
              </a>
              . At this year’s film screening, Galaxy brings you Kate Brooks’
              film,{' '}
              <a href="https://thelastanimals.com/">
                <em>The Last Animals</em>
              </a>
              , which explores “the conservationists, scientist and activists
              battling poachers and criminal networks to protect elephants and
              rhinos.” The screening will be followed by a panel discussion with
              researchers, conservationists, and community members.
            </p>
            <Image src={coverImage} />
          </Row>

          <em>Friday, June 21 at 3:00 PM — Michigan Theater</em>
        </RunningTextContainer>
      </TitleSection>

      <RunningTextContainer>
        <h2>Featuring</h2>

        <h3>Kate Brooks, Director</h3>
        <Row>
          <p>
            A world-renowned photographer, Kate has chronicled conflict and
            human rights issues for nearly two decades. Her photographs are
            regularly published in TIME, Newsweek, The New Yorker and
            Smithsonian. In 2012, Kate was awarded a Knight-Wallace Fellowship
            at the University of Michigan to conduct research for{' '}
            <em>The Last Animals</em>.
          </p>
          <Image src={kateImage} />
        </Row>

        <h3>Emmanuel Jal, Musician &amp; Ambassador</h3>
        <Row>
          <p>
            Emmanuel has helped youth in refugee camps and throughout the
            shattered school systems of South Sudan to retain focus and ambition
            amidst suffering. He consults to international organizations and
            conducts leadership seminars around the world for those, youth and
            adult, seeking to hone their sense of purpose for their life's work
            and meet the needs of non traditional or formerly traumatized
            learners. He has won numerous peace awards for the positive work
            accomplished not only by his music but also, increasingly, his
            public speaking and philanthropy. He has released five award
            nominated studio albums and works alongside Amnesty International as
            a spokesperson.
          </p>
          <Image src={emmanuelImage} />
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

        <h3>Bilal Butt, UM School for Environment &amp; Sustainability</h3>
        <Row>
          <p>
            Dr. Butt is a people-environment geographer with regional
            specialization in sub-Saharan Africa and technical expertise in
            geospatial technologies (GPS, GIS &amp; Remote Sensing), ecological
            monitoring and social-scientific appraisals. He is a faculty
            affiliate of the African Studies Center and the Science, Technology
            and Public Policy Program.{' '}
          </p>
          <Image src={bilalImage} />
        </Row>

        <h3>John Mitani, UM Anthropology</h3>
        <Row>
          <p>
            As a primate behavioral ecologist, John investigates the behavior of
            our closest living relatives, the apes. His current work involves a
            large community of wild chimpanzees at Ngogo, Kibale National Park,
            Uganda. Over 39 years, he has conducted fieldwork on the behavior of
            all five kinds of apes: gibbons and orangutans in Indonesia,
            gorillas in Rwanda, bonobos in the Democratic Republic of Congo, and
            chimpanzees in Uganda and Tanzania.
          </p>
          <Image src={johnImage} />
        </Row>
      </RunningTextContainer>
    </main>
  )
}
