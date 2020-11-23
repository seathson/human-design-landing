import React from 'react'
import '../../assets/sass/all.sass'
import Contacts from '../contacts/Contacts'
import SocialNetworks from '../socialNetworks/SocialNetworks'
import Agree from '../agree/Argee'

function Footer() {
  const contacts = [
    {id: 1, href: 'https://tlgg.ru/kiiirya', title: 'Telegram'},
    {id: 2, href: 'https://www.instagram.com/humdesign_off/', title: 'Instagram'},
    {id: 3, href: '+7 (961) 335-22-23', title: 'Number'},
    {id: 4, href: 'ol.sadomov@gmail.com', title: 'Email'}
  ]

  const socials = [
    {id: 1, href: 'https://www.instagram.com/humdesign_off/', title: 'Instagram'},
    {id: 2, href: 'https://www.youtube.com/channel/UCftmZvvwpEyJ1B8dKEmp0LA', title: 'YouTube'},
  ]

  const agrees = [
    {id: 1, href: '/confidentiality', title: 'Политика конфиденциальности'},
    {id: 2, href: '/offer', title: 'Оферта'},
    {id: 3, href: '/politics', title: 'Оплата и возврат'}
  ]
  return(
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__media'>
          <div className='nametag'>Created by&nbsp;<a href='https://tlgg.ru/seathson'>seathson</a></div>
          <SocialNetworks socials={socials}/>
          <Contacts contacts={contacts}/>
        </div>
        <div className='footer__agree'>
          <Agree agrees={agrees}/>
        </div>
      </div>
    </div>
  )
}

export default Footer