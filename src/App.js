import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";
import ToolBox from "./ToolBox";
import WorkExperience from "./WorkExperience";
import SiteDetails from './SiteDetails.js';
import Drawer from './Drawer.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render () {
        const { width } = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (<div className="App">
                <NamePlate isMobile={isMobile}/>
                <AboutMeView/>
                <ToolBox/>
                <WorkExperience/>
                <SiteDetails/>
                <Drawer/>
            </div>
            );
        } else {
            return (
                <div className="App">
                    <NavBar/>
                    <NamePlate isMobile={isMobile}/>
                    <AboutMeView/>
                    <ToolBox isMobile={isMobile}/>
                    <WorkExperience/>
                    <SiteDetails/>
                </div>
            );
        }

    }
}

