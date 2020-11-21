import React from 'react'
import AgreeItem from './AgreeItem'

function Agree(props) {
  return (
    props.agrees.map(item => <AgreeItem key={item.id} id={item.id} href={item.href} title={item.title}/>)
  )
}

export default Agree