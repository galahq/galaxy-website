/**
 * @providesModule Schedule2018Page
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import TitleSection from '../../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer
} from '../../components/shared/MaxWidthContainer'

const colors = {
  purple: '#7F5FDC',
  gold: '#F9A825CC',
  green: '#539b71'
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

const schedule = [
  {
    date: 'Thursday, June 20',
    events: [
      {
        name: 'Check-in & Coffee',
        location: 'Rackham Building',
        times: '8:00–9:00 AM',
        duration: 1,
        color: 'purple'
      },

      {
        name: 'Welcome, Gala Intro & Updates',
        times: '9:00–9:45 AM',
        duration: 1,
        color: 'purple'
      },
      { duration: 0.25 },
      {
        name:
          'Master Class: Cross-Sector Collaboration for Intervention in Complex Urban Systems',
        to: '/sessions/master_class',
        times: '10:00 AM–12:30 PM',
        duration: 2.5,
        color: 'purple'
      },
      {
        name: 'Lunch, Networking, and Poster Session',
        times: '12:30–1:30 PM',
        duration: 1,
        color: 'green'
      },
      {
        name:
          'Civic–Campus Working Group: Linking Classrooms with Professionals & Researchers',
        to: '/sessions/working_group',
        times: '1:30–4:30 PM',
        duration: 3,
        color: 'purple'
      },
      { duration: 0.25 },
      {
        name: 'Wrap-up',
        times: '4:30–5:00 PM',
        duration: 1,
        color: 'purple'
      },
      {
        name: 'Celebration with the Ann Arbor Summer Festival',
        times: '5:00 PM',
        duration: 1.25,
        color: 'gold'
      }
    ]
  },

  {
    date: 'Friday, June 21',
    events: [
      {
        name: 'Check-in & Coffee',
        location: 'Rackham Building',
        times: '8:00–9:00 AM',
        duration: 1,
        color: 'purple'
      },
      {
        name: 'Case Exchange',
        location: 'Rackham Building',
        to: '/sessions/case_exchange',
        times: '9:00 AM–12:00 AM',
        duration: 3,
        color: 'purple'
      },
      {
        name: 'Lunch',
        times: '12:00 PM',
        duration: 1,
        color: 'green'
      },
      { duration: 2 },
      {
        name: 'Red Carpet & Awards Ceremony',
        location: 'Michigan Theater',
        times: '2:00–3:00 PM',
        duration: 1,
        color: 'gold'
      },
      {
        name: 'The Last Animals',
        subtitle: 'Film Screening & Panel Discussion',
        location: 'Michigan Theater',
        times: '3:00–5:00 PM',
        duration: 2,
        color: 'gold'
      },
      {
        name: 'Reception',
        location: 'Michigan Theater',
        times: '5:00–6:00 PM',
        duration: 1,
        color: 'gold'
      }
    ]
  }
]

const SchedulePage = () => (
  <main>
    <TitleSection>
      <RunningTextContainer>
        <h1>Tentative Schedule</h1>
      </RunningTextContainer>
    </TitleSection>

    <Container>
      <ScheduleContainer>
        {schedule.map(({ date, events }) => (
          <Day key={date}>
            <h2>{date}</h2>

            {events.map(
              ({
                color,
                duration,
                location,
                name,
                sessions,
                subtitle,
                times,
                to
              }) => (
                <Event key={times} color={color} span={duration} to={to}>
                  <Minimal>
                    {times}
                    {location && `: ${location}`}
                  </Minimal>

                  <Name>{name}</Name>

                  {subtitle && <Subtitle>{subtitle}</Subtitle>}

                  {sessions && (
                    <ConcurrentSessions>
                      {sessions.map((session, i) => (
                        <ConcurrentSession>
                          <Minimal>Session {i + 1}</Minimal>
                          {session}
                        </ConcurrentSession>
                      ))}
                    </ConcurrentSessions>
                  )}
                </Event>
              )
            )}
          </Day>
        ))}
      </ScheduleContainer>
    </Container>
  </main>
)

export default SchedulePage

const Container = styled(MaxWidthContainer)`
  max-width: 740px;
`

const ScheduleContainer = styled.div`
  display: grid;
  grid-gap: 1.5em;
  margin: 1em 0 3em;

  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Day = styled.section`
  display: grid;
  grid-gap: 0.25em;

  grid-auto-rows: 0.8em;
  @media (max-width: 600px) {
    grid-auto-rows: 1em;
  }

  h2 {
    border-top: 3px solid rgba(255, 255, 255, 0.6);
    font-family: tenso;
    font-size: 1rem;
    grid-row: span 6;
    letter-spacing: 0.2px;
    padding-top: 1em;
  }
`

const Minimal = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
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

const ConcurrentSessions = styled.div`
  display: grid;
  flex: 1;
  grid-gap: 0.3rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.3em;
`

const ConcurrentSession = styled.div`
  background-color: #6f4fca;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.1;
  margin: 0;
  padding: 0.6em;
  white-space: pre-line;
`

const Block = styled.span`
  background-color: ${p => (p.color ? colors[p.color] : '#FFFFFF11')};
  ${p => p.color === 'stripe' && greenStripes};

  border-radius: 2px;
  display: inline-block;
  height: 1.25em;
  margin: 0 0.25em -4px;
  width: 1.25em;
`

const BaseEvent = styled.div`
  background-color: ${p => (p.color ? colors[p.color] : '#FFFFFF11')};
  ${p => p.color === 'stripe' && greenStripes};
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0),
    0 0 0 rgba(16, 22, 26, 0);
  color: ${p => (p.color === 'gold' ? 'black' : 'inherit')};
  display: flex;
  flex-direction: column;
  grid-row: span ${p => p.span * 4 || 4};
  line-height: 1.1;
  padding: 0.4em 0.6em;
  transition: box-shadow 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);
`

const LinkEvent = BaseEvent.withComponent(Link).extend`
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 1px rgba(16,22,26,.1),0 2px 4px rgba(16,22,26,.2),0 8px 24px rgba(16,22,26,.2);
  }

  & ${Name} {
    text-decoration: underline;
  }
`

const Event = props => {
  const Component = props.to ? LinkEvent : BaseEvent
  return <Component {...props} />
}
