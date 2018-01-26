import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Galaxy 2018"
      meta={[
        {
          name: 'description',
          content:
            'Information about the Galaxy 2018 sustainability teaching and learning exchange.'
        },
        { name: 'keywords', content: 'Galaxy, sustainaiblity, conference' }
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
