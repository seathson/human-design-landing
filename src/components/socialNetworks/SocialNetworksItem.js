import React from 'react'

function SocialNetworksItem(props) {
  return(
    <a target='_blank' rel='noopener noreferrer' href={props.href} className='contacts__item'>
      {props.title}
    </a>
  )
}

export default SocialNetworksItem