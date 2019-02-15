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
        <h1>Location</h1>
      </RunningTextContainer>
    </TitleSection>

    <UnpaddedRunningTextContainer>
      <h2>Location</h2>
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
