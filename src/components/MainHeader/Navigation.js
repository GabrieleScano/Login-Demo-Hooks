import React, { useContext } from 'react'

import AuthContext from '../../store/auth-context'
import classes from './Navigation.module.css'

export const Navigation = (props) => {
  const context = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}