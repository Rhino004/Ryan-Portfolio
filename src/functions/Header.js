
import React from "react"
import Button from "./Button"
import './Functions.css'
import {isMobile} from 'react-device-detect';

export default function Tabs() {
  if (isMobile) {
    return(<nav className = 'Tabs'>
    <a className = 'ButtonSize' href= '/'><Button text = 'Home'/></a>
    <a className = 'ButtonSize' href= '/Profile'><Button  text = 'Profile'/></a>
    <a className = 'ButtonSize' href= '/Projects'><Button text ='Projects'/></a>
    <a className = 'ButtonSize' ><Button onClick = {scroll} text = 'Contacts'/> </a>
    </nav>)
  }
  return (
    <nav className = 'Tabs'>
        <a className = 'ButtonSize' href= '/'><Button text = 'Home'/></a>
        <a className = 'ButtonSize' href= '/Profile'><Button  text = 'Profile'/></a>
        <a className = 'ButtonSize' href= '/Projects'><Button text ='Projects'/></a>
        <a className = 'ButtonSize' ><Button onClick = {scroll} text = 'Contacts'/> </a>
    </nav>
    
  )
}



const scroll = () =>{
  window.scrollTo({top: 400, behavior:'smooth'})
}
