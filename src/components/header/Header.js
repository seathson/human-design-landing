import React from 'react'
import '../../assets/sass/all.sass'
import logo from '../../assets/imgs/logo.svg'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import NavMenu from '../navMenu/NavMenu'

function Header(props) {
  const navigationButtons = [
    {id: 1, href: props.scrollData !== null ? props.scrollData.body + window.scrollY : null, text: 'Рассчитать карту'},
    {id: 2, href: props.scrollData !== null ? props.scrollData.consultation + window.scrollY : null, text: 'Консультация'},
    {id: 3, href: props.scrollData !== null ? props.scrollData.faq + window.scrollY : null, text: 'FAQ'},
    {id: 4, href: props.scrollData !== null ? props.scrollData.contacts + window.scrollY : null, text: 'Контакты'}
  ]
  
  return(
    <div className='header'>
      <a href='http://humdesign.ru/' className='header__logo header__logo_rotating'><img className='header__logo header__logo_rotating' src={logo} alt='react'/></a>

      <span className='header__title'><a href='http://humdesign.ru/'>HumDesign</a></span>

      <div className='header__menu'>
        <BurgerMenu navigationButtons={navigationButtons} updateRef={props.updateRef} result={props.result}/>
        <NavMenu navigationButtons={navigationButtons}/>
      </div>
    </div>
  )
}

export default Header