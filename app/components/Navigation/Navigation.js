import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { container, navContainer, link } from './styles.css'

Navigation.prototypes = ActionLinks.prototypes = NavLinks.prototypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function NavLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li><NavLink className={link} to='/'> Home </NavLink></li>
    </ul>
    : null
}

function ActionLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li>NEW DUCK</li>
      <li><NavLink className={link} to='/logout'> Logout </NavLink></li>
    </ul>
    : <ul>
      <li><NavLink className={link} to='/'> Home </NavLink></li>
      <li><NavLink className={link} to='/auth'> Authenticate </NavLink></li>
    </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}
