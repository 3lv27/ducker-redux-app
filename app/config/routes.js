import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer } from '../containers'

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={MainContainer} />
        <Route path='/' component={HomeContainer}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes
