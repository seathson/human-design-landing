import React from 'react'

function ButtonItem(props) {
  return(
    <a className='header__buttons' href={props.href}>{props.text}</a>
  )
}

export default ButtonItem