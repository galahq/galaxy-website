import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ location, children }) => (
  <div>
    <Helmet
      title="Galaxy 2020"
      meta={[
        {
          name: 'description',
          content:
            'Information about the Galaxy sustainability learning exchange.',
        },
        { name: 'keywords', content: 'Galaxy, sustainaiblity, conference' },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <Header full={location.pathname === '/'} />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
