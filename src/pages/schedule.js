/**
 * @providesModule SchedulePage
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import TitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer,
} from '../components/shared/MaxWidthContainer'

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

const schedule: {
  date: string,
  events: {
    name?: string,
    subtitle?: string,
    location?: string,
    times?: string,
    duration?: number,
    color?: $Keys<typeof colors>,
    to?: string,
  }[],
}[] = [
  {
    date: 'Thursday, June 7',
    events: [
      {
        name: 'Case Innovation Studio',
        subtitle: 'Introducing Gala',
        location: 'Rackham Building',
        times: '8:30–10 AM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Elements of Case Design',
        location: 'Rackham Building',
        times: '10:15 AM–12:15 PM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Lunch',
        times: '12:15–1:45 PM',
        duration: 1.5,
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Working Across Communities',
        location: 'Rackham Building',
        times: '1:45–3 PM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Media: Pocket Production',
        location: 'Rackham Building',
        times: '3:15–5 PM',
        duration: 1.5,
        color: 'purple',
      },
      { duration: 1 },
      {
        name: 'Welcome Dinner',
        times: '6–8 PM',
        duration: 2,
        color: 'gold',
      },
    ],
  },

  {
    date: 'Friday, June 8',
    events: [
      {
        name: 'Case Innovation Studio',
        subtitle: 'Narrative and Storytelling',
        location: 'Rackham Building',
        times: '8:30–10 AM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Media: Interview Techniques',
        location: 'Rackham Building',
        times: '10:15 AM–12:15 PM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Lunch',
        times: '12:15–1:45 PM',
        duration: 1.5,
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Media: Curation & Visualization',
        location: 'Rackham Building',
        times: '1:45–3:45 PM',
        duration: 2,
        color: 'purple',
      },
      {
        name: 'Thirst for Justice',
        subtitle:
          'A director’s cut screening of a new documentary film by Leana Hosea',
        location: 'Michigan Theater',
        times: '4–6 PM',
        duration: 2,
        color: 'green',
        to: '/screening',
      },
      {
        name: 'Dinner while enjoying the Ann Arbor Mayor’s Green Fair',
        times: '6–8 PM',
        duration: 2,
      },
    ],
  },

  {
    date: 'Saturday, June 9',
    events: [
      {
        name: 'Case Innovation Studio',
        subtitle: 'Putting Your Case on Gala',
        location: 'Rackham Building',
        times: '8:30–10 AM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Case Innovation Studio',
        subtitle: 'Engagement Strategies',
        location: 'Rackham Building',
        times: '10:15 AM–12:15 PM',
        duration: 1.5,
        color: 'purple',
      },
      {
        name: 'Lunch',
        times: '12:15–1:45 PM',
        duration: 1.5,
      },
      {
        name: 'Charrette: 1,4-Dioxane',
        times: '1:45–5 PM',
        location: 'Assembly Hall, Rackham',
        duration: 3,
        color: 'green',
        to: '/charrette',
      },
      { duration: 1 },
      {
        name: 'Gala Awards Ceremony & Dinner',
        times: '6–8 PM',
        duration: 2,
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
        <span> Included with Galaxy registration</span>
      </p>
      <p>
        <Block color="green" />
        <span> Open to the public</span>
      </p>
      <p>
        <Block color="gold" />
        <span> Complimentary, by invitation only</span>
      </p>
    </RunningTextContainer>
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
  ${p => p.color === 'green' && greenStripes};

  border-radius: 2px;
  display: inline-block;
  height: 1.25em;
  margin: 0 0.25em -4px;
  width: 1.25em;
`

const BaseEvent = styled.div`
  background-color: ${p => (p.color ? colors[p.color] : '#FFFFFF11')};
  ${p => p.color === 'green' && greenStripes};
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
