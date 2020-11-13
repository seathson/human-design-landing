import React from 'react'
import '../../assets/sass/all.sass'
import logo from '../../assets/imgs/logo.svg'

function Header() {

  return(
    <div className='header'>
      <img className='header__logo header__logo_rotating' src={logo} alt='react'/>

      <span className='header__title'>human design</span>

      <div className='header__menu'>
        <a className='header__buttons' href='#'>among</a>
        <a className='header__buttons' href='#'>using</a>
        <a className='header__buttons' href='#'>help</a>
        <a className='header__buttons' href='#'>git</a>
      </div>
    </div>
  )
}

export default Header