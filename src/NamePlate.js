import React from 'react';
import './NamePlateStyleSheet.css';
import {makeStyles} from "@material-ui/core";


export default class NamePlate extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isMobile:this.props.isMobile
        };
    }

    render()
    {
        return <div className={(this.state.isMobile ? "NamePlateDiv_mobile" : "NamePlateDiv")} id={"namePlate"}>
            <h1 className={"Name"} id={'name'}>Hi my name is Jonathan.</h1>
            <h5 className={"OneLineDescription"}>I am a full stack software developer. My career goal is  move the world from ZERO to ONE</h5>
                </div>

    }
}