import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Auth } from 'components'

import * as userActionCreators from 'redux/modules/users'

class AuthContainer extends Component {
  constructor (props) {
    super(props)

    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth () {
    this.props.fetchAndHandleAuthedUsers()
  }

  render () {
    console.log('Is fetching', this.props.isFetching)
    return (
      <Auth
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

AuthContainer.proptypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUsers: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  console.log(state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
