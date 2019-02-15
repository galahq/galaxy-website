/**
 * @providesModule SchedulePage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import TitleSection from '../../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../../components/shared/MaxWidthContainer'

const colors = {
  purple: '#7F5FDC',
  gold: '#F9A825CC',
  green: 'transparent',
}
const greenStripes = css`
  background-image: linear-gradient(
    135deg,
    #68cc7099 25%,
    #5ebd6688 25%,
    #5ebd6688 50%,
    #68cc7099 50%,
    #68cc7099 75%,
    #5ebd6688 75%,
    #5ebd6688 100%
  );
  background-size: 28.28px 28.28px;
`

const SchedulePage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Schedule</h1>
      </RunningTextContainer>
    </TitleSection>

    <MaxWidthContainer>
      <ScheduleContainer>
        <p>The 2019 conference schedule is under development. In the mean time, you can check out <Link to="schedule/2018-schedule">last year’s schedule</Link>.</p>
      </ScheduleContainer>
    </MaxWidthContainer>
  </main>
)

export default SchedulePage

const ScheduleContainer = styled.div`
  margin-top: 2em;
`
