import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function BurgerMenuItem(props) {
  const history = useHistory()
  const location = useLocation()

  function handleClick() {
    if (location.pathname !== '/') {
      history.push({
        pathname: '/',
        state: { prevLocation: location.pathname, id: props.id }
      })
    } else {
      setTimeout(() => window.scrollTo({top: props.href, behavior: "smooth"}))
      setTimeout(() => props.handleOpen(), 500)
    }
  }
  return(
    <div className='burger-menu__button'>
      <div className='nav-menu__href' 
        onClick={handleClick}>{props.text}</div>
    </div>
  )
}

export default BurgerMenuItem