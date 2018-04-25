/**
 * @providesModule ScholarshipPage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
  PaddedRunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import { ExternalLink } from '../components/shared/Link'
import BaseButton from '../components/shared/Button'

const ScholarshipPage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Scholarships Available</h1>
      </RunningTextContainer>
    </TitleSection>

    <PaddedRunningTextContainer>
      <p>
        We are able to offer a limited number of scholarships for individuals
        with demonstrated need. You must apply to be considered. We will select
        scholarship recipients based on the criteria below on a rolling basis.
        Galaxy scholarship recipients will have their registration fee
        partially or fully waived.
      </p>
      <h2>Scholarship criteria</h2>
      <ul>
        <li>Demonstrated financial need.</li>
        <li>
          Demonstrated interest in sustainability science and practice or
          teaching and learning innovation.
        </li>
        <li>
          Priority given to:<ul>
            <li>Faculty, students, and staff from under-represented groups.</li>
            <li>Staff from sustainability-oriented NGOs.</li>
            <li>Participants facing expensive travel or visa budgets.</li>
          </ul>
        </li>
      </ul>
      <Button href="https://teachmsc.submittable.com/submit/110537/galaxy-scholarship">
        Apply
      </Button>
    </PaddedRunningTextContainer>
  </main>
)

export default ScholarshipPage

const Button = BaseButton.withComponent('a')
