/**
 * @providesModule Stream
 * @flow
 */

import * as React from 'react'
import styled, { css } from 'styled-components'

import MaxWidthContainer from './shared/MaxWidthContainer'

const Stream = styled.div`
  flex: 1;
  padding: 0 0.75em;
  max-width: 500px;

  &:first-child {
    padding-left: 0;
    padding-top: 0;
  }

  &:last-child {
    padding-right: 0;
    padding-bottom: 0;
  }

  @media (max-width: 843px) {
    padding: 0.75em 0;
  }

  & > p {
    padding-bottom: 1rem;
  }
`

export default Stream

export const StreamSection = MaxWidthContainer.withComponent('section').extend`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 1rem;

  @media (max-width: 843px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StreamTitle = styled.h2`
  text-align: center;
  margin-top: 1.5rem;
`

export class StreamIcon extends React.Component<
  {
    animation?: 'coalesce' | 'transit' | 'irradiate',
    children: React.Node
  },
  { loaded: boolean }
> {
  interval: ?IntervalID
  ref: ?HTMLElement

  state = { loaded: false }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.ref || !checkVisible(this.ref)) return

      this.setState({ loaded: true })
      this.interval && clearInterval(this.interval)
    }, 500)
  }
  render() {
    return (
      <StreamIconContainer
        animation={this.props.animation}
        innerRef={ref => (this.ref = ref)}
      >
        {React.cloneElement(this.props.children, {
          className: this.state.loaded ? undefined : 'before-animation'
        })}
      </StreamIconContainer>
    )
  }
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  )
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

export const StreamIconContainer = styled.figure`
  text-align: center;
  margin: 0;

  & > svg {
    width: 90px;
    height: 90px;
    opacity: 0.85;

    &:not(:root) {
      overflow: visible;
    }

    & path,
    & rect,
    & circle[stroke-width],
    & polygon {
      stroke: rgba(white, 0.8);
      stroke-width: 2.5px;
      vector-effect: non-scaling-stroke;
    }

    & circle:not([stroke-width]) {
      transition: transform 2s ease-out, opacity 2s ease-out;

      transform-origin: center center;
      transform: scale(1) rotate(0) translate(0);
    }
  }

  & > svg.before-animation circle:nth-child(2n):not([stroke-width]) {
    ${p => {
      switch (p.animation) {
        case 'coalesce':
          return css`
            transform: scale(1.2);
            opacity: 0;
          `
        case 'transit':
          return css`
            transform: translate(20px, 20px);
            opacity: 0;
          `
        case 'irradiate':
          return css`
            transform: rotate(-45deg);
            opacity: 0;
          `
      }
    }};
  }
`
