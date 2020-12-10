import React, { useState, useCallback } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AccordionItem(props) {
  const [visible, setVisible] = useState(false)
  const [check, setCheck] = useState(0)
  
  const answer = useCallback((node) => {
    if (node !== null) {
      setCheck(node.scrollHeight + 40)
    }
  }, [])

  let answerClassName = 'accordion__answer'
  let arrowClassName = 'accordion__arrow'

  let toggleVisible = () => {
    setVisible(prevVisible => !prevVisible)
  }

  if (visible) {
    answerClassName += ' accordion__answer_visible'
    arrowClassName += ' accordion__arrow_rotate'
  }

  return(
    <div className='accordion__item'>
      <div className='accordion__question' onClick={toggleVisible}>{props.question} <i className={arrowClassName}><FontAwesomeIcon icon={faCaretDown}/></i></div>
      <div 
        className={answerClassName}
        ref={answer}
        style={{height: visible ? check : 0 + 'px'}}
        >
          <p>{props.answer}</p>
      </div>
    </div>
  )
}

export default AccordionItem