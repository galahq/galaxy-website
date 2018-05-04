/**
 * @providesModule SchedulePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'

const colors = {
  purple: '#7F5FDC',
  yellow: '#F9A825CC',
  green: '#68CC7099',
}

const schedule: {
  date: string,
  events: {
    name?: string,
    subtitle?: string,
    times?: string,
    duration?: number,
    color?: $Keys<typeof colors>,
  }[],
}[] = [
  {
    date: 'Thursday, June 7',
    events: [
      {
        name: 'Case Innovation Studio',
        subtitle: 'Rackham Building',
        times: '9 AM – 12 PM',
        duration: 3,
        color: 'purple',
      },
      { name: 'Lunch', times: '12 PM – 1:30 PM', duration: 1.5 },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Rackham Building',
        times: '1:30 PM – 5:30 PM',
        duration: 4,
        color: 'purple',
      },
      {
        name: 'Opening Dinner',
        subtitle: 'Saginaw Forest',
        times: '6 PM – 8 PM',
        duration: 2,
        color: 'yellow',
      },
    ],
  },
  {
    date: 'Friday, June 8',
    events: [
      {
        name: 'Case Innovation Studio',
        subtitle: 'Rackham Building',
        times: '9 AM – 12 PM',
        duration: 3,
        color: 'purple',
      },
      { name: 'Lunch', times: '12 PM – 1:30 PM', duration: 1.5 },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Developer Dialogue',
        times: '1:30 PM – 3:30 PM',
        duration: 2,
        color: 'purple',
      },
      {
        name: 'Case Premiere',
        subtitle: 'Michigan Theater',
        times: '4 PM – 6 PM',
        duration: 2,
        color: 'green',
      },
      {
        name: 'Dinner while enjoying the Ann Arbor Mayor’s Green Fair',
        subtitle: 'Downtown Ann Arbor',
        times: '6 PM – 8 PM',
        duration: 2,
      },
      {
        name: 'Sustainability Social',
        subtitle: 'The Pretzel Bell',
        times: '8 PM – 9:30 PM',
        duration: 1.5,
        importance: 2,
        color: 'green',
      },
    ],
  },

  {
    date: 'Saturday, June 9',
    events: [
      {
        name: 'Studio Libre',
        subtitle:
          'Continue conversations\nAsk remaining questions\nFinish up work',
        times: '9 AM – 12 PM',
        duration: 3,
        color: 'purple',
      },
      { name: 'Lunch', times: '12 PM – 1:30 PM', duration: 1.5 },
      {
        name: 'Charrette',
        subtitle: 'Rackham Building',
        times: '1:30 PM – 5 PM',
        duration: 3,
        color: 'green',
      },
      {
        name: 'Cocktail Hour & Outcome Showcase',
        times: '5 PM – 7 PM',
        duration: 2,
        color: 'yellow',
      },
      {
        name: 'Gala Awards Ceremony & Dinner',
        subtitle: 'Rackham Building Rooftop Terrace',
        times: '7 PM – 9 PM',
        duration: 2,
        color: 'yellow',
      },
    ],
  },
]

const SchedulePage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Schedule</h1>
      </RunningTextContainer>
    </TitleSection>

    <MaxWidthContainer>
      <ScheduleContainer>
        {schedule.map(({ date, events }) => (
          <Day key={date}>
            <h2>{date}</h2>
            {events.map(({ name, times, duration, color, subtitle }) => (
              <Event key={times} color={color} span={duration}>
                <Times>{times}</Times>
                <Name>{name}</Name>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
              </Event>
            ))}
          </Day>
        ))}
      </ScheduleContainer>
    </MaxWidthContainer>
  </main>
)

export default SchedulePage

const ScheduleContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  margin: 1em 0 3em;

  @media (max-width: 843px) {
    grid-template-columns: 1fr;
  }
`

const Day = styled.section`
  display: grid;
  grid-auto-rows: 1.25em;
  grid-gap: 0.25em;

  h2 {
    border-top: 3px solid rgba(255, 255, 255, 0.6);
    font-family: tenso;
    font-size: 1rem;
    grid-row: span 4;
    letter-spacing: 0.2px;
    padding-top: 1em;
  }
`

const Event = styled.div`
  background-color: ${p => (p.color ? colors[p.color] : '#FFFFFF11')};
  color: ${p => (p.color === 'yellow' ? 'black' : 'inherit')};
  grid-row: span ${p => p.span * 2 || 2};
  line-height: 1.1;
  padding: 0.4em 0.6em;
`

const Times = styled.p`
  font-size: 0.7em;
  margin: 0;
  opacity: 0.8;
`

const Name = styled.p`
  font-weight: 500;
  line-height: 1.1;
  margin: 0 0 0.15em;
`

const Subtitle = styled.p`
  font-size: 0.8em;
  line-height: 1.1;
  margin: 0;
  white-space: pre-line;
`
