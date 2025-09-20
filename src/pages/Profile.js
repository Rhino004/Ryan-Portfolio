import React from 'react'
import '../Components/Profile.css'
import csulb from "../Components/CSULB_Logo.jpg"
import Tabs from "../functions/Header";

const Coding_lang = ['Python, ','CSS, ', 'HTML, ','and Javascript']



const Profile = () => {

  return (
    <>
      <header> <Tabs/> </header>
      <div className= "Background2">
        <section> Personal Information</section>
        <section>
          <table className='table'>
            <tr className='test'>
              <th className='row'>Name:</th>
              <th className='row'>Ryan Ottoniel Tomas</th>
              <th className='row'>Major:</th>
              <th className='row'>Computer Science</th>
            </tr>
            <tr>
              <th className='row'>School: </th>
              <th className='row'>California State University Long Beach</th>
              <th className='row'>Graduation:</th>
              <th className='row'>December 2025</th>
            </tr>
          </table>
        </section>
        <section className='Information'>
          <p className = 'Content'>Race:</p>
          <p className = 'Content'> Hispanic</p>
          <p className = 'Content'>Known Coding languages: </p>
          <p className = 'Content'>{Coding_lang}</p>
        </section>
        <section className='Information'>
          <p className = 'Logo'><img src={csulb} alt = "CSULB_Logo" style = {{height: '100%', width: '100%'}} /></p>
        </section>
      </div>
    </>
  );
}

export default Profile;
