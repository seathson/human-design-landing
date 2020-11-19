import React from 'react'
import NavMenuItem from './NavMenuItem'

function NavMenu(props) {
  return(
    <div className='nav-menu'>
      {props.navigationButtons.map(item => <NavMenuItem key={item.id} id={item.id} href={item.href} text={item.text}/>)}
    </div>
  )
}

export default NavMenu