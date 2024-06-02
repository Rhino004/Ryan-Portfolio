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
          <p className = 'Left'>
            Full Name: <br/>
            Birth Date: <br/>
           
          </p>

          <p className = 'Left_A'>
            Ryan Ottoniel Tomas<br/>
            October 30, 2002 <br/>
           
          </p>

          <p className = 'Right'>
            High School Graduation:
          
          </p>

          <p>
            2021<br/>
          </p>
          
        </section>

        <section className='Information'>
          <p className = 'Left'>

              Race:
            </p>

            <p className = 'Left_A'> 
              Hispanic
            </p>

            <p className = 'Right'>

              Known Coding languages: 
            </p>

            <p>

              {Coding_lang}
            </p>

        </section>
        

        <section className = 'Information'>
          <p className = 'Left'>
            School Attending:<br/>
          </p>

          <p className = 'Left_A'>
          California State University Long Beach<br/>
           <img src={csulb} alt = "CSULB_Logo" style = {{height: '75%', width: '50%'}} /><br/>

          </p>

          <p className = 'Right'>
          Graduation year: <br/>
          Major: 
          </p>
          <p>
             2025<br/>
             Computer Science

          </p>
            
        </section>




      </header>
      <Contacts/>
    </>
  )
}

export default Profile;
