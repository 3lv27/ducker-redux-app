import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {Navigation} from 'components'

import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.prototypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default withRouter(connect((state) => ({isAuthed: state.isAuthed}))(MainContainer))
