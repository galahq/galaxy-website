/**
 * @providesModule PriceTable
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import { LinkWithArrow } from './shared/Link'

const PriceTable = () => (
  <Container>
    <Table>
      <thead>
        <tr>
          <td />
          <td>
            Early Bird <Details>before April 10</Details>
          </td>
          <td>
            Regular <Details>after April 10</Details>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Individual</th>
          <td>$450</td>
          <td>$500</td>
        </tr>
        <tr>
          <th>
            Student Rate <Details>limited availability</Details>
          </th>
          <td>$400</td>
          <td>$400</td>
        </tr>
      </tbody>
    </Table>
    <LinkWithArrow to="/scholarship">Scholarships available</LinkWithArrow>
  </Container>
)

export default PriceTable

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`

const Table = styled.table`
  td,
  th {
    border: none;
  }

  thead td {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  }

  th {
    text-align: right;
  }

  td {
    text-align: center;
  }

  th,
  thead td {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3;
  }
`

const Details = styled.span`
  display: block;
  font-family: tenso;
  font-style: normal;
  font-size: 0.8rem;
  font-weight: normal;
  white-space: nowrap;
`
