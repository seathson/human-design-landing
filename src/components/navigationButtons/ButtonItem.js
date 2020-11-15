import React, { useState } from 'react'

function ButtonItem(props) {
  const [visible, setVisible] = useState(false)

  let underLineClassName = 'navigationButtons__underLine'

  let handleMouseEnter = () => {
    setVisible(true)
  }

  let handleMouseLeave = () => {
    setVisible(false)
  }

  if (visible) {
    underLineClassName += ' navigationButtons__underLine_visible'
  }

  return(
    <React.Fragment>
      <div className='navigationButtons' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a className='navigationButtons__href' href={props.href}>{props.text}</a>
        <div className={underLineClassName}></div>
      </div>
      
    </React.Fragment>

  )
}

export default ButtonItem