import React from 'react'
import { Link } from 'react-router-dom'

function AgreeItem(props) {
  return (
    <div className='footer__agreeItem'>
      <Link to={props.href}>
        <span>{props.title}</span>
      </Link>
    </div>
  )
}

export default AgreeItem