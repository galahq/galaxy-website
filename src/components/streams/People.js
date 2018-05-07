/**
 * @providesModule People
 * @flow
 */

import * as React from 'react'
import styled, { css } from 'styled-components'

import BaseMaxWidthContainer from '../shared/MaxWidthContainer'
import { UnstyledButton } from '../shared/Button'
import { SmallTitle } from './shared'

type Personality = {
  name: React.Node,
  title: React.Node,
  description: React.Node,
  photoUrl?: string,
  links?: { text: string, url: string }[],
}

export default class People extends React.Component<
  {
    people: Personality[],
  },
  { selectedIndex: number, rotating: boolean }
> {
  state = { selectedIndex: 0, rotating: true }

  interval = setInterval(
    () =>
      this.state.rotating &&
      this.setState(({ selectedIndex }) => ({
        selectedIndex: (selectedIndex + 1) % this.props.people.length
      })),
    5000
  )

  render () {
    const { people } = this.props
    const { selectedIndex } = this.state
    const selectedPerson = people[selectedIndex]
    return (
      <section>
        <MaxWidthContainer>
          <h2>Who’s who?</h2>
          <PhotosContainer>
            {people.map((person, i) => (
              <Person
                active={selectedIndex === i}
                person={person}
                onClick={() =>
                  this.setState({ selectedIndex: i, rotating: false })
                }
              />
            ))}
          </PhotosContainer>
          <PersonDetails>
            <h3>
              <SmallTitle>{selectedPerson.title}</SmallTitle>
              {selectedPerson.name}
            </h3>
            <p>{selectedPerson.description}</p>
            {selectedPerson.links && (
              <p>
                {selectedPerson.links.map(link => (
                  <Link href={link.url}>{link.text}</Link>
                ))}
              </p>
            )}
          </PersonDetails>
        </MaxWidthContainer>
      </section>
    )
  }
}

class Person extends React.Component<{
  active: boolean,
  person: Personality,
  onClick: () => mixed,
}> {
  ref: ?HTMLButtonElement

  componentDidUpdate () {
    if (!this.props.active) return

    if (this.ref == null) return
    const left = this.ref.offsetLeft
    const right = left + this.ref.offsetWidth

    const parent: ?HTMLElement = this.ref.offsetParent
    if (parent == null) return
    const leftmostVisible = parent.scrollLeft
    const rightmostVisible = leftmostVisible + parent.offsetWidth

    if (left < leftmostVisible || right > rightmostVisible) {
      parent.scrollTo({ left, top: 0, behavior: 'smooth' })
    }
  }

  render () {
    const { active, onClick, person } = this.props
    return (
      <PersonButton
        innerRef={ref => (this.ref = ref)}
        active={active}
        onClick={onClick}
      >
        <img src={person.photoUrl} role="presentation" />
        <figcaption>{person.name}</figcaption>
      </PersonButton>
    )
  }
}

const MaxWidthContainer = BaseMaxWidthContainer.extend`
  padding-left: 0;
  padding-right: 0;

  & > h2 {
    padding: 0 1rem;
  }
`

const PhotosContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;

  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
`

const PersonButton = UnstyledButton.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 0 0 9rem;
  padding: 1rem;

  transition: background-color 0.3s ease-out;

  ${p =>
    p.active &&
    css`
      background-color: hsla(0, 0%, 100%, 0.1);
    `};

  &:focus {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  & img {
    width: 8rem;
    height: calc(8rem / 4 * 5);
    margin: 0 0 0.25rem;
    object-fit: cover;
    background-color: hsla(0, 0%, 100%, 0.1);
    border: none;
  }

  & figcaption {
    display: block;
    flex-basis: 100%;
    line-height: 1.2;
  }
`

const PersonDetails = styled.div`
  padding: 1rem 1rem 0.5rem;
  background-color: hsla(0, 0%, 100%, 0.1);

  & h3 {
    margin-top: 0;
  }

  & p {
    max-width: 700px;
  }
`

const Link = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  margin-right: 1rem;
`
