import React, { useState, useRef } from 'react'
import BurgerMenuItem from './BurgerMenuItem'

function BurgerMenu(props) {
  const [open, setOpen] = useState(false)
  const burger = useRef(null)

  props.updateRef(burger.current)
  let switcherClassName = 'burger-menu__switcher'
  let contentClassName = 'burger-menu__content'

  let handleOpen = () => {
    setOpen(prevOpen => !prevOpen)
  }

  if (open) {
    switcherClassName += ' burger-menu__switcher_open'
    contentClassName += ' burger-menu__content_open'
    if(!props.result) {
      setOpen(false)
    }
  }
  return(
    <div ref={burger} className='burger-menu'>
      <div className={switcherClassName} onClick={handleOpen}>
        <i></i>
      </div>
      <div className={contentClassName}>
        {props.navigationButtons.map(item => <BurgerMenuItem key={item.id} id={item.id} href={item.href} text={item.text} handleOpen={handleOpen}/>)}
      </div>
    </div>
  )
}

export default BurgerMenu