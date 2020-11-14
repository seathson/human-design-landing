import React from 'react'
import AccordionItem from './AccordionItem'

function AccordionList(props) {
  return(
    <div className='accordion'>
      {props.questions.map(item => <AccordionItem key={item.id} id={item.id} question={item.question} answer={item.answer}/>)}
    </div>
  )
}

export default AccordionList