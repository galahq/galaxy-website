/**
 * @providesModule LogisticsPage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  UnpaddedRunningTextContainer,
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import { ExternalLink, ExternalButton } from '../components/shared/Link'
import Card from '../components/shared/Card'

const LogisticsPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Logistics &amp; Accommodations</h1>
      </RunningTextContainer>
    </TitleSection>

    <RunningTextContainer>
      <h2>Lodging</h2>
      <p>
        We suggest these local hotels and B&amp;B’s that are walkable to our
        events and offer a group rate for Galaxy participants.
      </p>
    </RunningTextContainer>

    <MaxWidthContainer>
      <Row>
        <LinksContainer>
          <Card>
            <h3>Bell Tower Hotel</h3>
            <Location href="https://www.google.com/maps/dir/Bell+Tower+Hotel,+300+S+Thayer+St,+Ann+Arbor,+MI+48104/Rackham+Auditorium,+915+E+Washington+St,+Ann+Arbor,+MI+48109/@42.2800158,-83.7411187,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cae40fddeb7b9:0x597a9dcf3d549001!2m2!1d-83.739903!2d42.2792424!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e2">
              &lt; 1 mi
            </Location>
            <p>$199 + taxes per night.</p>
            <Details>
              A charming hotel located in the heart of downtown Ann Arbor on the
              University of Michigan’s main campus.
            </Details>
            <Details>Use code 331374 when booking online.</Details>
            <Button href="https://www.belltowerhotel.com/">Book now</Button>
          </Card>
        </LinksContainer>

        <Card>
          <h3>Hyatt Place</h3>
          <Location href="https://www.google.com/maps/dir/Hyatt+Place+Ann+Arbor,+South+State+Street,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.2594116,-83.7960496,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883caf95ac8c8abd:0xa3a133323db08ad3!2m2!1d-83.7381025!2d42.2404887!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            3 mi
          </Location>
          <p>
            $114 + taxes per night.<br />
          </p>
          <Details>Use code G-GALA when booking online.</Details>
          <Details>
            Or call (734) 995-1234 and mention “University of Michigan Galaxy
            Block”
          </Details>
          <Details>Reserve by May 23, 2018 for the group rate.</Details>
          <Button href="https://annarbor.place.hyatt.com/en/hotel/home.html?corp_id=G-GALA">
            Book now
          </Button>
        </Card>
      </Row>
    </MaxWidthContainer>

    <UnpaddedRunningTextContainer>
      <h2>Location</h2>
      <p>
        Galaxy takes place in three gorgeously restored historic buildings, the
        Michigan Theater, the art deco Rackham Auditorium, and the School for
        Environment and Sustainability. All are located on the University of
        Michigan Central Campus in Downtown Ann Arbor.
      </p>
      <p>
        All are also within walking distance of two open-air festival events
        which run during Galaxy—the Mayor’s Green Fair, which will close Liberty
        and Main Streets, and the Ann Arbor Summer Festival, which closes
        Washington Street—for pedestrian flow between environmental and cultural
        events.
      </p>
    </UnpaddedRunningTextContainer>
    <Map>
      <iframe
        frameBorder="0"
        src="//www.google.com/maps/d/u/0/embed?mid=1x2cJRHxrZovA_eFdHe8uKH_ThZnQBrrO"
      />
    </Map>

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
