/**
 * @providesModule PriceTable
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const PriceTable = () => (
  <Container>
    <Table>
      <thead>
        <tr>
          <td />
          <td>
            Early Bird <Details>before April 10, 2018</Details>
          </td>
          <td>
            Regular <Details>after April 10, 2018</Details>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Individual Rate</th>
          <td>$450</td>
          <td>$500</td>
        </tr>
        <tr>
          <th>
            Student Rate <Details>limited availability</Details>
          </th>
          <td colSpan="2">$400</td>
        </tr>
      </tbody>
    </Table>
    <LinkWithArrow to="#">Scholarships available</LinkWithArrow>
  </Container>
)

export default PriceTable

const Container = styled.div`
  width: 600px;
  margin: 2rem auto;
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
`

const LinkWithArrow = styled(Link)`
  position: relative;

  &::after {
    content: ' ›';
    position: absolute;
    right: -0.75em;
  }
`
