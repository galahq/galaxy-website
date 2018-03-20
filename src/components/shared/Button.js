/**
 * @providesModule Button
 * @flow
 */

import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 6px 16px;

  background-color: white;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.8),
    hsla(0, 0%, 100%, 0)
  );
  border: none;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
    inset 0 -1px 0 rgba(16, 22, 26, 0.1);

  cursor: pointer;

  color: black;
  font-family: tenso;
  font-size: 95%;
  letter-spacing: 0.1px;
  line-height: 1.37;
  text-decoration: none;

  &:hover {
    background-color: #f5f5fa;
  }

  &:active {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color: #ebebf5;
  }

  ${p =>
    p.big &&
    css`
      padding: 8px 20px;
      font-weight: 500;
      font-size: 110%;
      letter-spacing: 0.3px;
    `};

  ${p =>
    p.primary &&
    css`
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
        inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color: #7351d4;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.1),
        hsla(0, 0%, 100%, 0)
      );

      color: #fff;

      &:hover {
        background-color: #6745c7;
      }

      &:active {
        background-color: #5636b0;
      }
    `};

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;

      &:hover {
        background-color: white;
      }

      &:active {
        /* Reset */
        background-color: white;
        box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
          inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      }
    `};
`

export default Button

export const UnstyledButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  text-align: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
