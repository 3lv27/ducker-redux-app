import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthContainer } from '../containers'

const routes = (
  <Router>
    <MainContainer>
      <Switch>
        <Route exact={true} path='/' component={HomeContainer} />
        <Route path='/auth' component={AuthContainer} />

      </Switch>
    </MainContainer>
  </Router>

)

export default routes
