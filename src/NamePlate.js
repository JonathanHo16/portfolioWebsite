import React from 'react';
import './NamePlateStyleSheet.css';


export default class NamePlate extends React.Component{
    render()
    {
        return <div className={"NamePlateDiv"}>
            <h1 className={"Name"}>Hi my name is Jonathan.</h1>
            <h5 className={"OneLineDescription"}>I am a full stack software developer. My career goal is  move the world from ZERO to ONE</h5>
                </div>

    }
}