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
        Galaxy has room blocks at three hotels offering discounted rates for
        participants. You can make your reservation online or via phone by
        calling the hotels. Please do so as soon as possible.
      </p>
    </RunningTextContainer>

    <MaxWidthContainer>
      <Row>
        <Card>
          <h3>Hyatt Place</h3>
          <Location href="https://www.google.com/maps/dir/Hyatt+Place+Ann+Arbor,+South+State+Street,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.2594116,-83.7960496,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883caf95ac8c8abd:0xa3a133323db08ad3!2m2!1d-83.7381025!2d42.2404887!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            3 mi
          </Location>
          <p>
            $139 + taxes per night.<br />
          </p>
          <Details>Use code G-GALA when booking.</Details>
          <Details>
            Or call (734) 995-1234 and mention “University of Michigan Galaxy
            Block”
          </Details>
          <Details>Reserve by May 6, 2018 for the group rate.</Details>
          <Button href="https://annarbor.place.hyatt.com/en/hotel/home.html?corp_id=G-GALA">
            Book now
          </Button>
        </Card>

        <Card>
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
            Block”
          </Details>
          <Details>Reserve by May 23, 2018 for the group rate.</Details>
          <Button href="http://ichotelsgroup.com/redirect?path=rates&brandCode=HI&GPC=GR6&hotelCode=ARBNC&_PMID=99801505">
            Book now
          </Button>
        </Card>

        <Card>
          <h3>Kensington Hotel</h3>
          <Location href="https://www.google.com/maps/dir/The+Kensington+Hotel,+South+State+Street,+Ann+Arbor,+MI/Rackham+Auditorium,+East+Washington+Street,+Ann+Arbor,+MI/@42.2587246,-83.7960496,13z/data=!4m14!4m13!1m5!1m1!1s0x883cafeb34b26bed:0xe2cbfb9a5e565358!2m2!1d-83.7405497!2d42.2389335!1m5!1m1!1s0x883cae41b17e2f4d:0xd7199f2dad45bc94!2m2!1d-83.7381556!2d42.2807892!3e0">
            4 mi
          </Location>
          <p>
            $114 + taxes per night.<br />
          </p>
          <Details>
            Call (734) 761-7800 and mention “Galaxy room block.”
          </Details>
          <Details>Reserve by May 6, 2018 for the group rate.</Details>
          <Details>
            <strong>Note:</strong> This hotel does not have a shuttle service.
          </Details>
          <Button disabled>Call (734) 761-7800</Button>
        </Card>
      </Row>
    </MaxWidthContainer>

    <RunningTextContainer>
      <p>
        In addition, if you wish to stay in other hotels, here are some options:
        Downtown (walkable to the event):
      </p>
      <ul>
        <li>
          <ExternalLink href="https://www.stonechalet.com/?gclid=Cj0KCQiAzrTUBRCnARIsAL0mqcwweQrzPzeGmYFpIchyL3eOxuWDlpEcXrhqJpeUSKOLVU9TB0MicvcaArN_EALw_wcB">
            The Stone Chalet
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.burnttoastinn.com/">
            The Burnt Toast Inn and Washington Street Inn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.belltowerhotel.com/">
            The Bell Tower Hotel
          </ExternalLink>{' '}
          might have limited availability. Reserve as soon as possible.
        </li>
      </ul>
    </RunningTextContainer>

    <UnpaddedRunningTextContainer>
      <h2>Location</h2>
    </UnpaddedRunningTextContainer>
    <Map>
      <iframe
        frameBorder="0"
        src="//www.google.com/maps/embed/v1/place?q=Rackham+Auditorium,+Ann+Arbor,+MI&zoom=16&attribution_source=Galaxy+2018&key=AIzaSyDouu-GEt2EFH0HeqoMRFVV4-rX18eY8Tw"
      />
    </Map>

    <RunningTextContainer>
      <h2>Transportation</h2>
      <p>
        We suggest flying into Detroit Metropolitan Airport (DTW). The
        University of Michigan is located 24.4 miles from the DTW airport. From
        there, you have several options for accessing Ann Arbor, though the most
        convenient depending on where you will be staying might be to rent a
        car.
      </p>
    </RunningTextContainer>
  </main>
)

export default LogisticsPage

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
