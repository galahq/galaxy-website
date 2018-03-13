import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Galaxy 2018"
      meta={[
        {
          name: 'description',
          content:
            'Information about the 2018 Galaxy sustainability learning exchange.',
        },
        { name: 'keywords', content: 'Galaxy, sustainaiblity, conference' },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
