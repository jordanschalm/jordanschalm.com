import React, { Component } from 'react'
import Markdown from 'react-markdown'
import './index.css'

class Project extends Component {
  constructor(props) {
    super(props)
    this._renderDate = this._renderDate.bind(this)
  }

  // Props:
  //  - name - title of the project
  //  - date - optional, may be range
  //  - url - link to project
  //  - description - the body text describing the project
  render() {
    const { name, date, url, description } = this.props
    let { emoji } = this.props

    // TODO: size this correctly
    if (!emoji) {
      emoji = '>'
    }

    return (
      <div className="Project">
        <div className="Project__header">
          <span className="Project__emoji">{emoji}</span>
          <a className="Project__name" href={url}>
            {name}
          </a>
          <span className="Project__dot">{' • '}</span>
          {this._renderDate(date)}
        </div>
        <Markdown
          className="Project__description"
          key={description}
          source={description}
        />
      </div>
    )
  }

  // Renders the date as an inline span.
  // Ranges are rendered as `start -> end`.
  // Single dates are rendered `date`
  _renderDate = date => {
    if (!date) {
      return null
    }

    // Case 1: single date
    if (!date.start && !date.end) {
      return (
        <span className="Project__date-container">
          <span className="Project__date">{date.format('MMM YYYY')}</span>
        </span>
      )
    }

    // Case 2: date range
    const end = date.end ? date.end.format('MMM YYYY') : 'Now'
    return (
      <span className="Project__date-container">
        <span>{date.start.format('MMM YYYY')}</span>
        <span className="Project__date-arrow">{' → '}</span>
        <span>{end}</span>
      </span>
    )
  }
}

export default Project
