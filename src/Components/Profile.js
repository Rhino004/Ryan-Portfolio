import React from 'react'
import Contacts from './Contacts'
import './Profile.css'
import csulb from "./CSULB_Logo.jpg"

const Coding_lang = ['CSS, ', 'HTML, ','Javascript, ','and Python 3']



const Profile = () => {
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
          <p className='Content'>Major:</p>
          <p className = 'Content'>Computer Science</p>
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
