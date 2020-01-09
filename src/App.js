import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NamePlate/>
      <AboutMeView/>
    </div>
  );
}

export default App;
