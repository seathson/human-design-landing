import React, { useState } from 'react'
import BurgerMenuItem from './BurgerMenuItem'
import OutsideClickHandler from 'react-outside-click-handler'

function BurgerMenu(props) {
  const [open, setOpen] = useState(false)

  let switcherClassName = 'burger-menu__switcher'
  let contentClassName = 'burger-menu__content'

  let handleOpen = () => {
    setOpen(prevOpen => !prevOpen)
  }

  if (open) {
    switcherClassName += ' burger-menu__switcher_open'
    contentClassName += ' burger-menu__content_open'
  }

  let handleOutside = () => {
    setOpen(false)
  }

  return(
    <OutsideClickHandler onOutsideClick={handleOutside}>
      <div className='burger-menu'>
        <div className={switcherClassName} onClick={handleOpen}>
          <i></i>
        </div>
        <div className={contentClassName}>
          {props.navigationButtons.map(item => <BurgerMenuItem key={item.id} id={item.id} href={item.href} text={item.text} handleOpen={handleOpen}/>)}
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default BurgerMenu