/**
 * @providesModule PoissonDiscDistribution
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

class PoissonDiscDistribution extends React.Component<{}> {
  svg: ?HTMLElement

  componentDidMount () {
    if (this.svg == null) return

    const { width, height } = this.svg.getBoundingClientRect()

    const sample = poissonDiscSampler(width, height, 17)

    const svg = d3.select(this.svg)

    d3.timer(function () {
      for (let i = 0; i < 10; ++i) {
        const s = sample()
        if (!s) return true

        const size = random(1, 3)
        const opacity = random(0, 2) ** 3 / 8
        const color = `hsl(256, 76%, ${random(65, 75)}%)`

        svg
          .append('circle')
          .attr('cx', s[0])
          .attr('cy', s[1])
          .attr('r', 0)
          .transition()
          .attr('r', size)
          .attr('opacity', opacity)
          .attr('fill', color)
      }
    })
  }

  render () {
    return <Svg innerRef={svg => (this.svg = svg)} />
  }
}

export default PoissonDiscDistribution

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

function random (min: number, max: number) {
  return Math.random() * (max - min) + min
}

// Cribbed from https://bl.ocks.org/mbostock/19168c663618b7f07158
// Based on https://www.jasondavies.com/poisson-disc/
function poissonDiscSampler (width: number, height: number, radius: number) {
  var k = 30, // maximum number of samples before rejection
    radius2 = radius * radius,
    R = 3 * radius2,
    cellSize = radius * Math.SQRT1_2,
    gridWidth = Math.ceil(width / cellSize),
    gridHeight = Math.ceil(height / cellSize),
    grid = new Array(gridWidth * gridHeight),
    queue = [],
    queueSize = 0,
    sampleSize = 0

  return function () {
    if (!sampleSize) { return sample(Math.random() * width, Math.random() * height) }

    // Pick a random existing sample and remove it from the queue.
    while (queueSize) {
      var i = (Math.random() * queueSize) | 0,
        s = queue[i]

      // Make a new candidate between [radius, 2 * radius] from the existing sample.
      for (var j = 0; j < k; ++j) {
        var a = 2 * Math.PI * Math.random(),
          r = Math.sqrt(Math.random() * R + radius2),
          x = s[0] + r * Math.cos(a),
          y = s[1] + r * Math.sin(a)

        // Reject candidates that are outside the allowed extent,
        // or closer than 2 * radius to any existing sample.
        if (x >= 0 && x < width && y >= 0 && y < height && far(x, y)) { return sample(x, y) }
      }

      queue[i] = queue[--queueSize]
      queue.length = queueSize
    }
  }

  function far (x, y) {
    var i = (x / cellSize) | 0,
      j = (y / cellSize) | 0,
      i0 = Math.max(i - 2, 0),
      j0 = Math.max(j - 2, 0),
      i1 = Math.min(i + 3, gridWidth),
      j1 = Math.min(j + 3, gridHeight)

    for (j = j0; j < j1; ++j) {
      var o = j * gridWidth
      for (i = i0; i < i1; ++i) {
        if ((s = grid[o + i])) {
          var s,
            dx = s[0] - x,
            dy = s[1] - y
          if (dx * dx + dy * dy < radius2) return false
        }
      }
    }

    return true
  }

  function sample (x, y) {
    var s = [x, y]
    queue.push(s)
    grid[gridWidth * ((y / cellSize) | 0) + ((x / cellSize) | 0)] = s
    ++sampleSize
    ++queueSize
    return s
  }
}
