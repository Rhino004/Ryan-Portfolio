import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./Components/Profile";
import Tabs from "./functions/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import './App.css';
//Ignore the 6 high severity vulnerabillities


function App() {
  return (
    <Router>
      <header className="Border"><Tabs/></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
    
  );
}

export default App;
/*
let Component
switch(window.location.pathname){
  case "/":
    Component = Home;
    break
  case "/Profile":
    Component = Profile;
    break
  case '/Projects':
    Component = Projects;
    break; 
  default:
    Component = Home;
}
*/