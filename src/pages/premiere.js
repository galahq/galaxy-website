/**
 * @providesModule PremierePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import {
  TitleSection,
  Quotation as BaseQuotation,
} from '../components/streams/shared'
import BaseStreamOverview, {
  IconContainer,
} from '../components/streams/Overview'
import { RunningTextContainer } from '../components/shared/MaxWidthContainer'
import { ExternalButton } from '../components/shared/Link'

const PremierePage = () => (
  <main>
    <TitleSection>
      <StreamOverview
        title="Documentary Film Premiere"
        tagline="Thirst for Justice"
        pitch={
          <div>
            <p>
              Seen through the eyes of two American communities, this is the
              story of widespread water contamination, the ensuing breach of
              public trust, and the erosion of democracy.
            </p>
            <p>Friday, June 8 from 4–6 PM at the Michigan Theater</p>
            <ExternalButton href="https://prod3.agileticketing.net/websales/pages/info.aspx?evtinfo=374642~32b7c91a-bad8-4291-a5b6-85f27f20501a&epguid=0159a9a3-f678-45c0-979b-ab3326c7383b&">
              Purchase Tickets
            </ExternalButton>
          </div>
        }
        icon={<Billboard />}
      />
    </TitleSection>

    <RunningTextContainer>
      <p>
        At the Galaxy Case Premiere, join filmmaker Leana Hosea for the premiere
        of her documentary on water justice. Q&A with the audience will follow.
        This event is presented in conjunction with the Cinetopia Film Festival.
      </p>

      <Quotation>
        I felt compelled to tie these stories together to reveal the corporate
        hijacking of our water… Protecting clean water as a commons is
        simultaneously a defense of democracy.
        <ProtestPicture />
      </Quotation>

      <p>
        As an international BBC producer and reporter of 12 years, Leana Hosea
        is an experienced multimedia journalist. She has a track record of
        finding strong stories and securing access to great characters. As a
        recent Knight Wallace Fellow, Leana researched the topic of water and
        environmental justice. Leana is now the inaugural Media Fellow at the
        School of Environment and Sustainability at the University of Michigan,
        teaching Media and Environmental Justice and working on her film ‘Thirst
        for Justice.’
      </p>

      <div
        style={{
          left: 0,
          width: '100%',
          height: 0,
          marginTop: '2em',
          position: 'relative',
          paddingBottom: '56.2493%',
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/264901072?byline=0&badge=0&portrait=0&title=0"
          style={{
            border: 0,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          allowFullScreen
          scrolling="no"
        />
      </div>

      <LongQuote>
        “I’ve covered a lot of incredible stories. The Arab Spring from day one
        in Tahrir Square, the war in Gaza, crisis in Yemen and terror attack in
        Brussels. But I have never seen anything like what I found when I
        visited the Navajo Nation. I found communities living amid piles of
        radioactive waste, drinking uranium-contaminated water. This story has
        touched me like no other. Then in one of the most water rich places in
        the world, the town of Flint has been poisoned by the water. Just like
        on the Navajo reservation, the authorities knew and did not act to
        protect people. I felt compelled to tie these stories together to reveal
        the corporate hijacking of our water, facilitated by the creation of
        corporate governments. This is why protecting clean water as a commons
        is simultaneously a defense of democracy.”
      </LongQuote>

      <p>Friday, June 8 from 4–6 PM at the Michigan Theater</p>
      <ExternalButton href="https://prod3.agileticketing.net/websales/pages/info.aspx?evtinfo=374642~32b7c91a-bad8-4291-a5b6-85f27f20501a&epguid=0159a9a3-f678-45c0-979b-ab3326c7383b&">
        Purchase Tickets
      </ExternalButton>
    </RunningTextContainer>
  </main>
)

export default PremierePage

const StreamOverview = styled(BaseStreamOverview)`
  ${IconContainer} {
    margin: 0;
    padding: 0;
  }
`

const Billboard = styled.div`
  background-image: url(${require('../assets/premiere/spray.png')});
  background-position: -70px 0px;
  background-size: cover;
  height: 100%;
  margin-left: -70px;
  mix-blend-mode: color-dodge;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 72%;
`

const Quotation = BaseQuotation.extend`
  margin: 5em 1em 3em;

  @media (max-width: 760px) {
    margin: 5em 0 3em;
  }
`

const ProtestPicture = styled.div`
  background-blend-mode: luminosity;
  background-color: #35526f;
  opacity: 0.2;
  background-image: url(${require('../assets/premiere/protest.png')});
  background-size: cover;
  height: 314px;
  position: absolute;
  right: 56%;
  top: 19%;
  transform: translate(0, -50%);
  width: 507px;
  z-index: -1;

  @media (max-width: 760px) {
    right: -1rem;
    top: 15px;
    height: 300px;
  }
`

const LongQuote = styled.blockquote`
  font-size: 90%;
  line-height: 1.5;
  margin: 2rem 1rem;
`
