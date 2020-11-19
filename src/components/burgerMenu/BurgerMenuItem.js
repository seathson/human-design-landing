import React from 'react'

function BurgerMenuItem(props) {
  function handleClick() {
    window.scrollTo({top: props.href, behavior: "smooth"})
    setTimeout(() => props.handleOpen(), 500)
  }
  return(
    <div className='burger-menu__button'>
      <div className='nav-menu__href' 
        onClick={handleClick}>{props.text}</div>
    </div>
  )
}

export default BurgerMenuItem