/**
 * @providesModule Schedule2018Page
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
  green: '#539b71',
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
        color: 'purple',
      },
      {
        name: 'Welcome; Gala Intro & Updates',
        location: 'Rackham Building',
        times: '9:00 AM–9:30 AM',
        duration: 1,
        color: 'purple',
      },
      { duration: 0.25 },
      {
        name: 'Master Classes',
        location: 'Rackham Building',
        times: '9:45–12:15 PM',
        duration: 3.5,
        color: 'purple',
      },
      { duration: 0.25 },
      {
        name: 'Lunch / Posters',
        times: '12:30–2:00 PM',
        duration: 1.5,
        color: 'green',
      },
      { duration: 0.25 },
      {
        name: 'Master Classes',
        location: 'Rackham Building',
        times: '2:15–4:45 PM',
        duration: 3.5,
        color: 'purple',
      },
      { duration: 0.25 },
      {
        name: 'Wrap-up',
        times: '5:00–5:30 PM',
        duration: 1,
        color: 'purple',
      },
    ],
  },

  {
    date: 'Friday, June 21',
    events: [
      {
        name: 'Check-in & Poster Set-up',
        location: 'Rackham Building',
        times: '8:00–9:00 AM',
        duration: 1,
        color: 'purple',
      },
      {
        name: 'Lightning Talks / Media Showcase',
        location: 'Rackham Building',
        times: '9:00 AM–10:45 AM',
        duration: 2,
        color: 'purple',
      },
      { duration: 0.25 },
      {
        name: 'Pocket Production',
        location: 'Rackham Building',
        times: '11:00–11:30 AM',
        duration: 1,
        color: 'purple',
      },
      {
        name: 'Awards Ceremony',
        location: 'Rackham Building',
        times: '11:30–12:00 PM',
        duration: 1,
        color: 'gold',
      },
      {
        name: 'Lunch Break',
        subtitle: 'Box lunch provided',
        times: '12:00–3:00 PM',
        duration: 3,
      },
      {
        name: 'The Last Animals',
        subtitle: 'Film Screening & Panel Discussion',
        location: 'Michigan Theater',
        times: '3:00–5:30 PM',
        duration: 4,
        color: 'stripe',
      },
      { duration: 1 },
      {
        name: 'Reception',
        times: '6:30–8:00 PM',
        duration: 1.5,
        color: 'gold',
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
            {events.map(
              ({ name, times, duration, color, subtitle, location, to }) => (
                <Event key={times} color={color} span={duration} to={to}>
                  <Times>
                    {times}
                    {location && `: ${location}`}
                  </Times>
                  <Name>{name}</Name>
                  {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </Event>
              )
            )}
          </Day>
        ))}
      </ScheduleContainer>
    </MaxWidthContainer>
    <RunningTextContainer>
      <p>
        <Block color="purple" />
        <Block color="green" />
        <Block color="gold" />
        <Block color="stripe" />
        <span> Included with Galaxy registration</span>
      </p>
      <p>
        <Block color="stripe" />
        <span> Open to the public</span>
      </p>
    </RunningTextContainer>
  </main>
)

export default SchedulePage

const ScheduleContainer = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(2, 1fr);
  margin: 1em 0 3em;

  @media (max-width: 843px) {
    grid-template-columns: 1fr;
  }
`

const Day = styled.section`
  display: grid;
  grid-auto-rows: 1.85em;
  grid-gap: 0.25em;

  h2 {
    border-top: 3px solid rgba(255, 255, 255, 0.6);
    font-family: tenso;
    font-size: 1rem;
    grid-row: span 3;
    letter-spacing: 0.2px;
    padding-top: 1em;
  }
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
  grid-row: span ${p => p.span * 2 || 2};
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
