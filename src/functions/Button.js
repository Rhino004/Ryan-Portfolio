import React from 'react'
import './Functions.css'

const Button = ({href,text, onClick}) => {
  
  return (
    <button 
    className='btn'
    onClick = {onClick}>
      {text}
      </button>
  )
}

export default Button
