import React from 'react'

function ServicesItem(props) {
  return(
    <div className='services__block'>
      <div className='services__content'>
        <i className={props.icon}></i>
        <h3 className='services__title'>{props.title}</h3>
        <h2 className='services__price'>{props.price} р</h2>
        <ul className='services__list'>
          {props.des.map(item => <li><i className="fas fa-check"></i>{item}</li>)}
        </ul>
        <a target="_blank" href="#" className='services__button'>
            Заказать&nbsp;
            <span class="fa fa-caret-right"></span>
        </a>
      </div>
    </div>

  )
}

export default ServicesItem