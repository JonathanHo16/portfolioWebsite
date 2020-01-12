import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";
import ToolBox from "./ToolBox";
import WorkExperience from "./WorkExperience";
import SiteDetails from './SiteDetails.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <NamePlate/>
      <AboutMeView/>
      <ToolBox/>
      <WorkExperience/>
      <SiteDetails/>
    </div>
  );
}

export default App;
