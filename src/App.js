import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";
import ToolBox from "./ToolBox";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NamePlate/>
      <AboutMeView/>
      <ToolBox/>
    </div>
  );
}

export default App;
