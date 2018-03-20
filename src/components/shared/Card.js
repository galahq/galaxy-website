/**
 * @providesModule Card
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div.attrs({ className: 'o-card' })`
  position: relative;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0),
    0 0 0 rgba(16, 22, 26, 0);
  background-color: hsla(0, 0%, 100%, 0.8);
  color: black;
  padding: 20px;
  transition: transform 0.2s cubic-bezier(0.4, 1, 0.75, 0.9),
    box-shadow 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${p =>
    p.minimal &&
    css`
      background-color: hsla(0, 0%, 100%, 0.5);
    `};
`

export default Card
