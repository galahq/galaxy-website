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
  PaddedRunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import PriceTable from '../components/PriceTable'
import { ExternalLink, ExternalButton } from '../components/shared/Link'
import Card from '../components/shared/Card'

const LogisticsPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Logistics</h1>
      </RunningTextContainer>
    </TitleSection>

    <RunningTextContainer>
      <h2>Accomodations</h2>
      <p>
        We suggest three local hotels and B&Bs that we often support and who
        support us.
      </p>
    </RunningTextContainer>

    <MaxWidthContainer>
      <Row>
        <LinksContainer>
          <BareExternalLink href="https://www.stonechalet.com/">
            <Card>
              <h3>The Stone Chalet</h3>
              <Details>
                Located in a quiet residential neighborhood near the University
                of Michigan's Ann Arbor Central Campus.
                Because they are small businesses, they don’t offer group rate, 
                but we recommend them as they are walkable to our events.
              </Details>
            </Card>
          </BareExternalLink>
          <Location href="https://www.google.com/maps/dir/Stone+Chalet+Bed+and+Breakfast+Inn+and+Event+Center,+1917+Washtenaw+Ave,+Ann+Arbor,+MI+48104/Rackham+Auditorium,+915+E+Washington+St,+Ann+Arbor,+MI+48109/@42.2744971,-83.7346294,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cae56f8223a45:0x33ae5a4e1bcf5b26!2m2!1d-83.722327!2d42.2684559!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e2">
            1 mi
          </Location>
        </LinksContainer>

        <LinksContainer>
          <BareExternalLink href="https://www.belltowerhotel.com/">
            <Card>
              <h3>Burnt Toast Inn</h3>
              <Details>
                A small, family owned and operated bed and breakfast established
                in 2004 in downtown Ann Arbor.
                Because they are small businesses, they don’t offer group rate, 
                but we recommend them as they are walkable to our events.
              </Details>
            </Card>
          </BareExternalLink>
          <Location href="https://www.google.com/maps/dir/Burnt+Toast+Inn,+415+W+William+St,+Ann+Arbor,+MI+48103/Rackham+Auditorium,+915+E+Washington+St,+Ann+Arbor,+MI+48109/@42.2792995,-83.7498665,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cae23586e337f:0x7096d929cf547999!2m2!1d-83.752998!2d42.27781!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e2">
            1 mi
          </Location>
        </LinksContainer>

        <LinksContainer>
          <BareExternalLink href="https://www.belltowerhotel.com/">
            <Card>
              <h3>Bell Tower Hotel</h3>
              <Details>         
                A charming hotel located in the heart of downtown Ann Arbor on
                the University of Michigan’s main campus.
                $199 + taxes per night, breakfast included.
              </Details>
            </Card>
          </BareExternalLink>
          <Location href="https://www.google.com/maps/dir/Bell+Tower+Hotel,+300+S+Thayer+St,+Ann+Arbor,+MI+48104/Rackham+Auditorium,+915+E+Washington+St,+Ann+Arbor,+MI+48109/@42.2800158,-83.7411187,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cae40fddeb7b9:0x597a9dcf3d549001!2m2!1d-83.739903!2d42.2792424!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e2">
            0 mi
          </Location>
        </LinksContainer>
      </Row>
    </MaxWidthContainer>
    <RunningTextContainer>
      <p>
        In addition, Galaxy has room blocks at three branded hotels offering
        discounted rates for participants. We will arrange with the hotels ahead
        of time to have shuttles for Galaxy events, and you can schedule extra
        complimentary shuttles with the hotel concierge. The Holiday Inn also
        has an Avis/Budget car rental service, and all offer free parking.
      </p>
    </RunningTextContainer>

    <MaxWidthContainer>
      <Row>
        <Card minimal>
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
          <Details>Reserve by May 6, 2018 for the group rate.</Details>
          <Button href="https://annarbor.place.hyatt.com/en/hotel/home.html?corp_id=G-GALA">
            Book now
          </Button>
        </Card>

        <Card minimal>
          <h3>Holiday Inn</h3>
          <Location href="https://www.google.com/maps/dir/Holiday+Inn+Near+the+University+of+Michigan,+3600+Plymouth+Rd,+Ann+Arbor,+MI+48105/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.3022153,-83.7515064,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883cac1b75a197f1:0xbc6750e4373aaf8d!2m2!1d-83.689737!2d42.304177!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            4 mi
          </Location>
          <p>
            $114 + taxes per night.<br />
          </p>
          <Details>
            Enter dates and you will automatically be given the special rate.
          </Details>
          <Details>
            Or call (734) 769-9800 and mention “University of Michigan Galaxy
            Block.”
          </Details>
          <Details>Reserve by May 23, 2018 for the group rate.</Details>
          <Button href="http://ichotelsgroup.com/redirect?path=rates&brandCode=HI&GPC=GR6&hotelCode=ARBNC&_PMID=99801505">
            Book now
          </Button>
        </Card>

        <Card minimal>
          <h3>Kensington Hotel</h3>
          <Location href="https://www.google.com/maps/dir/The+Kensington+Hotel,+South+State+Street,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.2587246,-83.7960496,13z/data=!4m14!4m13!1m5!1m1!1s0x883cafeb34b26bed:0xe2cbfb9a5e565358!2m2!1d-83.7405497!2d42.2389335!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            4 mi
          </Location>
          <p>
            $114 + taxes per night.<br />
          </p>
          <Details>Use group code “Galaxy” to book online.</Details>
          <Details>
            Or call (734) 761-7800 and mention “Galaxy room block.”
          </Details>
          <Details>Reserve by May 6, 2018 for the group rate.</Details>
          <Details>
            <strong>Note:</strong> This hotel does not have a shuttle service.
          </Details>
          <Button href="https://gc.synxis.com/rez.aspx?Hotel=69682&Chain=19265&arrive=6/6/2018&depart=6/9/2018&adult=1&child=0&group=Galaxy">
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

const BareExternalLink = ExternalLink.extend`
  text-decoration: none;

  &:hover .o-card {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4),
      0 8px 24px rgba(16, 22, 26, 0.4);
  }

  & a {
    text-decoration: underline;
  }
`

const Button = ExternalButton.extend`
  margin-top: auto;
`

const Row = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 2rem;
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
