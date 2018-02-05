import React, { Component } from 'react'

import { Auth } from 'components'
import auth from 'helpers/auth'

class AuthContainer extends Component {
  handleAuth () {
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }
  render () {
    return (
      <Auth
        isFetching={false}
        error=''
        onAuth={this.handleAuth} />
    )
  }
}

export default AuthContainer
