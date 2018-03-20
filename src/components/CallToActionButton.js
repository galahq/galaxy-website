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
  href?: string,
  text: string,
}) => {
  const Button = getButtonComponent(props)
  return <Button {...props}>{props.text}</Button>
}

CallToActionButton.defaultProps = {
  to: '/register',
  text: 'Register',
}

export default CallToActionButton

function getButtonComponent(props) {
  if (props.href) {
    return BaseButton.withComponent('a')
  } else {
    return BaseButton.withComponent(Link)
  }
}

export const CenteredCallToActionButton = styled(CallToActionButton)`
  margin: 3rem auto 1.5rem;
  display: inline-block;
`
