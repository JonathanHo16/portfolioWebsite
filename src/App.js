import React from 'react';
import Drawer from 'rc-drawer'
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import NamePlate from './NamePlate';
import AboutMeView from "./AboutMeView";
import ToolBox from "./ToolBox";
import WorkExperience from "./WorkExperience";
import SiteDetails from './SiteDetails.js'

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
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
        this.forceUpdate();
    };

    render () {
        const { width } = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (<div className="App">
                <NamePlate/>
                <AboutMeView/>
                <ToolBox/>
                <WorkExperience/>
                <SiteDetails/>
            </div>
            );
        } else {
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

    }
}

