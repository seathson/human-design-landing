import React from 'react'
import SocialNetworksItem from './SocialNetworksItem'

function SocialNetworks(props) {
  return(
    <div className='socials'>
      <h5 className='contacts__title'>Social Networks</h5>
      {props.socials.map(item => <SocialNetworksItem key={item.id} id={item.id} href={item.href} title={item.title}/>)}
    </div>
  )
}

export default SocialNetworks