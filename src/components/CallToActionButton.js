/**
 * @providesModule CallToActionButton
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import BaseButton from '../components/shared/Button'

const CallToActionButton = (props: {
  big?: boolean,
  primary?: boolean,
  disabled?: boolean,
  className?: string,
  to: string,
  text: string,
}) => (
  <Button
    {...props}
    onClick={() => props.to.startsWith('//') && (window.location = props.to)}
  >
    {props.text}
  </Button>
)

CallToActionButton.defaultProps = {
  to: '/register',
  text: 'Register',
}

export default CallToActionButton

const Button = BaseButton.withComponent(Link)

export const CenteredCallToActionButton = styled(CallToActionButton)`
  margin: 3rem auto 1.5rem;
  display: inline-block;
`
