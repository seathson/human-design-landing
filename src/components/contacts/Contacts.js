import React from 'react'
import ContactsItem from './ContactsItem'

function Contacts(props) {
  return (
    <div className='contacts'>
      <h5 className='contacts__title'>Contact Us</h5>
      {props.contacts.map(item => <ContactsItem key={item.id} id={item.id} href={item.href} title={item.title}/>)}
    </div>
  )
}

export default Contacts