import './Home.css'
import {isMobile} from 'react-device-detect';


const Contacts = () => {
  if (isMobile)
  {
    return (
      <div className = 'ContactBackground'>
        <h1 >Contacts</h1>
        <div className = 'ContactsFormatMobile'>

          <p className = 'pEmailMobile'>
              Email: Ryantomas85@gmail.com
          </p>
          
          <p className = 'sEmailMobile'>
            School Email: Ryan.Tomas01@student.csulb.edu
          </p>

          <p className='LinkContainer'>
              <a className='LeftLink' href="https://www.instagram.com/rhinoz004?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr">
                Instagram: Rhinoz004
              </a>
          </p>

          <p className='LinkContainer'>
            <a className='RightLink' href="https://www.linkedin.com/in/ryan-tomas-799485201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              Linkedin: Ryan Tomas
            </a>
          </p>

        </div>

      </div>
    )
  }
  return (
    <div className = 'ContactBackground'>
      <h1 >Contacts</h1>
      <div className = 'ContactsFormat'>
        <p className = 'LeftSide'>
            Email: Ryantomas85@gmail.com
            
        </p>
        <p className = 'RightSide'>School Email: Ryan.Tomas01@student.csulb.edu</p>
        </div>
        
        <div className='ContactsFormat'>
          <div className='LeftLinkContainer'>
            <a className='LeftLink' href="https://www.instagram.com/rhinoz004?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr">
              Instagram: Rhinoz004
            </a>
          </div>
          <div className='RightLinkContainer'>
            <a className='RightLink' href="https://www.linkedin.com/in/ryan-tomas-799485201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              Linkedin: Ryan Tomas
            </a>
          </div>
        </div>

    </div>
  )
}

export default Contacts
