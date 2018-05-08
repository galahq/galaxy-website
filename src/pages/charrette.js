/**
 * @providesModule CharrettePage
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

import StreamOverview from '../components/streams/Overview'
import BaseTitleSection from '../components/shared/TitleSection'
import MaxWidthContainer, {
  RunningTextContainer
} from '../components/shared/MaxWidthContainer'
import { ExternalLink } from '../components/shared/Link'

const CharretteIcon: any = require('../assets/design-sprint.svg')

const CharrettePage = () => (
  <main>
    <TitleSection>
      <StreamOverview
        title="Policy in Practice: The Scio Township Dioxane Plume"
        tagline="Groundwater contamination has plagued Ann Arbor for more than
      three decades."
        pitch="Join educators, stakeholders, concerned citizens, and student
      activists as they use a Michigan Sustainability Case on the Gala platform
      to unite for real progress in this open problem-solving session."
        icon={
          <Definition>
            <dfn>char•rette</dfn>
            <span>ʃəˈɹɛt</span>
            <p>
              a meeting in which all stakeholders in a project attempt to
              resolve conflicts and map solutions
            </p>
          </Definition>
        }
      />
    </TitleSection>

    <RunningTextContainer>
      <p>
        Michigan Sustainability Cases expand upon the best of case-based
        learning, building problem-driven, solution-focused, multi-modal
        approaches emphasizing experiential learning. See this game-changing
        pedagogy at work at the Galaxy Charette, where diverse stakeholders will
        address the hot-button issue of groundwater contaminaton.
      </p>

      <Quotation>
        It is a definition of irony: A major water pollution clean-up caused by
        a company that made filters to detect water pollution.
      </Quotation>

      <p>
        About the case: A local Ann Arbor industry severely contaminated the
        aquifer beneath the city with a carcinogenic chemical, 1,4-dioxane,
        decades ago. Since then, the chemical plume has continued to migrate
        through the city and county, contaminating local lakes and private
        drinking water wells, while en route to the city’s drinking water
        supply. The state’s consent decree with the industry may not be
        protective of wildlife and citizens. To some, the federal, state and
        local response to the ecological and public health risks has been
        disappointing. Local advocacy has challenged authorities to resolve the
        issue. Some say designating the site as one of the nation’s worst (i.e.,
        a Superfund site) could force a better cleanup, while others fear that
        labeling Ann Arbor as a toxic site could bring negative consequences
        such as decreased property values. This Michigan Sustainability Case
        illuminates all sides of the issue.
      </p>
      <p>
        Listen to the podcast that accompanies the case, or{' '}
        <ExternalLink href="https://www.learngala.com/en/cases/dioxane-plume/">
          read the full story on Gala
        </ExternalLink>.
        <Audio
          src="https://www.learngala.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--087a5efecb05ba96cf35fb3f3daaa1372b733334/dioxane-plume_podcast_audio"
          controls={true}
        />
      </p>
    </RunningTextContainer>
  </main>
)

export default CharrettePage

const TitleSection = BaseTitleSection.extend`
  margin-bottom: 3em;
`

const Definition = styled.section`
  margin-left: 2em;
  text-align: left;

  dfn {
    font-size: 130%;
    font-style: normal;
  }

  span {
    font-family: sans-serif;
    margin-left: 1em;

    &::before,
    &::after {
      content: '/';
    }
  }

  p {
    font-size: 90%;
    font-style: normal;
    line-height: 1.2;
    text-align: left;
  }
`

const Quotation = styled.blockquote`
  font-family: freight-text-pro;
  font-size: 140%;
  font-style: italic;
  line-height: 1.3;
  margin: 2em 1em;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`

const Audio = styled.audio`
  margin-top: 1em;
  width: 100%;
`
