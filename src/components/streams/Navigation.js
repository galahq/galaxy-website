/**
 * @providesModule StreamNavigation
 * @flow
 */

import React from 'react'

import Navigation from '../shared/Navigation'

const StreamLinks = {
  charrette: 'Charrettes',
  studio: 'Studios',
  sprint: 'Design Sprint'
}

const StreamNavigation = ({
  active
}: {
  active: $Keys<typeof StreamLinks>
}) => <Navigation label="Content streams" active={active} links={StreamLinks} />

export default StreamNavigation
