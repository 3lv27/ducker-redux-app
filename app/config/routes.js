import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthContainer, FeedContainer } from '../containers'

export const routes = () => (
  <Router>
    <MainContainer>
      <Switch>
        <Route exact={true} path='/' component={HomeContainer} />
        <Route path='login' component={AuthContainer} />
        <Route path='feed' component={FeedContainer} />

      </Switch>
    </MainContainer>
  </Router>

)

export default routes
