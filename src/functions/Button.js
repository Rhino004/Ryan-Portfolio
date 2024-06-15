import React from 'react'
import './Functions.css'
import { isMobile } from 'react-device-detect'

const Button = ({href,text, onClick}) => {
  if (isMobile)
  {
    return (
      <button className='btn_mobile'onClick = {onClick}>{text}</button>
    )
  }

  return (
    <button className='btn'onClick = {onClick}>{text}</button>
  )
}

export default Button
