import {Navigation} from './Navigation'
import classes from './MainHeader.module.css'

export const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Dummy Log</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  )
}