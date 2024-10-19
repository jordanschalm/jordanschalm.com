import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './defaults.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jordan Schalm"
      meta={[
        {
          name: 'description',
          content: "Jordan Schalm's personal website and portfolio",
        },
        {
          name: 'keywords',
          content: 'Jordan Schalm, portfolio, software, engineering',
        },
        { name: 'charset', content: 'utf-8' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Josefin+Slab:400,700|Inconsolata:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
