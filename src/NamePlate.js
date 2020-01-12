import React from 'react';
import './NamePlateStyleSheet.css';


export default class NamePlate extends React.Component{
    render()
    {
        return <div className={"NamePlateDiv"}>
            <h1 className={"Name"}>This is Jonathan's personal website.</h1>
            <h6 className={"OneLineDescription"}><u>He is a full stack software developer. His goal is  move the world from ZERO to ONE</u></h6>
                </div>

    }
}