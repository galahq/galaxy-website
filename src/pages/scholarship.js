/**
 * @providesModule ScholarshipPage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'
import ExternalLink from '../components/shared/ExternalLink'
import BaseButton from '../components/shared/Button'

const ScholarshipPage = () => (
  <main>
    <TitleSection>
      <MaxWidthContainer>
        <RunningTextContainer>
          <h1>Scholarships Available</h1>
        </RunningTextContainer>
      </MaxWidthContainer>
    </TitleSection>

    <MaxWidthContainer>
      <PaddedRunningTextContainer>
        <p>
          We are able to offer a limited number of scholarships for individuals
          with demonstrated need. You must apply to be considered. We will
          select scholarship recipients based on the criteria below on a rolling
          basis. Recipients of the Galaxy scholarship will receive a waived
          individual registration fee.
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
              <li>
                Faculty, student, and staff from under-represented groups.
              </li>
              <li>Staff from sustainability-oriented NGOs.</li>
              <li>Participants facing expensive travel or visa budgets.</li>
              <li>People who have an existing case.</li>
            </ul>
          </li>
        </ul>
        <Button href="https://teachmsc.submittable.com/submit/110537/galaxy-scholarship">
          Apply
        </Button>
      </PaddedRunningTextContainer>
    </MaxWidthContainer>
  </main>
)

export default ScholarshipPage

const PaddedRunningTextContainer = RunningTextContainer.extend`
  margin: 3em 0;
`

const Button = BaseButton.withComponent('a')
