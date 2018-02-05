import React from 'react'

import {Navigation} from 'components'

import { container, innerContainer } from './styles.css'

const MainContainer = props => (
  <div className={container}>
    <Navigation isAuthed={false} />
    <div className={innerContainer}>
      {props.children}
    </div>
  </div>
)

export default MainContainer
