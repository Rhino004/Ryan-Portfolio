import './Home.css'
import Contacts from '../Components/Contacts';
import '../App.css';
import Bird from './Bird_pic.jpg'



const Home = () => {
  return (
    <>
      <header className="Background"> 
        <section className = "HomeFormat" >
          <section className = 'HomeText'>
              <p className = "Greatings">Hello there I'm</p>
              <h1 className = 'Name'>
              Ryan  Tomas
              </h1>
          </section>
          
          <img src={Bird} alt = "Bird_pic" style = {{height: 'calc(100px + 55vmin)', width: 'calc(60px + 50vmin)'}} />
        </section>

      </header>
      <Contacts/>
    
    </>
  )
}

export default Home;
