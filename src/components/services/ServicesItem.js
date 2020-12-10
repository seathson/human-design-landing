import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ServicesItem(props) {
  return(
    <div className='services__block'>
      <div className='services__content'>
        <i className='services__icon'><FontAwesomeIcon icon={props.icon} /></i>
        <h3 className='services__title'>{props.title}</h3>
        <h2 className='services__price'>{props.price} р</h2>
        <ul className='services__list'>
          {props.des.map((item, index) => <li key={index}><i><FontAwesomeIcon icon={faCheck} /></i>{item.includes('Базовое') || item.includes('Расширенное') ? <strong>{item}</strong> : item}</li>)}
        </ul>
        <a target='_blank' href={props.href} rel='noopener noreferrer' className='services__button'>
            Заказать&nbsp;<span className="fa fa-caret-right"></span>
        </a>
      </div>
    </div>

  )
}

export default ServicesItem