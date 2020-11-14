import React from 'react'

function AccordionItem(props) {

  function toggleVisible(event) {
    const parentElem = event.target.parentNode
    const accordionAnswer = parentElem.querySelector('.accordion__answer')
    const arrow = parentElem.querySelector('.accordion__arrow')

    accordionAnswer.classList.toggle('accordion__answer_visible')
    arrow.classList.toggle('accordion__arrow_rotate')
  }

  return(
    <div className='accordion__item'>
      <div className='accordion__question' onClick={(event) => toggleVisible(event)}>{props.question} <i className='fas fa-caret-down accordion__arrow'> </i></div>
      <div className='accordion__answer'><p>{props.answer}</p></div>
    </div>
  )
}

export default AccordionItem