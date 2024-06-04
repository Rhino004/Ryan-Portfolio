import React from "react";
import { Link } from 'react-router-dom';
import Button from "./Button";
import './Functions.css';
import {isMobile} from 'react-device-detect';

export default function Tabs() {
  if (isMobile) {
    return(
      <nav className = 'Tabs-mobile'>
        <Link className = 'ButtonSize' to= '/'><Button text = 'Home'/></Link>
        <Link className = 'ButtonSize' to= '/Profile'><Button  text = 'Profile'/></Link>
        <Link className = 'ButtonSize' to= '/Projects'><Button text ='Projects'/></Link>
        <Link className = 'ButtonSize' ><Button onClick = {scroll} text = 'Contact'/> </Link>
      </nav>
    )
  }
  return (
    <nav className = 'Tabs'>
        <Link className = 'ButtonSize' to= '/'><Button text = 'Home'/></Link>
        <Link className = 'ButtonSize' to= '/Profile'><Button  text = 'Profile'/></Link>
        <Link className = 'ButtonSize' to= '/Projects'><Button text ='Projects'/></Link>
        <Link className = 'ButtonSize' ><Button onClick = {scroll} text = 'Contacts'/> </Link>
    </nav>
    
  )
}



const scroll = () =>{
  window.scrollTo({top: 400, behavior:'smooth'})
}
