import React, { useState } from 'react'

function NavMenuItem(props) {
  const [visible, setVisible] = useState(false)

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
      <div className='nav-menu__href' onClick={() => window.scrollTo({top: props.href, behavior: "smooth"})}>{props.text}</div>
      <div className={underLineClassName}></div>
    </div>
  )
}

export default NavMenuItem