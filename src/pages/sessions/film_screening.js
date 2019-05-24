/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Kicker, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/film_screening/cover.png')
const kateImage = require('../../assets/film_screening/kate.png')
const emmanuelImage = require('../../assets/film_screening/emmanuel.png')
const jamieImage = require('../../assets/film_screening/jamie.png')
const bilalImage = require('../../assets/film_screening/bilal.png')
const johnImage = require('../../assets/film_screening/john.png')

export default function FilmScreeningPage () {
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
              </a>. At this year’s film screening, Galaxy brings you Kate
              Brooks’ film,{' '}
              <a href="https://thelastanimals.com/">
                <em>The Last Animals</em>
              </a>, which explores “the conservationists, scientist and
              activists battling poachers and criminal networks to protect
              elephants and rhinos.” The screening will be followed by a panel
              discussion with researchers, conservationists, and community
              members.
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
            From his start as a child soldier in the war-torn region of Southern
            Sudan, Emmanuel has emerged a successful and acclaimed
            recording artist and peace ambassador. He has released five award
            nominated studio albums and works alongside Amnesty International as
            a spokesperson.
          </p>
          <Image src={emmanuelImage} />
        </Row>

        <h3>Jamie Buchanan-Dunlop, Digital Explorer</h3>
        <Row>
          <p>
            An experienced educator, Jamie has worked both in the classroom and
            designed and managed education projects around the world, including
            both polar regions, the Great Barrier Reef, the Middle East and
            North Africa. Jamie has also worked at a policy level, successfully
            campaigning for the oceans to be included in the National
            Curriculum.
          </p>
          <Image src={jamieImage} />
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
