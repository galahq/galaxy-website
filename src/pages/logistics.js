/**
 * @providesModule LogisticsPage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  UnpaddedRunningTextContainer,
  RunningTextContainer
} from '../components/shared/MaxWidthContainer'
import { ExternalLink, ExternalButton } from '../components/shared/Link'
import Card from '../components/shared/Card'

const LogisticsPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Location</h1>
      </RunningTextContainer>
    </TitleSection>

    <UnpaddedRunningTextContainer>
      <h2 />
      <p>
        Galaxy takes place in three gorgeously restored historic buildings, the
        Michigan Theater, the art deco Rackham Auditorium, and the School for
        Environment and Sustainability. All are located on the University of
        Michigan Central Campus in Downtown Ann Arbor.
      </p>
      <p>
        All are also within walking distance of the open-air Ann Arbor Summer
        Festival, which closes Washington Street—for pedestrian flow between
        environmental and cultural events.
      </p>
    </UnpaddedRunningTextContainer>
    <Map>
      <iframe
        frameBorder="0"
        src="//www.google.com/maps/d/u/0/embed?mid=1x2cJRHxrZovA_eFdHe8uKH_ThZnQBrrO"
      />
    </Map>

    <RunningTextContainer>
      <h2>Lodging</h2>
      <p>
        We suggest these local hotels that offer a group rate for Galaxy
        participants.
      </p>
    </RunningTextContainer>

    <MaxWidthContainer>
      <Row>
        <LinksContainer>
          <Card>
            <h3>Sonesta ES Suites</h3>
            <Location href="https://www.google.com/maps/dir/Sonesta+ES+Suites+Ann+Arbor,+Victors+Way,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.2595678,-83.7486003,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883caf9430df260f:0x8c26489124de3d66!2m2!1d-83.7359546!2d42.2384454!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
              3 mi
            </Location>
            <p>$119 + taxes per night.</p>
            <Details>Book before May 29 for the discounted rate.</Details>
            <Details>Two-bedroom suites also available.</Details>
            <Button href="https://gc.synxis.com/rez.aspx?Hotel=77468&Chain=5157&arrive=6/19/2019&depart=6/22/2019&adult=1&child=0&group=06190619GA">
              Book now
            </Button>
          </Card>
        </LinksContainer>

        <Card>
          <h3>Holiday Inn</h3>
          <Location href="https://www.google.com/maps/dir/Holiday+Inn+Near+the+University+of+Michigan,+Plymouth+Road,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.3022194,-83.7339109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cac1b75a197f1:0xbc6750e4373aaf8d!2m2!1d-83.689737!2d42.304177!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            4 mi
          </Location>
          <p>$124 + taxes per night.</p>
          <Details>Book before May 29 for the discounted rate.</Details>
          <Button href="https://www.holidayinn.com/redirect?path=rates&brandCode=HI&localeCode=en&regionCode=1&hotelCode=ARBNC&checkInDate=19&checkInMonthYear=052019&checkOutDate=22&checkOutMonthYear=052019&_PMID=99801505&GPC=GYC&cn=no&viewfullsite=true">
            Book now
          </Button>
        </Card>
      </Row>
    </MaxWidthContainer>

    <RunningTextContainer>
      <h2>Transportation</h2>
      <p>
        We suggest flying into Detroit Metropolitan Airport (DTW). The
        University of Michigan is located 24.4 miles from the DTW airport. From
        there, you can take a taxi, uber, or lyft. You can also take{' '}
        <ExternalLink href="http://www.michiganflyer.com/">
          the Michigan Flyer
        </ExternalLink>
        , which is $12 one way/$22 round-trip. The Michigan Flyer will pick you
        up at the Detroit Metropolitan Airport and drop you off at the{' '}
        <ExternalLink href="https://www.google.com/maps/place/Blake+Transit+Center/@42.2782899,-83.749522,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae3c0e2e90e5:0x763af70363920c82!8m2!3d42.278286!4d-83.747328">
          Blake Transit Center
        </ExternalLink>{' '}
        in downtown Ann Arbor, where taxis and buses are available.
      </p>
    </RunningTextContainer>
  </main>
)

export default LogisticsPage

const LinksContainer = styled.div`
  position: relative;
  color: black;
`

const Button = ExternalButton.extend`
  margin-top: auto;
`

const Row = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto 2rem;
  max-width: 700px;
`

const Details = styled.p`
  font-size: 0.8rem;
  line-height: 1.2;
  margin-bottom: 0.3rem;

  &:last-of-type {
    margin-bottom: 1em;
  }
`

const Location = ExternalLink.extend`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Map = styled.div`
  width: 100vw;

  iframe {
    width: 100vw;
    height: 450px;
    margin: 0;
    opacity: 0.9;
  }
`
