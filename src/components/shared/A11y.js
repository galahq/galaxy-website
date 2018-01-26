/**
 * @flow
 */

import styled, { css } from 'styled-components'

export const LabelForScreenReaders = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus-within {
    position: initial;
    left: initial;
    top: initial;
    width: initial;
    height: initial;
    overflow: initial;
  }

  ${({ visibleBelowMaxWidth }) =>
    visibleBelowMaxWidth &&
    css`
      @media (max-width: ${visibleBelowMaxWidth}px) {
        position: initial;
        left: initial;
        top: initial;
        width: initial;
        height: initial;
        overflow: initial;
      }
    `};
`
