import '../Components/Home.css'
import '../App.css';
import Me from '../Components/Disneyland.jpg'



const Home = () => {
  return (
    <>
      <header className="Background"> 
        <section className = "HomeFormat" >
          <section className = 'HomeText'>
              <p className = "Greatings">Hello there I'm</p>
              <h1 className = 'Name'>Ryan  Tomas</h1>
          </section>
          <img src={Me} alt = "Bird_pic" style = {{height: 'calc(100px + 55vmin)', width: 'calc(60px + 50vmin)'}} />
        </section>
      </header>
    </>
  );
}

export default Home;
