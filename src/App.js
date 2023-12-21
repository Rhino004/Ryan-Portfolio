
import Profile from "./Components/Profile";
import Tabs from "./functions/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import './App.css';
//Ignore the 6 high severity vulnerabillities


function App() {
  return (
    <>
      <header className="Border"><Tabs/></header>
      <Component/>
    </>
    
  );
}

export default App;
let Component
switch(window.location.pathname){
  case "/":
    Component = Home
    break
  case "/Profile":
    Component = Profile
    break
  case '/Projects':
    Component = Projects 

}