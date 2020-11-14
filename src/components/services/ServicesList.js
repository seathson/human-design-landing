import React from 'react'
import ServicesItem from './ServicesItem'

function ServicesList(props) {
  return(
    props.services.map(item => <ServicesItem key={item.id} id={item.id} icon={item.icon} title={item.title} price={item.price} des={item.des}/>)
  )
}

export default ServicesList