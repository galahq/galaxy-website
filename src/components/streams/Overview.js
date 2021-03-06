/**
 * @providesModule Overview
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

import Tagline, {
  TaglineInnerSection,
  TaglineContainer,
  CallToAction,
} from '../Tagline'
import { StreamIcon } from '../Stream'
import { SmallTitle } from './shared'

type Props = {
  title: string,
  tagline: string,
  pitch: string | React.Node,
  icon: React.Node,
  className?: string,
}

const Overview = ({ className, title, tagline, pitch, icon }: Props) => (
  <Section className={className}>
    <Container>
      <Tagline small>
        <SmallTitle>{title}</SmallTitle>
        {tagline}
      </Tagline>
      {pitch}
    </Container>

    <IconContainer>
      <StreamIcon animation="coalesce">{icon}</StreamIcon>
    </IconContainer>
  </Section>
)

export default Overview

const Section = TaglineInnerSection.extend`
  margin-bottom: 2rem;
`

const Container = TaglineContainer.extend`
  margin-top: 1rem;
`

export const IconContainer = CallToAction.extend`
  margin-top: 1em;
`
