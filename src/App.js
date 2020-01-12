import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";
import ToolBox from "./ToolBox";
import WorkExperience from "./WorkExperience";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <NamePlate/>
      <AboutMeView/>
      <ToolBox/>
      <WorkExperience/>
        <img src={logo}className="App-logo"alt="logo"/>
    </div>
  );
}

export default App;
