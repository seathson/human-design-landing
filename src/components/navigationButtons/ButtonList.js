import React from 'react'
import ButtonItem from './ButtonItem'

function ButtonList(props) {
  return(
    props.navigationButtons.map(item => <ButtonItem key={item.id} id={item.id} href={item.href} text={item.text}/>)
  )
}

export default ButtonList