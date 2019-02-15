/**
 * @providesModule StudioPage
 * @flow
 */

import React from 'react'

import StreamOverview from '../../components/streams/Overview'
import StreamPeople from '../../components/streams/People'
import { StreamLogistics, TitleSection } from '../../components/streams/shared'
import MaxWidthContainer, {
  RunningTextContainer,
  UnpaddedRunningTextContainer
} from '../../components/shared/MaxWidthContainer'

const StudiosIcon: any = require('../../assets/studios.svg')

const StudioPage = () => (
  <main>
    {/* <StreamNavigation active="studio" /> */}

    <TitleSection>
      <StreamOverview
        title="Case Design Studios"
        tagline="Come create with us"
        pitch="Arrive with your case-in-production. Leave with powerful tools for
      science communication, outreach, and active learning."
        icon={<StudiosIcon />}
      />
    </TitleSection>

    <UnpaddedRunningTextContainer>
      <p>
        Tackling sustainability means addressing complex, interconnected, and
        ever-evolving problems. Case studies offer a unique way to engage by
        bringing real-world challenges to learners in the classroom and beyond.
      </p>
      <p>
        Join our community of case producers, media professionals, and educators
        for a series of intensive hands-on design, exchange, and production
        sessions. Together, we’ll harness the full power of cases for education
        and positive change.
      </p>
    </UnpaddedRunningTextContainer>

    <MaxWidthContainer>
      <StreamLogistics>
        <div>
          <h3>Bring</h3>
          <p>
            Bring case materials (and a team, optionally). Arrive with a
            well-thought-out idea for a case that you want to produce or an
            existing case that you want to take to the next level.
          </p>
        </div>
        <div>
          <h3>Develop</h3>
          <p>
            Develop skills to design, create, and make the most of your case.
            Studio sessions cover:
            <ul>
              <li>Case design and storytelling</li>
              <li>Working across academic and non-academic communities</li>
              <li>Media curation & production for cases</li>
            </ul>
          </p>
        </div>
        <div>
          <h3>Engage</h3>
          <p>
            Engage with a community of educators, practitioners, and
            communicators dedicated to exploring the limits of what cases can
            do.
          </p>
        </div>
      </StreamLogistics>
    </MaxWidthContainer>

    <RunningTextContainer>
      <p>
        You will also have a chance to visualize your case on the open-access
        Gala platform, getting hands-on with Gala’s tools for multimedia
        inclusion, community engagement, and case deployment.
      </p>
    </RunningTextContainer>

    <StreamPeople
      people={[
        {
          name: 'Cynthia Wei',
          title: 'Associate Director of Education, SESYNC',
          description: (
            <span>
              Cynthia Wei works to advance the teaching and learning of
              socio-environmental synthesis by developing, running, and
              supporting several SESYNC programs and initiatives. Prior to
              SESYNC, she worked on several national STEM education programs and
              initiatives related to biology education, climate change
              education, evolution education, and the role of community colleges
              in STEM education.
            </span>
          ),
          photoUrl: require('../../assets/people/cynthia.jpg'),
          links: [
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/cynthia-wei-22a515/'
            }
          ]
        },

        {
          name: 'Meghan Wagner',
          title: 'Project Coordinator, Michigan Sustainability Cases',
          description: (
            <span>
              Meghan Wagner facilitates case study production through
              collaborative partnerships with teams of students, faculty, and
              practitioners. Meghan has experience teaching at the university
              and community college levels, where she has enjoyed sharing her
              love of science.
            </span>
          ),
          photoUrl: require('../../assets/people/meghan.jpg'),
          links: [
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/meghan-wagner-3508166/'
            }
          ]
        },

        {
          name: 'Ed Waisanen',
          title: 'Media Director, Michigan Sustainability Cases',
          description: (
            <span>
              Ed Waisanen works with teams of students, faculty, and
              sustainability professionals to produce and curate multimedia for
              cases (including podcasts, videos, maps, and more). He is
              especially interested in finding ways to bring experience,
              expertise, and technical skill together for media co-production.
            </span>
          ),
          photoUrl: require('../../assets/people/ed.jpg'),
          links: [
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/edward-waisanen-92087712'
            }
          ]
        },

        {
          name: 'Leana Hosea',
          title: 'Journalist, BBC',
          description: (
            <span>
              Leana Hosea is a multimedia journalist with over ten years of
              experience working for the BBC in global news across the world.
              She is the Inaugural Media Fellow at the School of Environment and
              Sustainability at University of Michigan, a former Knight Wallace
              Fellow, and the director of a forthcoming documentary on water
              justice issues.
            </span>
          ),
          photoUrl: require('../../assets/people/leana.jpg'),
          links: [
            {
              text: 'LinkedIn',
              url: 'https://www.linkedin.com/in/leana-hosea-journalist/'
            }
          ]
        },

        {
          name: 'Ryan N. Wilcox',
          title: 'Media Equipment Specialist, University of Michigan',
          description: (
            <span>
              Ryan N. Wilcox provides consultation for teams across the
              university on video, film, sound and animation projects. His
              ‘Pocket Production’ session has helped hundreds of people rapidly
              develop foundational skills for audio and video production using
              minimal equipment.
            </span>
          ),
          photoUrl: require('../../assets/people/ryan.png')
        }
      ]}
    />
  </main>
)

export default StudioPage
