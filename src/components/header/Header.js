import React from 'react'
import '../../assets/sass/all.sass'
import logo from '../../assets/imgs/logo.svg'
import ButtonList from '../navigationButtons/ButtonList'

function Header() {
  const navigationButtons = [
    {id: 1, href: '#', text: 'among'},
    {id: 2, href: '#', text: 'using'},
    {id: 3, href: '#', text: 'help'},
    {id: 4, href: '#', text: 'git'}
  ]
  return(
    <div className='header'>
      <img className='header__logo header__logo_rotating' src={logo} alt='react'/>

      <span className='header__title'>human design</span>

      <div className='header__menu'>
        <ButtonList navigationButtons={navigationButtons}/>
      </div>
    </div>
  )
}

export default Header