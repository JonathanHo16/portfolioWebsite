import React from 'react';
import './SiteDetailsStyleSheet.css';
import reactLogo from './logos/ReactLogo.png';
import gcpLogo from './logos/gcpLogo.png';

export default class SiteDetails extends React.Component{

    render() {
        return <div className={"siteDetails"}>
            <div className={"section"}>
                <h6 className={'header'}>Powered by </h6>
                <img src={reactLogo} className={"techLogo"}/>
            </div>
            <div className={"section"}>
                <h6 className={'header'}>Running on </h6>
                <img src={gcpLogo} className={"techLogo"}/>
            </div>
        </div>
    }
}