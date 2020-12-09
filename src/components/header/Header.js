import React from 'react'
import '../../assets/sass/all.sass'
import logo from '../../assets/imgs/logo.svg'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import NavMenu from '../navMenu/NavMenu'

function Header(props) {
  const navigationButtons = [
    {id: 1, href: props.scrollData !== null ? props.scrollData.body + window.scrollY : null, text: 'Рассчитать карту'},
    {id: 2, href: props.scrollData !== null ? props.scrollData.review + window.scrollY : null, text: 'Отзывы'},
    {id: 3, href: props.scrollData !== null ? props.scrollData.consultation + window.scrollY : null, text: 'Консультация'},
    {id: 4, href: props.scrollData !== null ? props.scrollData.faq + window.scrollY : null, text: 'FAQ'},
    {id: 5, href: props.scrollData !== null ? props.scrollData.contacts + window.scrollY : null, text: 'Контакты'}
  ]
  
  return(
    <div className='header'>
      <div className='header__container'>
        <a href='http://humdesign.ru/' className='header__logo header__logo_rotating'><img className='header__logo header__logo_rotating' src={logo} alt='react'/></a>

        <span className='header__title'><a href='http://humdesign.ru/'>HumDesign</a></span>

        <div className='header__menu'>
          <BurgerMenu navigationButtons={navigationButtons}/>
          <NavMenu navigationButtons={navigationButtons}/>
        </div>
      </div>
    </div>
  )
}

export default Header