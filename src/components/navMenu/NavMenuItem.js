import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function NavMenuItem(props) {
  const history = useHistory()
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  function handleClick() {
    if (location.pathname !== '/') {
      history.push({
        pathname: '/',
        state: { prevLocation: location.pathname, id: props.id }
      })
    } else {
      setTimeout(() => window.scrollTo({top: props.href, behavior: "smooth"}))
    }
  }

  let underLineClassName = 'nav-menu__underLine'



  let handleMouseEnter = () => {
    setVisible(true)
  }

  let handleMouseLeave = () => {
    setVisible(false)
  }

  if (visible) {
    underLineClassName += ' nav-menu__underLine_visible'
  }

  return(
    <div className='nav-menu__button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='nav-menu__href' onClick={handleClick/*() => window.scrollTo({top: props.href, behavior: "smooth"})*/}>{props.text}</div>
      <div className={underLineClassName}></div>
    </div>
  )
}

export default NavMenuItem