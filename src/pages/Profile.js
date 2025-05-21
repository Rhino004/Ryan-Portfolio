import React from 'react'
import Contacts from '../Components/Contacts'
import './Profile.css'
import csulb from "./CSULB_Logo.jpg"
import {isMobile} from 'react-device-detect';

const Coding_lang = ['Python, ','CSS, ', 'HTML, ','and Javascript']



const Profile = () => {
  if (isMobile){
    return(
    <>
    <div className='Background2'>
      <section> Basic Information</section>
      <section className = 'MFormat'>
        <p className = 'MText2'>Full Name: </p>
        <p className = 'MText2'>Ryan Ottoniel Tomas</p>
      </section>

      <section className = 'MFormat'>
        <p className='MText'> High School Graduation:</p>
        <p className='MText'>2021</p>
      </section>

      <section className = 'MFormat'>
        <p className = 'MText'>Known Coding languages: </p>
        <p className = 'MText'>{Coding_lang}</p>
      </section>

      <section className = 'MFormat'>
        <p className = 'MText'>School Attending:</p>
        <p className = 'MText'>California State University Long Beach</p>
      </section>

      <section className = 'MFormat'>
        <p className = 'MText3'>Graduation year:</p>
        <p className = 'MText4'>2025</p>
        <p className = 'MText4'>Major:</p>
        <p className = 'MText4'>Computer Science</p>
      </section>
      
      <section className = 'MFormat'>
      <p className = 'MLogo'><img src={csulb} alt = "CSULB_Logo" style = {{height: '100%', width: '100%'}} /></p>
      </section>
    </div>
    <Contacts/>
    </>)
  }

  return (
    <>
      <header className="Background2">
        <section> Information</section>
        <section className = 'Information'>
          <p className = 'Content'>Full Name: </p>
          <p className='Content'>Ryan Ottoniel Tomas</p>
          <p className='Content'> High School Graduation:</p>
          <p className='Content'>2021</p>
        </section>

        <section className='Information'>
          <p className = 'Content'>Race:</p>
          <p className = 'Content'> Hispanic</p>
          <p className = 'Content'>Known Coding languages: </p>
          <p className = 'Content'>{Coding_lang}</p>
        </section>
        

        <section className = 'Information'>
          <p className = 'Content'>School Attending:</p>
          <p className = 'Content'>California State University Long Beach</p>
          <p className = 'Content'> Graduation year:</p>
          <p className='Content'>2025</p>
        </section>

        <section className='Information'>
          <p className = 'Logo'><img src={csulb} alt = "CSULB_Logo" style = {{height: '100%', width: '100%'}} /></p>
          <p className='Content'>Major:</p>
          <p className = 'Content'>Computer Science</p>
        </section>
      </header>


      <Contacts/>
    </>
  );
}

export default Profile;
