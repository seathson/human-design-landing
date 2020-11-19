import React, { useState } from 'react'

function ContactsList(props) {
  const [text, setText] = useState(props.title)

  let handleClick = (event) => {
    if(props.id === 3 || props.id === 4) {
      event.preventDefault()
      setText(props.href)
    }
  }
  return(
    <a target='_blank' rel='noopener noreferrer' href={props.href} className='contacts__item' onClick={handleClick}>
      {text}
    </a>
  )
}

export default ContactsList