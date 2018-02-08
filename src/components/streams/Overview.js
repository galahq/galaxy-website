/**
 * @providesModule Overview
 * @flow
 */

import * as React from 'react'
import styled from 'styled-components'

import Tagline, {
  TaglineInnerSection,
  TaglineContainer,
  CallToAction
} from '../Tagline'
import { StreamIcon } from '../Stream'
import { SmallTitle } from './shared'

type Props = {
  title: string,
  tagline: string,
  pitch: string,
  icon: React.Node
}

const Overview = ({ title, tagline, pitch, icon }: Props) => (
  <TaglineInnerSection>
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
  </TaglineInnerSection>
)

export default Overview

const Container = TaglineContainer.extend`
  margin-top: 1rem;
`

const IconContainer = CallToAction.extend`
  margin-top: 1em;
`
