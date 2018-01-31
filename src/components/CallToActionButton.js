/**
 * @providesModule CallToActionButton
 * @flow
 */

import React from 'react'

import BaseButton from '../components/shared/Button'

const CallToActionButton = (props: {
  big?: boolean,
  primary?: boolean,
  disabled?: boolean,
  className?: string
}) => (
  <Button {...props} href="https://eepurl.com/di7gKv">
    Learn more
  </Button>
)
export default CallToActionButton

const Button = BaseButton.withComponent('a')
