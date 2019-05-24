/**
 * @flow
 */

import * as React from 'react'

import TitleSection from '../../components/shared/TitleSection'
import { RunningTextContainer } from '../../components/shared/MaxWidthContainer'
import { Title, Image, Row } from '../../components/Sessions.js'

const coverImage = require('../../assets/awards_ceremony/cover.jpg')
const innovationImage = require('../../assets/awards_ceremony/innovation.png')
const impactImage = require('../../assets/awards_ceremony/impact.png')
const inclusionImage = require('../../assets/awards_ceremony/inclusion.png')
const johnImage = require('../../assets/awards_ceremony/john.png')

export default function AwardCeremonyPage () {
  return (
    <main>
      <TitleSection>
        <RunningTextContainer>
          <Title>Gala Case Awards</Title>

          <Row>
            <p>
              Galaxy 2019 will culminate in our annual case awards ceremony
              recognizing exemplary sustainability case studies, published over
              the past year on the Gala platform, that stand out for their
              contribution to the areas of Innovation, Inclusion, and Impact.
              Join us as last year’s winners present the award in their category
              – especially if you’ve used Gala to publish a case this year!
            </p>
            <Image src={coverImage} />
          </Row>
        </RunningTextContainer>
      </TitleSection>

      <RunningTextContainer>
        <h2>Ceremony Hosts</h2>

        <h3>Presenting the Award for Innovation</h3>
        <Row>
          <div>
            <p>
              Last year’s winners,{' '}
              <a href="https://www.learngala.com/cases/ewaste-in-ghana">
                Electronic Graveyard: What is the solution to Ghana’s e-waste
                dilemma?
              </a>{' '}
              by Anne Canavati, Jayson Toweh, Adam Simon, &amp; Brian Arbic
            </p>
          </div>
          <Image src={innovationImage} />
        </Row>

        <h3>Presenting the Award for Inclusion</h3>
        <Row>
          <div>
            <p>
              Last year’s winners,{' '}
              <a href="https://www.learngala.com/cases/mi-wolves">
                Wolf Wars: Should we hunt gray wolves in Michigan?
              </a>{' '}
              by Steven Yaffee, Julia Wondolleck, David Wang, &amp; Sheena
              Vanleuven
            </p>
          </div>
          <Image src={inclusionImage} />
        </Row>

        <h3>Presenting the Award for Impact</h3>
        <Row>
          <div>
            <p>
              Last year’s winners,{' '}
              <a href="https://www.learngala.com/cases/motown-farming">
                Farming in Motown: Is the future of Detroit food provisioning
                and access home-grown?
              </a>{' '}
              by Lauren Boone, Liz Ultee, Arun Agrawal, Joshua Newell, K. Arthur
              Endsley, Benjamin Goldstein, and Summer Aldred
            </p>
          </div>
          <Image src={impactImage} />
        </Row>
      </RunningTextContainer>

      <RunningTextContainer>
        <h2>John Leyland, Sculpture Artist</h2>
        <Row>
          <p>
            Galaxy’s beautiful ceramic awards are works by John Leyland
            (pictured left), local sculpture artist and ceramics studio
            coordinator at the Stamps School of Art &amp; Design. John is a
            sustainability practitioner himself, having contributed his
            expertise in the building of cleaner burning cookstoves in Gabon
            &amp; Uganda, as well as the creation of ceramic water filters with
            partners in Nepal &amp; Cuba.
          </p>
          <Image src={johnImage} />
        </Row>
      </RunningTextContainer>
    </main>
  )
}
